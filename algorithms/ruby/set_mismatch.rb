# The set S originally contains numbers from 1 to n. But unfortunately, due to
# the data error, one of the numbers in the set got duplicated to another number
# in the set, which results in repetition of one number and loss of another
# number.

# Given an array nums representing the data status of this set after the error.
# Your task is to firstly find the number occurs twice and then find the number
# that is missing. Return them in the form of an array.

# Example 1:

# Input: nums = [1,2,2,4]
# Output: [2,3]
# Note:

# The given array size will in the range [2, 10000].
# The given array's numbers won't have any order.

# @param {Integer[]} nums
# @return {Integer[]}

require 'set'

def find_error_nums(nums)
  seen_nums = Set.new
  seen_nums_total = 0
  duplicate_num = 0

  nums.each do |num|
    if seen_nums.include?(num)
      duplicate_num = num
      next
    end

    seen_nums.add(num)
    seen_nums_total += num
  end

  expected_sum = (1..nums.length).inject(0) { |sum, num| sum + num }

  return [duplicate_num, expected_sum - seen_nums_total]
end

tests = Set.new
tests.add([1,2,2,4])

tests.each { |test| p find_error_nums(test) }
