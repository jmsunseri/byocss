import { toStyle } from './utils';

test('basic', () => {
  const style = {
    foo: 'bar',
    bar: ' foo',
  };

  expect(toStyle(style)).toEqual('bar foo');
});

test('basic with array', () => {
  const style = {
    foo: 'bar',
    baz: ['hi', 'there'],
  };

  expect(toStyle(style)).toEqual('bar hi there');
});

test('ignore undefined', () => {
  const style = {
    foo: 'bar',
    bar: undefined,
  };

  expect(toStyle(style)).toEqual('bar');
});

test('nested objects', () => {
  const style = {
    foo: { foo: 'foo', bar: 'bar' },
  };
  expect(toStyle(style)).toEqual('foo bar');
});

test('just array', () => {
  const style = ['foo ', ' bar'];
  expect(toStyle(style)).toEqual('foo bar');
});

test('basic with array of objects', () => {
  const style = {
    foo: 'bar ',
    bar: [{ foo: ' foo' }, { bar: ' bar' }],
  };

  expect(toStyle(style)).toEqual('bar foo bar');
});

test('just a string', () => {
  const style = 'foo';

  expect(toStyle(style)).toEqual('foo');
});

test('ignoring non string values ', () => {
  const style = { foo: 1, bar: false };

  expect(toStyle(style)).toEqual('');
});

test('enum with string value', () => {
  enum Foo {
    FOO = 'foo',
    BAR = 'bar',
  }
  const styles = [Foo.BAR, Foo.FOO];
  expect(toStyle(styles)).toEqual('bar foo');
});
