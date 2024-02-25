import matchPathParameters from './src/matchPathParameters';
import createRouter from './src/router';
import { JSDOM } from 'jsdom'

describe('createRouter', () => {
  let router;

  beforeEach(() => {
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.window = dom.window;
    global.document = dom.window.document;

    router = createRouter([
      {
        path: '#/',
        element: jest.fn(),
      },
      {
        path: '#/blog/:name/:page',
        element: jest.fn(),
      },
    ]);
  });


  test('올바른 경로로 이동해야 한다.', () => {
    const spyOnStart = jest.spyOn(router, 'start');

    router.navigate('/');
    router.start();

    expect(window.location.hash).toBe('#/');
    expect(spyOnStart).toHaveBeenCalled();
  });
});

describe('matchPathParameters', () => {
  const currentPath = '#/blog/chan/1';
  const routePath = '#/blog/:name/:page';

  const params = matchPathParameters(currentPath, routePath);

  test('path Parameters에 맞게 parmas를 찾아 객체를 반환합니다.', () => {
    expect(params).toEqual({ name: 'chan', page: '1' });
  });
})