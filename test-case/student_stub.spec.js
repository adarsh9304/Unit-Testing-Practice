import sinon from "sinon";
import Student from "../controller/student_sinon.js";
import { expect } from "chai";

const studentObj=new Student()

/*

A stub in Sinon.js is a type of test double that allows you to replace a function with a custom implementation or predefined behavior for testing purposes. Unlike spies, which only record information about function calls, stubs can alter the behavior of the function they replace. This makes stubs highly useful for isolating parts of your code during testing, especially when you need to simulate various scenarios and control the behavior of dependencies

*/

describe('--- student stub ---',function(){

    it('function arguments check',function(){

        // this line replaces the getExternal method of studentObj with a stub. The original method will not be called; instead, the stubbed version will be used.
        const stubObj=sinon.stub(studentObj,'getExternal')


        // This configures the stubObj to return 5 when getExternal is called with the argument 40
        stubObj.withArgs(40).returns(5); 


        expect(studentObj.finalMarks(40)).to.be.equal(54)
    })

})