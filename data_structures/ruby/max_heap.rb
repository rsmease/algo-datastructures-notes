class MaxHeap
    def initialize
        @heap = []
    end

    def insert(value)
        @heap.push(value)
        bubble_up
    end

    def extract_max
        max = @heap.first 
        @heap.first = @heap.pop
        bubble_down
        return max
    end

    def bubble_up 
        current_index = @heap.length - 1
        until current_index == 0
            parent_index = (current_index + 1 / 2) - 1
            if @heap[parent_index] < @heap[current_index]
                @heap[parent_index], @heap[current_index] = @heap[current_index], @heap[parent_index]
            end
            current_index = parent_index
        end
    end

    def bubble_down
        current_index = 0
        loop do 
            child_1_index = (current_index + 1) * 2
            child_2_index = child_1_index - 1
            index_to_swap = nil

            if @heap[current_index] < @heap[child_1_index]
                index_to_swap = child_1_index
            end

            if @heap[current_index] < @heap[child_2_index] && @heap[child_1_index].nil? ||
                !@heap.child_1_index.nil? && @heap[child_1_index] < @heap[child_2_index]
                index_to_swap = child_2_index
            end

            if !index_to_swap.nil?
                @heap[index_to_swap], @heap[index] = @heap[index], @heap[index_to_swap]
                index = index_to_swap
            else 
                break
            end
        end
    end
end