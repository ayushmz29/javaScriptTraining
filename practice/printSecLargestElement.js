let myArray = [2, 3, 6, 6, 5];

function processData(myArray) {
    // console.log(myArray);
    let Max = -Infinity;
    let Result = -Infinity;
    
    for(let i in myArray){
        // console.log(i)
        
        if(myArray[i] > Max){
            Result = Max;   //save the prev Max as Result
            Max = myArray[i];
        }
        else if (myArray[i] < Max && myArray[i] > Result){
            Result = myArray[i];
        }
    }
    console.log(Result)
}

// tail starts here
processData(myArray)