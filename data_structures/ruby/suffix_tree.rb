class SuffixNode
    def initialize
        @value = ""
        @leaves = []
        @nodes = []
    end

    def check_nodes(suffix)
        @nodes.each do |node|
            if node.value == suffix[0]
                node.add_suffix(suffix.slice[1...suffix.length]
                return true
            end
        end
        return false
    end

    def check_leaves(suffix)
        @leaves.each do |leaf|
            if leaf[0] == suffix[0]
                node = SuffixNode.new
                node.value = leaf[0]
                node.add_suffix(suffix.slice[1...suffix.length])
                node.add_suffix(leaf.slice[1...leaf.length])
                @nodes.push(node)
                @leaves.delete_at(@leaves.index(leaf))
                return
            end
        end
        @leaves.push(suffix)
    end

    def add_suffix(suffix)
        if !suffix.empty?
            if !check_nodes(suffix)
                check_leaves(suffix)
            end
        end
        return
    end

    def get_longest_repeated_substring
        result = ""
        temp = ""
        @nodes.each do |node|
            temp = node.get_longest_repeated_substring
            if (temp.length > result.length)
                result = temp
            end
        end
        return @value + string
    end
end

class SuffixTree
    def initialize(base)
        @root = SuffixNode.new
        add_suffix(base)
    end

    def add_suffix(suffix)
        suffix.each_with_index do |char, i|
            @root.add_suffix(suffix.slice(i...suffix.length))
        end
    end

    def get_longest_repeated_substring
        @root.get_longest_repeated_substring
    end

    def contains?(substring)
        if @leaves.include?(substring)
            return true
        else
            @nodes.each do |node|
                if substring.slice(0...node.value.length) == node.value
                    if node.contains?(substring.slice(node.value.length...substring.length))
                        return true
                    end
                end
            end
        end
        return false
    end
end