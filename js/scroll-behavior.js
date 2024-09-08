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