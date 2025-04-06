// Mengambil elemen toggle
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const themeText = document.getElementById('theme-text');
        
        // Fungsi untuk mengatur tema
        function switchTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                // Beralih ke tema terang
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeIcon.textContent = '☀️';
                themeText.textContent = 'Switch to Dark Mode';
            } else {
                // Beralih ke tema gelap
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeIcon.textContent = '🌙';
                themeText.textContent = 'Switch to Light Mode';
            }
        }
        
        // Event listener untuk tombol toggle
        themeToggle.addEventListener('click', switchTheme);
        
        // Memeriksa preferensi tema yang disimpan
        const currentTheme = localStorage.getItem('theme');
        
        // Jika preferensi tema sudah ada, terapkan
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            
            // Update tampilan tombol sesuai tema
            if (currentTheme === 'dark') {
                themeIcon.textContent = '🌙';
                themeText.textContent = 'Switch to Light Mode';
            }
        } else {
            // Memeriksa preferensi tema sistem
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
            
            if (prefersDarkScheme.matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeIcon.textContent = '🌙';
                themeText.textContent = 'Switch to Light Mode';
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        }

document.addEventListener('DOMContentLoaded', function() {
  // Cek elemen king ada di halaman ini
  if (document.getElementById('volume-toggle-king')) {
    const toggleBtnKing = document.getElementById('volume-toggle-king');
    const volumeIconsKing = toggleBtnKing.querySelectorAll('i');
    const bgMusicKing = document.getElementById('bg-music-king');
    let isMutedKing = true;

    toggleBtnKing.addEventListener('click', function(e) {
      e.preventDefault();
      
      if(isMutedKing) {
        bgMusicKing.volume = 0.3;
        bgMusicKing.play().catch(e => console.log("Autoplay blocked:", e));
        volumeIconsKing[0].style.display = 'none';
        volumeIconsKing[1].style.display = 'flex';
      } else {
        bgMusicKing.volume = 0;
        volumeIconsKing[1].style.display = 'none';
        volumeIconsKing[0].style.display = 'flex';
      }
      
      isMutedKing = !isMutedKing;
    });
  }

  // Cek elemen queen ada di halaman ini
  if (document.getElementById('volume-toggle-queen')) {
    const toggleBtnQueen = document.getElementById('volume-toggle-queen');
    const volumeIconsQueen = toggleBtnQueen.querySelectorAll('i');
    const bgMusicQueen = document.getElementById('bg-music-queen');
    let isMutedQueen = true;

    toggleBtnQueen.addEventListener('click', function(e) {
      e.preventDefault();
      
      if(isMutedQueen) {
        bgMusicQueen.volume = 0.3;
        bgMusicQueen.play().catch(e => console.log("Autoplay blocked:", e));
        volumeIconsQueen[0].style.display = 'none';
        volumeIconsQueen[1].style.display = 'flex';
      } else {
        bgMusicQueen.volume = 0;
        volumeIconsQueen[1].style.display = 'none';
        volumeIconsQueen[0].style.display = 'flex';
      }
      
      isMutedQueen = !isMutedQueen;
    });
  }
  
  // Cek elemen princess ada di halaman ini
  if (document.getElementById('volume-toggle-princess')) {
    const toggleBtnQueen = document.getElementById('volume-toggle-princess');
    const volumeIconsQueen = toggleBtnQueen.querySelectorAll('i');
    const bgMusicQueen = document.getElementById('bg-music-princess');
    let isMutedQueen = true;

    toggleBtnQueen.addEventListener('click', function(e) {
      e.preventDefault();
      
      if(isMutedQueen) {
        bgMusicQueen.volume = 0.3;
        bgMusicQueen.play().catch(e => console.log("Autoplay blocked:", e));
        volumeIconsQueen[0].style.display = 'none';
        volumeIconsQueen[1].style.display = 'flex';
      } else {
        bgMusicQueen.volume = 0;
        volumeIconsQueen[1].style.display = 'none';
        volumeIconsQueen[0].style.display = 'flex';
      }
      
      isMutedQueen = !isMutedQueen;
    });
  }
  
  // Cek elemen sparta ada di halaman ini
  if (document.getElementById('volume-toggle-sparta')) {
    const toggleBtnQueen = document.getElementById('volume-toggle-sparta');
    const volumeIconsQueen = toggleBtnQueen.querySelectorAll('i');
    const bgMusicQueen = document.getElementById('bg-music-sparta');
    let isMutedQueen = true;

    toggleBtnQueen.addEventListener('click', function(e) {
      e.preventDefault();
      
      if(isMutedQueen) {
        bgMusicQueen.volume = 0.3;
        bgMusicQueen.play().catch(e => console.log("Autoplay blocked:", e));
        volumeIconsQueen[0].style.display = 'none';
        volumeIconsQueen[1].style.display = 'flex';
      } else {
        bgMusicQueen.volume = 0;
        volumeIconsQueen[1].style.display = 'none';
        volumeIconsQueen[0].style.display = 'flex';
      }
      
      isMutedQueen = !isMutedQueen;
    });
  }
});