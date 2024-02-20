import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DatosFormularios } from 'src/app/Models/datosFormulario';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosCrudService {

  constructor(private afs:Firestore) { }

  guardarDatos(formulario : DatosFormularios){
     const Ref = collection(this.afs, 'datosCreditos');
     return addDoc(Ref, formulario);
  }

  getDatos() : Observable<any[]>{
    const Ref = collection(this.afs, "datosCreditos");
    return collectionData(Ref, {idField: 'id'}) as Observable<any>;
  }
}
