const randomArray = (min, max, length) =>
  Array.from({length},() => Math.floor(Math.random() * (max - min + 1)) + min);
console.log(randomArray(1, 5, 5));

const getAverage = (...numbers)=> {
  let sum = 0;
  let ave = 0;
  for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 1 == 0){
    sum += numbers[i];
    ave = sum / (i+1);
  
  }
}
  return +ave.toFixed(2);
};
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

const  filterEvenNumbers = (...numbers)=>{
  return numbers.filter((number) => {
    if(number % 2 !== 0){
      return numbers;
    }
  });
};
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

const  getDividedByFive = (...numbers)=>{
  return numbers.filter((number) => {
    if(number % 5 == 0){
      return numbers;
    }
  });
};
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));



const countPositiveNumbers = (...numbers)=>{
  let countPositive = 0;
  let countNegative = 0;
  for(let i = 0; i < numbers.length;i++){
    if(numbers[i] > 0){
      countPositive += 1;
    }
    else if(numbers[i] < 0){
      countNegative += 1;
    } 
  }
  return countPositive;
  // return numbers.filter((number) =>{
  //   if(number > 0){
  //     return numbers.length;
  //   }
  // });
};
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

const replaceBadWords = (string) => {
  let badWords = ['shit', 'fuck'];
  let words = string.split(' ');
  badWords.forEach(badWord =>
     words = words.map((word) => word.replace(badWord, '*' .repeat(badWord.length)))
     );
  return words.join(' ');
};
console.log(replaceBadWords("Are you fucking kidding?"));