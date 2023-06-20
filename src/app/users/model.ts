export class Insumo {
    id: number = 0;
    gender: string = '';
    name = new Name();
    email: string = '';
    phone: string = '';
    picture = new Picture();
    location = new Location();
}

export class Name {
    first: string = '';
    last: string = '';
}

export class Picture {
    large: string = '';
}

export class Location {
    region: string = '';
    street: string = '';
    city: string = '';
    coordinates = new Coordinates();
}

export class Coordinates {
    latitude: string = '';
    longitude: string = '';
}