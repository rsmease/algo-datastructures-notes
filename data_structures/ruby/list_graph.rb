class ListGraph
    def initialize
        @vertices = {}
        @edges = {}
        @number_of_edges = 0
    end

    def add_vertex(vertex)
        @vertices[vertex] = true
        @edges[vertex] = []
    end

    def remove_vertex(vertex)
        @vertices.delete(vertex)
        until @edges[vertex].length == 0
            remove_edge(@edges[vertex].pop(), vertex)
        end
    end
end