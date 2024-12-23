import { z } from 'zod';

// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   age?: number;
// }

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  age: z.number().optional(),
});

export type User = z.infer<typeof UserSchema>;
