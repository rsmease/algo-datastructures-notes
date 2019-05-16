# Given an integer matrix, find the length of the longest increasing path.

# From each cell, you can either move to four directions: left, right, up or
# down. You may NOT move diagonally or move outside of the boundary (i.e.
# wrap-around is not allowed).

# Example 1:

# Input: nums =
# [
#   [9,9,4],
#   [6,6,8],
#   [2,1,1]
# ]
# Output: 4
# Explanation: The longest increasing path is [1, 2, 6, 9].
# Example 2:

# Input: nums =
# [
#   [3,4,5],
#   [3,2,6],
#   [2,2,1]
# ]
# Output: 4
# Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

# @param {Integer[][]} matrix
# @return {Integer}

require 'set'

def longest_increasing_path(matrix)
  return 0 if !matrix || matrix.empty?

  longest_path = 0
  num_rows = matrix.length
  num_cols = matrix.first.length

  @matrix = matrix
  @memo = Array.new(num_rows) { Array.new(num_cols, 0) }

  matrix.each_with_index do |row, i|
    row.each_with_index do |_col, j|
      longest_path = [longest_path, scan(i, j)].max
    end
  end

  longest_path
end

def scan(row, col)
  return @memo[row][col] unless @memo[row][col].zero?
  curr = @matrix[row][col]

  @memo[row][col] = 1 + [
    row > 0 && curr < @matrix[row - 1][col] ? scan(row - 1, col) : 0,
    col > 0 && curr < @matrix[row][col - 1] ? scan(row, col - 1) : 0,
    row < @matrix.length - 1 && curr < @matrix[row + 1][col] ? scan(row + 1, col) : 0,
    col < @matrix.first.length - 1 && curr < @matrix[row][col + 1] ? scan(row, col + 1) : 0
  ].max
end

tests = Set.new
tests.add([
            [9, 9, 4],
            [6, 6, 8],
            [2, 1, 1]
          ])
tests.add([
            [3, 4, 5],
            [3, 2, 6],
            [2, 2, 1]
          ])

tests.each { |test| puts longest_increasing_path(test).inspect }
