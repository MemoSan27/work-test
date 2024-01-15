export function findOutlier(integers: number[]): number | string {
    
    if(integers.length < 3){
        return 'Array must contain at least 3 numbers inside'
    }

    const shortArr = integers.slice(0, 3);
    const pairArray = shortArr.filter(number => ((number % 2) === 0)).length > 1;
        
    if(pairArray){
        return integers.find(number => ((number % 2) !== 0)) || 0;
    } else{
        return integers.find(number => ((number % 2) === 0)) || 0;
    }
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));
console.log(findOutlier([0, 2, 3, 4]));

