function anagrams(str1, str2) {
  let obj1 = {}
  let obj2 = {}
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (!Object.hasOwn(obj1, char)) {
      obj1[char] = 1
    } else obj1[char]++
  }
  for (let j = 0; j < str2.length; j++) {
    let char = str2[j];
    if (!Object.hasOwn(obj2, char)) {
      obj2[char] = 1
    } else obj2[char]++
  }
  console.log(obj1)
  console.log(obj2)
  if (obj1 === obj2) return true
  return false
}


function commonElements(arr1, arr2) {
  // Your code here
}


function duplicate(arr) {
  // Your code here
}


function twoSum(nums, target) {
  // Your code here
}


function wordPattern(pattern, strings) {
  // Your code here
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
