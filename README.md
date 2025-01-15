# Incorrect State Update in React Functional Component

This repository demonstrates a common error when using the `useState` hook in React functional components: directly modifying the state variable instead of using the setter function.

The `bug.js` file shows the incorrect implementation. The `bugSolution.js` file provides the correct solution.

## Bug:
Directly modifying the `count` variable using `count = count + 1` will not trigger a re-render, and the UI won't update.

## Solution:
Always use the setter function provided by `useState` to update state variables.  In this case, use `setCount(count + 1)`.