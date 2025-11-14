import { defineConfig } from "prisma";
import "dotenv/config";

if (!process.env.DATABASE_URL)
  throw new Error("DATABASE_URL is required");

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,
  },
  generator: {
    client: {
      provider: "prisma-client-js",
      previewFeatures: ["mongodb"],
      output: "../src/generated/prisma",
    },
  },
  engine: "classic",
});