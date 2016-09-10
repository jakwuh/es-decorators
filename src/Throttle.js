import {throttle} from 'lodash';
import {DecorateInstance} from './DecorateInstance';

export function Throttle(duration, options) {

    return DecorateInstance(throttle, duration, options);

}
