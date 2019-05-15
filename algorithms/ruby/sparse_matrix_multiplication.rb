require 'set'

# Given two sparse matrices A and B, return the result of AB.

# You may assume that A's column number is equal to B's row number.

# Example:

# Input:

A = [
  [1, 0, 0],
  [-1, 0, 3]
].freeze

B = [
  [7, 0, 0],
  [0, 0, 0],
  [0, 0, 1]
].freeze

# Output:

#      |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
# AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
#                   | 0 0 1 |
# Accepted
# 64,678
# Submissions
# 115,148

# @param {Integer[][]} a
# @param {Integer[][]} b
# @return {Integer[][]}

def multiply(a, b)
  a_cols = a.first.length

  result_rows = a.length
  result_cols = b.first.length

  result = Array.new(result_rows, 0) { Array.new(result_cols, 0) }

  result_rows.times do |i|
    a_cols.times do |j|
      next unless a[i][j] != 0

      result_cols.times do |k|
        next unless b[j][k] != 0

        result[i][k] += (a[i][j] * b[j][k])
      end
    end
  end

  result
end

tests = Set.new
tests.add([A, B])
tests.each { |test| puts multiply(*test).inspect }
