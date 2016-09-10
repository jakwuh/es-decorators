import {Debounce} from './Debounce';
import {expect} from 'chai';
import sinon from 'sinon';

class A {

    @Debounce(100) // defaults are {leading: false, trailing: true}
    debounced(cb) {
        cb();
    }

    @Debounce(100, {leading: true, trailing: false})
    debouncedLeading(cb) {
        cb();
    }

}

describe('Debounce', function () {

    let spy, clock, a;

    beforeEach(() => {
        a = new A();
        spy = sinon.spy();
        clock = sinon.useFakeTimers();
    });

    afterEach(() => {
        clock.restore();
    });

    it(`debounces`, function () {
        a.debounced(spy);
        a.debounced(spy);

        expect(spy.callCount).eql(0);
        clock.tick(100);
        expect(spy.callCount).eql(1);
    });

    it(`debounces with options`, function () {
        a.debouncedLeading(spy);
        a.debouncedLeading(spy);

        expect(spy.callCount).eql(1);
        clock.tick(100);
        expect(spy.callCount).eql(1);
    });

    it('does not modify prototype chain', function () {
        A.prototype.debounced(spy);

        expect(spy.callCount).eql(1);
        clock.tick(100);
        expect(spy.callCount).eql(1);
    });

    it('could be overwritten', function() {
        a.debounced = cb => cb();
        a.debounced(spy);

        expect(spy.callCount).eql(1);
    });

});
