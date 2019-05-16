# Given a non-negative integer num, repeatedly add all its digits until the
# result has only one digit.

# Example:

# Input: 38
# Output: 2
# Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
#              Since 2 has only one digit, return it.
# Follow up:
# Could you do it without any loop/recursion in O(1) runtime?

# @param {Integer} num
# @return {Integer}

def add_digits(num)
  current_number = num

  while current_number > 9
    next_number = 0

    while current_number > 0
      next_number += current_number % 10
      current_number = (current_number / 10).floor
    end

    current_number = next_number
  end

  current_number
end

require 'set'

tests = Set.new
tests.add(38)

tests.each { |test| puts add_digits(test) }
