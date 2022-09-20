function isSameTree(root1, root2) {
  if ((!root1 && root2) || (root1 && !root2) || (root1 && root2 && root1.value !== root2.value)) return false;
  if (root1 && root2) return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
  return true;
}

module.exports = { isSameTree };
