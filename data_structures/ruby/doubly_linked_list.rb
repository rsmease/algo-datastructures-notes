class DoublyLinkedListNode
    attr_accessor :data, :prev, :next
    def initialize(data)
        @data = data
        @prev = nil
        @next = nil
    end
end

class DoublyLinkedList
    def initialize
        @head = nil
        @tail = nil
        @length = 0
    end

    def add(data)
        new_node = DoublyLinkedListNode.new(data)

        if @length == 0
            @head = new_node
            @tail = new_node
        else
            @tail.next = new_node
            new_node.prev = @tail
            @tail = new_node
        end
    end

    def find_node_at_position(position)
        if (position > @length || position < 1)
            raise ArgumentError, "Position must be within range(0, #{@length}) or list is currently empty"
        end

        current_node = @head
        current_position = 1

        until current_position == position
            current_node = current_node.next
            current_position += 1
        end

        return current_node
    end

    def find_node_with_data(data)
        if @length == 0
            return nil
        end

        current_node = @head
        until current_node.next.nil? || current_node.data == data
            current_node = current_node.next
        end
        if current_node.data == data
            return current_node
        else
            return nil
        end
    end

    def remove_node_at_position(position)

        if (position > @length || position < 1)
            raise ArgumentError, "Position must be within range(0, #{@length}) or list is currently empty"
        end

        current_node = nil
        previous_node = nil
        next_node = nil
        node_to_delete = nil
        deleted_node = nil

        if (position == 1)
            node_to_delete = @head
            @head = node_to_delete.next
            deleted_node = node_to_delete
            return deleted_node
        elsif (position == @length)
            node_to_delete = @tail
            @tail = node_to_delete.prev
            deleted_node = node_to_delete
            node_to_delete = nil
            return deleted_node
        else
            until current_position == position
                current_node.next = current_node
                current_position += 1
            end
            previous_node = current_node.prev
            node_to_delete = current_node
            next_node = current_node.next

            previous_node.next = next_node
            next_node.prev = previous_node
            deleted_node = node_to_delete
            node_to_delete = nil
            @length -= 1
            return deleted_node
        end
    end

    def delete_node_with_data(data)
        if @length == 0
            return nil
        else 
            current_node = @head

            until current_node.next.nil? || current_node.data == data
                current_node = current_node.next
            end
            
            if (current_node.data == data)
                previous_node = current_node.prev
                node_to_delete = current_node
                next_node = current_node.next

                previous_node.next = next_node
                next_node.prev = previous_node
                deleted_node = node_to_delete
                node_to_delete = nil
                @length -= 1
                return deleted_node
            else
                return nil
            end
        end
    end
end