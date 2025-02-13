window.onload = function () {
    // Hapus class "container" setelah window dimuat
    document.body.classList.remove("container");

    // Buat audio object
    let myAudio = new Audio("img/youtube_GLej7nXMVbU_audio (mp3cut.net) 2.mp3");

    // Menambahkan event listener untuk interaksi pengguna agar pemutaran audio bisa dimulai
    document.body.addEventListener('click', function() {
        if (myAudio.paused) {
            myAudio.play(); // Memulai audio setelah interaksi pengguna
        }
    });

    // Simpan posisi audio jika berpindah halaman
    window.onbeforeunload = function() {
        localStorage.setItem("audioPosition", myAudio.currentTime);
    };

    // Lanjutkan audio dari posisi terakhir jika ada
    let lastPosition = localStorage.getItem("audioPosition");
    if (lastPosition) {
        myAudio.currentTime = lastPosition;  // Set posisi audio
    }
};