import { CategoryEnum } from '../enums/category-enum'
import { Requirement } from './requirement';

export interface Poder {
  id: number,
  name: string,
  description: string,
  category: CategoryEnum,
  requirement: Requirement,
  //TODO: mapear para combate
}