class TrieNode
    attr_accessor :key, :parent, :prefixes, :children, :word_end?
    def initialize(key)
        @key = key
        @parent = nil
        @prefixes = 0
        @children = {}
        @word_end? = false
    end

    def build_word
        word = ""
        current_node = self
        until current_node.nil?
            word += current_node.key
            current_node = current_node.parent
        end
        return word.reverse
    end
end

class Trie
    def initialize
        @root = TrieNode.new(nil)
        @word_count = 0
    end

    def add_word(word, current_node = @root)
        current_node.prefixes += 1
        char = word[0]
        if !current_node.children.has_key(char)
            new_node = TrieNode.new(char)
            current_node.children[char] = new_node
        end
        if word.length > 1
            word = word.drop(1)
            current_node = current_node[char]
            add_word(word, current_node)
        else
            current_node.children[char].word_end? = true
            @word_count += 1
        end
    end

    def contains(word, current_node = @root)
        char = word[0]
        if !current_node.children.has_key(char)
            return false
        else
            if (word.length > 1)
                word = word.drop(1)
                current_node = current_node.children[char]
                return contains(word, current_node)
            else
                return current_node.children[char].word_end?
            end
        end
    end

    def remove_word(word, current_node = @root)
        if (contains(word))
            remove_helper(word)
        end

        def remove_helper(word, current_node = @root)
            current_node.prefixes -= 1;
            char = word[0]
            if current_node.children.has_key(char)
                if word.length > 1
                    if current_node.children[char].prefixes == 1
                        current_node.children.delete(char)
                        @word_count -= 1
                    else
                        current_node = current_node.children[char]
                        remove_helper(word.drop(1), current_node)
                    end
                else
                    if current_node.children[char].prefixes == 0
                        current_node.children.delete(char)
                    else
                        current_node.word_end = false
                        @word_count -= 1
                    end
                end
            else
            end
        end
    end

    def search_by_prefix(prefix)
        current_node = @root
        prefix.each_char do |char|
            if current_node.children[char]
                current_node = current_node[char]
            else
                return []
            end
        end
        search_results = []
        retrieve_all_with_prefix(current_node, search_results)
        return search_results.reverse
    end

    def retrieve_all_with_prefix(prefix_end_node, results)
        if prefix_end_node.word_end?
            results.push(prefix_end_node.build_word)
        else
            prefix_end_node.children.each do |child|
                retrieve_all_with_prefix(child, results)
            end
        end
    end

    def print_trie
        new_line = TrieNode.new('|')
        processing_queue = [@root, new_line]
        result_string = ""

        until processing_queue.length == 0
            current_node = processing_queue.shift 
            if current_node.key
                result_string += current_node.key + " "
            end
            if current_node.key == '|' && processing_queue.length > 0
                processing_queue.push(new_line)
            end
            if current_node.children.size > 0
                current_node.children.keys.each do |child|
                    processing_queue.push(current_node[child])
                end
            end
        end

        return result_string
    end

    def print_trie_by_depth 
        new_line = TrieNode.new("\n")
        processing_queue = [@root, new_line]
        result_string = ""

        until processing_queue.empty?
            current_node = processing_queue.shift 
            if current_node.key
                result_string += current_node.key + (current_node.key == "\n" ? " " : "")
            end
            if (current_node.key == "\n" && !processing_queue.empty?)
                processing_queue.push(new_line)
            end
            if current_node.children.size > 0
                current_node.children.keys.each do |child|
                    processing_queue.push(current_node.children[child])
                end
            end
        end
    end
end