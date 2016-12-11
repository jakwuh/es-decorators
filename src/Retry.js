/**
 * @param {number} [count] number of retries. 0 === no retries, just call
 */
export function Retry(count = 1) {
    count = count | 1;

    if (count < 0) {
        throw new Error('A `count` parameter should be an integer not less than 0.');
    }

    return function (target, key, descriptor) {
        let fn = descriptor.value;

        return {
            configurable: descriptor.configurable,
            enumerable: descriptor.enumerable,

            value(...args) {
                let counter = count;
                let call = () => fn.apply(this, args).catch(error => {
                    if (counter--) {
                        return call();
                    } else {
                        throw error;
                    }
                });
                return call();
            }
        };

    };
}
