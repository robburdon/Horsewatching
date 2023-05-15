/* script.js */
let selectedBoxes = 0;
let correctBoxes = document.querySelectorAll('.captchaBox[data-correct="true"]').length;

document.querySelectorAll('.captchaBox').forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('selected');
    selectedBoxes = document.querySelectorAll('.captchaBox.selected[data-correct="true"]').length;

    if (selectedBoxes === correctBoxes && 
        selectedBoxes === document.querySelectorAll('.captchaBox.selected').length) {
      document.getElementById('submit').disabled = false;
      document.getElementById('result').style.display = "block";
    } else {
      document.getElementById('submit').disabled = true;
      document.getElementById('result').style.display = "none";
    }
  });
});

// Event listener to the Unlock button
document.getElementById('submit').addEventListener('click', function() {
  window.location.href = 'https://forms.gle/et4fdK6piVUV7qxh9';
});

