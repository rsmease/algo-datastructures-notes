class SinglyLinkedListNode
    attr_accessor :data, :next
    def initialize(data)
        @data = data
        @next = nil
    end
end

class SinglyLinkedList
    def initialize
        @length = 0;
        @head = nil
    end

    def add(data)
        new_node = SinglyLinkedListNode.new(data)

        current_node = @head

        if @head.nil?
            @head = new_node
        else
            until current_node.next.nil?
                current_node = current_node.next
            end
            current_node.next = new_node
        end

        @length += 1
        return new_node
    end

    def find_node_at_position(position)
        current_node = @head
        current_position = 1

        if position > @length || position < 1
            raise ArgumentError, "Position must be within range(0, #{@length}) or list is currently empty"
        end

        until current_position == position
            current_node = current_node.next
            current_position += 1
        end

        return current_node
    end

    def find_node_with_data(data)
        current_node = @head

        if current_node.nil?
            return nil
        else
            until current_node.next.nil || current_node.data == data
                current_node = current_node.next
            end
            return current_node.data == data ? current_node : nil
        end
    end

    def remove_node_at_position(position)
        current_node = @head
        current_position = 0
        previous_node = nil
        node_to_delete = nil
        deleted_node = nil

        if position > @length || position < 1
            raise ArgumentError, "Position must be within range(0, #{@length})"
        end

        if (position == 1)
            @head = current_node.next
            deleted_node = current_node
            current_node = nil
        else
            until current_position == position
                previous_node = current_node
                node_to_delete = current_node.next
                current_position += 1
            end
            previous_node.next = node_to_delete.next 
            deleted_node = node_to_delete
            node_to_delete = nil
        end

        @length -= 1
        return deleted_node
    end

    def remove_node_with_data(data)
        current_node = @head
        deleted_node = nil
        previous_node = nil

        if current_node.nil?
            return nil
        elsif (@head.data == data)
            deleted_node = @head
            @head = @head.next
            return deleted_node
        else
            until current_node.next.nil? || current_node.data == data
                previous_node = current_node
                current_node = current_node.next
            end
            if (current_node.data == data)
                previous_node.next = current_node.next
                deleted_node = current_node
                current_node - nil
                @length -= 1
                return deleted_node
            else
                return nil
            end
        end
    end

end