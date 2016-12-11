import {Retry} from './';

class A {
    constructor(count) {
        this.counter = count;
    }

    @Retry(3)
    b() {
        return this.counter-- ? Promise.reject() : Promise.resolve();
    }
}

describe('Retry', function () {

    it('works and succeeds', function (done) {
        let a = new A(3);
        a.b().then(done, () => done('expect promise to be fulfilled'));
    });

    it('works and fails', function (done) {
        let a = new A(4);
        a.b().then(() => done('expect promise to be fulfilled'), done);
    });

});
