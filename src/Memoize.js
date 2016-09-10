import {memoize} from 'lodash';
import {DecorateInstance} from './DecorateInstance';

export function Memoize(resolver) {

    return DecorateInstance(memoize, resolver);
}
