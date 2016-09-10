import {throttle} from 'lodash';
import {DecorateInstance} from './DecorateInstance';

/**
 * @param {number} duration
 * @param {{}} [options]
 */
export function Throttle(duration, options) {

    return DecorateInstance(throttle, duration, options);

}
