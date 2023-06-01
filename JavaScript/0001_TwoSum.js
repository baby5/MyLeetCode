// https://leetcode.cn/problems/two-sum/

var twoSum = function(nums, target) {
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
