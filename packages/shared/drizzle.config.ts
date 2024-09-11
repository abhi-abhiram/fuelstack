import 'dotenv/config'

import type { Config } from 'drizzle-kit'

export default {
  out: './src/migration',
  schema: './src/schema/*.ts',
  breakpoints: false,
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config
