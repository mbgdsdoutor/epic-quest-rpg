import { CategoryEnum } from '../enums/category-enum'
import { Requirement } from './requirement';

export interface Poder {
  id?: number,
  name: string,
  description: string,
  category: CategoryEnum,
  available?: boolean
  requirement: Requirement | null,
  //TODO: mapear para combate
}