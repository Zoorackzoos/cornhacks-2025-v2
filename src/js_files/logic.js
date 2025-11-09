// Image Preview
const fileInput = document.getElementById('fileUpload');
const preview = document.getElementById('preview');

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.src = e.target.result;
      preview.style.display = 'block';
    }
    reader.readAsDataURL(file);
  }
});
document.querySelector('.diagnose-btn').addEventListener('click', () => {
  const box = document.getElementById("messageBox");
  typeEachCharacter('Processing image... please wait.',box)
  box.style.display = "block";
});

function typeEachCharacter(message, container, interval = 20) {
  const char = message.split('');
  let i = 0;
  container.textContent = '';

  function appendCharacter() {
    if (i < char.length) {
      container.textContent += char[i];
      i++;
      setTimeout(appendCharacter, interval);
    }
  }

  appendCharacter();
}
