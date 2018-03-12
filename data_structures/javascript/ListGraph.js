//A tree is a special kind of graph; we would call it a directed acyclic graph
//Graphs can also be cyclic (e.g. a path of connecting flights) or undirected (e.g. friendships in a social network)

//If a path exists between all vertices of a graph, it is called conected
//If there is a path from every vertex to every other vertex, it is strongly connected
//We have two ways to search a graph: BFS and DFS
//DFS is preferable when we think that our target is somewhere far from our starting point; BFS is more useful when we think that the target is only a few degrees of separate from the starting point 


//This graph is unweighted;
//This graph is undirected;
class ListGraph {
    constructor() {
        this.vertices = {};
        this.edges = {};
        this.numberOfEdges = 0;
    }

    //O(1)
    addVertex(vertex) {
        this.vertices[vertex] = true;
        this.edges[vertex] = [];
    }

    //O(number of vertex edges)
    removeVertex(vertex) {
        delete this.vertices[vertex];
        while (this.edges[vertex].length) {
            this.removeEdge(this.edges[vertex].pop(), vertex);
        }
    }

    addEdge(vertex1, vertex2) {
        this.edges[vertex1].push(vertex2);
        this.edges[vertex2].push(vertex1);
        this.numberOfEdges++;
    }

    //O(number of edges for vertex1 + number of edges for vertex 2)
    removeEdge(vertex1, vertex2) {
        const deletionIndex1 = this.edges[vertex1].indexOf(vertex2);
        const deletionIndex2 = this.edges[vertex2].indexOf(vertex1);

        this.edges[vertex1].splice(deletionIndex1, 1);
        this.edges[vertex2].splice(deletionIndex2, 1);
        this.numberOfEdges--;
    }

    size() {
        return this.vertices.size;
    }

    numberOfEdges() {
        return this.numberOfEdges;
    }

    //O(1)
    hasVertex(vertex) {
        return this.vertices[vertex];
    }

    //O(1)
    vertexEdges(vertex) {
        return this.edges[vertex];
    }

    //O(number of nodes in graph)
    BFSTraversal(startingVertex, processingCb) {
        if (!this.hasVertex(startingVertex)) {
            throw new TypeError(`Vertex ${startingVertex} is not present in the graph.`);
        }
        const unvisitedVertices = [startingVertex];
        const vistedVertices = {};
        while (unvisitedVertices.length) {
            let currentVertex = unvisitedVertices.shift();
            this.vertexEdges(currentVertex).forEach(vertex => {
                if (!visitedVertices[vertex]) {
                    unvisitedVertices.push(vertex);
                }
            });
            processingCb(currentVertex);
            visitedVertices[currentVertex] = true;
        }
    }

    //O(number of nodes in graph)
    DFSTraveral(startingVertex, processingCb, visitedVertices = {}) {
        visitedVertices[startingVertex] = true;
        processingCb(startingVertex);
        if (this.vertexEdges(this.startingVertex).length) {
            this.vertexEdges(this.startingVertex).forEach(vertex => {
                if (!visitedVertices[vertex]) {
                    this.DFSTraveral(vertex, processingCb, visitedVertices)
                }
            });
        }
    }

    //O(number of nodes in graph)
    buildPath(vertex1, vertex2) {
        if (!this.hasVertex(vertex1)) {
            throw new TypeError(`Vertex ${vertex1} is not present in the graph.`)
        }

        const unvisitedVertices = [vertex1];
        const vistedVertices = {};
        visitedVertices[vertex1] = true;
        const paths = {};

        while (unvisitedVertices.length) {
            let currentVertex = unvisitedVertices.shift();
            if (this.vertexEdges(currentVertex).length) {
                this.vertexEdges(currentVertex).forEach(vertex => {
                    if (!visitedVertices[vertex]) {
                        visitedVertices[vertex] = true;
                        unvisitedVertices.push(vertex);
                        paths[vertex] = currentVertex;
                    }
                });
            }
        }
        if (!visitedVertices[vertex2]) {
            return undefined;
        }
        const finalPath = [];
        for (let j = vertex2; j != vertex1; j = paths[j]) {
            path.push(j);
        }
        return path.reverse().join('-');
    }
}

class DirectedAcyclicListGraph extends ListGraph {
    constructor() {
        super();
    }

    //O(this.numberOfEdges)
    addEdge(vertex1, vertex2) {
        this.edges[vertex1].push(vertex2);
        if (this.detectCycle(vertex1)) {
            this.removeEdge(vertex1, vertex2);
            return false;
        }
        delete this.vertices[vertex2];
        this.numberOfEdges++;
        return true;
    }

    //O(this.numberOfEdges)
    detectCycle(vertex) {
        const scan = (vertex) => {
            if (!this.vertexEdges(vertex).length) {
                return false;
            } else {
                this.vertexEdges(vertex).forEach(relatedVertex => {
                    if (relatedVertex === vertex || find(relatedVertex)) {
                        return true;
                    }
                });
            }
        };
        return scan(vertex);
    }

    //O(number of edges for vertex1 + number of edges for vertex 2)
    removeEdge(vertex1, vertex2) {
        const deletionIndex1 = this.edges[vertex1].indexOf(vertex2);
        this.edges[vertex2].splice(deletionIndex2, 1);
    }

    //O(this.numberOfEdges)
    topologicalSort() {
        const vertices = Object.keys(this.vertices);
        const processingStack = [];
        const visited = {};
        for (let i = 0; i < vertices.length; i++) {
            let vertex = vertices[i];
            visited[vertex] = true;
            this.topologicalSortHelper(processingStack, visited, vertex);
            processingStack.push(vertex);
        }
        return processingStack;
    }

    //O(currentVertexChildren)
    topologicalSortHelper(vertex, visited, processingStack) {
        let currentVertexChildren = this.vertexEdges(vertex);
        for (let j = 0; j < currentVertexChildren.length; j++) {
            if (!visited[currentVertexChildren[j]]) {
                this.visited[currentVertexChildren[j]] = true;
                this.topologicalSortHelper(currentVertexChildren[j], visited, processingStack);
                processingStack.push(currentVertexChildren[j]);
            }
        }
    }

    shortestPath(start, finish) {
        const INFINITY = 1 / 0;
        const vertices = new PriorityQueue();
        const distances = {};
        const parents = {};
        const path = [];
        let pathLength = 0;

        for (let vertex in this.vertices) {
            if (vertex === start) {
                distances[vertex] = 0;
                vertices.insertByPriority(vertex, 0);
            } else {
                distances[vertex] = INFINITY;
                vertices.insertByPriority(vertex, INFINITY);
            }
            parents[vertex] = null;
        }

        while (!vertices.isEmpty()) {
            smallest = vertices.extract();

            if (smallest === finish) {
                pathLength = distances[smallest];
                while (parents[smallest]) {
                    path.push(smallest);
                    smallest = parents[smallest];
                }
                break;
            }

            if (!smallest || distances[smallest] === INFINITY) {
                continue;
            }

            for (let neighbor in this.edges[smallest]) {
                let alternative = distances[smallest] + this.vertices[smallest][neighbor].distance;
                if (alternative < distances[neighbor]) {
                    distances[neighbor] = alternative;
                    parents[neighbor] = smallest;
                    vertices.insert(neightor, alternative);
                }
            }
        }
        path.push(start);
        return path;
    }
}