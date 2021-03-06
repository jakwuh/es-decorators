# es-decorators [![Build Status](https://travis-ci.org/jakwuh/es-decorators.svg?branch=master)](https://travis-ci.org/jakwuh/es-decorators)

Most useful EcmaScript decorators

## Usage

```js
import {Debounce, Defaults} from 'es-decorators';

@Defaults({
  ammunitionCount: 100
})
class Panzer {
  
  @Debounce(1000, {leading: true})
  fire() {
    // ...
  }
  
}
```

## API

**@Autobind**
> binds method to container (e.g. class or object)

**@Defaults(props)**
> props {object}  
> @Defaults decorator slightly differs from [lodash.defaults](https://lodash.com/docs/4.15.0#defaults)

**@Debounce(duration, [options])**  
> duration {number}  
> options {object} see [lodash.debounce](https://lodash.com/docs/4.15.0#debounce)  

**@Throttle(duration, [options])**  
> duration {number}  
> options {object} see [lodash.throttle](https://lodash.com/docs/4.15.0#throttle)  

**@Memoize([resolver])**  
> resolver {function} see [lodash.memoize](https://lodash.com/docs/4.15.0#memoize)  

**@Once**
> see [lodash.once](https://lodash.com/docs/4.15.0#once)  

**@Retry([count = 0])**
> count {number} retry count. 0 means no retries, simply call.  
> Assumes that decorated function returns promise. 
The function will be called up to `count` times until it is resolved.


**@DecorateInstance(decorator, ...args)**
> decorator {function}  
> args {*[]}  
> @DecorateInstance transforms instance method with provided decorator when it is accessed first time
