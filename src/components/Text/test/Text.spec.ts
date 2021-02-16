import Text from '../Text.svelte';
import { render } from '@testing-library/svelte';
import { theme } from '../../../store';

beforeAll(() => {
  theme.set({
    texts: {
      default: 'foo',
      'variant-1': 'bar',
    },
  });
});

test('text is created', () => {
  const { getByTestId } = render(Text);
  const text = getByTestId('text');
  expect(text).toBeTruthy();
});

test('css prop is assigned to classes', () => {
  const { getByTestId } = render(Text, { css: 'blah' });
  const text = getByTestId('text');
  expect(text).toHaveClass('blah');
});

test('default style applied', () => {
  const { getByTestId } = render(Text);
  const text = getByTestId('text');
  expect(text).toHaveClass('foo');
});

test('default + css prop style applied', () => {
  const { getByTestId } = render(Text, { css: 'blah' });
  const text = getByTestId('text');
  expect(text).toHaveClass('blah');
  expect(text).toHaveClass('foo');
  expect(text).not.toHaveClass('bar');
});

test('apply variant style applied and not default', () => {
  const { getByTestId } = render(Text, { variant: 'variant-1' });
  const text = getByTestId('text');
  expect(text).toHaveClass('bar');
  expect(text).not.toHaveClass('foo');
});

test('applying non existant style', () => {
  const { getByTestId } = render(Text, { variant: 'variant-5' });
  const text = getByTestId('text');
  expect(text).not.toHaveClass('variant-style');
  expect(text).not.toHaveClass('foo');
  expect(text).not.toHaveClass('bar');
});
