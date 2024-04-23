// contract.ts

import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
});

export const postContract = c.router({
  createPost: {
    method: 'POST',
    path: '/posts',
    responses: {
      201: PostSchema,
    },
    body: z.object({
      title: z.string(),
      content: z.string(),
    }),
    summary: 'Create a post',
  },
  getPost: {
    method: 'GET',
    path: `/posts/:id`,
    responses: {
      200: PostSchema,
      404: z.string(),
    },
    summary: 'Get a post by id',
  },
  getPosts: {
    method: 'GET',
    path: `/posts`,
    responses: {
      200: z.array(PostSchema),
    },
    summary: 'Get all post',
  },
});