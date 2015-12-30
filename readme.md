# path-thunk [![Build Status](https://travis-ci.org/jamestalmage/path-thunk.svg?branch=master)](https://travis-ci.org/jamestalmage/path-thunk)

> Thunkified versions of popular `path` module functions.


## Install

```
$ npm install --save path-thunk
```


## Usage

```js
const pathThunk = require('path-thunk');

const thunk = pathThunk.join('path/to/some/dir');

thunk('foo', 'bar.js')
//=> equivalent to path.join('path/to/some/dir', 'foo', 'bar.js');
```


## API

### pathThunk.join([path1], [path2], ...)
### pathThunk.relative(from, to)
### pathThunk.resolve([from ...], to)

All functions accept partial input, and return thunks for the corresponding [`path` methods](https://nodejs.org/api/path.html#path_path_join_path1_path2).

### pathThunk.win32
### pathThunk.posix

Both have identical API's to `pathThunk`, but they always return `windows` or `posix` paths (respectively). This mirrors the [corresponding items](https://nodejs.org/api/path.html#path_path_win32) from the `path` module.

## License

MIT © [James Talmage](http://github.com/jamestalmage)
