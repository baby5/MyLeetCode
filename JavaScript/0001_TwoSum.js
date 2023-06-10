// https://leetcode.cn/problems/two-sum/

var twoSum = function(nums, target) {  // TC: O(n) SC: O(n)
	var obj = {}
	for (var i = 0; i < nums.length; i++) {
		var num = nums[i]
		var j = obj[target - num]
		if (j !== undefined) {
			return [j, i]
		}
		obj[num] = i
	}
	return []
};

var twoSum_2 = function(nums, target) {  // TC: O(n²) SC: O(1)
	var len = nums.length
	for (var i = 0; i < len - 1; i++) {
		var num = nums[i]
		for (var j = i+1; j < len; j++) {
			if (num + nums[j] === target) {
				return [i, j]
			}
		}
	}
	return []
};