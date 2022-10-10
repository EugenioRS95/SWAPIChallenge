import AWS from 'aws-sdk';

AWS.config.update({
    region: "us-west-1",
    accessKeyId: process.env.DYNAMO_ACCESS_KEY_ID,
    secretAccessKey: process.env.DYNAMO_SECRET_ACCESS_KEY
});

const db = new AWS.DynamoDB.DocumentClient();

const CharacterTable = 'Characters';

export {
    db,
    CharacterTable  
}