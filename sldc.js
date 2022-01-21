// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Planning
// Analysis of Requirements
// Design
// Implementation
// Testing & Integration
// Maintain

let softwareDevelopmentLifecycleArr = ["Planning", "Analysis of Requirements", "Design", "Implementation", "Testing & Intergration", "Maintain"]

for(let i = 0; i < softwareDevelopmentLifecycleArr.length; i++){
    console.log(softwareDevelopmentLifecycleArr[i])
}

//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added." 
const analysisOfRequirements = "This is the second step, in which the requirements of the end product are defined. This might be a feature, or resources needed to build the project."
const design = "This is the third step, in which you start actually coding and design the way the flow of information runs from your first step to your end goal."
const implementation = "This is the fourth step, in which execution of the plan is to take into effect."
const testingAndIntergration = "In the fifth step testing is conducted to thouroughly seek defects. Once removed, the code can be intergrated into end goal function."
const maintain = "The final step is a continuious step of maintaining fuctionality through repeating steps above."