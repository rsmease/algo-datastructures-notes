require 'list_graph'

class DirectedAcyclicGraph < ListGraph
    def initailize
        super()
    end

    def add_edge(vertex1, vertex2)
        @edges[vertex1].push(vertex2)
        @number_of_edges += 1
        if detect_cycle(vertex1)
            remove_edge(vertex1, vertex2)
            return false
        else
            return true
        end
    end

    def detect_cycle(vertex)
        def scan(vertex)
            if !@edges[vertex]
                return false
            else
                @edges[vertex].each do |other_vertex|
                    if other_vertex == vertex || scan(other_vertex)
                        return true
                    end
                end
        end
        return scan(vertex)
    end

    def remove_edge(vertex1, vertex2)
        @edges[vertex1].delete_at(@edges[vertex1].index(vertex2))
    end

    def topological_sort(processing_proc)

        vertices = @vertices.keys
        processing_stack = []
        visited_vertices = {}

        vertices.each do |vertex|
            visited_vertices[vertex] = true
            topological_sort_helper(vertex, visited_vertices, processing_stack)
            processing_stack.push(vertex)
        end

        until processing_stack.length == 0
            processing_proc.call(processing_stack.pop)
        end

        def topological_sort_helper(vertex, visited_vertices, processing_stack)
            if @edges[vertex]
                @edges[vertex].each do |other_vertex|
                    if !visited_vertices.has_key(other_vertex)
                        visited_vertices[other_vertex] = true
                        topological_sort_helper(other_vertex, visited_vertices, processing_stack)
                        processing_stack.push(other_vertex)
                end
        end
    end

    def shortest_path(start, finish)
        infinity = 1.0 / 0
        vertices_heap = PriorityQueue.new
        distances = {}
        parents = {}
        path = []
        path_length = 0

        @vertices.each do |vertex|
            if (vertex == start)
                distances[vertex] = 0
                vertices_heap.insert(vertex, 0)
            else
                distances[vertex] = infinity
                vertices_heap.inesrt(vertex, infinity)
            end
            parents[vertex] = nil
        end

        until vertices_heap.empty?
            smallest = vertices.extract
            if smallest == finish
                path_length = distances[smallest]
                until parents[smallest].nil?
                    path.push(smallest);
                    smallest = parents[smallest]
                end
                break
            end

            if (smallest.nil? || distances[smallest] == infinity)
                next
            end

            if @edges[smallest]
                @edges[smallest].each do |other_vertex|
                    alternative = distances[smallest] + @vertices[smallest][other_vertex].distances
                    if alternative < distances[other_vertex]
                        distances[other_vertex] = alternative
                        parents[other_vertex] = smallest
                        vertices_heap.insert(other_vertex, alternative)
                    end
                end
            end
        end

        path.push(start)
        return path.reverse
    end
end