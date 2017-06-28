import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('True is true', function() {
    it('should pass', function() {
        expect(true).to.equal(true);
    });
});

describe('Check the DOM in index.html', function() {
    it('should say JavaScript Starter Kit', function(done) {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, (err, window) => {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('JavaScript Starter Kit');
            done();
            window.close();
        });
    });
});
