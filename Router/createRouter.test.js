import matchPathParameters from './src/matchPathParameters';
import createRouter from './src/router';

describe('createRouter', () => {
  const router = createRouter([
    {
      path: '#/',
      element: jest.fn(),
    },
    {
      path: '#/blog/:name/:page',
      element: jest.fn(),
    },
  ]);

  test('path Parameters에 맞게 parmas를 찾고 있는가', () => {
    const currentPath = '#/blog/chan/1';
    const routePath = '#/blog/:name/:page';

    const params = matchPathParameters(currentPath, routePath);

    expect(params).toEqual({ name: 'chan', page: '1' });
  });
});
