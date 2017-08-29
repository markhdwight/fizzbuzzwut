//Mark Dwight
//8-29-17

//This File defines a fizzbuzz implementation that doesn't use loops. This implementation is also extendible, allowing for values other than 3 and 5 to be tested 

//Main recursive method; determines the message for all numbers from 1 to the counter value
const fuzzBizz = (counter,messages) => {

    //Check to see that the first argument is valid
    if(!(typeof counter === 'number') || counter < 0)       
        return 'First argument should be a number greater than zero'

    //Exit condition; the counter will decrease to zero through each recursion
    if(counter === 0)       
        return ''

    //Construct the message for the current iteration
    let val = constructMessage(counter,0,'',messages)

    if(val === '')
        return fuzzBizz(counter-1,messages)                                 //if there were no matches, the output should skip the current number
    return fuzzBizz(counter - 1, messages) + counter + ': ' + val + '\n'    //if there were matches, the program should output the current iteration and a new line
   
}

//Constructs the combination of elements from the array that will be printed (if any)
const constructMessage = (counter,index,val,messages) => {
    let i = index + 1
    let tempVal = val
    if(index > messages.length)     //Exit condition: if the index value exceeds the array's length we've run out of potential strings to add to the message
    {
        return tempVal
    }
    if(counter % (i) === 0)
    {
        let j = (messages[index] === undefined)     //checks to see if the element is defined before adding it
        if(!j)
        {
            tempVal+=messages[index]
        }
    }

    return constructMessage(counter,i,tempVal,messages)
}

//Checks if the array contains only strings and undefined objects, returns false otherwise
const checkArrayVals = (index,messages) => {
    if(index > messages.length)
        return true
    let val = messages[index]
    if(!(typeof val === 'string'))
    {
        if(!(val === undefined))
            return false
    }
    return checkArrayVals(index+1,messages)
}

const printEmVals = [undefined,undefined,'fizz',undefined,'buzz',undefined,undefined,'wut']
if(checkArrayVals(0,printEmVals))               //ensure that the array contains only legal values  (either a string or an undefined object)
    console.log(fuzzBizz(100,printEmVals))
else console.log("Array contained illegal values")