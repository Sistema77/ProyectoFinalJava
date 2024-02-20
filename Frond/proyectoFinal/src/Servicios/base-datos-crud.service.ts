import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { of } from 'rxjs'; 
import { DatosFormularios } from 'src/app/Models/datosFormulario';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosCrudService {

  db:DatosFormularios[] = [];
  totalMoneyPorCiudad: { [ciudad: string]: number } = {};

  constructor(private afs:Firestore) { }

  guardarDatos(formulario : DatosFormularios){
    const Ref = collection(this.afs, 'datosCreditos');
    return addDoc(Ref, formulario);
  }

  getDatos() : Observable<any[]>{
    const Ref = collection(this.afs, "datosCreditos");
    return collectionData(Ref, {idField: 'id'}) as Observable<any>;
  }

  getTotalMoneyPorCiudad(): Observable<{ [key: string]: number }> {
    return new Observable(observer => {
      this.getDatos().subscribe((datos: DatosFormularios[]) => {
        let sumasPorCiudad: { [key: string]: number } = {};
  
        datos.forEach((dato: DatosFormularios) => {
          if (dato.state && dato.money) {
            if (!sumasPorCiudad[dato.state]) {
              sumasPorCiudad[dato.state] = 0;
            }
            sumasPorCiudad[dato.state] += dato.money;
          }
        });
  
        observer.next(sumasPorCiudad);
        observer.complete();
      });
    });
  }

}
