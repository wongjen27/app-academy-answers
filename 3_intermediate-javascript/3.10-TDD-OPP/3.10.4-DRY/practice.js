// function multiplyBiggerNumByTwo(num1, num2) {
//   let bigNum;
//   if (num1 > num2) {
//     bigNum = num1;
//     return bigNum * 2;
//   } else {
//     bigNum = num2;
//     return bigNum * 2;
//   }
// }

function multiplyBiggerNumByTwo(num1, num2) {
  bigNum = compareNum(num1, num2, "big");
  return bigNum * 2
}



// function divideBiggerNumByThree(num1, num2) {
//   let bigNum;
//   if (num1 > num2) {
//     bigNum = num1;
//     return bigNum / 3;
//   } else {
//     bigNum = num2;
//     return bigNum / 3;
//   }
// }

function divideBiggerNumByThree(num1, num2) {
  bigNum = compareNum(num1, num2, "big");
  return bigNum / 3
}

// function eatMostTacos(sum1, sum2) {
//   let bigNum;
//   if (sum1 > sum2) {
//     bigNum = sum1;
//     return `I ate ${bigNum} tacos.`;
//   } else {
//     bigNum = sum2;
//     return `I ate ${bigNum} tacos.`;
//   }
// }

function eatMostTacos(sum1, sum2) {
  bigNum = compareNum(sum1, sum2, "big");
  return `I ate ${bigNum} tacos.`
}

// function adoptSmallerDog(weight1, weight2) {
//   let smallDog;
//   if (weight1 < weight2) {
//     smallDog = weight1;
//     return `I adopted a dog that weighs ${smallDog} pounds.`;
//   } else {
//     smallDog = weight2;
//     return `I adopted a dog that weighs ${smallDog} pounds.`;
//   }
// }

function adoptSmallerDog(weight1, weight2) {
  smallDog = compareNum(weight1, weight2, "small");
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

function compareNum(num1, num2, size) {
  if (size === "big") {
    let bigNum;
    if(num1 > num2) {
      bigNum = num1
    } else {
      bigNum = num2
    }
    return bigNum
  } else if (size === "small") {
    let smallNum;
    if(num1 < num2) {
      smallNum = num1
    } else {
      smallNum = num2
    }
    return smallNum
  }
}

console.log(compareNum(1,3,"small"))

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
