window.addEventListener('resize', function() {
  const header = document.getElementById("header");
  header.style.width = document.documentElement.scrollWidth;
});

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
  let nonValid = "";
  formName.addEventListener("input", function () { validityCheck(this, /^[a-zа-яіїґєґ]{5,}$/i) });
  formSurname.addEventListener("input", function () { validityCheck(this, /^[a-zа-яіїґєґ]{5,}$/i) });
  formInterested.addEventListener("input", function () { validityCheck(this, /(developer)|(qa)/i) });
  formPhone.addEventListener("input", function () { validityCheck(this) });
  formEmail.addEventListener("input", function () { validityCheck(this) });

  nonValid += validityCheck(formName, /[a-zа-яіїґєґ]{5,}/i);
  nonValid += validityCheck(formSurname, /[a-zа-яіїґєґ]{5,}/i);
  nonValid += validityCheck(formInterested, /(developer)|(qa)/i);
  nonValid += validityCheck(formPhone);
  nonValid += validityCheck(formEmail);

  if (nonValid != ""){
    alert(`Виправіть будь ласка дані помилки: ${nonValid}`);
    return;  
  }

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
      return "";
    }
    target.classList.add('form-input-wrong');
    return `\n${target.placeholder}`;
  }

  if (target.value.match(pattern) != null) {
    target.classList.remove('form-input-wrong');
    return "";
  }
  target.classList.add('form-input-wrong');
  return `\n${target.placeholder}`;
}


// site dev slider
$(document).ready(function() {
  $('.site-dev-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1, 
      infinite: false,
      centerMode: true,
      autoplay: false,
      centerPadding: 30,
      responsive: [
          {
              breakpoint: 850,
              settings: {
                  slidesToShow: 2,
                  dots: true,
                  infinite: true,
                  initialSlide: 1
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  dots: true,
                  infinite: true
              }
          }
      ]
  })
})


// mentors slider
$(document).ready(function() {
  $('.mentors-slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    adaptiveHeight: false,
    mobileFirst: true
  });
})


// scroll behavior
window.addEventListener("scroll", scrollCheck);

function scrollCheck() {
  const targets = document.getElementsByClassName("jump-block");
  for (i = 0; i < targets.length; i++) {
    targetsVisibilityCheck(targets[i], targets[i - 1], targets[i + 1])
  }
}

setTimeout(scrollCheck, 10);

function targetsVisibilityCheck(target, prevTarget, nextTarget) {
  const rect = target.getBoundingClientRect();
  const prevRect = prevTarget != undefined ? prevTarget.getBoundingClientRect() : 0;
  const nextRect = nextTarget != undefined ? nextTarget.getBoundingClientRect() : 0;

  if (prevTarget != undefined && nextTarget != undefined)
    changeStyle(target.id, (prevRect.bottom < 100 && rect.bottom >= 100 && nextRect.top > 100));

  if (prevTarget == undefined && nextTarget != undefined)
    changeStyle(target.id, (rect.bottom >= 100 && nextRect.top > 100));

  if (prevTarget != undefined && nextTarget == undefined)
    changeStyle(target.id, (prevRect.bottom < 100 && rect.bottom >= 100));
}


function changeStyle(targetId, result) {
  if (result) {
    document.getElementById(`${targetId}-ancor`).classList.add("active");
  }
  else {
    document.getElementById(`${targetId}-ancor`).classList.remove("active");
  }
}


// stats 
const courses = document.getElementById("courses");
const hours = document.getElementById("hours");
const students = document.getElementById("students");
const employed = document.getElementById("employed");

let letImagineGeneratedJson = {
  courses:25,
  hours: 836,
  students: 500,
  employed: 120
}

courses.textContent = letImagineGeneratedJson.courses;
hours.textContent = letImagineGeneratedJson.hours;
students.textContent = letImagineGeneratedJson.students;
employed.textContent = letImagineGeneratedJson.employed;


// testimonials slider

$(document).ready(function () {
  $('.testimonials-slides').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 10000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true
  });
});
