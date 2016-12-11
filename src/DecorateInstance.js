/**
 * @param {function} decorator
 * @param {*[]} [args]
 */
export function DecorateInstance(decorator, ...args) {

    return function (target, key, descriptor) {

        let fn = descriptor.value;
        let targetType = typeof fn;
        let decoratorType = typeof decorator;

        if (targetType !== 'function' || decoratorType !== 'function') {
            throw new Error(`Cannot apply ${decoratorType} decorator to ${targetType} target`);
        }

        let defineProperty = (target, key, value) => {
            Object.defineProperty(target, key, {
                value,
                configurable: true,
                enumerable: descriptor.enumerable
            });
        };

        return {
            configurable: true,
            enumerable: descriptor.enumerable,

            get() {
                if (this.hasOwnProperty(key)) {
                    return fn;
                }

                let decoratedFn = decorator.call(this, fn, ...args);

                defineProperty(this, key, decoratedFn);

                return decoratedFn;
            },

            set(value) {
                defineProperty(this, key, value);
            }

        }

    }

}
