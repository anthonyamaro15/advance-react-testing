import { render, cleanup } from '@testing-library/react';
import App from './App';

import { getData } from './utils/getData';
import { server, rest } from './testServer';

describe("renders App", () => {
   test('renders App without crashing', () => {
      render(<App />);
   });
})

describe("returns correct data from API", () => {
   test('receives data', async () => {
      const data = await getData();
      expect(data._embedded.episodes).toHaveLength(1);
      cleanup();
   })

   test('Displays status code when there is an error', async () => {
      server.use(
         rest.get('https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes', (_req, res, ctx) => {
            return res(ctx.status(500));
         })
      )
   await expect(getData()).rejects.toThrow("500");
})
});
