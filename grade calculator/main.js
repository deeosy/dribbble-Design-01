function calResults() {
  const getMathValue = parseInt(document.querySelector('#math').value);
  const getEngValue =parseInt(document.querySelector('#eng').value);

  let result = getMathValue + getEngValue;

  if (getEngValue <= 0 || getMathValue <= 0) {
    document.querySelector('#alert')
      .textContent = 'number can\'t be zero(0) or less';
  } else if (getEngValue > 9 || getMathValue > 9) {
    document.querySelector('#alert')
      .textContent = 'number can\'t be nine(9) or more';
  } else if (!getEngValue || !getMathValue) {
    document.querySelector('#alert')
    .textContent = 'fields can\'t be empty';
  } else {
    document.querySelector('#answer')
    .textContent = `Total grade: ${result}`;
    
    document.querySelector('#inputContainer')
      .style.display = 'none';
    document.querySelector('#answerContainer')
      .style.display = 'block';
  }
}

const btnBack = document.querySelector('#backBtn');

btnBack.addEventListener('click', function() {
  document.querySelector('#answerContainer')
    .style.display = 'none';
  document.querySelector('#inputContainer')
  .style.display = 'block';
})

document.querySelector('#v2').addEventListener('click', () => {
  document.querySelector('#v2')
  .style.display = 'none';
  document.querySelector('#v1')
  .style.display = 'block';
})

document.querySelector('#v1').addEventListener('click', () => {
  document.querySelector('#v1')
  .style.display = 'none';
  document.querySelector('#v2')
  .style.display = 'block';
})



