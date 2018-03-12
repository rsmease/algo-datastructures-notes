class PriorityQueue
    def initialize(comparator_proc)
        @comparator_proc = comparator_proc
        @heap = []
    end

    def insert(node, priority)
        node.priority = priority
        @heap.push(node)
        bubble_up
    end

    def is_empty?
        @heap.empty?
    end

    def bubble_up
        current_index = @heap.length - 1
        parent_index = (current_index - 1 / 2)
        until comparator_proc.call(@heap[current_index], @heap[parent_index])
            @heap[parent_index], @heap[current_index] = @heap[current_index], @heap[parent_index]
            current_index = parent_index
            parent_index = (current_index - 1 / 2)
        end
    end

    def bubble_down
        current_index = 0
        left_child_index = current_index * 2 + 1
        right_child_index = current_index * 2 + 2

        index_to_swap = nil 

        loop do 
            if @heap[left_child_index] && !comparator_proc.call(current_index, left_child_index)
                index_to_swap = left_child_index
            end

            if @heap[left_child_index].nil? && !comparator_proc.call(current_index, right_child_index) || !@heap[left_child_index].nil? && !comparator_proc.call(left_child_index, right_child_index)
                index_to_swap = right_child_index
            end

            if index_to_swap.nil?
                break
            else
                @heap[index_to_swap], @heap[current_index] = @heap[current_index], @heap[index_to_swap]
                current_index = index_to_swap
            end
        end
    end

    def extract
        top_priority = @heap.first
        @heap.first = @heap.pop
        bubble_down
        return top_priority
    end

    def heap_sort 
        sorted = []
        until is_empty?
            sorted.push(extract)
        end
        return sorted.reverse
    end

end