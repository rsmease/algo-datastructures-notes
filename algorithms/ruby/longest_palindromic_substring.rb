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
  s
end

require 'set'

tests = Set.new
tests.add("babad")
tests.add("cbbd")

tests.each { |test| puts longest_palindrome(test) }
