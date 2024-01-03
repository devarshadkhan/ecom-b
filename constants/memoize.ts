type Func<A> = {
  call<B extends A>(arg0: any, val: B): any;
};

const memoize = <T>(fn?: Func<T>) => {
  const cache = new Map();
  const cached = function (this: any, val: T) {
    return cache.has(val)
      ? cache.get(val)
      : cache.set(val, fn?.call(this, val)) && cache.get(val);
  };
  cached.cache = cache;
  return cached;
};

export default memoize;
