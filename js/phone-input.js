formPhone.addEventListener("focusin", function () {
  if (this.value == "") {
    this.value = "+38 0"
  }
});

formPhone.addEventListener("focusout", function () {
  if (this.value == "+38 0") {
    this.value = "";
  }
});

formPhone.addEventListener("keydown", function (event) {
  const numReg = /\d/;
  if ((this.value.length == 3 ||
    this.value.length == 7 ||
    this.value.length == 10 ||
    this.value.length == 13
  )
    && event.key.match(numReg)) {
    this.value += " ";
  }

  if ((this.value.length == 5 ||
    this.value.length == 9 ||
    this.value.length == 12 ||
    this.value.length == 15)
    &&
    event.key == "Backspace") {
    this.value = this.value.slice(0, -1);
  }

  if(event.key != "Backspace" && !event.key.match(numReg)) {
    event.preventDefault();
  }
})