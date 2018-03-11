class HashNode
    def initialize(key, value, next = nil)
        @key = key
        @value = value
        @next = next.nil? ? nil : next
        @size = 0
    end
end

class HashTable
    def initialize(number_of_buckets)
        @size = 0
        @buckets = Array.new(number_of_buckets, nil)
        @number_of_buckets = number_of_buckets
    end

    def hash(key)
        total = 0
        key.to_s.each_char do |char|
            total += char.ord
        end
        bucket = total % @number_of_buckets
        return bucket
    end

    def insert(key, value)
        current_node = @buckets[hash(key)]

        if current_node.nil?
            current_node = HashNode.new(key, value)
            @buckets[target_bucket] = current_node
            @size += 1;
        elsif (current_node.key == key)
            current_node.value = value
        else
            while current_node.next
                if (current_node.key == key)
                    current_node.value = value
                    return;
                end
                current_node = current_node.next
            end
            current_node.next = HashNode.new(key, value)
            @size += 1;
        end
    end

    def get_value_at(key)
        current_node = @buckets[hash(key)]

        if current_node.nil?
            return nil
        else
            until current_node.next.nil?
                if (current_node.key == key)
                    return current_node.value
                end
                current_node = current_node.next
            end
            if current_node.key == key
                return current_node.value
            else
                return nil
            end
        end
    end

    def remove(key)
        target_bucket = hash(key)
        current_node = @buckets[target_bucket]
        previous_node = nil

        if current_node.nil?
            return nil
        elsif (current_node.key == key)
            node_to_delete = current_node
            this.buckets[target_bucket] = current_node.next
            deleted_node = node_to_delete
            node_to_delete = nil
            return deleted_node
        else
            while current_node
                previous_node = current_node
                current_node = current_node.next
                if current_node && current_node.key = key
                    node_to_delete = current_node
                    previous_node.next = current_node.next
                    deleted_node = node_to_delete
                    node_to_delete = nil
                    return deleted_node
                end
            end
            return nil
        end
    end

    def keys
        keys = []
        @buckets.each do |bucket|
            current_node = bucket
            until current_node.nil?
                keys.push(current_node.key)
                current_node = current_node.next
            end
        end
        return keys
    end

    def values
        values = []
        @buckets.each do |bucket|
            current_node = bucket
            until current_node.nil?
                values.push(current_node.value)
                current_node = current_node.next
            end
        end
        return values
    end
end