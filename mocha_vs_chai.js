/*
What Mocha and Chai Do Separately

Mocha

Role: Test framework
Purpose: Provides structure for organizing and running tests.
Features:
Describes test suites and test cases with describe and it.
Supports before/after hooks (before, after, beforeEach, afterEach).
Handles asynchronous tests.
Collects and reports test results.
Mocha itself does not come with built-in assertion libraries. It allows you to write test cases and organize them but does not provide a way to assert conditions.



Chai

Role: Assertion library
Purpose: Provides assertions (checks) for your tests.
Features:
Multiple assertion styles: assert, expect, and should.
Rich set of assertions for various conditions (e.g., type checks, value comparisons).
Why Use Both Together?
Mocha and Chai complement each other by handling different aspects of testing:

Mocha provides the test runner and structure:

Organizes your tests into suites and cases.
Manages the execution flow (setup, teardown, and asynchronous operations).
Reports test results and failures.



Chai provides the assertions:

Defines what conditions you expect in your tests.
Makes your test code readable and expressive with its multiple assertion styles

*/