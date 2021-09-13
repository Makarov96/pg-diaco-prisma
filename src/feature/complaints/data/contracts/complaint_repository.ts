import { ComplaitInterface } from "../../adapter/interfaces/complaint_interface";


export interface ComplaitRepository{
  createComplaitUser(newcomplait:ComplaitInterface, id: number):Promise<String>;
}