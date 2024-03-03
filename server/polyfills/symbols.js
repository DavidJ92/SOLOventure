(function () {
    if (typeof Symbol === 'undefined') {
      var SymbolPolyfill = function Symbol() {
        this.description = arguments.length > 0 ? arguments[0] : undefined;
      };
  
      SymbolPolyfill.for = function (key) {
        if (typeof key !== 'string') throw new TypeError('expected string as first argument to Symbol.for');
        if (!SymbolPolyfill.registry[key]) SymbolPolyfill.registry[key] = new SymbolPolyfill(key);
        return SymbolPolyfill.registry[key];
      };
  
      SymbolPolyfill.keyFor = function (sym) {
        if (!SymbolPolyfill.prototype.isPrototypeOf(sym)) throw new TypeError('expected symbol as first argument to Symbol.keyFor');
        for (var key in SymbolPolyfill.registry) if (SymbolPolyfill.registry[key] === sym) return key;
      };
  
      SymbolPolyfill.prototype = {
        toString: function () {
          return this.hasOwnProperty('description') ? this.description : '';
        },
        valueOf: function () {
          return this.toString();
        }
      };
  
      SymbolPolyfill.registry = Object.create(null);
  
      Object.defineProperty(SymbolPolyfill, 'iterator', {
        value: SymbolPolyfill.for('iterator'),
        writable: false,
        enumerable: false,
        configurable: true
      });
  
      Object.defineProperty(SymbolPolyfill, 'asyncIterator', {
        value: SymbolPolyfill.for('asyncIterator'),
        writable: false,
        enumerable: false,
        configurable: true
      });
  
      Object.defineProperty(SymbolPolyfill, 'hasInstance', {
        value: SymbolPolyfill.for('hasInstance'),
        writable: false,
        enumerable: false,
        configurable: true
      });
  
      Object.defineProperty(SymbolPolyfill, 'isConcatSpreadable', {
        value: SymbolPolyfill.for('isConcatSpreadable'),
        writable: false,
        enumerable: false,
        configurable: true
      });
  
      Object.defineProperty(SymbolPolyfill, 'species', {
        value: SymbolPolyfill.for('species'),
        writable: false,
        enumerable: false,
        configurable: true
      });
  
      Object.defineProperty(SymbolPolyfill, 'replace', {
        value: SymbolPolyfill.for('replace'),
        writable: false,
        enumerable: false,
        configurable: true
      });
  
      Object.defineProperty(SymbolPolyfill, 'search', {
        value: SymbolPolyfill.for('search'),
        writable: false,
        enumerable: false,
        configurable: true
      });
  
      Object.defineProperty(SymbolPolyfill, 'split', {
        value: SymbolPolyfill.for('split'),
        writable: false,
        enumerable: false,
        configurable: true
      });
  
      Object.defineProperty(SymbolPolyfill, 'match', {
        value: SymbolPolyfill.for('match'),
        writable: false,
        enumerable: false,
        configurable: true
      });
  
      Object.defineProperty(SymbolPolyfill, 'matchAll', {
        value: SymbolPolyfill.for('matchAll'),
        writable: false,
        enumerable: false,
        configurable: true
      });
  
      Object.defineProperty(SymbolPolyfill, 'toStringTag', {
        value: SymbolPolyfill.for('toStringTag'),
        writable: false,
        enumerable: false,
        configurable: true
      });
  
      Object.defineProperty(SymbolPolyfill, 'unscopables', {
        value: SymbolPolyfill.for('unscopables'),
        writable: false,
        enumerable: false,
        configurable: true
      });
  
      Object.defineProperty(SymbolPolyfill, 'toPrimitive', {
        value: SymbolPolyfill.for('toPrimitive'),
        writable: false,
        enumerable: false,
        configurable: true
      });
    }
  })();