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
        target_bucket = hash(key)
        current_node = @buckets[target_bucket]

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
end