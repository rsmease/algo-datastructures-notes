//NOTE: this is just a new implementation of ListGraph.js
// in some ways, it is more efficient

class NewListGraph {
  constructor() {
    this.vertices = new Set();
    this.edges = {};
    this.numberOfEdges = 0;
  }

  // constant runtime
  addVertex(vertex) {
    if (this.vertices.has(vertex)) {
      return true;
    }
    this.vertices.add(vertex);
    this.edges[vertex] = new Set();
    return true;
  }

  // runtime linear for number of edges
  removeVertex(vertex) {
    if (!this.vertices.has(vertex)) {
      throw "Missing vertex";
    }
    this.vertices.remove(vertex);
    const edgesToRemove = this.edges[vertext].entries();
    edgesToRemove.forEach((otherVertex) => {
      this.removeEdge(vertex, otherVertex)
    })
    return true;
  }

  // constant runtime
  addEdge(v1, v2) {
    if (!this.vertices.has(v1) || !this.vertices.has(v2)) {
      throw "Missing one or more vertices";
    }
    this.edges[v1].add(v1);
    this.edges[v2].add(v1);
    this.numberOfEdges++;
    return true;
  }

  // constant runtime
  removeEdge(v1, v2) {
    if (!this.vertices.has(v1) || !this.vertices.has(v2)) {
      throw "Missing one or more vertices";
    }
    if (!this.edges[v1].has(v2) || !this.edges[v2].has(v1)) {
      throw "Missing edge";
    }
    this.edges[v1].remove(v2);
    this.edges[v2].remove(v1);
    this.numberOfEdges--;
    return true;
  }

  // constant
  size() {
    return this.vertices.size;
  }

  // constant
  numberOfEdges() {
    return this.numberOfEdges;
  }

  // constant
  hasVertex(vertex) {
    return this.vertices.has(vertex);
  }

  // probably constant, possibly linear depending on when the entries table is constructed
  vertexEdges(vertex) {
    return this.edges[vertex].entries();
  }

  // linear
  BFSTraversal(start, processingCB) {
    if (!this.hasVertex(start)) {
      throw "Missing vertex"
    }
    const verticesToVisit = [start];
    const visitedVertices = new Set();

    let currentVertex;
    while (verticesToVisit.length) {
      currentVertex = verticesToVisit.shift();
      this.vertexEdges(currentVertex).forEach((otherVertex) => {
        if (!visitedVertices.has(otherVertex)) {
          verticesToVisit.push(vertex);
        }
      })
      processingCB(currentVertex);
      visitedVertices.add(currentVertex);
    }
  }

  // linear
  DFSTraversal(start, processingCB, visitedVertices = new Set()) {
    visitedVertices.add(start);
    processingCB(start);

    this.vertexEdges(vertex).forEach((otherVertex) => {
      if (!visitedVertices.has(otherVertex)) {
        this.DFSTraversal(otherVertex, processingCB, visitedVertices);
      }
    })
  }

  // linear
  // not necessarily optimized to be the shortest path
  buildPath(start, end) {
    if (!this.hasVertex(start) || !this.hasVertex(end)) {
      throw "Missing one or more vertices";
    }

    const verticesToVisit = [start];
    const knownVertices = new Set([start]);
    const paths = {};

    let currentVertex;
    while (verticesToVisit.length) {
      currentVertex = verticesToVisit.shift();
      this.vertexEdges.forEach((otherVertex) => {
        if (!knownVertices.has(otherVertex)) {
          knownVertices.add(otherVertex);
          verticesToVisit.push(otherVertex);
          paths[otherVertex] = currentVertex;
        }
      })
    }

    if (!knownVertices.has(end)) {
      return "No path available";
    }

    const finalPath = [];
    for (let i = end; i != start; i = paths[i]) {
      finalPath.push(i);
    }

    return finalPath.push(start).reverse().join("-");
  }
}

class DirectedAcyclicGraph extends ListGraph {
  constructor() {
    super();
  }

  // linear for number of edges
  addEdge(v1, v2) {
    if (!this.vertices.has(v1) || !this.vertices.has(v2)) {
      throw "Missing one or more vertices"
    }

    this.edges[v1].add(v2);
    if (this.detectCycle(v1)) {
      this.removeEdge(v1, v2);
      return false;
    }
    this.numberOfEdges++;
    return true;
  }

  // linear for number of edges
  // check that we haven't already processed this vertex, to avoid duplicate work
  // we need the path to track a specific DFS branch from a given node
  // once we know that there are no cycles in that branch, we remove it from the path
  // if we don't do this last step, then the path will return false positives
  detectCycle(vertex) {
    const scanForCycles = (vertex, visitedVertices = new Set(), path = new Set()) => {
      if (visitedVertices.has(vertex)) {
        return false;
      }

      visitedVertices.add(vertex);
      path.add(vertex);

      this.vertexEdges(vertex).forEach((otherVertex) => {
        if (path.has(otherVertex)) {
          return true;
        }
        if (!visitedVertices.has(vertex) && scanForCycles(otherVertex, visitedVertices, path)) {
          return true;
        }
      })
      path.remove(vertex);
      return false;
    };

    scanForCycles(vertex);
  }

  // constant time
  removeEdge(v1, v2) {
    if (!this.edges[v1].has(v2)) {
      throw "This edge does not exist"
    }
    this.edges[v1].remove(v2);
    this.numberOfEdges--;
    return true;
  }

