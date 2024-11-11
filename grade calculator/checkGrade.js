// submit button
const calculate = document.querySelector('#calculateBtn');

calculate.addEventListener('click', () => {

    // taking value for english
    const getEnglish = parseInt(document.querySelector('#english').value);
    // taking value for math
    const getMath = parseInt(document.querySelector('#math').value);
    // taking value for science
    const getScience = parseInt(document.querySelector('#science').value);
    // taking value for social
    const getSocial = parseInt(document.querySelector('#social').value);
    // taking value for firstBest
    const getFirstBest = parseInt(document.querySelector('#firstBest').value);
    // taking value for secondBest
    const getSecondBest = parseInt(document.querySelector('#secondBest').value);
    
    const results =  getEnglish + getMath + getScience + getSocial + getFirstBest + getSecondBest
    
    if (getEnglish === 0 || getMath === 0 || getScience === 0 || getSocial === 0 || getFirstBest === 0 || getSecondBest === 0) {
        
        document.querySelector('#error').textContent = `Invalid input. Please enter a number between 1 and 9 (inclusive)`;
        // document.querySelector('#error').textContent = `Numbers can't be 0 or below`;

    } else if (getEnglish > 9 || getMath > 9 || getScience > 9 || getSocial > 9 || getFirstBest > 9 || getSecondBest > 9) {
        
        document.querySelector('#error').textContent = `Invalid input. Please enter a number between 1 and 9 (inclusive)`;
        // document.querySelector('#error').textContent = `Numbers can't be 10 or above!`;

    } else if (!getEnglish || !getMath || !getScience || !getSocial || !getFirstBest || !getSecondBest){
        
        document.querySelector('#error').textContent = `All fields are required!`;

    } else {

        // hint
        document.querySelector('#providedInfo').style.display = 'block';

        // hint
        document.querySelector('#calcContainer').style.display = 'none';

        // getlistInfo
        document.querySelector('#listInfo').textContent = `Provided Information`;

        // getListEng
        document.querySelector('#listEng').textContent = `English: ${getEnglish}`;

        // const getlistMath
        document.querySelector('#listMath').textContent = `Mathematics: ${getMath}`;

        // const getlistSci
        document.querySelector('#listSci').textContent = `Science: ${getScience}`;

        // const getlistSoc
        document.querySelector('#listSoc').textContent = `Social: ${getSocial}`;

        // const getlistFirBest
        document.querySelector('#listFirBest').textContent = `First Best Elective: ${getFirstBest}`;

        // getlistSecBest 
        document.querySelector('#listSecBest').textContent = `Second Best Elective: ${getSecondBest}`;

        // getresult
        document.querySelector('#result').textContent = `Total Aggregate: ${results}`;
        
        // getDisplayAggregate.style.display = 'block';

    }

});

// hides hint and displays calcMainContainer
document.querySelector('#hintBtn').addEventListener('click', () => {
    document.querySelector('#hint').style.display = 'none';
    document.querySelector('#calcMainContainer').style.display = 'block';
});


// providedInfo hint and displays calcContainer
document.querySelector('#providedInfo').addEventListener('click', () => {
    document.querySelector('#providedInfo').style.display = 'none';
    document.querySelector('#calcContainer').style.display = 'block';
});