class RingBuffer

    attr_reader :size

    def initialize(capacity, eviction_proc)
        @elements = Array.new(capacity, nil)
        @head = 0
        @size = 0
        @eviction_proc = eviction_proc
    end

    def capacity
        @elements.length
    end

    def empty?
        return @size == 0
    end

    def full?
        return @size == capacity
    end

    def peek
        @elements[@head]
    end

    def peek_to_position(position)
        if position > size
            raise ArgumentError, "Position #{position} does not exist in RingBuffer of size ${size}"
        end

        abs_position = [@head + position, capacity].min
        first_half = @elements[@head...abs_position]
        second_half = @elements[0...(position - first_half.length)]

        return abs_position < capacity ? first_half : first_half.concat(second_half)
    end

    def dequeue
        dequeued_element = peek
        unless dequeued_element.nil?
            @size -= 1
            @head = (@head + 1) % capacity
        end
        dequeued_element
    end

    def dequeue_to_position(position)
        dequeued_elements = peek_to_position(position)
        this.size -= position 
        @head = (@head + position) % capacity
        return dequeued_elements
    end

    def enqueue(element)
        tail = (@head + @size) % capacity
        if full?
            eviction_proc.call(elements[tail])
        end

        elements[tail] = element
        if full?
            @first = (@first + 1) & capacity
        else 
            @size += 1
        end

        return size
    end

end