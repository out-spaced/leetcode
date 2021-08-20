/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) {
        return null;
    }
    let visited = Array(101).fill(null);
    function cloneNeighbor(node) {
        if (visited[node.val]) {
            return visited[node.val];
        }
        // don't create new node for previous
        let newNode = new Node(node.val)
        visited[newNode.val] = newNode;
        // copy current node
        node.neighbors.forEach(neighbor => {
            let next = visited[neighbor.val];
            if (!next) {
                next = cloneNeighbor(neighbor);
            }
            newNode.neighbors.push(next);
        })
        return newNode;
     }
    return cloneNeighbor(node);
};