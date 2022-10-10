import { Handler, Context } from 'aws-lambda';

import { CharacterController } from './controller/characterController';
import { CharacterServiceImpl } from './service/serviceImpl/characterServiceImpl';

const characterServiceImpl = new CharacterServiceImpl();
const characterController = new CharacterController(characterServiceImpl);

export const createCharacter: Handler = (event: any, context: Context) => {
    return characterController.createCharacter(event,context);
}

export const getCharacter: Handler = (event: any, context: Context) => {
    return characterController.getCharacter(event,context);
}

export const getAllCharacters: Handler = ( context: Context) => {
    return characterController.getAllCharacters(context);
}

export const getSwapiCharacter: Handler = (event: any, context: Context) => {
    return characterController.getSwapiCharacter(event,context);
}