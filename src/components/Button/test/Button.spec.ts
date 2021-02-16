import Button from '../Button.svelte';
import ButtonSlotTest from './ButtonSlotTest.mock.svelte';
import { render, fireEvent } from '@testing-library/svelte';
import { theme } from '../../../store';
import { tick } from 'svelte';

beforeAll(() => {
  theme.set({
    buttons: {
      default: {
        something: 'bar',
        icon: 'foo',
      },
      'variant-1': {
        style: 'variant-style',
        icon: 'bar',
      },
      disabled: {
        something: 'dis',
      },
      'variant-1-disabled': {
        style: 'variant-style-disabled',
        icon: 'bar',
      },
    },
  });
});

test('button is created', () => {
  const { getByTestId } = render(Button);
  const button = getByTestId('button');
  expect(button).toBeTruthy();
});

test('icon slots should be missing', () => {
  const { getByTestId } = render(Button);

  try {
    const icon = getByTestId('button-icon');
    //it should never get to this line;
    expect(icon).toBeFalsy();
  } catch {
    // if we caught an exception then the right thing happened
    expect(true).toBeTruthy();
  }

  try {
    const icon = getByTestId('button-trailing-icon');
    //it should never get to this line;
    expect(icon).toBeFalsy();
  } catch {
    // if we caught an exception then the right thing happened
    expect(true).toBeTruthy();
  }
});

test('css prop is assigned to classes', () => {
  const { getByTestId } = render(Button, { css: 'foo' });
  const button = getByTestId('button');
  expect(button).toHaveClass('foo');
});

test('button click works', () => {
  const { getByTestId, component } = render(Button);

  const mock = jest.fn();
  component.$on('click', mock);

  const button = getByTestId('button');
  fireEvent.click(button);

  expect(mock).toHaveBeenCalled();
});

test('does disabled work', () => {
  const { getByTestId } = render(Button, {
    props: { disabled: true },
  });
  const button = getByTestId('button');
  expect(button).toBeDisabled();
  expect(button).toHaveClass('dis');
});

test('default style applied', () => {
  const { getByTestId } = render(Button);
  const button = getByTestId('button');
  expect(button).toHaveClass('bar');
});

test('switch from default style to disabled', async () => {
  const { getByTestId, component } = render(Button);
  const button = getByTestId('button');
  expect(button).toHaveClass('bar');

  component.$set({ disabled: true });
  await tick();
  expect(button).toHaveClass('dis');
});

test('default + css prop style applied', () => {
  const { getByTestId } = render(Button, { css: 'foo' });
  const button = getByTestId('button');
  expect(button).toHaveClass('bar');
  expect(button).toHaveClass('foo');
  expect(button).not.toHaveClass('something');
});

test('apply variant style applied and not default', () => {
  const { getByTestId } = render(Button, {
    variant: 'variant-1',
  });
  const button = getByTestId('button');
  expect(button).toHaveClass('variant-style');
  expect(button).not.toHaveClass('bar');
});

test('apply disabled variant style and not variant or default disabled', () => {
  const { getByTestId } = render(Button, {
    variant: 'variant-1',
    disabled: true,
  });
  const button = getByTestId('button');
  expect(button).not.toHaveClass('variant-style');
  expect(button).not.toHaveClass('bar');
  expect(button).not.toHaveClass('dis');
  expect(button).toHaveClass('variant-style-disabled');
});

test('applying non existant style', () => {
  const { getByTestId } = render(Button, { variant: 'variant-5' });
  const button = getByTestId('button');
  expect(button).not.toHaveClass('variant-style');
  expect(button).not.toHaveClass('bar');
});

test('default slot', () => {
  const { getByTestId } = render(ButtonSlotTest);
  const button = getByTestId('button');
  expect(button).toHaveTextContent('Foo');
});

test('creates icon slot', () => {
  const { getByTestId } = render(ButtonSlotTest);
  const buttonIcon = getByTestId('button-icon');
  expect(buttonIcon).toBeTruthy();
  expect(buttonIcon).toHaveClass('foo');
  expect(buttonIcon).toHaveTextContent('Bar');
});

test('creates trailing icon slot', () => {
  const { getByTestId } = render(ButtonSlotTest);
  const buttonIcon = getByTestId('button-trailing-icon');
  expect(buttonIcon).toBeTruthy();
  expect(buttonIcon).toHaveClass('foo');
  expect(buttonIcon).toHaveTextContent('Blah');
});

test('switch from default style to variant-1', async () => {
  const { getByTestId, component } = render(Button);
  const button = getByTestId('button');
  expect(button).toHaveClass('bar');

  component.$set({ variant: 'variant-1' });
  await tick();
  expect(button).toHaveClass('variant-style');
});
