// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Scripts/DomSelectors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DomSelectors = void 0;
var DomSelectors = {
  body: document.body,
  container: document.getElementById("container"),
  menu: document.querySelector(".menu"),
  search_pokedex: document.querySelector(".search-pokedex")
};
exports.DomSelectors = DomSelectors;
},{}],"Scripts/generations.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generation8Array = exports.generation7Array = exports.generation6Array = exports.generation5Array = exports.generation4Array = exports.generation3Array = exports.generation2Array = exports.generation1Array = void 0;
var generation1Array = [];
exports.generation1Array = generation1Array;
var generation2Array = [];
exports.generation2Array = generation2Array;
var generation3Array = [];
exports.generation3Array = generation3Array;
var generation4Array = [];
exports.generation4Array = generation4Array;
var generation5Array = [];
exports.generation5Array = generation5Array;
var generation6Array = [];
exports.generation6Array = generation6Array;
var generation7Array = [];
exports.generation7Array = generation7Array;
var generation8Array = [];
exports.generation8Array = generation8Array;

for (var i = 1; i <= 151; i++) {
  generation1Array.push(i);
}

for (var _i = 152; _i <= 251; _i++) {
  generation2Array.push(_i);
}

for (var _i2 = 252; _i2 <= 386; _i2++) {
  generation3Array.push(_i2);
}

for (var _i3 = 387; _i3 <= 493; _i3++) {
  generation4Array.push(_i3);
}

for (var _i4 = 494; _i4 <= 649; _i4++) {
  generation5Array.push(_i4);
}

for (var _i5 = 650; _i5 <= 721; _i5++) {
  generation6Array.push(_i5);
}

for (var _i6 = 722; _i6 <= 809; _i6++) {
  generation7Array.push(_i6);
}

