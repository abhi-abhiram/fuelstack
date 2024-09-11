import {
  initContract,
} from '@ts-rest/core';
import { z } from 'zod';

const { router } = initContract();

export const userContract = router(
  {
    createUser: {
      path: "/create-user",
      method: "POST",
      body: z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      }),
      responses: {
        200: z.object({
          message: z.string(),
        }),
      },
      summary: "Create a user",
    },
  },
  { strictStatusCodes: true },
);

// export type ClientResponses = ClientInferResponses<typeof contract>;

// export type Task = ClientInferResponseBody<typeof contract.getTask, 200>;

// export type ServerRequests<Route extends keyof typeof contract> =
//     'body' extends keyof ServerInferRequest<typeof contract>[Route]
//     ? ServerInferRequest<typeof contract>[Route]['body']
//     : never;
