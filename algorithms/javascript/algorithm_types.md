Greedy Algorithms

Technique for resolving a problem where we always look to approach the data in the way that seems like it will lead to the solution as quickly as possible.

Advantage: predicting runtimes are easier
Disadvantage: proving correctness or optimality is more difficult

Greedy algorithms work best when:
  - you have specific criteria that you need to use to make decisions.
  - the problem has subproblems that can be optimized
  - your problem has a greedy property (hard to prove)——there are some problems that seem more valuable to solve first

Divide and Conquer Algorithms

Divide and Conquer Algorithms are often used to reduce procedures that have a runtome of N*2 to N*log(n).

The process looks like:
  - Break the problem into subproblems and completely (and recursively) resolve each of the subproblems. Each subproblem must be smaller.
  - Re-compose the solutions to the subproblems to form the solution.

This pattern is a very common technique used with recursion.
