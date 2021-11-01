import { v4 } from "uuid";

export class IdGeneration{

    generateId = (): string => v4()
}