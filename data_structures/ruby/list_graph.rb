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

    def BFS(starting_vertex, processing_proc)
        if !has_vertex(vertex)
            raise ArgumentError, "Vertex #{starting_vertex} is not present in the graph"
        end

        unvisited_vertices = [starting_vertex]
        visited_vertices = {}

        until unvisited_vertices.length == 0
            current_vertex = unvisited_vertices.shift
            if @edges[current_vertex]
                @edges[current_vertex].each do |other_vertex|
                    if !visited_vertices.has_key(other_vertex)
                        unvisited_vertices.push(other_vertex)
                    end
                end
            end
            processing_proc.call(current_vertex)
            visited_vertices[current_vertex] = true
        end
    end

    def DFS(starting_vertex, processing_proc, visited_vertices = {})
        visited_vertices[starting_vertex] = true
        processing_proc.call(starting_vertex)
        if @edges[starting_vertex]
            @edges[starting_vertex].each do |other_vertex|
                if !visited_vertices.has_key(other_vertex)
                    DFS(other_vertex, processing_proc, visited_vertices)
                end
            end
        end
    end

    def build_path(vertex1, vertex2)
        if !has_vertex(vertex)
            raise ArgumentError, "Vertex #{starting_vertex} is not present in the graph"
        end

        unvisited_vertices = [vertex1]
        visited_vertices = {}
        visited_vertices[vertex1] = true
        paths = {}

        until unvisited_vertices.length == 0
            current_vertex = unvisited_vertices.shift 
            if @edges[current_vertex]
                @edges[current_vertex].each do |other_vertex|
                    if !visited_vertices.has_key(other_vertex)
                        visited_vertices[other_vertex] = true 
                        unvisited_vertices.push(other_vertex)
                        paths[other_vertex] = current_vertex
                    end
            end
        end

        if !visited_vertices.has_key(vertex2)
            return nil
        else
            final_path = [vertex2]
            current_vertex = vertex2
            until current_vertex = vertex1
                final_path.push(paths[current_vertex])
                current_vertex = paths[current_vertex]
            end
            return final_path.reverse.join('-')
        end
    end

end