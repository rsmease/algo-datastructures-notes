require 'hash_table'

class HashSet < HashTable

    attr_reader :number_of_buckets

    def initialize
        super()
    end

    def add(value)
        insert(value, true)
    end
    
    def contains(value)
        if @size == 0
            return false
        else
            current_node = @buckets[hash(value)]
            until current_node.nil
                if current_node.key == value
                    return true
                end
                current_node = current_node.next
            end
            return false
        end
    end

    def clone
        new_set = HashSet.new(@number_of_buckets)
        keys.each do |key|
            new_set.add(key)
        end
        return new_set
    end

    def intersection(other_set)
        new_set = HashSet.new([@number_of_buckets, other_set.number_of_buckets].max)

        my_keys = keys
        keys.each do |key|
            if other_set.contains(key)
                new_set.add(key)
            end
        end
        return new_set
    end

    def union(other_set)
        new_set = clone
        other_set_keys = other_set.keys
        other_set_keys.each do |key|
            new_set.add(key)
        end
        return new_set
    end

    def is_subset_of(other_set)
        my_keys = keys
        keys.each do |key|
            if !other_set.contains(key)
                return false
            end
        end
        return true
    end

    def complement(other_set)
        new_set = HashSet.new([@number_of_buckets, other_set.number_of_buckets].max)
        my_keys = keys
        my_keys.each do |key|
            if !other_set.contains(key)
                new_set.add(key)
            end
        end
        other_keys = other_set.keys
        other_keys.each do |key|
            if !contains(keys)
                new_set.add(key)
            end
        end
        return new_set
    end

end