# Write an algorithm to determine if a number is "happy".

# A happy number is a number defined by the following process: Starting with any
# positive integer, replace the number by the sum of the squares of its digits,
# and repeat the process until the number equals 1 (where it will stay), or it
# loops endlessly in a cycle which does not include 1. Those numbers for which
# this process ends in 1 are happy numbers.

# Example:

# Input: 19
# Output: true
# Explanation:
# 12 + 92 = 82
# 82 + 22 = 68
# 62 + 82 = 100
# 12 + 02 + 02 = 1

# @param {Integer} n
# @return {Boolean}

def is_happy(n, max_trials = 6)
  trials_performed = 0
  current = n

  while trials_performed < max_trials
    # current = current.to_s.split('').reduce(0) { |sum, num| sum + (num.to_i * num.to_i) }
    new_current = 0

    while current > 0
      new_current += (current % 10) * (current % 10)
      current = (current / 10).floor
    end

    return true if new_current == 1
    current = new_current

    trials_performed += 1
  end

  false
end

require 'set'

tests = Set.new
tests.add(19)
tests.add(4)
tests.add(1)
tests.add(0)

tests.each { |test| puts is_happy(test) }
