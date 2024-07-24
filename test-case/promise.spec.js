import sinon from "sinon";
import Student from "../controller/student_sinon.js";
import * as chai from "chai";
import { expect } from "chai"; 
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised)

const studentObj=new Student()


describe('--- promise ---',function(){

    it('Normal value function' ,function(done){
        //  this.timeout(2000)
         studentObj.dbData().then(function(result){
            chai.expect((result)).to.be.equal(10)
            done();
         })
    })

    it('library value function' ,function(){
        // this.timeout(2000)
        return expect(studentObj.dbData()).to.eventually.equal(10)
   })


})