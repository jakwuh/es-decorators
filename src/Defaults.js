export function Defaults(props) {

    return function (target) {

        let proto = target.prototype;

        Object.keys(props).forEach(key => {
            if (!proto.hasOwnProperty(key)) {
                Object.defineProperty(proto, key, {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: props[key]
                })
            }
        });

    }

}
