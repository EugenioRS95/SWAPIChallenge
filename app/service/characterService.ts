import { Character } from "../model/character";

export interface ICharacterService {
    createCharacter(character: Character): Promise<Character>;
    getCharacter(id: string): Promise<Character>;
    getSwapiCharacter(id: string): Promise<Character>;
    getAllCharacters(): Promise<Character[]>;
}