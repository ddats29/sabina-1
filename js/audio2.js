let myAudio = new Audio("img/youtube_GLej7nXMVbU_audio (mp3cut.net).mp3");

        // Fungsi untuk memulai audio setelah klik tombol
        document.getElementById("startButton").addEventListener("click", function() {
            if (myAudio.paused) {
                myAudio.play();  // Mulai memutar audio saat tombol diklik
            }
        });

        // Setiap kali halaman dimuat, periksa apakah audio sedang diputar
        window.onload = function() {
            // Cek apakah audio sudah diputar, jika tidak, lanjutkan dari posisi terakhir
            let lastPosition = localStorage.getItem("audioPosition");
            if (lastPosition) {
                myAudio.currentTime = lastPosition;  // Set posisi audio
                myAudio.play();  // Lanjutkan pemutaran
            }
        };

        // Simpan posisi audio saat berpindah halaman
        window.onbeforeunload = function() {
            localStorage.setItem("audioPosition", myAudio.currentTime);
        };