for (var _i7 = 810; _i7 <= 893; _i7++) {
  generation8Array.push(_i7);
}
},{}],"../node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
var define;
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"Scripts/index.js":[function(require,module,exports) {
"use strict";

var _DomSelectors = require("./DomSelectors.js");

var _generations = require("./generations.js");

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var caught;
var seen;
var masterdex = false;

if (document.cookie != "") {
  var seencaught = document.cookie;
  seencaught = seencaught.split("divider");
  seen = seencaught[0];

  if (seen != "[]") {
    seen = seen.replace("[", "");
    seen = seen.replace("]", "");
    seen = seen.split(",");

    for (var i = 0; i < seen.length; i++) {
      seen[i] = parseInt(seen[i]);
    }
  } else {
    seen = [];
  }

  caught = seencaught[1];

  if (caught != "[]") {
    caught.replace("[", "");
    caught.replace("]", "");
    caught = caught.split(",");

    for (var _i = 0; _i < caught.length; _i++) {
      caught[_i] = parseInt(caught[_i]);
    }
  } else {
    caught = [];
  }
} else {
  caught = [];
  seen = [];
}

function searchPokemon(_x) {
  return _searchPokemon.apply(this, arguments);
}

function _searchPokemon() {
  _searchPokemon = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(queryurl) {
    var response, pokemon;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(queryurl, ["GET"]);

          case 2:
            response = _context2.sent;
            _context2.next = 5;
            return response.json();

          case 5:
            pokemon = _context2.sent;
            return _context2.abrupt("return", pokemon);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _searchPokemon.apply(this, arguments);
}

var pokemonNumber = 1;

function mainMenu() {
  _DomSelectors.DomSelectors.menu.innerHTML = "";
  _DomSelectors.DomSelectors.container.innerHTML = "";

  _DomSelectors.DomSelectors.menu.insertAdjacentHTML("beforeend", "\n  <button class=\"decision\" id=\"quiz-option\">Quiz</button>\n  <button class=\"decision\" id=\"pokedex-option\">Pok\xE9dex</button>");

  document.getElementById("quiz-option").addEventListener("click", quiz);
  document.getElementById("pokedex-option").addEventListener("click", showPokedex);
}

function quiz() {
  var cookiestring = document.cookie;

  _DomSelectors.DomSelectors.container.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      var button = document.getElementsByClassName("enter_submit");
      button[0].click();
    } //When a key is pressed the function checks if it is the enter key and if it is the firt button on the page with class enter_submit is clicked.

  });

  _DomSelectors.DomSelectors.container.innerHTML = "";

  _DomSelectors.DomSelectors.container.insertAdjacentHTML( //insertAdjacentHTML allows us to put HTML on top of the HTML we already created
  "beforeend", //beforeend is used instead of beforeafter because the html will be inserted at the bottom, meaning that all subsequent elements and blocks will also be at the bottom which makes it look like how it normally does it a normal HTML file while beforebegin will comepletely reverse how we wrote it.
  "<div class=\"selection\">\n    <label class =\"statement1\">Choose the generations you would like to do!</label> \n    <br> <input id=\"check1\" type =\"checkbox\"> \n    <label class =\"choice\">Generation 1</label>\n    <br> <input id=\"check2\" type =\"checkbox\"> \n    <label class =\"choice\">Generation 2</label> \n    <br> <input id=\"check3\" type =\"checkbox\"> \n    <label class =\"choice\">Generation 3</label> \n    <br> <input id=\"check4\" type =\"checkbox\"> \n    <label class =\"choice\">Generation 4</label> \n    <br> <input id=\"check5\" type =\"checkbox\"> \n    <label class =\"choice\">Generation 5</label> \n    <br> <input id=\"check6\" type =\"checkbox\"> \n    <label class =\"choice\">Generation 6</label> \n    <br> <input id=\"check7\" type =\"checkbox\"> \n    <label class =\"choice\">Generation 7</label> \n    <br> <input id=\"check8\" type =\"checkbox\"> \n    <label class =\"choice\">Generation 8</label>\n    <br>\n    <a href=https://github.com/PokeAPI/pokedex/issues>Warning: Generation 8 May have several bugs</a>\n    <br>\n    <input type=\"submit\" class=\"enter_submit\" id=\"next\" value=\"Next\">\n    <br>\n    <br> \n    <label class = \"statement2\" id=\"statement2\"></label>\n    </div>");

  var generationsSelected = []; // creates an array

  document.getElementById("next").addEventListener("click", function (e) {
    //listens for a click when user clicks on a specific element, in this case, its a button called "next"
    e.preventDefault(); //prevents page from reloading

    if (document.getElementById("check1").checked) {
      //inserts values into our generationsSelected array from the generations.js file if their checkbox was selected
      generationsSelected = generationsSelected.concat(_generations.generation1Array);
    }

    if (document.getElementById("check2").checked) {
      generationsSelected = generationsSelected.concat(_generations.generation2Array);
    }

    if (document.getElementById("check3").checked) {
      generationsSelected = generationsSelected.concat(_generations.generation3Array);
    }

    if (document.getElementById("check4").checked) {
      generationsSelected = generationsSelected.concat(_generations.generation4Array);
    }

    if (document.getElementById("check5").checked) {
      generationsSelected = generationsSelected.concat(_generations.generation5Array);
    }

    if (document.getElementById("check6").checked) {
      generationsSelected = generationsSelected.concat(_generations.generation6Array);
    }

    if (document.getElementById("check7").checked) {
      generationsSelected = generationsSelected.concat(_generations.generation7Array);
    }

    if (document.getElementById("check8").checked) {
      generationsSelected = generationsSelected.concat(_generations.generation8Array);
    }

    if (generationsSelected == 0) {
      //prevents the quiz from starting if they didnt check a box.
      alert("You didn't pick one...");
    } else {
      _DomSelectors.DomSelectors.container.querySelector(".selection").innerHTML = ""; //completely wipes out the entire html in the div "container"

      _DomSelectors.DomSelectors.container.querySelector(".selection").insertAdjacentHTML( //puts in new HTML
      "afterend", "<label class = \"statement2\">Pick a number from 1-".concat(generationsSelected.length, " which will be the amount of Pok\xE9mon that will be given to you!\n      </label>\n      <br>\n      <br>\n      <input type=\"number\" min=\"1\" max='").concat(generationsSelected.length, "' placeholder=\"Enter #\" class=\"number\"> \n      <br>\n      <br>\n      <input type=\"submit\" class=\"enter_submit\" id=\"start\" value=\"Start The Game\">"));

      document.querySelector(".number").select();
      var submit = document.getElementById("start");
      submit.addEventListener("click", function () {
        //listens for the submit button to be clicked, and if it does, use the function which will be created on the spot
        var questionsrequested = document.querySelector(".number").value;
        var numquestions = parseInt(questionsrequested);

        if (questionsrequested != numquestions) {
          //checks if the input given is the same as the input without parts that are not present in an interger
          alert("Please enter a whole number for the amount of questions that you want to play");
        } else if (numquestions > generationsSelected.length) {
          //If they put a number greater than what was intended, the quiz won't start and they'll be warned
          alert("Its Greater than ".concat(generationsSelected.length, "!!!"));
        } else if (numquestions < 1) {
          //If they put a number less than intended, the quiz won't start and will also warn them
          alert("If you don't wanna play any questions you don't have to play");
        } else {
          startgame(numquestions, generationsSelected); //starts quiz, saving the parameters to the function below(line 115)
        }
      });
    }
  });

  function startgame(questionamount, pokedexnumbers) {
    document.querySelector(".menu").innerHTML = "";
    var i = 0;
    var amountright = 0;
    var pokemondata;
    showquestion(); //call the async function

    function showquestion() {
      return _showquestion.apply(this, arguments);
    }

    function _showquestion() {
      _showquestion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var pokedexnumber, index, queryURL;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(i < questionamount)) {
                  _context.next = 15;
                  break;
                }

                //If the question is less than the total questions
                _DomSelectors.DomSelectors.container.innerHTML = "<div id='loading'>Loading Please Wait</div>"; //to prevent double clicking the button we added a loading screen

                i++; //increase the question counter by 1

                pokedexnumber = pokedexnumbers[Math.floor(Math.random() * pokedexnumbers.length)]; //randomized the pokemon sent out to the quiz(lines 106 and 115)

                index = generationsSelected.indexOf(pokedexnumber); //indexof records the actual value of the randomized pokemon number of the array, not the element

                generationsSelected.splice(index, 1); //we are calling the array and splice gets rid of the value listed as that of the random pokedex number in the array, 1 is the amount in the array we are removing

                queryURL = "https://pokeapi.co/api/v2/pokemon/".concat(pokedexnumber); //calling the api using a random number

                _context.next = 9;
                return searchPokemon(queryURL);

              case 9:
                pokemondata = _context.sent;
                //waits for the api to load
                _DomSelectors.DomSelectors.container.innerHTML = "<h1>Question ".concat(i, "</h1><br><h2>What is the name of the pok\xE9mon with pok\xE9dex number ").concat(pokedexnumber, "?</h2>\n        <img class=\"pokemon\" src=\"").concat(pokemondata.sprites.front_default, "\">\n        <br><input type=\"text\" placeholder=\"Pok\xE9mon Name\" class=\"number\" id=\"answer\">\n        <br><input type=\"submit\" class=\"enter_submit\" id=\"submit\" value=\"Submit\"><br>\n        <br><br><div id='counter'>You got ").concat(amountright, " out of ").concat(i - 1, " correct</div>"); //we ask the question, using the random pokemon number as the pokedex number, getting the image from the api's array, and recording the amount they got right.

                document.getElementById("submit").addEventListener("click", showanswer); //calls the function when u hit the submit which is in the scope

                document.getElementById("answer").select();
                _context.next = 21;
                break;

              case 15:
                //if the questionnumber is equal to the questions they inputted, we show the results screen showing what they got right and wrong, and let them try again.
                mainMenu();
                _DomSelectors.DomSelectors.container.innerHTML = "You got ".concat(amountright, " out of ").concat(i, " correct</div>");
                _DomSelectors.DomSelectors.menu.innerHTML = "";

                _DomSelectors.DomSelectors.menu.insertAdjacentHTML("beforeend", "\n        <button class=\"decision\" id=\"quiz-option\">Quiz</button>\n        <button class=\"decision\" id=\"pokedex-option\">Pok\xE9dex</button>");

                document.getElementById("quiz-option").addEventListener("click", quiz);
                document.getElementById("pokedex-option").addEventListener("click", showPokedex);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _showquestion.apply(this, arguments);
    }

    function showanswer() {
      var answer = document.getElementById("answer").value; //gets the string that the user inputted

      var sign;
      var identifier;
      var pokemonname = pokemondata.name.split("-")[0];

      if (answer.toLowerCase() === pokemonname) {
        //if the string all lowercased is equal to the name of the pokemon from the api, they get it right and one point is added
        amountright = amountright + 1;
        sign = "✓";
        identifier = "checkmark";

        if (!caught.includes(pokemondata.id)) {
          caught.push(pokemondata.id);
          cookiestring = "".concat(JSON.stringify(seen), "divider").concat(JSON.stringify(caught), " ");
          document.cookie = "".concat(cookiestring, ";SameSite=Strict");
        }
      } else {
        //if the string isn't equal to it, it's wrong
        sign = "✘";
        identifier = "crossmark";

        if (!seen.includes(pokemondata.id)) {
          seen.push(pokemondata.id);
          cookiestring = "".concat(JSON.stringify(seen), "divider").concat(JSON.stringify(caught), " ");
          document.cookie = "".concat(cookiestring, ";SameSite=Strict;expires=Fri, 31 Dec 2037 12:00:00 UTC");
        }
      }

      _DomSelectors.DomSelectors.container.innerHTML = "<div><h1 class=\"identifier\" id=\"".concat(identifier, "\">").concat(sign, "</h1></div><div><h2>Your answer: ").concat(answer, "</h2></div><div><h2 class=\"pokemon-data-name\">Correct answer: ").concat(pokemonname, "</h2></div><br><input type=\"submit\" id=\"button\" value=\"Next Question\"><br><br><div id='counter'>You got ").concat(amountright, " out of ").concat(i, " correct</div>");
      document.getElementById("button").addEventListener("click", showquestion); //shows them the answer, and if the click the button, it calls another function(line 120) which moves them to the next question
    }
  }
}

