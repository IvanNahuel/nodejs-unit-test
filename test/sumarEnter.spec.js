import sumarEntre from '../src/index.js'
import mocha from 'mocha'
import { expect } from 'chai'

describe('Test sumarEnter', ()=> {
    it('c1= [ 1,2,3,4,5,7,8,9 ... 10 = 28]', ()=> {
        let c1 = sumarEntre(4,11)
        expect(c1).to.be.equal(28)
    })

    it('c2= [ 1,2,3,4,6,7,8,9 ... 10 = 24]', ()=> {
        let c1 = sumarEntre(5,11)
        6+8+10
        expect(c1).to.be.equal(24)
    })

    //caso imposible    5 - 6   SKIP
    it.skip('c3= [ 1,2,3,4,5,7, 10]', ()=> {
        let c1 = sumarEntre(5,6)
        6+8+10
        expect(c1).to.be.equal(6)
    })

    it('c4= [ 1,2, 10] = 0', ()=> {
        let c1 = sumarEntre(7,5)
        6+8+10
        expect(c1).to.be.equal(0)
    })



})


