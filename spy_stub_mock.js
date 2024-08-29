/*

Spy
Purpose: To observe and record how a function or method is called.

Key Features:

Records Calls: Tracks if a function was called, how many times it was called, and with what arguments.

Does Not Change Behavior: The original function still runs as normal unless you configure it otherwise.



Use Case:
You want to check if a function was called with specific arguments or how many times it was called without changing its behavior.





stub
Purpose: To replace a function with a new implementation that you control.

Key Features:

Controls Behavior: You can make the stub return specific values, throw errors, or simulate asynchronous behavior.

Replaces Original: Completely replaces the function with your stubbed version.



Use Case:

You need to replace a function’s implementation to control its behavior in tests or to isolate the function from its dependencies.






Mock

Purpose: To create a test double that you can set expectations for and then verify those expectations after the test.


Key Features:

Sets Expectations: You specify how many times a method should be called, with what arguments, and what it should return.

Verifies Interactions: After running the test, you check if the method was called according to your expectations.


Use Case:

You want to ensure that a method is called in a specific way and to verify interactions with your dependencies.






Use spies to check usage without altering behavior.
Use stubs to replace and control the behavior of a method.
Use mocks to set and verify interaction expectations with a method.

*/