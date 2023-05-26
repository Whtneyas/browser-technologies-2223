//Variables
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const studentIdInput = document.getElementById('student-id');
const textAreas = document.querySelectorAll('textarea');
const formInputs = document.querySelectorAll('input[type="text"] , input[type="email"]');
const radioInputs = document.querySelectorAll('input[type="radio"]')



//---------------------------Show the value that the user chose

radioInputs.forEach(button => {
  button.addEventListener('change', () => {
    const getRadioName = button.name;
    const getRadioValue = button.value;

    if (button.checked) {
      switch (getRadioName) {
        case 'grade1':
          document.querySelector('.results1').innerHTML = `You've graded this subject on a scale of  ${getRadioValue}.`
          break;
        case 'grade2':
          document.querySelector('.results2').innerHTML = `You've graded this subject on a scale of ${getRadioValue}.`
          break;
        case 'grade3':
          document.querySelector('.results3').innerHTML = `You've graded this subject on a scale of ${getRadioValue}.`
          break;
        case 'Css-grade1':
          document.querySelector('.results1').innerHTML = `You've graded this subject on a scale of ${getRadioValue}.`
          break;
        case 'Css-grade2':
          document.querySelector('.results2').innerHTML = `You've graded this subject on a scale of${getRadioValue}.`
          break;
        case 'Css-grade3':
          document.querySelector('.results3').innerHTML = `You've graded this subject on a scale of${getRadioValue}.`
          break;
        case 'BT-grade1':
          document.querySelector('.results1').innerHTML = `You've graded this subject on a scale of${getRadioValue}.`
          break;
        case 'BT-grade2':
          document.querySelector('.results2').innerHTML = `You've graded this subject on a scale of ${getRadioValue}.`
          break;
        case 'BT-grade3':
          document.querySelector('.results3').innerHTML = `You've graded this subject on a scale of${getRadioValue}.`
          break;
        case 'PWA-grade1':
          document.querySelector('.results1').innerHTML = `You've graded this subject on a scale of ${getRadioValue}.`
          break;
        case 'PWA-grade2':
          document.querySelector('.results2').innerHTML = `You've graded this subject on a scale of ${getRadioValue}.`
          break;
        case 'PWA-grade3':
          document.querySelector('.results3').innerHTML = `You've graded this subject on a scale of ${getRadioValue}.`
          break;
        case 'RTW-grade1':
          document.querySelector('.results1').innerHTML = `You've graded this subject on a scale of ${getRadioValue}.`
          break;
        case 'RTW-grade2':
          document.querySelector('.results2').innerHTML = `You've graded this subject on a scale of ${getRadioValue}.`
          break;
        case 'RTW-grade3':
          document.querySelector('.results3').innerHTML = `You've graded this subject on a scale of ${getRadioValue}.`
          break;
        case 'HCD-grade1':
          document.querySelector('.results1').innerHTML = `You've graded this subject on a scale of ${getRadioValue}.`
          break;
        case 'HCD-grade2':
          document.querySelector('.results2').innerHTML = `You've graded this subject on a scale of ${getRadioValue}.`
          break;
        case 'HCD-grade3':
          document.querySelector('.results3').innerHTML = `You've graded this subject on a scale of ${getRadioValue}.`
          break;
        case 'MP-grade1':
          document.querySelector('.results1').innerHTML = `You've graded this subject on a scale of ${getRadioValue}.`
          break;
        case 'MP-grade2':
          document.querySelector('.results2').innerHTML = `You've graded this subject on a scale of ${getRadioValue}.`
          break;
        case 'MP-grade3':
          document.querySelector('.results3').innerHTML = `You've graded this subject on a scale of ${getRadioValue}.`
          break;

        default:
          break;
      }
    }
  });
});


// Giving feedback to the user 

textAreaValidation()

function textAreaValidation() {
  const textAreaInputs = document.querySelectorAll('textarea');


  textAreaInputs.forEach(area => {
    area.addEventListener('input', () => {
      let textAreaValues = area.value;
      let span = document.createElement('span');
      area.parentNode.insertBefore(span, area.nextSibling);


      if (textAreaValues !== '') {
        if (!area.dataset.typed) {
          span.textContent = 'Well done';
          span.classList.add("valid-feedback")

        }
        area.dataset.typed = 'true';
        area.classList.add('valid-data');

      } else {
        span.textContent = ''
        area.dataset.typed = '';
        area.classList.remove('valid-data')
      }
    })


  })
}


 
  // Load saved values from local storage
  textAreas.forEach(textarea => {
    const key = textarea.name;
    textarea.value = localStorage.getItem(key) || '';
  });
  radioInputs.forEach(input => {
    const key = input.name;
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      input.checked = input.value === storedValue;
    }
  });

  // Save textarea value to local storage on change
  textAreas.forEach(textarea => {
    textarea.addEventListener('input', () => {
      const key = textarea.name;
      localStorage.setItem(key, textarea.value);
    });
  });

  // Save input values to local storage on change
  radioInputs.forEach(input => {
    input.addEventListener('change', () => {
      const key = input.name;
      const value = input.value;
      localStorage.setItem(key, value);
    });
  });




