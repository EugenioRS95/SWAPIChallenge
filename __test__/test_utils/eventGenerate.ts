export function eventToCreateCharacter() {
    return {
        body: '{\r\n' +
        '    \r\n' +
        '    "nombre": "Manfred",\r\n' +
        '    "altura": "500",\r\n' +
        '    "masa": "2000",\r\n' +
        '    "color_cabello": "marron",\r\n' +
        '    "color_piel": "rosado",\r\n' +
        '    "color_ojos": "negros",\r\n' +
        '    "nacimiento": "3000 a.c.",\r\n' +
        '    "genero": "masculino",\r\n' +
        '    "mundo_natal": "Tierra",\r\n' +
        '    "peliculas": [\r\n' +
        '               "La Era de hielo 1"\r\n' +
        '    ],\r\n'+
        '    "especies": [\r\n' +
        '               "mamut"\r\n' +
        '    ],\r\n' +
        '    "vehiculos": [],\r\n' +
        '    "naves_estelares": [],\r\n' +
        '    "url": "https://www.la_era_de_hielo.com"\r\n' +
        '}'
    }
}

export function eventToGetCharacter(_id:string) {
    return {
        pathParameters: {
            id: _id
        }
    }
}

export function eventToGetCharacterBySWAPI(_id:string) {
    return {
        pathParameters: {
            id: _id
        }
    }
}

