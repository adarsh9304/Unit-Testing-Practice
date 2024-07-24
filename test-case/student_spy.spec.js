import sinon from "sinon";
import Student from "../controller/student_sinon.js";
import { expect } from "chai";

const studentObj=new Student()

describe('--- student spy ---',function(){

    it('test user function',function(){
        expect(studentObj.userId()).to.be.equal(15)
    })

    /*


    it('function count',function(){
        const spyobj=sinon.spy(studentObj,'getInfo')
        // const home=sinon.spy(studentObj,'home')
        // studentObj.getInfo()
        studentObj.home() // in home there should be called getInfo twice
        
        expect(spyobj.calledTwice).to.be.true
        // expect(home.calledOnce).to.be.true
    })

    */


    it('function arguments check',function(){
        const spyobj=sinon.spy(studentObj,'getInfo')
        // const home=sinon.spy(studentObj,'home')
        studentObj.getInfo(1,2,31)
        // studentObj.home(15) 
        
        // expect(spyobj.calledWith(15)).to.be.true
        expect(spyobj.args[0].length).to.equal(3)
        // expect(home.calledOnce).to.be.true
    })

})