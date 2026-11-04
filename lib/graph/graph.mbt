/// Dependency graph for formula cells.
///
/// Nodes are packed address keys (`Address::key`). Edges point from a formula
/// cell to the cells it depends on, and the reverse map is kept for dirty
/// propagation.

///|
fn contains(values : Array[Int32], value : Int32) -> Bool {
  for item in values {
    if item == value {
      return true
    }
  }
  false
}

///|
pub struct DependencyGraph {
  precedents : Map[Int32, Array[Int32]]
  dependents : Map[Int32, Array[Int32]]
}

///|
pub fn DependencyGraph::new() -> DependencyGraph {
  { precedents: Map([], capacity=0), dependents: Map([], capacity=0), }
}

///|
/// Record that `node` depends on `depends_on`.
pub fn DependencyGraph::add_dependency(
  self : DependencyGraph,
  node : Int32,
  depends_on : Int32,
) -> Unit {
  let forward = match self.precedents.get(node) {
    Some(items) => items
    None => {
      let items : Array[Int32] = []
      self.precedents[node] = items
      items
    }
  }
  if !contains(forward, depends_on) {
    forward.push(depends_on)
  }
  let reverse = match self.dependents.get(depends_on) {
    Some(items) => items
    None => {
      let items : Array[Int32] = []
      self.dependents[depends_on] = items
      items
    }
  }
  if !contains(reverse, node) {
    reverse.push(node)
  }
}

///|
/// Cells that directly depend on `node`.
pub fn DependencyGraph::dependents_of(
  self : DependencyGraph,
  node : Int32,
) -> Array[Int32] {
  let out : Array[Int32] = []
  match self.dependents.get(node) {
    Some(items) =>
      for item in items {
        out.push(item)
      }
    None => ()
  }
  out
}

///|
/// Cells that `node` directly depends on.
pub fn DependencyGraph::precedents_of(
  self : DependencyGraph,
  node : Int32,
) -> Array[Int32] {
  let out : Array[Int32] = []
  match self.precedents.get(node) {
    Some(items) =>
      for item in items {
        out.push(item)
      }
    None => ()
  }
  out
}

///|
/// Kahn topological order over the given node set. Returns `None` if the set
/// contains a cycle.
pub fn DependencyGraph::topological_order(
  self : DependencyGraph,
  nodes : Array[Int32],
) -> Array[Int32]? {
  let indegree : Map[Int32, Int32] = Map([], capacity=nodes.length())
  for node in nodes {
    indegree[node] = 0
  }
  for node in nodes {
    match self.precedents.get(node) {
      Some(deps) =>
        for dep in deps {
          if indegree.get(dep) is Some(_) {
            indegree[node] = indegree[node] + 1
          }
        }
      None => ()
    }
  }
  let queue : Array[Int32] = []
  for node in nodes {
    if indegree[node] == 0 {
      queue.push(node)
    }
  }
  let result : Array[Int32] = []
  let mut head = 0
  while head < queue.length() {
    let node = queue[head]
    head = head + 1
    result.push(node)
    match self.dependents.get(node) {
      Some(children) =>
        for child in children {
          if indegree.get(child) is Some(_) {
            indegree[child] = indegree[child] - 1
            if indegree[child] == 0 {
              queue.push(child)
            }
          }
        }
      None => ()
    }
  }
  if result.length() == nodes.length() {
    Some(result)
  } else {
    None
  }
}
