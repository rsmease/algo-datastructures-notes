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
end