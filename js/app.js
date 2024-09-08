$("#burger").change(function () {
  $("#burger-check").prop("checked", this.checked);
});

const policyCheck = document.getElementById('form-policy');
const formSumbit = document.getElementById('form-sumbit');
function checkPolicy() {
  if (!policyCheck.checked) {
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

formSumbit.addEventListener("click", function () {
  let valid = true;
  formName.addEventListener("input", function () { validityCheck(this, /^[a-zа-яіїґєґ]{5,}$/i) });
  formSurname.addEventListener("input", function () { validityCheck(this, /^[a-zа-яіїґєґ]{5,}$/i) });
  formInterested.addEventListener("input", function () { validityCheck(this, /(developer)|(qa)/i) });
  formPhone.addEventListener("input", function () { validityCheck(this) });
  formEmail.addEventListener("input", function () { validityCheck(this) });

  valid &= validityCheck(formName, /[a-zа-яіїґєґ]{5,}/i);
  valid &= validityCheck(formSurname, /[a-zа-яіїґєґ]{5,}/i);
  valid &= validityCheck(formInterested, /(developer)|(qa)/i);
  valid &= validityCheck(formPhone);
  valid &= validityCheck(formEmail);

  console.log("hie, it is before fetching");
  
  fetch("https://xhyeuwx.localto.net/hellow.html")
    .then(response => response.text())
    .then(html => {
      console.log(html);
    })
    .catch(error => {
      console.error(`Error fetching the HTML: ${error}`);
    })
  console.log("hie, it is after fetching!!!");
  
  if (!valid)
    return;

  formSumbit.style.backgroundColor = '#40a617';
  formSumbit.style.cursor = 'default';
  formSumbit.textContent = 'Зареєстровано';
  formSumbit.disabled = true;
  policyCheck.disabled = true;
});


function validityCheck(target, pattern = null) {
  if (pattern == null) {
    if (target.validity.valid) {
      target.classList.remove('form-input-wrong');
      return true;
    }
    target.classList.add('form-input-wrong');
    return false;
  }

  if (target.value.match(pattern) != null) {
    target.classList.remove('form-input-wrong');
    return true;
  }
  target.classList.add('form-input-wrong');
  return false;
}