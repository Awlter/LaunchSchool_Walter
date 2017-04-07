var _ = function(element) {
  u = {
    first: function() {
      return element[0];
    },
    last: function() {
      return element.slice(-1)[0]
    },
    without: function() {
      var arrs = Array.from(arguments);
      var newArray = [];

      element.forEach(function(ele) {
        if (arrs.indexOf(ele) === -1) {
          newArray.push(ele)
        }
      });

      return newArray;
    },
    lastIndexOf: function(n) {
      return element.lastIndexOf(n)
    },
    sample: function(qty) {
      var sampled = [];
      var copy = element.slice();
      var get = function() {
        var indx = Math.floor(Math.random() * copy.length);
        var ele = copy[indx];
        copy.splice(indx, 1)
        return ele
      }

      if (!qty) {
        return get();
      }

      while(qty) {
        sampled.push(get());
        qty--
      };

      return sampled
    },
    findWhere: function(obj) {
      var target = undefined;
      var keys = Object.keys(obj);

      element.some(function(ele) {
        function hasKey(key) {
          return obj[key] === ele[key];
        }

        if (keys.every(hasKey)) {
          target = ele
          return true
        }
      })

      return target
    },
    where: function(obj) {
      var result = [];
      var key = Object.keys(obj)[0];

      element.forEach(function(ele) {
        if (ele[key] === obj[key]) {
          result.push(ele);
        }
      });

      return result
    },
    pluck: function(key) {
      var result = [];
      element.forEach(function(ele) {
        if (ele[key]) {
          result.push(ele[key])
        }
      })
      return result
    },
    keys: function() {
      var keys = []
      for (var key in element) {
        keys.push(key)
      }
      return keys;
    },
    values: function() {
      var values = [];
      for (var key in element) {
        values.push(element[key])
      }
      return values;
    },
    pick: function() {
      var keys = Array.from(arguments);
      var result = {};

      keys.forEach(function(key) {
        if (element[key]) {
          result[key] = element[key]
        }
      });

      return result;
    },
    omit: function() {
      var keys = Array.from(arguments);
      var result = {};

      for (var prop in element) {
        if (keys.indexOf(prop) === -1) {
          result[prop] = element[prop]
        }
      }

      return result
    },
    has: function(prop) {
      return !!element[prop]
    }
  };

  ["isElement", "isArray", "isObject", "isFunction", "isBoolean", "isString", "isNumber"].forEach(function(method) {
    u[method] = function() { _[method].call(u, element)}
  })
  return u;
};

_.range = function(start, end) {
  var result = [];

  if (end === undefined) {
    end = start;
    start = 0;
  }

  for(var i = start; i < end; i += 1) {
    result.push(i);
  }

  return result;
}

_.extend = function() {
  var args = Array.prototype.slice.call(arguments)
  // var result = args.shift();

  // for (var i = 0, len = args.length; i < len; i += 1) {
  //   for (var key in args[i]) {
  //     result[key] = args[i][key]
  //   }
  // }

  // return result;

  var oldArr = args.pop();
  var newArr = args[args.length - 1]

  for (var prop in oldArr) {
    newArr[prop] = oldArr[prop]
  }

  return args.length === 1 ? newArr : _.extend.apply(_, args)
}

_.isElement = function(obj) {
  return obj && obj.nodeType === 1;
}

_.isArray = Array.isArray || function(arr) {
  // return arr.constructor === Array
  return toString.call(arr) === "[object array]"
}

_.isObject = function(obj) {
  var type = typeof obj;

  return type === 'function' || type === 'object'
}

_.isFunction = function(obj) { return typeof obj === "function" }

_.isBoolean = function(obj) { return toString.call(obj) === "[object Boolean]"}

_.isString = function(string) {return toString.call(string) === '[object String]' }

_.isNumber = function(num) { return toString.call(num) === '[object Number]'}
