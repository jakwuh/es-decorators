import {Defaults} from './Defaults';
import {expect} from 'chai';
import sinon from 'sinon';

let props = {
    a: 1,
    b: 2,
    c: 3
};

Object.defineProperty(props, 'd', {
    value: 4,
    enumerable: false
});

@Defaults(props)
class A {

    get b() {
        return 5;
    }

}

A.c = 6;

describe('Defaults', function() {

    it('works as expected', function() {
        let a  = new A();

        expect(A.prototype.a).eql(1);
        expect(A.prototype.b).eql(5);
        expect(A.prototype.d).to.be.undefined;
        expect(a.a).eql(1);
        expect(a.b).eql(5);
        expect(a.c).eql(3);
        expect(a.d).to.be.undefined;
    });

})
