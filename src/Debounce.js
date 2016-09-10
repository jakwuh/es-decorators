import {debounce} from 'lodash';
import {DecorateInstance} from './DecorateInstance';

/**
 * @param {number} duration
 * @param {{}} [options]
 */
export function Debounce(duration, options) {

    return DecorateInstance(debounce, duration, options);

}
