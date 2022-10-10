import { Character } from "../model/character";
import { v4 } from 'uuid';

function validateNombre(nombre: string): boolean{
    if(nombre === undefined) {
        throw new Error('El campo "nombre" no esta definido en el cuerpo del request.');
    }
    
    if(nombre.length <= 0){
        throw new Error('El campo "nombre" debe contener almenos un caracter.');
    }
    return true;
}

export function validateCharacterBody(body: any): Character{
    try {
        const {nombre, altura, masa,color_cabello, color_piel, color_ojos,
            nacimiento, genero, mundo_natal, pelicula,especies, vehiculos,
            naves_estelares, url} = body;

        validateNombre(nombre);
        
        return new Character(v4(),nombre,altura,masa,color_cabello,color_piel,color_ojos, nacimiento, genero, mundo_natal, pelicula,
            especies,vehiculos,naves_estelares,new Date(),new Date(), url);

    } catch(err) {
        console.log(err.message);
        throw err;
    }
    


}