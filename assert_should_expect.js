/*

Assert is simple and functional, ideal for straightforward assertions.

Should provides a natural language-like style, best for BDD and when readability is a priority, but it modifies Object.prototype.

Expect offers a chainable, expressive style without modifying Object.prototype, making it a good middle ground.




The assert and expect interfaces do not modify Object.prototype, whereas should does. So they are a better choice in an environment where you cannot or do not want to change Object.prototype.

The assert and expect interfaces support custom messages just about everywhere. For instance:

 assert.isTrue(foo, "foo should be true");
 expect(foo, "foo should be true").to.be.true;
 
The message "foo should be true" will be output together with the failed assertion if the assertion fails. You don't get the opportunity to set a custom message with the should interface.



*/