# 266. Palindrome Permutation
# Easy

# 191

# 39

# Favorite

# Share
# Given a string, determine if a permutation of the string could form a
# palindrome.

# Example 1:

# Input: "code"
# Output: false
# Example 2:

# Input: "aab"
# Output: true
# Example 3:

# Input: "carerac"
# Output: true

# @param {String} s
# @return {Boolean}

def can_permute_palindrome(s)
  characters = s.chars
  char_frequency_map = {}

  characters.each do |char|
    if char_frequency_map[char]
      char_frequency_map[char] += 1
    else
      char_frequency_map[char] = 1
    end
  end

  chars_with_odd_frequency = char_frequency_map.values.select { |val| val.odd? }

  chars_with_odd_frequency.length < 2
end

require 'set'

tests = Set.new
tests.add("code")
tests.add("aab")
tests.add("carerac")

tests.each { |test| p can_permute_palindrome(test) }
