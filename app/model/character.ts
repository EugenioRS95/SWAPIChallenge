export class Character{
    private id: string;
    private nombre:string;
    private altura: string;
    private masa: string;
    private color_cabello: string;
    private color_piel: string;
    private color_ojos: string;
    private nacimiento: string;
    private genero: string;
    private mundo_natal: string;
    private peliculas: string[];
    private especies: string[];
    private vehiculos: string[];
    private naves_estelares: string[];
    private created: Date;
    private edited: Date;
    private url: string;

    constructor (id: string,
        nombre: string, 
        altura: string, 
        masa:string,
        color_cabello:string, 
        color_piel:string,
        color_ojos:string, 
        nacimiento:string,
        genero: string, 
        mundo_natal: string, 
        peliculas: string[], 
        especies: string[], 
        vehiculos: string[], 
        naves_estelares: string[], 
        created: Date, 
        edited: Date, 
        url: string ){

            this.id= id;
            this.nombre= nombre;
            this.altura=altura;
            this.masa=masa;
            this.color_cabello=color_cabello;
            this.color_piel = color_piel;
            this.color_ojos = color_ojos;
            this.nacimiento = nacimiento;
            this.genero = genero;
            this.mundo_natal = mundo_natal;
            this.peliculas = peliculas;
            this.especies = especies;
            this.vehiculos = vehiculos;
            this.naves_estelares = naves_estelares;
            this.created = created;
            this.edited = edited;
            this.url = url;
        }
    public getNombre(): string{
        return this.nombre;
    }

    public getId(): string{
        return this.id;
    }

    public getAltura(): string{
        return this.altura;
    }

    public getMasa(): string{
        return this.masa;
    }

    public getColorCabello(): string{
        return this.color_cabello;
    }

    public getColorPiel(): string{
        return this.color_piel;
    }

    public getColorOjos(): string{
        return this.color_ojos;
    }

    public getNacimiento(): string{
        return this.nacimiento;
    } 

    public getGenero(): string{
        return this.genero;
    }

    public getMundoNatal(): string{
        return this.mundo_natal;
    }

    public getPeliculas(): string[]{
        return this.peliculas;
    }

    public getEspecies(): string[]{
        return this.especies;
    }

    public getVehiculos(): string[]{
        return this.vehiculos;
    }

    public getNavesEstelares(): string[]{
        return this.naves_estelares;
    }

    public getCreated(): Date{
        return this.created;
    }

    public getEdited(): Date{
        return this.edited;
    }

    public getUrl(): string{
        return this.url;
    }

    public static setCharacter(item: any): Character {
        return new Character(item.id, item.nombre, item.altura, item.masa, item.color_cabello, item.color_piel,
            item.color_ojos, item.nacimiento,item.genero, item.mundo_natal, item.peliculas, item.especies, item.vehiculos,
            item.naves_estelares, item.created, item.edited, item.url);
    }

    public static setCharacterBySwapi(data: any, id:string): Character {
        const {name, height,mass,hair_color, skin_color,
            eye_color, birth_year,gender,homeworld,films, species
            ,vehicles,starships,created,edited,url} = data;

            return new Character(id,name, height,mass,hair_color,skin_color,eye_color,birth_year
                ,gender,homeworld,films,species,vehicles,starships,created,edited,url);
    }
}