function next() {
  //function that increases pokemonNumber by 1 to show next pokemon by order
  pokemonNumber = pokemonNumber + 1;
  showPokedex();
}

function previous() {
  //function that decreases pokemonNumber by 1 to show previous pokemon by order
  pokemonNumber = pokemonNumber - 1;
  showPokedex();
}

function ToggleDex() {
  if (masterdex) {
    masterdex = false;
  } else {
    masterdex = true;
  }

  showPokedex();
}

function searchValue() {
  var input = document.querySelector(".input").value.toLowerCase(); //gets user input and lowercases it

  if (input > 893) {
    // if user input greater than 893, warn them
    alert("You've exceeded the maximum number of Pokémon");
  } else if (input < 1) {
    // if user input less than 1, warn them
    alert("Bruh");
  } else if (typeof input === "string" && numberArray.includes(input) === true) {
    // if user input is a string and the string is part of the array
    pokemonNumber = numberArray.indexOf(input) + 1; //pokemonNumber becomes the number of whatever the user input is equal to in terms of the array +1

    showPokedex();
  } else if (input >= 1 && input <= 893) {
    // if user input is equal to or greater than 1 and less than or equal to 893
    pokemonNumber = parseInt(input); //pokemonNumber becomes the input

    showPokedex();
  } else {
    // if none of the conditions are met, warn them
    alert("You either mispelled or that Pokémon doesn't exist!");
  }
}

