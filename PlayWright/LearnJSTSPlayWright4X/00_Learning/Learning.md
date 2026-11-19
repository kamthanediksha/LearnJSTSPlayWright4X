# Callbacks and Promises in JavaScript

Both callbacks and Promises help JavaScript handle work that finishes later, such as reading a file, waiting for a timer, or requesting data from a server. They are related, but they are not the same thing.

## What is a callback?

A callback is a function passed to another function so it can be called later. Callbacks are not automatically asynchronous: the function receiving the callback decides when (or whether) to call it.

```js
function getUser(callback) {
  setTimeout(() => {
    callback(null, { id: 1, name: "Ava" });
  }, 500);
}

getUser((error, user) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(user.name);
});
```

This example uses the common Node.js error-first callback convention: the first argument is an error (or `null`), and the second is the result.

## What is a Promise?

A Promise is an object representing the eventual success or failure of an asynchronous operation. It begins pending, then settles once as either fulfilled (with a value) or rejected (with a reason).

```js
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Ava" });
    }, 500);
  });
}

getUser()
  .then((user) => {
    console.log(user.name);
  })
  .catch((error) => {
    console.error(error);
  });
```

Use `resolve(value)` for success and `reject(error)` for failure. A Promise rejection can also be handled by throwing inside a `.then()` callback; a later `.catch()` handles it.

The same Promise can be written with `async`/`await`:

```js
async function showUser() {
  try {
    const user = await getUser();
    console.log(user.name);
  } catch (error) {
    console.error(error);
  }
}

showUser();
```

An `async` function always returns a Promise. `await` makes Promise-based code read in a sequential style; it does not block the rest of JavaScript while the operation is pending.

## Key differences

| Topic | Callback | Promise |
|---|---|---|
| What it is | A function passed to another function | An object representing a future result |
| Composition | Nest or chain function calls manually | Chain with `.then()`, `.catch()`, and `.finally()` |
| Error handling | Usually passed as an argument by convention | Rejections flow to `.catch()` or `try`/`catch` with `await` |
| Completion | The API decides when and how often to invoke it | Settles once; handlers attached later can still receive the result |
| Control flow | Nested callbacks can become difficult to follow | Chains and `async`/`await` make many async flows easier to read |

Callbacks can be synchronous or asynchronous. Promises are designed to represent eventual completion, and Promise handlers run asynchronously through the JavaScript job queue.

## Advantages and limitations

### Callbacks

**Advantages**

- Simple for a small, one-off action.
- Common in event listeners and many existing JavaScript APIs.
- A function can be passed directly to handle an event or result.

**Limitations**

- Several dependent asynchronous steps can create deeply nested code ("callback hell").
- Error handling conventions vary between APIs.
- The caller often has to trust the API to call the callback correctly (for example, only once and with the expected arguments).

### Promises

**Advantages**

- `.then()` chains make sequential asynchronous steps easier to compose.
- One `.catch()` can handle errors from earlier steps in a chain.
- `Promise.all()` can wait for multiple independent Promises together.
- `async`/`await` can make longer flows easier to read.

**Limitations**

- Promise-based APIs require learning chaining and rejection handling.
- A Promise settles only once and is not, by itself, a cancellation mechanism.
- A Promise executor runs immediately; putting synchronous work inside `new Promise(...)` does not make that work asynchronous.
- `async`/`await` still needs correct error handling, and awaiting tasks one by one is not ideal when they could safely run in parallel.

## When should I use each?

- **Use a callback** for event handlers, simple notifications, and APIs that already expect one (such as many event emitter interfaces).
- **Use a Promise** for an operation that produces one eventual result or error, especially when steps need to be chained or composed.
- **Use `async`/`await`** to write Promise-based workflows in a readable, sequential style.
- **Convert a callback API to a Promise** when you need to integrate an older callback-based API into Promise-based code. Node.js provides `node:util`'s `promisify()` for many error-first callback APIs.

Callbacks and Promises are not opposites: Promise APIs can use callbacks internally, and `.then()` itself accepts callbacks. Choose the interface that makes the operation clear and matches the surrounding code.
