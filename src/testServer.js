import { rest } from 'msw';
import { setupServer } from 'msw/node';
import  seedData  from './SeedData';

const server = setupServer(
   rest.get('https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(seedData));
   })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };
