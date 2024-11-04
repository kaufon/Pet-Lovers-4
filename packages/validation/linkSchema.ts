
import {z} from 'zod'
export const LinkSchema = z.object({
  href: z.string(),
  url: z.string().url()
})