function showPokedex() {
  return _showPokedex.apply(this, arguments);
}

function _showPokedex() {
  _showPokedex = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var queryURL, pokedexdata;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _DomSelectors.DomSelectors.container.innerHTML = "<div id='loading'>Loading Please Wait</div>";
            queryURL = "https://pokeapi.co/api/v2/pokemon/".concat(pokemonNumber); //gets api

            _context3.next = 4;
            return searchPokemon(queryURL);

          case 4:
            pokedexdata = _context3.sent;

            if (masterdex) {
              _DomSelectors.DomSelectors.container.innerHTML = "<div id=\"pokedex\">Pok\xE9dex</div>\n    <input class=\"input\" type=\"text\">\n    <span class=\"search\">\uD83D\uDD0D</span>\n    <br>\n    <div class=\"pokedex-entry\">\n      <div class=\"pokedex-name\">Pok\xE9mon Name: ".concat(pokedexdata.name, "</div>\n      <div class=\"pokedex-number\">Poked\xE9x Number: ").concat(pokemonNumber, "</div>\n      <div id=\"pagebuttons\" class=\"pagination\">\n      </div>\n      <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/").concat(pokemonNumber, ".png\" class=\"pokedex-pokemon\">\n      <div class=\"stats\">\n        <div class=\"row1\">\n          <div id=\"hp\">HP: ").concat(pokedexdata.stats[0].base_stat, "</div>\n          <div id=\"specialatk\">SPATK: ").concat(pokedexdata.stats[3].base_stat, "</div>\n        </div>\n        <div class=\"row2\">\n          <div id=\"atk\">ATK: ").concat(pokedexdata.stats[1].base_stat, "</div>\n          <div id=\"specialdef\">SPDEF:").concat(pokedexdata.stats[4].base_stat, "</div>\n        </div>\n        <div class=\"row3\">\n          <div id=\"def\">DEF: ").concat(pokedexdata.stats[2].base_stat, "</div>\n          <div id=\"spd\">SPD: ").concat(pokedexdata.stats[5].base_stat, "</div>\n        </div>\n      </div>\n      <div class=\"weight\">Weight: ").concat(pokedexdata.weight, "</div>\n    </div>");
            } else {
              if (caught.includes(pokemonNumber)) {
                _DomSelectors.DomSelectors.container.innerHTML = "<div id=\"pokedex\">Pok\xE9dex</div>\n    <input class=\"input\" type=\"text\">\n    <span class=\"search\">\uD83D\uDD0D</span>\n    <br>\n    <div class=\"pokedex-entry\">\n      <div class=\"pokedex-name\">Pok\xE9mon Name: ".concat(pokedexdata.name, "</div>\n      <div class=\"pokedex-number\">Poked\xE9x Number: ").concat(pokemonNumber, "</div>\n      <div id=\"pagebuttons\" class=\"pagination\">\n      </div>\n      <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/").concat(pokemonNumber, ".png\" class=\"pokedex-pokemon\">\n      <div class=\"stats\">\n        <div class=\"row1\">\n          <div id=\"hp\">HP: ").concat(pokedexdata.stats[0].base_stat, "</div>\n          <div id=\"specialatk\">SPATK: ").concat(pokedexdata.stats[3].base_stat, "</div>\n        </div>\n        <div class=\"row2\">\n          <div id=\"atk\">ATK: ").concat(pokedexdata.stats[1].base_stat, "</div>\n          <div id=\"specialdef\">SPDEF:").concat(pokedexdata.stats[4].base_stat, "</div>\n        </div>\n        <div class=\"row3\">\n          <div id=\"def\">DEF: ").concat(pokedexdata.stats[2].base_stat, "</div>\n          <div id=\"spd\">SPD: ").concat(pokedexdata.stats[5].base_stat, "</div>\n        </div>\n      </div>\n      <div class=\"weight\">Weight: ").concat(pokedexdata.weight, "</div>\n    </div>");
              } else if (seen.includes(pokemonNumber)) {
                _DomSelectors.DomSelectors.container.innerHTML = "<div id=\"pokedex\">Pok\xE9dex</div>\n    <input class=\"input\" type=\"text\">\n    <span class=\"search\">\uD83D\uDD0D</span>\n    <br>\n    <div class=\"pokedex-entry\">\n      <div class=\"pokedex-name\">Pok\xE9mon Name: ".concat(pokedexdata.name, "</div>\n      <div class=\"pokedex-number\">Poked\xE9x Number: ").concat(pokemonNumber, "</div>\n      <div id=\"pagebuttons\" class=\"pagination\">\n      </div>\n      <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/").concat(pokemonNumber, ".png\" class=\"pokedex-pokemon\">\n      <div class=\"stats\">\n        <div class=\"row1\">\n          <div id=\"hp\">HP:?</div>\n          <div id=\"specialatk\">SPATK:?</div>\n        </div>\n        <div class=\"row2\">\n          <div id=\"atk\">ATK:?</div>\n          <div id=\"specialdef\">SPDEF:?</div>\n        </div>\n        <div class=\"row3\">\n          <div id=\"def\">DEF:?</div>\n          <div id=\"spd\">SPD:?</div>\n        </div>\n      </div>\n      <div class=\"weight\">Weight:?</div>\n    </div>");
              } else {
                _DomSelectors.DomSelectors.container.innerHTML = "<div id=\"pokedex\">Pok\xE9dex</div>\n    <input class=\"input\" type=\"text\">\n    <span class=\"search\">\uD83D\uDD0D</span>\n    <br>\n    <div class=\"pokedex-entry\">\n      <div class=\"pokedex-name\">Pok\xE9mon Name:?</div>\n      <div class=\"pokedex-number\">Poked\xE9x Number: ".concat(pokemonNumber, "</div>\n      <div id=\"pagebuttons\" class=\"pagination\">\n      </div>\n      <img src=\"https://i.postimg.cc/6QXXtR0b/image.png\" class=\"pokedex-pokemon\">\n      <div class=\"stats\">\n        <div class=\"row1\">\n          <div id=\"hp\">HP:?</div>\n          <div id=\"specialatk\">SPATK:?</div>\n        </div>\n        <div class=\"row2\">\n          <div id=\"atk\">ATK:?</div>\n          <div id=\"specialdef\">SPDEF:?</div>\n        </div>\n        <div class=\"row3\">\n          <div id=\"def\">DEF:?</div>\n          <div id=\"spd\">SPD:?</div>\n        </div>\n      </div>\n      <div class=\"weight\">Weight:?</div>\n    </div>");
              }
            }

            if (pokemonNumber !== 1) {
              //if pokemonNumber does NOT equal to 1, create a previous button
              document.getElementById("pagebuttons").insertAdjacentHTML("afterbegin", "<button class=\"page\" id=\"previous\">previous</button>");
              document.getElementById("previous").addEventListener("click", previous);
            }

            if (pokemonNumber !== 893) {
              //if pokemonNumber does NOT equal to 893, create a next button
              document.getElementById("pagebuttons").insertAdjacentHTML("beforeend", "<button class=\"page\" id=\"next\">next</button>");
              document.getElementById("next").addEventListener("click", next);
            }

            document.getElementById("pagebuttons").insertAdjacentHTML("beforeend", "<input type=\"checkbox\" id=\"masterdex\">Professor Oak's Pokedex");

            if (masterdex) {
              document.getElementById("masterdex").click();
            }

            document.getElementById("masterdex").addEventListener("click", ToggleDex);
            document.querySelector(".search").addEventListener("click", searchValue);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _showPokedex.apply(this, arguments);
}

mainMenu();
var numberArray = [];

function getNumber() {
  return _getNumber.apply(this, arguments);
}

function _getNumber() {
  _getNumber = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var i, queryURL, pokemonID;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            i = 1;

          case 1:
            if (!(i <= 893)) {
              _context4.next = 10;
              break;
            }

            queryURL = "https://pokeapi.co/api/v2/pokemon/".concat(i);
            _context4.next = 5;
            return searchPokemon(queryURL);

          case 5:
            pokemonID = _context4.sent;
            numberArray.push(pokemonID.name);

          case 7:
            i++;
            _context4.next = 1;
            break;

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getNumber.apply(this, arguments);
}

getNumber(); //calls async function(is needed so we can use await)
},{"./DomSelectors.js":"Scripts/DomSelectors.js","./generations.js":"Scripts/generations.js","regenerator-runtime/runtime":"../node_modules/regenerator-runtime/runtime.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55023" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","Scripts/index.js"], null)
//# sourceMappingURL=/Scripts.71d30ab3.js.map