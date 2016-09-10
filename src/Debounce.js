import {debounce} from 'lodash';
import {DecorateInstance} from './DecorateInstance';

export function Debounce(duration, options) {

    return DecorateInstance(debounce, duration, options);

}
