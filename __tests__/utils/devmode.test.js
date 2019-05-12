import { _DevMode } from '../../src/utils/DevMode';

test('DevMode default creation', () => {
  const devMode = new _DevMode();
  devMode.init();

  expect(devMode.dev).toBe(false);
  expect(devMode.framed).toBe(false);
});

test('DevMode get option', () => {
  const devMode = new _DevMode();
  devMode.init();

  const input = document.createElement('input');
  input.id = 'input_dev_invincible';
  input.type = 'input';
  document.body.append(input);

  expect(devMode.getOption('invincible')).toBe(false);

  input.checked = true;
  expect(devMode.getOption('invincible')).toBe(true);
});


test('DevMode set devmode', () => {
  const devMode = new _DevMode();

  devMode.init();
  expect(devMode.dev).toBe(false);

  window.history.pushState({}, '', 'index.html?dev');
  devMode.init();
  expect(devMode.dev).toBe(true);
});


test('DevMode set framedmode', () => {
  const devMode = new _DevMode();

  devMode.init();
  expect(devMode.framed).toBe(false);

  window.history.pushState({}, '', 'index.html?framed');
  devMode.init();
  expect(devMode.framed).toBe(true);
});
