import {z} from 'zod'
import {stringSchema} from './stringSchema'
export const nameSchema = stringSchema.min(1,{message: "Texto inválido!"})
