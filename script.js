
// One - Create an array of objects representing student submissions

let submissions = [
    {name:"Jane", score: 95, date:"2020-01-4", passed:true},
    {name:"Joe", score: 77, date:"2018-05-14", passed:true},
    {name:"Jack", score: 59, date:"2019-07-05", passed:false},
    {name:"Jill", score: 88, date:"2020-04-22", passed:true}
]

// console.log (submissions);

// Two - Declare a function named addSubmission 

function addSubmission (array, newName, newScore, newDate) {
    let newPassed;
    if(newScore < 60)  {
        newPassed = false;
    } else {
        newPassed = true;
    }
    const newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newPassed,
    }
    const count = array.push(newSubmission);

}

//addSubmission(submissions, "Jake", 87, "2020-11-12");
//console.log(submissions);

// Three - Declare a function named deleteSubmissionByIndex, Paraneters: array, index, remove using splice

function deleteSubmissionByIndex (array, index){
    array.splice(index,1);
}

//deleteSubmissionByIndex(submissions, 2);
//console.log(submissions);

// Four - Declare a function named deleteSubmissionByName

function deleteSubmissionsByName (array, name) {
    for (let submission of array) {
        if (submission.name == name) {
            let counter = submission.indexOf(name);
            let removed = array.splice(counter, 1);
            
        }
    }
}

//deleteSubmissionByIndex(submissions, "Jane");
//console.log(submissions);

// Five - Declare a function named editSubmission, Parameters: array, index, score

function editSubmission (array, index, score) {
    array[index].score = score;
    let newPassed; 
    if(score < 60)  {
        newPassed = false;
    } else {
        newPassed = true;
    }
         
    array[index].passed = newPassed;

}

//editSubmission (submissions, 1, 45);
//console.log(submissions);

// Six - Declare a function named findSubmissionByName, parameters array, name, use the find method

function findSubmissionByName (array, name) {
     
        const found = array.find(submission=>submission.name===name);
        return found;
}


//let find = findSubmissionByName (submissions, "Jill");
//console.log(find);

// Seven - Declare a function named findLowestScore, parameters array, use forEach method, return object with lowest score

function findLowestScore(array) {
    let lowest = null;

    array.forEach(function (submission) {

        if (lowest === null || lowest.score > submission.score) {
        lowest = submission;  
        }
    });
        return lowest;
    }

//let low = findLowestScore(submissions);
//console.log(low);

// Eight - Declare a function named findAverageScore, parameter array, return average score, use a for of loop

function findAverageScore(array) {
    let averageScore = 0;
    let totalScore = 0;
    for (const student of array) {
        totalScore = totalScore + student.score;
    }
    
    averageScore=totalScore/array.length;
    console.log("Average Score ", averageScore);
    return averageScore;
}

//findAverageScore(submissions);

// Nine - Declare a function named filerPassing, parameter array, filter method with scores greater than 90

function filterPassing(array) {
    let passing = array.filter(function(e) {
        return e.passed == true;
    
});

console.log (passing)
}

//filterPassing(submissions);

// Ten - Declare a function named filter90AndAbove, parameter array, new array 90 and above

function filter90AndAbove(array) {
    let overNinety = array.filter(function(e) {
        return e.score >=90;
    
});

console.log (overNinety)
}

//filter90AndAbove(submissions);


