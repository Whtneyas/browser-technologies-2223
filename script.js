// const radios = document.querySelectorAll('.grade-scale input[type="radio"]');
// const output = document.getElementById('output');

// radios.forEach(radio => {
//   radio.addEventListener('change', (event) => {
//     output.innerHTML = `You selected option ${event.target.value}.`;
//   });
// });



console.log('hello')
//Variabele
const textAreas = document.querySelectorAll('textarea');
const formInputs = document.querySelectorAll('input[type="text"] , input[type="email"]');
let formRadios = document.querySelectorAll('input[type="radio"]');
const testRadioButtons = document.querySelectorAll('input[type="radio"]')
const email = document.getElementById("email");
// const textarea = document.querySelector('textarea');
// var messageDisplayed = false;



//---------------------------Show the value that the user chose

testRadioButtons.forEach(button => {
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
          document.querySelector('.results1').innerHTML = `Je geeft de lesstof een ${getRadioValue}.`
          break;
        case 'Css-grade2':
          document.querySelector('.results2').innerHTML = `Je geeft de uitleg een ${getRadioValue}.`
          break;
        case 'Css-grade3':
          document.querySelector('.results3').innerHTML = `Je geeft je eigen inzicht een ${getRadioValue}.`
          break;
        case 'pwa-lesstof-beoordeling':
          document.querySelector('.results1').innerHTML = `Je geeft de lesstof een ${getRadioValue}.`
          break;
        case 'pwa-uitleg-beoordeling':
          document.querySelector('.results2').innerHTML = `Je geeft de uitleg een ${getRadioValue}.`
          break;
        case 'pwa-eigen-inzicht':
          document.querySelector('.results3').innerHTML = `Je geeft je eigen inzicht een ${getRadioValue}.`
          break;
        case 'brotech-lesstof-beoordeling':
          document.querySelector('.results1').innerHTML = `Je geeft de lesstof een ${getRadioValue}.`
          break;
        case 'brotech-uitleg-beoordeling':
          document.querySelector('.results2').innerHTML = `Je geeft de uitleg een ${getRadioValue}.`
          break;
        case 'brotech-eigen-inzicht':
          document.querySelector('.results3').innerHTML = `Je geeft je eigen inzicht een ${getRadioValue}.`
          break;
        case 'realtimeweb-lesstof-beoordeling':
          document.querySelector('.results1').innerHTML = `Je geeft de lesstof een ${getRadioValue}.`
          break;
        case 'realtimeweb-uitleg-beoordeling':
          document.querySelector('.results2').innerHTML = `Je geeft de uitleg een ${getRadioValue}.`
          break;
        case 'realtimeweb-eigen-inzicht':
          document.querySelector('.results3').innerHTML = `Je geeft je eigen inzicht een ${getRadioValue}.`
          break;
        case 'human-centred-design-lesstof-beoordeling':
          document.querySelector('.results1').innerHTML = `Je geeft de lesstof een ${getRadioValue}.`
          break;
        case 'human-centred-design-uitleg-beoordeling':
          document.querySelector('.results2').innerHTML = `Je geeft de uitleg een ${getRadioValue}.`
          break;
        case 'human-centred-design-eigen-inzicht':
          document.querySelector('.results3').innerHTML = `Je geeft je eigen inzicht een ${getRadioValue}.`
          break;
        case 'meesterproef-lesstof-beoordeling':
          document.querySelector('.results1').innerHTML = `Je geeft de lesstof een ${getRadioValue}.`
          break;
        case 'meesterproef-uitleg-beoordeling':
          document.querySelector('.results2').innerHTML = `Je geeft de uitleg een ${getRadioValue}.`
          break;
        case 'meesterproef-eigen-inzicht':
          document.querySelector('.results3').innerHTML = `Je geeft je eigen inzicht een ${getRadioValue}.`
          break;
        case 'weekly-nerd-lesstof-beoordeling':
          document.querySelector('.results1').innerHTML = `Je geeft de lesstof een ${getRadioValue}.`
          break;
        case 'weekly-nerd-uitleg-beoordeling':
          document.querySelector('.results2').innerHTML = `Je geeft de uitleg een ${getRadioValue}.`
          break;
        case 'weekly-nerd-eigen-inzicht':
          document.querySelector('.results3').innerHTML = `Je geeft je eigen inzicht een ${getRadioValue}.`
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