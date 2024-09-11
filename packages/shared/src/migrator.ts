import { join } from 'node:path'


import { MigrationConfig } from 'drizzle-orm/migrator'
import { drizzle as drizzlePg } from 'drizzle-orm/postgres-js'
import { migrate as migratePg } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

const migrationConfig: MigrationConfig = {
  migrationsFolder: join(__dirname, 'migration'),
  migrationsTable: '_migrations',
}

/**
 * Postgres client for migrations. For the built in migrate function with DDL
 * migrations strongly encourage you to use max: 1 connection configuration.
 */
export const migrateDatabase = (driver: 'neon' | 'postgres', connectionString: string) => {
  return migratePg(drizzlePg(postgres(connectionString, { max: 1 })), migrationConfig)
}
