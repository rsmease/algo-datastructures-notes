def generate_triangle_of_size(num_rows)
  return [] if num_rows == 0;
  result = [[1]]

  while result.length < num_rows do
      result.push(build_row(result.last))
  end
  print_triangle(result)
  result
end

def build_row(previous_row)
  result = [1]
  current_index = 0

  while (current_index + 1) < previous_row.length do
      result.push(previous_row[current_index] + previous_row[current_index + 1])
      current_index += 1
  end

  result.push(1)
  return result;
end

def print_triangle(triangle)
  printable = triangle.map { |row| pad_triangle_row(row, triangle.length) }
  printable.each { |row| puts row }
end

def pad_triangle_row(row, triangle_size)
  while (row.length < triangle_size) do
    row.push(" ");
    row.unshift(" ")
  end
  row.join('')
end

generate_triangle_of_size(5)


