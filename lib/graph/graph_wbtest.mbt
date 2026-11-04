/// White-box tests for the dependency graph.

///|
test "topological order" {
  let graph = DependencyGraph::new()
  graph.add_dependency(2, 1)
  graph.add_dependency(3, 2)
  match graph.topological_order([1, 2, 3]) {
    Some(order) => {
      assert_eq(order[0], 1)
      assert_eq(order[1], 2)
      assert_eq(order[2], 3)
    }
    None => assert_true(false)
  }
}

///|
test "cycle returns none" {
  let graph = DependencyGraph::new()
  graph.add_dependency(1, 2)
  graph.add_dependency(2, 1)
  assert_eq(graph.topological_order([1, 2]), None)
}

///|
test "dependents are exposed" {
  let graph = DependencyGraph::new()
  graph.add_dependency(2, 1)
  assert_eq(graph.dependents_of(1), [2])
}
