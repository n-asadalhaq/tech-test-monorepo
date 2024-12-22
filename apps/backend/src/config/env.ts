import { config } from "dotenv";
import { z } from "zod";

config();

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  PORT: z.number().int().positive(),
  FIREBASE_DATABASE_URL: z.string(),
});

export const envConfig = envSchema.parse({
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
  FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
});
