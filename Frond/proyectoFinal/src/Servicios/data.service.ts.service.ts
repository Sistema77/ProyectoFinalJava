import { Injectable } from '@angular/core';
import { Usuario } from '../app/Models/usuario';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  collectionData ,collection } from '@angular/fire/firestore';
import { Firestore, addDoc, doc, updateDoc } from '@angular/fire/firestore';
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth'



@Injectable({
  providedIn: 'root'
})
export class DataServiceTsService {

  token?:string;

  constructor(
    private afs:Firestore, 
    private router:Router,
    private afAuth: AngularFireAuth,) { }

  registrarUsuario(usuario:Usuario){
    const colref = collection(this.afs, 'users');
    return addDoc(colref, usuario);
  }

  SignUp(usuario:Usuario) {
    return this.afAuth
      .createUserWithEmailAndPassword(usuario.email, usuario.password)
      .then((result) => {
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  SetUserData(user: any) {
    console.log(user);
    
    /* const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    ); */
    const userData = {
      uid: user.uid,
      displayName: user.name + " " + user.lastName,
      email: user.email,
      password: user.password
    };

    /* return userRef.set(userData, {
      merge: true,
    }); */
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
