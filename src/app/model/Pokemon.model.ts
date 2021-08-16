import { Type } from "./Type.model";

export interface Pokemon {
    number : number;
    name : string;
    types: Type[];
    image: string;
}

