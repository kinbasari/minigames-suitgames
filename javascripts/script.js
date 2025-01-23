
let resultTimeout;
function playGame(playerChoice) {
  // Hapus hasil sebelumnya dan jeda jika ada
  clearTimeout(resultTimeout);
  document.getElementById('result').innerHTML = '';
  
  const choices = ['Gajah', 'Orang', 'Semut'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
  let result = '';
  let sound = null;
  
  if (playerChoice === computerChoice) {
    result = 'Seri';
    sound = document.getElementById('serisound');
    } else if (
      (playerChoice === 'Gajah' && computerChoice === 'Orang') ||
      (playerChoice === 'Orang' && computerChoice === 'Semut') ||
      (playerChoice === 'Semut' && computerChoice === 'Gajah')
      ) {
        result = 'Menang';
        sound = document.getElementById('correctsound');
    } else {
      result = 'Kalah';
      sound = document.getElementById('wrongsound');
      }
      
      // Tampilkan hasil setelah 1 detik
      resultTimeout = setTimeout(() => {
      document.getElementById('result').innerHTML = `
      kamu memilih: <span>${playerChoice}</span><br>
      komputer memilih: <span>${computerChoice}</span><p></p><br>
      <span class="hasilnya">${result}</span>
      `;
      if (sound) sound.play();
      }, 1000);
    }
  
