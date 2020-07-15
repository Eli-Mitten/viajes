export enum ViajeEstado {
    Abierto = 1,
    Cerrado = 2,
    Cancelado = 3,
    Postpuesto = 4
}

export interface Viaje {
    nombreDelViaje: string;
    tipoViaje: string;
    destinoViaje: string;
    duracionViaje: number;
    plazas?: number; // no obliga a que tenga esta propiedad
    visible: boolean;
    estado: ViajeEstado;
}

// export class Viaje {
//     nombreDelViaje: string;
//     tipoViaje: string;
//     destinoViaje: string;
//     duracionViaje: number;
//     plazas?: number;

//     constructor(item?: any){
//         // Un  forma de inicializar los valores
//         this.nombreDelViaje = item && item.nombreDelViaje ? item.nombreDelViaje : 'Nombre sin definir';
//         this.tipoViaje = item?.tipoViaje || 'Sin Definir'; // ? es un operador indica si el objeto item existe
//         this.destinoViaje = item?.destinoViaje || 'Sin Definir';
//         this.duracionViaje = item?.duracionViaje || 0;
//         this.plazas = item?.plazas || 100;
//     }
// }
