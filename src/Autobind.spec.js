import {Autobind} from './';
import {expect} from 'chai';

class A {

    @Autobind
    binded(cb) {
        cb(this);
    }

    unbinded(cb) {
        cb(this);
    }

}

describe('Autobind', function () {

    let a = new A();

    it(`works`, function () {
        let binded = a.binded;
        let unbinded = a.unbinded;

        let bindedThis, unbindedThis;

        binded(_this => bindedThis = _this);
        unbinded(_this => unbindedThis = _this);

        expect(bindedThis).eql(a);
        expect(unbindedThis).eql(undefined);
    });

});
