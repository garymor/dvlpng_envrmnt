import {expect} from 'chai';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
import fs from 'fs'

describe('Our first test', () => {
    it('true test', () => {
      expect(true).to.equal(true);
    });
});
  

describe('index.html', () => {
    it('should have h1 that says Hi nd world', (done) => {
      const dom = fs.readFileSync('./src/index.html', "utf-8");
        const { window } = new JSDOM(dom)
          const h1 = window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal("Hi nd world");
        done();
        window.close();
      
    })
  })