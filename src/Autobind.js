import {DecorateInstance} from './DecorateInstance';

export const Autobind = DecorateInstance(function(fn) {
    return fn.bind(this);
});
