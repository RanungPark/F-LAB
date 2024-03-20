import { rest } from 'msw';
import { designDatas, techDatas } from './data.js';

export const handlers = [
  rest.get('/techs', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(techDatas)
    );
  }),
  rest.get('/techs/:id/?query=?', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(techDatas)
    );
  }),

  rest.get('/designs', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(designDatas)
    );
  }),
]