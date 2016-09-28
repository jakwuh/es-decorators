import {Once} from './';
import {expect} from 'chai';

class A {

    @Once
    decorated(o) {
        o.counter++;
    }

    simple(o) {
        o.counter++;
    }

}

describe('Autobind', function () {

    let a = new A();

    it(`works`, function () {
        let o = {counter: 0};

        a.simple(o);
        a.simple(o);

        expect(o.counter).eql(2);

        a.decorated(o);
        a.decorated(o);

        expect(o.counter).eql(3);
    });

});
