const submitBtn = document.querySelector('.submit');
const resetBtn = document.querySelector('.reset');
let text = document.querySelector('.text');
const typing_content = document.querySelector('.typing-content')
let selectElement = document.getElementById("words-selection");
let result = document.querySelector('.result');
let startTime, endTime, TotalTimeTaken, arrName, typedText, selectedValue = '10';

const tenWords = ['The serene landscape stretched endlessly, adorned with vibrant flowers swaying',
                  'Sunlight filtered through the leaves, casting playful shadows, while a crystal-clear',
                  'creating a symphony that echoed through the valley. A quaint cottage nestled'
                ]

const twentyWords = ['The serene landscape stretched endlessly, adorned with vibrant flowers swaying gently in  the breeze. Birds chirped melodiously, creating a symphony that']

const thirtyWords = ['The serene landscape stretched endlessly, adorned with vibrant flowers swaying gently in the breeze. Birds chirped melodiously, creating a symphony that echoed through the valley. A quaint cottage nestled among the']

const fortyWords = ['The serene landscape stretched endlessly, adorned with vibrant flowers swaying gently in the breeze. Birds chirped melodiously, creating a symphony that echoed through the valley. A quaint cottage nestled among the trees exuded warmth and charm. Sunlight filtered through the leaves']

const fiftyWords = ['The serene landscape stretched endlessly, adorned with vibrant flowers swaying gently in the breeze. Birds chirped melodiously, creating a symphony that echoed through the valley. A quaint cottage nestled among the trees exuded warmth and charm. Sunlight filtered through the leaves, casting playful shadows, while a crystal-clear stream meandered nearby']



function startTyping(){
    
    switch(selectedValue){
        case '10':
            var randNum = Math.floor(Math.random()*tenWords.length)
            typing_content.innerHTML = tenWords[randNum]
            typedText = randNum;
            arrName = 'tenWords';
            break;
        case '20':
            var randNum = Math.floor(Math.random()*twentyWords.length)
            typing_content.innerHTML = twentyWords[randNum]
            typedText = randNum;
            arrName = 'twentyWords';
            break;
        case '30':
            var randNum = Math.floor(Math.random()*thirtyWords.length)
            typing_content.innerHTML = thirtyWords[randNum]
            typedText = randNum;
            arrName = 'thirtyWords';
            break;
        case '40':
            var randNum = Math.floor(Math.random()*fortyWords.length)
            typing_content.innerHTML = fortyWords[randNum]
            typedText = randNum;
            arrName = 'fortyWords';
            break;
        case '50':
            var randNum = Math.floor(Math.random()*fiftyWords.length)
            typing_content.innerHTML = fiftyWords[randNum]
            typedText = randNum;
            arrName = 'fiftyWords';
            break;
    }

    let date = new Date();
    startTime = date.getTime();
}

const endTypingTest = () => {
    let date = new Date();
    endTime = date.getTime();
    TotalTimeTaken = (endTime - startTime)/1000;
    calculateTypingSpeed(TotalTimeTaken);
    text.textContent = "";
    removeAllWhiteSpaces();
    calculateTypingAccuracy();
}

const calculateTypingSpeed = (time_taken) => {
    let totalWords = text.value;
    console.log(totalWords)
    let actualWords = totalWords.split(" ").length;

    if(actualWords !== 0){
        let typing_speed = (actualWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        // result.innerHTML = `Your typing speed \n ${typing_speed} words per minutes & you wrote ${actualWords} words & time taken ${time_taken} sec`;
        result.innerHTML = `<table class="table" >
                                <tr>
                                    <th>Your Typing Speed</th>
                                    <td>${typing_speed} WPM</td>
                                </tr>
                                <tr>
                                    <th>Actual words typed</th>
                                    <td>${actualWords}</td>
                                </tr>
                                <tr>
                                    <th>Time Taken</th>
                                    <td>${time_taken} Sec </td>
                                </tr>
                            </table>
                                `;
    }
}

function reload(){
    location.reload();
}

function getValue() {
    selectedValue = selectElement.value;
    startTyping()
    // alert("Selected value: " + selectedValue);

}

