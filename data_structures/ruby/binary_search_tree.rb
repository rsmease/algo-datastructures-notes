## class definition?
## remove first element of array?
## class vs instance methods?

class BinaryTreeNode
    attr_accessor :value, :left, :right
    def initialize(value)
        @value = value
        @left = nil
        @right = nil
    end

    def self.insert(value)
        new_node = BinarySearchTree(value)
        if new_node.value < @value
            if @left.nil?
                @left = new_node
            else
                @left.insert(value)
            end
        end
    end

    def self.contains(value)
        if value == @value
            return true
        elsif (value < @value)
            if @left.nil?
                return false
            else
                return @left.contains(value)
            end
        else
            if @right.nil?
                return false
            else
                return @right.contains(value)
            end
        end
    end

    def self.DFS_traversal(traversal_proc, order = 'in')
        if (order == 'pre')
            traversal_proc.call(self)
        end
        if (@left)
            @left.DFS_traversal(traversal_proc, order)
        end
        if (order == 'in')
            traversal_proc.call(self)
        end
        if (@right)
            @right.DFS_traversal(traversal_proc, order)
        end
        if (order == 'post')
            @right.DFS_traversal(traversal_proc, order)
        end
    end

    def self.BFS_traversal(traversal_proc)
        processing_queue = [self]
        loop do
            break if processing_queue.length == 0
            current_node = processing_queue.pop
            traversal_proc.call(current_node)
            if (current_node.left)
                processing_queue.push(current_node.left)
            end
            if (current_node.right)
                processing_queue.push(current_node.right)
            end
        end
    end

    def self.get_min
        return @left ? @left.get_min : @value
    end

    def self.get_max
        return @right ? @right.get_max : @value
    end
end

class BinarySearchTree
    def initialize
        @root = nil
    end

    def add(value)
        if @root.nil?
            @root = BinaryTreeNode(value)
        else
            @root.insert(value)
        end
    end

    def remove(value)
        if @root.nil?
            return nil
        end

        def remove_node(node, value)
            if node.nil?
                return nil
            end

            if (node.value == value)
                if node.left.nil? && node.right.nil?
                    return nil
                elsif node.left.nil?
                    return node.right
                elsif node.right.nil?
                    return node.left
                end

                min = node.get_min
                node.value = min
                node.right = remove_node(node.right, min)
            elsif (value < node.value)
                node.left = remove_node(node.left, value)
                return node;
            else
                node.right = remove_node(node.right, value)
                return node
            end
        end

        @root = remove_node(@root, value)
    end

    def get_height(node = @root)
        if node.nil?
            return 0
        else
            left_height = get_height(node.left)
            right_height = get_height(node.right)
            max(left_height, right_height) + 1
        end
    end

    def is_balanced(node = @root)
        if node.nil?
            return true
        end

        left_height = get_height(node.left)
        right_height = get_height(node.right)

        if abs(left_height - right_height) > 1
            return false
        else
            return is_balanced(node.left) && is_balanced(node.right)
        end
    end
end