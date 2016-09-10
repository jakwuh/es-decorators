import {memoize} from 'lodash';
import {DecorateInstance} from './DecorateInstance';

/**
 * @param {function} [resolver]
 */
export function Memoize(resolver) {

    return DecorateInstance(memoize, resolver);

}
