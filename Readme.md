# decorators

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

**@Once([resolver])**
> resolver {function} see [lodash.once](https://lodash.com/docs/4.15.0#once)  

**@DecorateInstance(decorator, ...args)**
> decorator {function}  
> args {*[]}  
> @DecorateInstance transforms instance method with provided decorator when it is accessed first time
