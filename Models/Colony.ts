import { Planet } from "./Planet";
import { Resource } from "./Resource";
import { User } from "./User";


export interface Colony{
    U_CID : number; // Unique Colony Id
    name : string;
    ownership? : User;
    resourceBank? : Resource[];
}