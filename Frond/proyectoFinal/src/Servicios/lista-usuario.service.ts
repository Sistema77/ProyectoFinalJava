import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Importa AngularFirestore
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators'; // Importa el operador map
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaUsuarioService {

  constructor(
    private afs: AngularFirestore, // Usa AngularFirestore en lugar de Firestore
    private afAuth: AngularFireAuth) { }

    getUsers(): Observable<any[]> {
      return this.afs.collection('users').snapshotChanges()
        .pipe(
          map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, data };
            });
          })
        );
    }
}
