import {once} from 'lodash';
import {DecorateInstance} from './DecorateInstance';

export function Once() {

    return DecorateInstance(once);

}