  // linear time, number of edges
  // multiple solutions can be possible for a graph
  // the key is that, whatever the solution, childred with depenencies must be processed after parents
  topologicalSort() {
    const vertices = this.vertexEdges.entries();
    const stack = [];
    const visited = new Set();

    const sortHelper = (vertex, visited, stack) => {
      this.vertexEdges(vertex).forEach((otherVertex) => {
        if (!visited.has(otherVertex)) {
          visited.add(otherVertex);
          sortHelper(otherVertex, visited, stack);
          stack.push(otherVertex);
        }
      });
    }

    let currentVertex;
    for (let i = 0; i < vertices.length; i++) {
      currentVertex = vertices[i];
      visited.add(currentVertex);

      sortHelper(currentVertex, visited, stack);
      stack.push(currentVertex);
    }
    return stack;
  }
}

class WeightedDAG extends DirectedAcyclicGraph {
  constructor() {
    super();
  }

  addVertex(vertex) {
    if (this.vertices.has(vertex)) {
      return true;
    }
    this.vertices.add(vertex);
    this.edges[vertex] = new Map();
    return true;
  }

  removeVertex(vertex) {
    if (!this.vertices.has(vertex)) {
      throw "Missing vertex";
    }
    this.vertices.remove(vertex);
    const edgesToRemove = this.edges[vertext].keys();
    edgesToRemove.forEach((otherVertex) => {
      this.removeEdge(vertex, otherVertex)
    })
    return true;
  }

  // linear to number of edges
  addEdge(v1, v2, weight) {
    if (!this.vertices.has(v1) || !this.vertices.has(v2)) {
      throw "Missing one or more vertices"
    }

    this.edges[v1].set(v2, weight);
    if (this.detectCycle(v1)) {
      this.removeEdge(v1, v2);
      return false;
    }
    this.numberOfEdges++;
    return true;
  }


  // linear with respect to the number of vertices
  shortestPathAKADykstra(start, end) {
    if (!this.vertices.has(start) || !this.vertices.has(end)) {
      throw "Missing one or more vertices";
    }

    const INFINITY = Number.MAX_SAFE_INTEGER;
    const verticesHeap = new PriorityQueue();
    const distances = new Map();
    const parents = new Map();
    const path = [];
    let pathLength = 0;

    // add vertices to priority queue, distances list
    this.vertices.forEach((vertex) => {
      parents.set(vertex, null)

      if (vertex === start) {
        distances.set(vertex, 0);
        verticesHeap.insertByPriority(vertex, 0);
        return;
      }

      distances.set(vertex, INFINITY);
      vertices.insertByPriority(vertex, INFINITY);
    });

    let smallest;
    while (!verticesHeap.isEmpty()) {
      smallest = verticesHeap.extract();

      // we found the finish, so we build our path
      if (smallest === end) {

        pathLength = distances.get(smallest);

        while (typeof parents.get(smallest) !== 'null') {
          path.push(smallest);
          smallest = parents.get(smallest);
        }
      }

      if (!smallest || distances.get(smallest) === INFINITY) {
        continue;
      }

      let alternativeDistance;
      this.vertexEdges(smallest).forEach((otherVertex) => {
        alternativeDistance = distances.get(smallest) + this.edges[smallest].get(otherVertex)

        if (alternativeDistance < distances.get(otherVertex)) {
          distances.set(otherVertex, alternativeDistance);
          parents.set(otherVertex, smallest);
          verticesHeap.insert(otherVertex, alternativeDistance);
        }
      })
    }

    path.push(start);
    return path;
  }

  // only pursue nodes wehre the overall heuristic is optimal
  // e.g. when plotting a path on a map, first look at routes that move us closer to the end
  // linear with respect to the number of vertices, unless the heuristic adds complexity
  shortestPathWithHeuristicAKAAstar(start, end, heuristic) {
    const INFINITY = Number.MAX_SAFE_INTEGER;
    const verticesHeap = new PriorityQueue();
    const distances = new Map();
    const parents = new Map();
    const path = [];
    let pathLength = 0;

    // add vertices to priority queue, distances list
    this.vertices.forEach((vertex) => {
      parents.set(vertex, null);
      distances.set(
        vertex,
        vertex === start ? 0 : INFINITY
      )
      verticesHeap.insertByPriority(
        vertex,
        vertex === start ? 0 : INFINITY
      )
    });

    let nearest;
    while (!verticesHeap.isEmpty()) {
      nearest = verticesHeap.extract();

      if (nearest === end) {
        while (parents.get(nearest)) {
          path.push(nearest);
          nearest = parents.get(nearest);
        }
      }

      if (!nearest || distances.get(nearest) === INFINITY) {
        continue;
      }

      let alternativeRoute, alternativeHeuristic;
      let defaultRoute, defaultHeuristic;
      this.vertexEdges(nearest).forEach((otherVertex) => {
        alternativeRoute = distances.get(nearest) + this.edges[nearest].get(otherVertex);
        alternativeHeuristic = heuristic(otherVertex, end);

        defaultRoute = distances.get(otherVertex);
        defaultHeuristic = heuristic(start, end);
        if (alternativeHeuristic < defaultHeuristic
          || (alternativeHeuristic === defaultHeuristic && alternativeRoute < defaultRout)
        ) {
          distances.set(otherVertex, alterativeRoute);
          parents.set(otherVertex, nearest);
          verticesHeap.insertByPriority(otherVertex, alternativeRoute)
        }
      })
    }
    path.push(start);
    return path;
  }
}
