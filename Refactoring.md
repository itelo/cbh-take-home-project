# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

So the first thing I did was move the constants (TRIVIAL_PARTITION_KEY and MAX_PARTITION_KEY_LENGTH) out of the function. Later, I realized the function has three steps: get a candidate based on the event, validate this candidate as a string, and finally check the candidate length. So I decided to group these logics into different functions to make the code more readable and maintainable.

I also created variables to store some boolean values (isCandidateLenBiggerThanMaxLen and isCandidateString), I believe this improves the code readability and maintainability since it works almost as code documentation and it's way easier to read a variable like isCandidateString than a condition.