import { config } from "dotenv";
import { z } from "zod";

config();

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  PORT: z.number().int().positive(),
});

export const envConfig = envSchema.parse({
  PORT: process.env.PORT || 3444,
  NODE_ENV: process.env.NODE_ENV || "development",
});
