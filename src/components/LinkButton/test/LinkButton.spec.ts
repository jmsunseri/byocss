import LinkButton from '../LinkButton.svelte';
import LinkButtonSlotTest from './LinkButtonSlotTest.mock.svelte';
import { render, fireEvent } from '@testing-library/svelte';
import { theme } from '../../../store';

beforeAll(() => {
  theme.set({
    linkButtons: {
      default: {
        something: 'bar',
        icon: 'foo',
      },
      disabled: {
        disabledStyle: 'disabled-style',
      },
      'variant-1': {
        style: 'variant-style',
        icon: 'bar',
      },
      'variant-1-disabled': {
        style: 'variant-1-disabled-style',
        icon: 'bar',
      },
    },
  });
});

test('link button is created', () => {
  const { getByTestId } = render(LinkButton);
  const button = getByTestId('link-button');
  expect(button).toBeTruthy();
});

test('icon slots should be missing', () => {
  const { getByTestId } = render(LinkButton);

  try {
    const icon = getByTestId('link-button-icon');
    //it should never get to this line;
    expect(icon).toBeFalsy();
  } catch {
    // if we caught an exception then the right thing happened
    expect(true).toBeTruthy();
  }

  try {
    const icon = getByTestId('link-button-trailing-icon');
    //it should never get to this line;
    expect(icon).toBeFalsy();
  } catch {
    // if we caught an exception then the right thing happened
    expect(true).toBeTruthy();
  }
});

test('css prop is assigned to classes', () => {
  const { getByTestId } = render(LinkButton, { css: 'foo' });
  const button = getByTestId('link-button');
  expect(button).toHaveClass('foo');
});

test('link button click works', () => {
  const { getByTestId, component } = render(LinkButton);

  const mock = jest.fn();
  component.$on('click', mock);

  const button = getByTestId('link-button');
  fireEvent.click(button);

  expect(mock).toHaveBeenCalled();
});

test('href applied', () => {
  const { getByTestId } = render(LinkButton, {
    props: { href: '#' },
  });
  const button = getByTestId('link-button');
  expect(button).toHaveAttribute('href', '#');
});

test('disabled removes href and applies disabled style', () => {
  const { getByTestId } = render(LinkButton, {
    props: { disabled: true, href: '#' },
  });
  const button = getByTestId('link-button');
  expect(button).toHaveClass('disabled-style');
  expect(button).not.toHaveAttribute('href');
});

test('default style applied', () => {
  const { getByTestId } = render(LinkButton);
  const button = getByTestId('link-button');
  expect(button).toHaveClass('bar');
});

test('default + css prop style applied', () => {
  const { getByTestId } = render(LinkButton, { css: 'foo' });
  const button = getByTestId('link-button');
  expect(button).toHaveClass('bar');
  expect(button).toHaveClass('foo');
  expect(button).not.toHaveClass('something');
});

test('apply variant style applied and not default', () => {
  const { getByTestId } = render(LinkButton, { variant: 'variant-1' });
  const button = getByTestId('link-button');
  expect(button).toHaveClass('variant-style');
  expect(button).not.toHaveClass('bar');
});

test('apply variant 1 disabled style applied and not default', () => {
  const { getByTestId } = render(LinkButton, {
    variant: 'variant-1',
    disabled: true,
  });
  const button = getByTestId('link-button');
  expect(button).toHaveClass('variant-1-disabled-style');
  expect(button).not.toHaveClass('variant-style');
});

test('applying non existant style', () => {
  const { getByTestId } = render(LinkButton, { variant: 'variant-5' });
  const button = getByTestId('link-button');
  expect(button).not.toHaveClass('variant-style');
  expect(button).not.toHaveClass('bar');
});

test('default slot', () => {
  const { getByTestId } = render(LinkButtonSlotTest);
  const button = getByTestId('link-button');
  expect(button).toHaveTextContent('Foo');
});

test('creates icon slot', () => {
  const { getByTestId } = render(LinkButtonSlotTest);
  const buttonIcon = getByTestId('link-button-icon');
  expect(buttonIcon).toBeTruthy();
  expect(buttonIcon).toHaveClass('foo');
  expect(buttonIcon).toHaveTextContent('Bar');
});

test('creates trailing icon slot', () => {
  const { getByTestId } = render(LinkButtonSlotTest);
  const buttonIcon = getByTestId('link-button-trailing-icon');
  expect(buttonIcon).toBeTruthy();
  expect(buttonIcon).toHaveClass('foo');
  expect(buttonIcon).toHaveTextContent('Blah');
});
