import { Character } from './character';
import { db, CharacterTable} from './db.config';

async function createCharacter(character: Character) {

    try{
        await db.put({
            TableName: CharacterTable,
            Item: character
        }).promise();

    } catch(err) {
        throw err
    }
}

async function getCharacter(id: string) {
    try {
        const {Item = {}} = await db.get({TableName: CharacterTable, Key: { ['id'] : id }}).promise();
        return Character.setCharacter(Item);
    } catch(err) {
        throw err;
    }
}

async function getAllCharacters(): Promise<Character[]> {
    
    try {
        const {Items = []} = await db.scan({TableName: CharacterTable}).promise();
        const allCharacters: Character[] = Items.flatMap(item => {
            return Character.setCharacter(item);
        });
        return allCharacters;
    } catch(err){
        throw err;
    }
}

export {
    createCharacter,
    getCharacter,
    getAllCharacters
}