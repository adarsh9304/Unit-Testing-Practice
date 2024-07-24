import sinon from "sinon";
import Student from "../controller/student_sinon.js";
import * as chai from 'chai'
import { expect } from "chai";
import chaiHttp from 'chai-http'; 
import { app } from "../index.js";
chai.use(chaiHttp)



const studentObj=new Student()


describe('--- User API ---', function() {
    it('should get user', function(done) {
        chai.request(app)
            .get('/api/userlist') // Ensure this matches the route defined in your route file
            .end((err, response) => {
                if (err) {
                    done(err);
                } else {
                    expect(response).to.have.status(200);
                    done();
                }
            });
    });
});