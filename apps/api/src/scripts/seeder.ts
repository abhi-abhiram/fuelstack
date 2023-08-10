import { db, userSeeder } from '@acme/database'

async function seed() {
  await userSeeder(db)
}

seed()
  .then(async () => {
    console.info('🍀 Database has been populated with seeders')
    process.exit(0)
  })
  .catch(async (e) => {
    console.error('🔥 Failed running database seeder:', e.message)
    process.exit(1)
  })
