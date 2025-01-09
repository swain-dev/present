function generateLargeArray() {
    let largeArray = [];
    for (let i = 0; i < 100000000; i++) {
        largeArray.push(Math.random());
    }
    return largeArray;
}
  
  let veryLargeData = generateLargeArray();
  
function heavyComputation() {
    let result = 0;
    for (let i = 0; i < veryLargeData.length; i++) {
        console.log('cccccccccccc')
        result += veryLargeData[i];
    }
    return result;
}
  
  console.log(heavyComputation());