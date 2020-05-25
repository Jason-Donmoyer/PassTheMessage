const message = document.getElementById('message');
const button = document.querySelector('button');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  if (message.value === '') {
    alert('Please Enter a Message!');
  }
  output.innerText = message.value;
  message.value = '';
});

document.addEventListener('keydown', logKey);

function logKey(e) {
  if (e.code === 'Enter') {
    if (message.value === '') {
      alert('Please Enter a Message!');
    }
    output.innerText = message.value;
    message.value = '';
  }
}