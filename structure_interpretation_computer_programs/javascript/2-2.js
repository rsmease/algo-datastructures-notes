class Line {
  constructor(start, end) {
    this.start = start,
      this.end = end;
  }
  midpoint() {
    const midX = (this.start.x + this.end.x) / 2;
    const midY = (this.start.y + this.end.y) / 2;
    return new Point(midX, midY);
  }
  length() {
    return this.start.distanceTo(this.end);
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  distanceTo(otherPoint) {
    const distanceXSquared = Math.pow(otherPoint.x - this.x, 2);
    const distanceYSquared = Math.pow(otherPoint.y - this.y, 2);
    return Math.sqrt(distanceXSquared + distanceYSquared)
  }
}

const point1 = new Point(1, 1);
const point2 = new Point(3, 3);
const point3 = new Point(1, 3);
const point4 = new Point(3, 1);

class Quadrilateral {
  constructor(vertices) {
    this.vertices = vertices;
    this.edges = [];
  }

  sortVertices() {
    if (this.vertices.length !== 4) {
      console.log("In valid quadrilateral. Exactly 4 vertices are required.")
    }
    const xSorted = this.vertices.sort((a, b) => a.x <= b.x);
    const sorted = xSorted.sort((a, b) => a.y <= b.y);
    return sorted;
  }

  perimeter() {
    let perimeter = 0;
    console.log(this.sortVertices())
    this.sortVertices().forEach((vertex, i) => {
      const nextVertex = this.vertices[(i + 1) % 4];
      console.log(vertex, nextVertex);
      this.edges.push(new Line(vertex, nextVertex));
      perimeter += vertex.distanceTo(nextVertex);
    })
    return perimeter;
  }

  area() {
    return this.edges[0].length() * this.edges[1].length();
  }
}

const quad1 = new Quadrilateral([point1, point2, point3, point4]);
console.log(quad1.perimeter())
