import sinon from "sinon";
import Student from "../controller/student_sinon.js";
import { expect } from "chai";

const studentObj=new Student()

/*

mocks are a powerful feature used for verifying interactions between objects or methods. They are a bit different from stubs and spies in that they focus heavily on interaction verification. Mocks are used to set expectations about how a method should be called and then verify that those expectations are met.


*/

describe('--- student mock ---',function(){

    it('function arguments check',function(){

        const mockObj=sinon.mock(studentObj);

        const ext=mockObj.expects('getExternal');
        ext.exactly(1)
        ext.withArgs(40)
        studentObj.finalMarks(40);

        mockObj.verify()
    })

})