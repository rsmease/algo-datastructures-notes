class MinHeap
    def initialize
        @heap = []
    end

    def insert(value)
        @heap.push(value)
        bubble_up
    end

    def extract_min
        min = @heap.first
        @heap.first = @heap.pop
        bubble_down
        return min
    end

    def bubble_up
        index = @heap.length - 1
        until index = 0
            parent_index = (index + 1 / 2) - 1
            if @heap[parent_index] > @heap[index]
                @heap[parent_index], @heap[index] = @heap[index], @heap[parent_index]
            end
            index = parent_index
        end
    end

    def bubble_down
        index = 0
        loop do
            child_1 = (index + 1) * 2
            child_2 = child_1 - 1
            index_to_swap = nil

            if @heap[index] > @heap[child_1]
                index_to_swap = child_1
            end

            if @heap[index] > @heap[child_2] && @heap[child_1].nil? ||
                !@heap.child.nil? && @heap[child_1] > @heap[child2]
                index_to_swap = child_2
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