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
document.querySelector('.diagnose-btn').addEventListener('click', async () => {
    const fileInput = document.getElementById('fileUpload');
    const file = fileInput.files[0];
    const messageBox = document.getElementById('messageBox');

    if (!file) {
        messageBox.style.display = 'block';
        messageBox.innerText = 'Please upload an image first.';
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        let prediction_name;
        if (result.prediction == 0) {
          prediction_name = "Black Sigatoka";
        } else if (result.prediction == 1) {
          prediction_name = "Fusarium Wilt";
        } else {
          prediction_name = "Healthy";
        }
        messageBox.style.display = 'block';
        messageBox.innerText = `Diagnosis: ${prediction_name}`;
    } catch (error) {
        messageBox.style.display = 'block';
        messageBox.innerText = 'Error during diagnosis. Please try again.';
        console.error(error);
    }
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
