const targetCombinationOfSticks = (sticks, targetLength) => {
  /***
   * 1 ≤ N ≤ 100
   * */ if (sticks.length < 1 || sticks.length > 100)
    return "Sticks Array lenght is not valid";

  /***
   * 1 ≤ K ≤ 10000
   * */ if (targetLength < 1 || targetLength > 10000)
    return "Target Value is invalid";

  /**Array of Possible combinations initialized with a value that will be greater than target length*/
  const combinations = new Array(targetLength + 1).fill(targetLength + 10);
  /***First element of combinations will always be 0 */
  combinations[0] = 0;
  /**Looping through all the array of combinations */
  for (let i = 1; i <= targetLength; i++) {
    /**Looping through all sticks */
    for (const stick of sticks) {
      /***Checking if combination loop instance subtract sticks loop instance is postive */
      if (i - stick >= 0) {
        /***Filling up combination array with the minimum value of current index of combination and stick instance difference index */
        combinations[i] = Math.min(
          combinations[i],
          combinations[i - stick] + 1
        );
      }
    }
  }
  return combinations[targetLength] === targetLength + 10
    ? -1
    : combinations[targetLength];
};
const checkInput = () => {
  try {
    let arrayOfSticks = JSON.parse(process.argv[2].replace(/^"|"$/g, ""));
    let targetLength = +process.argv[3];
    console.log(targetCombinationOfSticks(arrayOfSticks, targetLength));
  } catch (error) {
    console.log(
      "Please provide input properly e.g 'node index.js [array of numbers] number'"
    );
  }
};
checkInput();
