require 'set';

# You have an array of logs.  Each log is a space delimited string of words.

# For each log, the first word in each log is an alphanumeric identifier.
#Then, either:
# Each word after the identifier will consist only of lowercase letters, or;
# Each word after the identifier will consist only of digits.

# We will call these two varieties of logs letter-logs and digit-logs.  It is
# guaranteed that each log has at least one word after its identifier.


# Reorder the logs so that all of the letter-logs come before any digit-log.
# The letter-logs are ordered lexicographically ignoring identifier, with the
# identifier used in case of ties.  The digit-logs should be put in their
# original order.

# Return the final order of the logs.



# Example 1:

# Input: ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
# Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]


# Note:

# 0 <= logs.length <= 100
# 3 <= logs[i].length <= 100
# logs[i] is guaranteed to have an identifier, and a word after the identifier.

# @param {String[]} logs
# @return {String[]}

def reorder_log_files(logs)
  digit_logs = [];
  letter_logs = [];

  logs.each do |log|
    digit_log?(log) ? digit_logs.push(log) : letter_logs.push(log)
  end

  letter_logs.sort_by! { |log| [/\s(.*)/.match(log)[0], /^[^\s]+/.match(log)[0]] }

  letter_logs.concat(digit_logs)
end

def digit_log?(log)
  Array("0".."9").include?(first_character_after_space(log))
end

def first_character_after_space(log)
  /\s(.*)/.match(log)[0][1]
end

tests = Set.new
tests.add(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"])
tests.each { |test| puts reorder_log_files(test).inspect }
