export function isValidWalk(walk: string[]): Boolean | String {

    let vertical: number = 0;
    let horizontal: number = 0;

    if(walk.length === 0){
        return 'This is not a walk, you still stand';
     }

    if( walk.length !== 10 ){
        return false;
    }

    for(let i:number = 0; i < walk.length; i++){
        if(walk[i] === 'n'){
            vertical++;
        }else if(walk[i] === 's'){
            vertical--;
        }else if(walk[i] === 'e'){
            horizontal++;
        }
        else if(walk[i] === 'w'){
            horizontal--;
        } else{
            return `Coordinate ${ walk[i] } is not valid, please type n, s, e or w`
        }
    }

    return (vertical === 0 && horizontal === 0);

}

const firstWalk: string[] = ['n','s','n','s','n','s','n','s','n','s'];
const secondWalk: string[] = ['w','e','w','e','w','e','w','e','w','e','w','e'];
const thirdWalk: string[] = ['w'];
const fourthWalk: string[] = ['n','n','n','s','n','s','n','s','n','s'];

console.log(isValidWalk(firstWalk));
console.log(isValidWalk(secondWalk));
console.log(isValidWalk(thirdWalk));
console.log(isValidWalk(fourthWalk));