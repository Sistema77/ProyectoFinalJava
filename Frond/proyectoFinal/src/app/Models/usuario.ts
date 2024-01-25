export interface Usuario {
     id_usuario: number;
     name: string;
     dni: string;
     lastName: string;
     email: string;
     password: string;
     tlf: string;
     foto: Uint8Array; // Cambié de 'byte[]' a 'Uint8Array' para representar el tipo de datos
     tipoUsuario: string;
}
