import { getCanvas, getWidthHeight } from '../../src/utils/render';

test('utils/render get the canvas', () => {
  const canvas = getCanvas();
  expect(canvas).toBeInstanceOf(HTMLElement);
});

test('utils/render getWidthHeight', () => {
  const canvas = getCanvas();
  const widthHeight = getWidthHeight();

  expect(widthHeight).toStrictEqual({
    width: canvas.width,
    height: canvas.height,
  });
});
