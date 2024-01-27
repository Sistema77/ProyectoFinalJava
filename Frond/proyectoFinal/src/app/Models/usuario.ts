export interface Usuario {
     name: string;
     dni: string;
     lastName: string;
     email: string;
     password: string;
     tlf: string;
     foto: Uint8Array; // De 'byte[]' a 'Uint8Array' para representar el tipo de datos
     tipoUsuario: string;
}
