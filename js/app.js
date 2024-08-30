$("#burger").change(function () {
    $("#burger-check").prop("checked", this.checked);
  });

const policyCheck = document.getElementById('form-policy');
const formSumbit = document.getElementById('form-sumbit');
function checkPolicy() {
  if(!policyCheck.checked) {
    formSumbit.disabled = true;
  }
  else {
    formSumbit.disabled = false;
  }
};

policyCheck.addEventListener('click', checkPolicy);
checkPolicy();

const formName = document.getElementById('form-name');
const formSurname = document.getElementById('form-surname');
const formInterested = document.getElementById('form-interested-in');
const formPhone = document.getElementById('form-phone');
const formEmail = document.getElementById('form-email');

formSumbit.addEventListener('click', function() {
  let valid = true;
  valid &= validity(formName);
  valid &= validity(formSurname);
  valid &= validity(formInterested);
  valid &= validity(formPhone);
  valid &= validity(formEmail);

  if(!valid)
    return;

  formName.classList.remove('form-input-wrong');
  formSurname.classList.remove('form-input-wrong');
  formInterested.classList.remove('form-input-wrong');
  formPhone.classList.remove('form-input-wrong');
  formEmail.classList.remove('form-input-wrong');

  formSumbit.style.backgroundColor = '#40a617';
  formSumbit.style.cursor = 'default';
  formSumbit.textContent = 'Зареєстровано';

  formSumbit.disabled=true;
  policyCheck.disabled=true;
})

function validity(target) {
  if(!target.checkValidity()){
    target.classList.add('form-input-wrong');
  }
  return target.checkValidity();
}