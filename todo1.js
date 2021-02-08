class BSTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
            this.root = null;
        }
        // add methods here...
    add(value) {
        var newNode = new BSTNode(value);
        if (this.root == null) {
            this.root = newNode;
            return this;
        }
        var runner = this.root
        while (runner != null) {
            if (runner.val > newNode.val) {
                if (runner.left == null) {
                    runner.left = newNode;
                    return this
                } else {
                    runner = runner.left;
                }
            } else {
                if (runner.right == null) {
                    runner.right = newNode;
                    return this;
                } else {
                    runner = runner.right;
                }
            }
        }
    }
    min() {
        var runner = this.root
        if (runner == null) {
            return "You have nothing"
        }
        while (runner != null) {
            if (runner.left == null) {
                return runner.val;
            }
            runner = runner.left;
        }
    }
    max() {
        var runner = this.root;
        if (runner == null) {
            return "You have nothing";
        }
        while (runner != null) {
            if (runner.right == null) {
                return runner.val;
            }
            runner = runner.right;
        }
    }
    isEmpty() {
        if (this.root == null) {
            return true
        } else {
            return false
        }
    }
    contains(value) {
        var runner = this.root;
        if (runner == null) {
            return false;
        }
        while (runner != null) {
            if (runner.val == value) {
                return true;
            } else {
                if (runner.val == value) {
                    runner = runner.left;
                } else {
                    runner = runner.right
                }
            }
        }
        return false;
    }
    size(current_node) {
        if (current_node == null) {
            return 0;
        }
        var leftSide = this.size(current_node.left);
        var rightSide = this.size(current_node.right);
        return 1 + leftSide + rightSide;
    }
}
bst1 = new BST();
bst1.add(4).add(5).add(7).add(1)
    // console.log(bst1.root)
    // console.log(bst1.max())
    // console.log(bst1.min())
    // console.log(bst1.contains(2))
console.log(bst1.size(bst1.root))