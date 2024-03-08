import { rest } from 'msw';
import { designDatas, techDatas } from './data.js';

export const handlers = [
  rest.get('/tech', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(techDatas)
    );
  }),

  rest.get('/design', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(designDatas)
    );
  }),
]