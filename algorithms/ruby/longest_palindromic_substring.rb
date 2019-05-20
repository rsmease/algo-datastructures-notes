# Given a string s, find the longest palindromic substring in s. You may assume
# that the maximum length of s is 1000.

# Example 1:

# Input: "babad"
# Output: "bab"
# Note: "aba" is also a valid answer.
# Example 2:

# Input: "cbbd"
# Output: "bb"

def longest_palindrome(s)
  return s if s.empty?

  @string = s
  head = 0
  tail = 0

  current = 0
  longest_palindrome = ""

  while current < s.length
    pal_a = expand_and_measure_palindrome(current, current)
    pal_b = expand_and_measure_palindrome(current, current + 1)

    longest_new_palindrome = [pal_a, pal_b].max

    if longest_new_palindrome > longest_palindrome.length
      head = current - (longest_new_palindrome - 1) / 2
      tail = current + longest_new_palindrome / 2

      longest_palindrome = s[head..tail]
    end

    current += 1
  end

  longest_palindrome
end

def expand_and_measure_palindrome(start_position, end_position)
  while @string[start_position] == @string[end_position]
    break if start_position < 0 || end_position == @string.length

    start_position -= 1
    end_position += 1
  end

  end_position - start_position - 1
end

require 'set'

tests = Set.new
tests.add("babad")
tests.add("cbbd")

tests.each { |test| puts longest_palindrome(test) }
