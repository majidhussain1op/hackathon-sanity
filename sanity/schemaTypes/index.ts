import { type SchemaTypeDefinition } from 'sanity'


import { categoryType } from './categoryType'
import { salesType } from './salesType'
import { productType } from './productType'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ categoryType,salesType,productType],
}
