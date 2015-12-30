import test from 'ava';
import thunk from './';
import path from 'path';

test(t => {
	t.is(thunk.join('foo', 'bar')('baz', 'quz'), path.join('foo', 'bar', 'baz', 'quz'));
	t.is(thunk.resolve('foo', 'bar')('baz', 'quz'), path.resolve('foo', 'bar', 'baz', 'quz'));
	t.is(thunk.relative('foo')('bar'), path.relative('foo', 'bar'));

	t.is(thunk.win32.join('foo', 'bar')('baz', 'quz'), path.win32.join('foo', 'bar', 'baz', 'quz'));
	t.is(thunk.win32.resolve('foo', 'bar')('baz', 'quz'), path.win32.resolve('foo', 'bar', 'baz', 'quz'));
	t.is(thunk.win32.relative('foo')('bar'), path.win32.relative('foo', 'bar'));

	t.is(thunk.posix.join('foo', 'bar')('baz', 'quz'), path.posix.join('foo', 'bar', 'baz', 'quz'));
	t.is(thunk.posix.resolve('foo', 'bar')('baz', 'quz'), path.posix.resolve('foo', 'bar', 'baz', 'quz'));
	t.is(thunk.posix.relative('foo')('bar'), path.posix.relative('foo', 'bar'));
});
