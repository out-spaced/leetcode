/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (trust.length === 0) {
        if (n === 1) {
            return 1;
        } else {
            return -1;
        }
    }
    // build a graph
    function graphNode(val) {
        this.val = val;
        this.trusts = [];
    }
    function checkTrust(trustedNodes, judge) {
        let result = false;
        for (let j = 0; j < trustedNodes.length; j++) {
            // check if node = judge
            if (trustedNodes[j] === judge) {
                result = true;
            } else {
                for (let i = 0; i < trustedNodes[j].trusts; i++) {
                    result = checkTrust(trustedNodes[j].trusts[i], judge)
                    if (result) {
                        break;
                    }
                }
            }
            if (result) {
                break;
            }
        }
        return result;
    }
    let graph = Array(n + 1).fill(null);
    for (let i = 0; i < trust.length; i++) {
        let currentVal = trust[i][0];
        let currentTrust = trust[i][1];
        let trustedNode = graph[currentTrust];
        let node = graph[currentVal];
        if (!trustedNode) {
            trustedNode = new graphNode(currentTrust);
            graph[currentTrust] = trustedNode;
        }
        if (!node) {
            node = new graphNode(currentVal);
            graph[currentVal] = node;
        }
        node.trusts.push(trustedNode);
    }
    // iterate through graph, find where trusts is empty
    let judge = null;
    for (let i = 1; i < graph.length; i++) {
        if (graph[i].trusts.length === 0) {
            judge = graph[i];
            break;
        }
    }
    if (judge === null) {
        return -1;
    }
    let checkJudge = true;
    // iterate through graph, make sure everyone trusts judge
    for (let i = 1; i < graph.length; i++) {
        if (!checkJudge) {
            break;
        }
        let current = graph[i];
        if (current !== judge) {
            // check if current trusts judge somewhere down the line
            // loop through all trusted nodes
            checkJudge = checkTrust(current.trusts, judge)
        }
    }
    if (checkJudge) {
        return judge.val;
    }
    return -1;
};