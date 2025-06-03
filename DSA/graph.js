class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    this.adjList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  getList() {
    console.log(this.adjList);
  }

  bfs(vertex) {
    const queue = [vertex];
    const visited = {};

    while (queue.length) {
      let current = queue.shift();

      if (!visited[current]) {
        visited[current] = true;

        for (const neighbor of this.adjList[current]) {
          queue.push(neighbor);
        }
      }
    }
  }

  dfs(vertex = '1') {
    const stack = [vertex];
    const visited = {};

    while (stack.length) {
      const current = stack.pop();

      if (!visited[current]) {
        visited[current] = true;

        console.log(current);

        for (const neighbor of this.adjList[current]) {
          stack.push(neighbor);
        }
      }
    }
  }

  detectCycle(current = '1', parent = null, visited = {}) {
    visited[current] = true;

    for (const neighbor of this.adjList[current]) {
      if (neighbor == parent) continue;

      if (visited[neighbor]) return true;

      if (this.detectCycle(neighbor, current, visited)) return true;
    }

    return false;
  }

  allPaths(vertex, target, visited = {}, paths = '') {
    if (vertex === target) console.log(paths + ' ' + vertex);

    for (const neighbor of this.adjList[vertex]) {
      if (!visited[neighbor]) {
        visited[vertex] = true;
        this.allPaths(neighbor, target, visited, paths + ' ' + vertex);
        visited[vertex] = false;
      }
    }
  }
}

const graph = new Graph();

['1', '2', '3', '4'].forEach((vertex) => graph.addVertex(vertex));

graph.addEdge('1', '2');
graph.addEdge('2', '3');
graph.addEdge('3', '4');
graph.addEdge('4', '1');
graph.addEdge('2', '4');

graph.allPaths('1', '4');
