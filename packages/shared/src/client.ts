import { env } from './envars'


import { DrizzleConfig } from 'drizzle-orm'
import { type NeonHttpDatabase } from 'drizzle-orm/neon-http'
import { drizzle as drizzlePg, type PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

// Configure Neon client

export type dbClientType = NeonHttpDatabase | PostgresJsDatabase

// Postgres client for queries.
export const dbClient = postgres(env.DATABASE_URL)

const dbConfig: DrizzleConfig = {
  logger: env.NODE_ENV === 'development',
}

export const db: NeonHttpDatabase | PostgresJsDatabase = drizzlePg(postgres(env.DATABASE_URL), dbConfig)
