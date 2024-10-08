import * as path from 'node:path';

import Fastify, { type FastifyInstance, } from 'fastify';
import AutoLoad, { AutoloadPluginOptions } from '@fastify/autoload';

import { env } from './env';




export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;


// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {
}


const server: FastifyInstance = Fastify({
  logger: {
    level: 'debug',
    transport: {
      target: '@mgcrea/pino-pretty-compact',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
});


// Register fastify plugins
server.register(AutoLoad, {
  dir: path.join(__dirname, 'plugins'),
})

server.register(AutoLoad, {
  dir: path.join(__dirname, 'routes'),
  dirNameRoutePrefix: true, // lack of prefix will mean no prefix, instead of directory name
})


export const start = async () => {
  try {
    await server.listen({ port: env.PORT, host: env.HOST })
    const address = server.server.address()
    const _port = typeof address === 'string' ? address : address?.port
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
