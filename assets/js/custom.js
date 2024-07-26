let i = 0;
const text = "Miho Funayama";
const speed = 50;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("nameType").innerHTML += text.charAt(i);
    i++;
    setTimeout(() => {
      typeWriter
    }, speed);
  }
}
