
let resultTimeout;
function playGame(playerChoice) {
  // Hapus hasil sebelumnya dan jeda jika ada
  clearTimeout(resultTimeout);
  document.getElementById('result').innerHTML = '';
  
  const choices = ['Gajah', 'Manusia', 'Semut'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
  let result = '';
  let sound = null;
  
  if (playerChoice === computerChoice) {
    result = 'Seri';
    sound = document.getElementById('serisound');
    } else if (
      (playerChoice === 'Gajah' && computerChoice === 'Manusia') ||
      (playerChoice === 'Manusia' && computerChoice === 'Semut') ||
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
  
// Sound button
// Ambil elemen audio berdasarkan ID
const buttonSound = document.getElementById('buttonSound');

// Fungsi untuk memutar suara tombol
function playButtonSound() {
  buttonSound.currentTime = 0; // Reset audio ke awal
  buttonSound.play();
}

// Tambahkan event listener ke semua tombol dengan kelas 'play-sound'
const buttons = document.querySelectorAll('#play-pressbtn');
buttons.forEach(button => {
  button.addEventListener('click', playButtonSound);
});
