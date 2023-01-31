const assert = require("assert");
const expect = require('expect.js')
const { it, describe } = require("mocha");
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const addClass = require('./src/javaScript/addClass')
const removeClass = require('./src/javaScript/removeClass')
describe('JavaScript', () => {
    describe("addClass", () => {
        let dom;
    beforeEach(() => {
        dom = new JSDOM(`<!DOCTYPE html>`);
        global.document = dom.window.document;
    });
        it("adds a class to an element", () => {
            const element = document.createElement('div');
            const input = 'translate'
            addClass(element, input);
    
            expect(element.classList.contains('translate')).to.be.true
        });
    });
    describe('removeClass', () => {
        let dom;
        beforeEach(() => {
            dom = new JSDOM(`<!DOCTYPE html>`);
            global.document = dom.window.document;
        });

        it('removes a class from an element', () => {
            const element = document.createElement('div');
            const input = 'translate'
            addClass(element, input)
            removeClass(element, input);
    
            expect(element.classList.contains('translate')).to.be.false
        })
    })
})
