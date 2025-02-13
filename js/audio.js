let myAudio = new Audio("img/youtube_GLej7nXMVbU_audio (mp3cut.net).mp3");

// Event listener untuk memulai pemutaran audio hanya setelah klik tombol
document.getElementById("startButton").addEventListener("click", function() {
    if (myAudio.paused) {
        myAudio.play();  // Memulai audio setelah tombol diklik
    }
});

// Simpan posisi audio sebelum berpindah halaman
window.onbeforeunload = function() {
    localStorage.setItem("audioPosition", myAudio.currentTime);
};

// Ketika halaman dimuat, lanjutkan pemutaran dari posisi yang tersimpan
window.onload = function() {
    // Mengambil posisi audio terakhir dari localStorage
    let lastPosition = localStorage.getItem("audioPosition");
    if (lastPosition) {
        myAudio.currentTime = lastPosition;  // Set posisi audio
    }
};