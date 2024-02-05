import { Injectable } from '@angular/core';
import { Usuario } from '../app/Models/usuario';
import { Router } from '@angular/router';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth'



@Injectable({
  providedIn: 'root'
})
export class DataServiceTsService {

  token?:string;

  constructor(private afs:Firestore, private router:Router) { }

  registrarUsuario(usuario:Usuario){
    const colref = collection(this.afs, 'users');
    return addDoc(colref, usuario);
  }

  iniciarSesion(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(  
          token => {
            this.token = token;
            this.router.navigate(['/']);
          }
        )
      }
    )
  }
  

  eliminarUsuario(){}

  ActualizarUsuario(){

  }

  getIdToken(){
    return this.token;
  }
}
