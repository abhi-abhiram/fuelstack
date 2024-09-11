import { FastifyInstance } from 'fastify';
import { userContract } from '@repo/shared';
import { initServer } from '@ts-rest/fastify'



export default async function (fastify: FastifyInstance) {
  const s = initServer()

  const router = s.router(userContract, {
    createUser: async ({ body }) => {

      return {
        status: 200,
        body: {
          message: "User created"
        }
      }
    }
  })

  fastify.register(s.plugin(router))
}
