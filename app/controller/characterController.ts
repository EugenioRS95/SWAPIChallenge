import { Context } from "aws-lambda";
import { CharacterServiceImpl } from "../service/serviceImpl/characterServiceImpl";
import { Character } from "../model/character";
import {validateCharacterBody} from '../utils/validateCharacterBody';
import { MessageUtil } from "../utils/message";

export class CharacterController {
    
    constructor (private characterService: CharacterServiceImpl){}

    async createCharacter(event: any, context?: Context){
        let character: Character;
        let body;        
        
        console.log(context?.functionName);

        try {
            body = JSON.parse(event.body);
            character = validateCharacterBody(body);
            await this.characterService.createCharacter(character);            
            return MessageUtil.success(character);
        }catch(err) {
            return MessageUtil.error(err.code, err.message);
        }        
    }

    async getCharacter(event: any, context?: Context) {
        const {id} = event.pathParameters;
        let character: Character;

        console.log(context?.functionName);

        try {
            character = await this.characterService.getCharacter(id);
            return MessageUtil.success(character);
        }catch(err) {
            return MessageUtil.error(err.code, err.message);
        }
    }

    async getSwapiCharacter(event: any, context?: Context){
        const {id} = event.pathParameters;
        let swapiCharacter: Character;

        console.log(context?.functionName);

        try{
            swapiCharacter = await this.characterService.getSwapiCharacter(id);
            return MessageUtil.success(swapiCharacter);
        }catch(err) {
            return MessageUtil.error(err.code, err.message);
        }
    }

    async getAllCharacters(context?: Context){
        let allCharacters: Character[];

        console.log(context?.functionName);
        
        try {
            allCharacters =await this.characterService.getAllCharacters();
            return MessageUtil.success(allCharacters);
        } catch(err) {
            return MessageUtil.error(err.code, err.message);
        }
    }
}