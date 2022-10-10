import { Character } from "../../model/character";
import { ICharacterService } from "../characterService";
import { createCharacter, getCharacter,getAllCharacters } from '../../model/dynamodb';
import axios  from 'axios';

export class CharacterServiceImpl implements ICharacterService{
    async createCharacter(character: Character): Promise<Character> {   
        try{
            await createCharacter(character);
            return character;
        } catch(err){
            throw err;
        }
    }     
        
    async getCharacter(id: string): Promise<Character> {
        let character: Character;

        try{
            character = await getCharacter(id);
            return character;
        } catch(err) {
            throw err;
        }
    }

    async getSwapiCharacter(id: string): Promise<Character> {
        let character: Character;
        
        try {
            const swapiData = (await axios.get(`https://swapi.py4e.com/api/people/${id}/`)).data;
            character = Character.setCharacterBySwapi(swapiData, id);
            return character;

        } catch(err) {
            if (err.response.status == '404') {
                err.message = "El personaje que estas buscando en SWAPI no está registrado";
            }
            throw err;
        }

    }

    async getAllCharacters(): Promise<Character[]> {
        try{            
            return await getAllCharacters();
        } catch(err) {
            throw err;
        }
    }
}