document.addEventListener("DOMContentLoaded", typeWriter);

let i = 0;
const text = "Miho Funayama";
const space = "&nbsp;"; // to insert empty space
const speed = 300;
let isDeleting = false;

function typeWriter() {
  const nameElement = document.getElementById("nameType");

if (!isDeleting) {
  // adding characters
  if (i < text.length) {
    nameElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    isDeleting = true;
    setTimeout(typeWriter, speed);
  }
} else {
  // deleting characters
  if (i > 1) {
    // text[0]からtext[i - 1]まで表示
    nameElement.innerHTML = text.substring(0, i - 1);
    i--;
    setTimeout(typeWriter, speed);
  } else {
    nameElement.innerHTML = space;
    i--;
    isDeleting = false;
    setTimeout(typeWriter, speed);
  }
}
}
