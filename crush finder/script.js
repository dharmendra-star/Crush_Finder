function findCrush() {
  const yourName = document.getElementById('yourName').value.trim();
  const crushName = document.getElementById('crushName').value.trim();
  const result = document.getElementById('result');

  if (yourName === "" || crushName === "") {
    result.innerText = "Please enter both names!";
    return;
  }

  const lovePercent = Math.floor(Math.random() * 51) + 50; // 50 to 100%
  result.innerText = `${yourName} ❤️ ${crushName} = ${lovePercent}% love!`;
}
