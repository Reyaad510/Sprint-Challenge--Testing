
1. In Jest, what are the differences between describe() and it() globals, and what are good uses for them?

  -  Describe() creates a block that gorups together several related tests and it() is the method that runs a test and usually mulitple resides in a Describe() block. They are good for testing parts of your code. Describe will be the general thing you want to test such as endpoints and inside will be mulitple it() that will focus on certain aspects of testing those endpoints such as receiving correct status codes for fail and success for that endpoint.

  2. What is the point of Test Driven Development? What do you think about this approach?

    -  TDD is an approach to development which combines test-first development where you write a test before you write just enough production code to fulfill that test and refactoring. It's a way to think through your requirements before you write your functional code and to allow for clean code that works. I think it is a good approach although it can be very cumbersome and tedious.


    3. Mention three types of automated tests.

      - Snapshot, integration, and unit testing.