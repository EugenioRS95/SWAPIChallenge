import {describe, expect, test} from '@jest/globals';
import { CharacterController } from '../app/controller/characterController';
import { CharacterServiceImpl } from '../app/service/serviceImpl/characterServiceImpl';
import { eventToCreateCharacter, eventToGetCharacter,eventToGetCharacterBySWAPI } from './test_utils/eventGenerate';

const characterServiceImpl = new CharacterServiceImpl();
const characterController = new CharacterController(characterServiceImpl);

describe('SWAPIChallenge test de creación de personaje', () => {
    let _id: string;
    
    test('1. Se envía los datos del personaje a crear', async()=> {
        const event = eventToCreateCharacter();
        const res = await characterController.createCharacter(event);
        const obj = JSON.parse(res.body);

        _id = obj.data.id;

        expect(obj.data).toBeDefined();
        expect(obj.data.id).toBeDefined();
    });

    test('2. Se envía el id del personaje creado al path de la url para obtener los datos', async() => {
        const event = eventToGetCharacter(_id);
        const res = await characterController.getCharacter(event);
        const obj = JSON.parse(res.body);

        expect(obj.data).toBeDefined();
        expect(obj.data.nombre).toEqual("Manfred");
    });

    test('3. Se envía el id del personaje de SWAPI al path de la url para obtener los datos', async() => {
        const event = eventToGetCharacterBySWAPI("1");
        const res = await characterController.getSwapiCharacter(event);
        const obj = JSON.parse(res.body);

        expect(obj.data).toBeDefined();
        expect(obj.data.nombre).toEqual("Luke Skywalker");
    });

    test('4. Se llama al servicio para traer todos los personajes creados', async() => {
        const res = await characterController.getAllCharacters();
        const obj = JSON.parse(res.body);

        expect(obj.data).toBeDefined();
        expect(obj.data.length).toBeGreaterThanOrEqual(1);
    });

});