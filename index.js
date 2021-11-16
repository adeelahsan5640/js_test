//Q1)Write a function that accepts an array of strings. Return the longest string.

var arr = ['Monday', 'Tuesday', 'Wednesday']
function checkLongestStr(arr) {
  var length = 0
  var longest
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > length) {
      var length = arr[i].length
      longest = arr[i]
    }
  }

  console.log(longest)
}
checkLongestStr(arr)

//Q2)Write a function that takes a string, and returns the character that is most commonly used in the string.

let myName = 'Adeel'
function mostCommonWord(str) {
  str = str.split('')
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      console.log(str[i])
    }
  }
}
mostCommonWord(myName)

//Q3)Create a function that takes in two strings as two parameters and returns a boolean that indicates whether or not the first string is an anagram of the second string.

const anagrams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }
  let sort1 = str1.split('').sort()
  let sort2 = str2.split('').sort()

  return sort1.join('') === sort2.join('')
}
console.log(anagrams('adeel', 'eedal'))

//Q4) Calculate the sum of odd numbers greater than 10(n1) and less than 30(n2)
var sum = 0

for (let i = 11; i < 30; i++) {
  sum = sum + i
  i++
}
console.log(sum)

//Q6)Create a function to return the longest word(s) in a string

function findLongestWord(str) {
  str = str.split(' ')
  for (let i = 0; i < str.length; i++) {
    if (str[i]?.length > str[i + 1]?.length) {
      console.log(str[i])
    }
  }
}
findLongestWord('yesterday was Monday')

//Q7)Create a function to convert a CSV text to a “bi-dimensional” array

let sentence = 'Today,is,Tuesday'

function csvtoArr(sen) {
  senArr = sen.split(',')
  console.log(senArr)
}
csvtoArr(sentence)

//Q8)Create a function that will capitalize the first letter of each word in a text

function capitalFirstLetter(str) {
  var splitStr = str.split(' ')
  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr.length[i] < splitStr.length) {
      splitStr[i].charAt(0).toUpperCase()
    }

    str = splitStr.join(' ')
  }
  console.log(str)
}

capitalFirstLetter('it is a tea pot')
