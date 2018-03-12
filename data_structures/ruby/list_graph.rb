class ListGraph

    attr_reader :number_of_edges

    def initialize
        @vertices = {}
        @edges = {}
        @number_of_edges = 0
    end

    def add_vertex(vertex)
        @vertices[vertex] = true
        @edges[vertex] = []
        return vertex
    end

    def remove_vertex(vertex)
        @vertices.delete(vertex)
        until @edges[vertex].length == 0
            remove_edge(@edges[vertex].pop(), vertex)
        end
        return vertex
    end

    def add_edge(vertex1, vertex2)
        @edges[vertex1].push(vertex2)
        @edges[vertex2].push(vertex2)
        @number_of_edges += 1
        return
    end

    def remove_edge(vertex1, vertex2)
        @edges[vertex1].delete_at(@edges[vertex1].index(vertex2))
        @edges[vertex2].delete_at(@edges[vertex2].index(vertex1))
        @number_of_edges += 1
        return
    end

    def size
        return @vertices.size
    end

    def has_vertex(vertex)
        return @vertices[vertex]
    end

    


end