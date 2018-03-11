class LRUCacheInefficient 

    attr_reader :size, :capacity
    def initialize(capacity = 0)
        @capcity = 0
        @entries = {}
        @keys = []
        @size = @entries.size
    end

    def update_key(key)
        key_index = @keys.index(key)
        @keys[key_index] = nil
        @keys.push(key)
    end

    def set(key, value)
        if @entries.has_key?(key)
            @entries[key] = value 
            update_key(key)
        else
            if !remaining_capacity
                i = 0
                removed_key = @keys[i]
                while removed_key.nil?
                    i++
                    removed_key = @keys[i]
                end
                @entries.delete(key)
            end
            @entries[key] = value 
            @keys.push(key)
        end
    end

    def get(key)
        if @entries.has_key?(key)
            update_key(key)
            return @entries(key)
        else
            return nil
        end
    end

    def remaining_capacity
        capacity - size
    end
end

class LRUNode
    def initialize(key, value)
        @key = key
        @value = value
        @older = nil
        @newer = nil
    end
end

class LRUCacheEfficient < LRUCacheInefficient
    def initialize
        super();
        @head = nil
        @tail = nil
    end

    def update_key(key)
        existing_node = @entries[key]

        if existing_node.newer
            existing_node.newer.older = existing_node.older
        else
            @head = existing_node.older
        end

        if existing_node.older
            existing_node.older.newer = existing_node.newer
        else
            @tail = existing_node.newer
        end

        existing_node.older = @head 
        existing_node.newer = nil

        if @head
            @head.newer = existing_node
        end
        @head = existing_node
        if @tail.nil?
            @tail = existing_node
        end
    end

    def set(key, value)
        new_node = LRUNode.new(key, value)
        if @entries.has_key(key)
            @entries[key] = value
            update_key(key)
            return @entries[key]
        else 
            if !remaining_capacity
                deleted_key = @tail.key
                @tail = @tail.newer
                if @tail
                    @tail.older = nil
                end
                @entries.delete(deleted_key)
            end

            new_node.older = @head 
            if @head
                @head.newer = new_node
            end
            @head = new_node

            if @tail.nil?
                @tail = new_node
            end

            @entries[key] = new_node
        end
    end
end