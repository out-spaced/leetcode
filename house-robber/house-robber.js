var rob = function(nums) {
    if (nums.length === 1) {
      return nums[0];
    }
    let table = Array(nums.length + 1).fill(0);
    table[1] = nums[0];
    table[2] = nums[1];
    for (let i = 2; i < nums.length; i++) {
      table[i + 1] = nums[i] + Math.max(table[i - 1], table[i - 2]);
    }
    return Math.max(table[table.length - 1], table[table.length - 2])
};