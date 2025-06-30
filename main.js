// Data-driven skills, social links, and projects
const skills = [
  "Elektronika", "Web Development", "IoT", "HTML & CSS", "JavaScript", "React", "Arduino", "ESP32", "Java", "Embedded Systems", "OOP", "Firebase", "MySQL", 
  "Node.js", "Python", "C++", "Git", "Responsive Design", "UI/UX"
];

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hanif-ardiyanta-nugraha-96969b336",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M19 0h-14c-2.7 0-5 2.3-5 5v14c0 2.7 2.3 5 5 5h14c2.7 0 5-2.3 5-5v-14c0-2.7-2.3-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-1 0-1.75-.82-1.75-1.75s.75-1.75 1.75-1.75 1.75.82 1.75 1.75-.75 1.75-1.75 1.75zm13.5 11.25h-3v-5.6c0-1.3-.03-2.9-1.77-2.9-1.8 0-2.07 1.4-2.07 2.82v5.68h-3v-10h2.9v1.4h.04c.4-.76 1.38-1.57 2.83-1.57 3 0 3.55 1.98 3.55 4.56v5.6z"/></svg>`
  },
  {
    name: "GitHub",
    url: "https://github.com/hanifnugrahaa",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>`
  }
];

const projects = [
  {
    name: "IoT Data Logger",
    description: "Proyek ini menghubungkan ESP32 ke Firebase Realtime Database untuk mencatat data integer dan float secara periodik dengan timestamp.",
    // SCREENSHOT GAMBAR PROJECT
    imageUrl: "https://via.placeholder.com/400x220/EAEAEA/333333?text=IoT+Temp+Monitor", 
    // LINK GITHUB PROYEK INI
    githubUrl: "https://github.com/hanifnugrahaa/firebase-iot-logger" 
    // DEMO LANGSUNG, TAMBAHKAN BARIS INI:
    // liveUrl: "https://link-demo-website.com" 
  },
  {
    name: "Arm Robot 4-DOF Berbasis Arduino",
    description: "Prototipe lengan robot 4-DOF (Degree of Freedom) yang dikontrol menggunakan Arduino. Mengimplementasikan beberapa motor servo untuk pergerakan presisi dalam melakukan tugas pick-and-place sederhana.",
    // SCREENSHOT GAMBAR PROJECT
    imageUrl: "https://via.placeholder.com/400x220/EAEAEA/333333?text=Robotic+Arm",
    // LINK GITHUB PROYEK INI
    githubUrl: "https://github.com/hanifnugrahaa/Arduino-Robot-Arm-Controller"
  },
  {
    name: "Sistem Manajemen Toko Roti (Java)",
    description: "Program ini dirancang untuk mendukung pemilik toko roti dalam mengelola produksi dan penjualan. Dengan fitur perhitungan komposisi bahan untuk berbagai jenis roti serta analisis biaya produksi dan penetapan harga jual. Dikembangkan menggunakan konsep OOP Java, sistem ini memastikan struktur yang modular untuk dikembangkan sesuai kebutuhan bisnis.",
    // SCREENSHOT GAMBAR PROJECT
    imageUrl: "https://via.placeholder.com/400x220/EAEAEA/333333?text=Java+Bakery+App",
    // LINK GITHUB PROYEK INI
    githubUrl: "https://github.com/hanifnugrahaa/Bakery-shop-program"
  },
  {
    name: "Sistem Pengelolaan Data Mahasiswa",
    description: "Program dengan python untuk mencatat dan mengelola data nilai mahasiswa. Program ini dapat menambahkan data mahasiswa (seperti ID Student, Name, Grade, dan Rata-rata nilai), menampilkan data yang tersimpan dalam bentuk tabel beserta nilai rata-rata tertinggi dan terendah, serta menyimpan data ke dalam file untuk dapat dianalisis.",
    // SCREENSHOT GAMBAR PROJECT
    imageUrl: "https://via.placeholder.com/400x220/EAEAEA/333333?text=Robotic+Arm",
    // LINK GITHUB PROYEK INI
    githubUrl: "https://github.com/hanifnugrahaa/student-grades-app"
  }
];

// --- RENDER FUNCTIONS ---
function renderSkills() {
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = skills.map(skill => `<li>${skill}</li>`).join('');
}

function renderSocials() {
    const socialList = document.getElementById('social-list');
    socialList.innerHTML = socials.map(s => `
        <li>
            <a href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.name}" title="${s.name}">
                ${s.icon}
            </a>
        </li>`).join('');
}

function renderProjects() {
  const projectsContainer = document.getElementById('projects-container'); // Ganti dari projects-grid
  if (!projectsContainer) return;

  projectsContainer.innerHTML = projects.map(p => `
      <div class="swiper-slide">
          <div class="project-card">
              <img src="${p.imageUrl}" alt="Gambar Proyek ${p.name}" class="project-card__image" loading="lazy" />
              <div class="project-card__content">
                  <h3 class="project-card__title">${p.name}</h3>
                  <p class="project-card__description">${p.description}</p>
                  <div class="project-card__links">
                      ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-card__link">Lihat Demo</a>` : ''}
                      <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-card__link">Lihat di GitHub</a>
                  </div>
              </div>
          </div>
      </div>
  `).join('');
}

// --- THEME TOGGLE ---
// --- THEME TOGGLE ---
function setupThemeToggle() {
  const toggleBtn = document.getElementById('toggle-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  
  const applyTheme = (theme) => {
      if (theme === 'dark') {
          document.body.classList.add('dark');
          toggleBtn.setAttribute('aria-checked', 'true'); // Update untuk aksesibilitas
      } else {
          document.body.classList.remove('dark');
          toggleBtn.setAttribute('aria-checked', 'false'); // Update untuk aksesibilitas
      }
  };

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      applyTheme(savedTheme);
  } else {
      applyTheme(prefersDark.matches ? 'dark' : 'light');
  }

  toggleBtn.addEventListener('click', () => {
      const isDarkMode = document.body.classList.toggle('dark');
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      toggleBtn.setAttribute('aria-checked', isDarkMode ? 'true' : 'false'); // Update saat di-klik
  });
}

// --- SCROLL ANIMATION ---
function setupScrollAnimation() {
    const sections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.setAttribute('data-visible', 'true');
                observer.unobserve(entry.target); // Optional: unobserve after it becomes visible
            }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of the element is visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// --- SWIPER INITIALIZATION ---
function setupProjectSlider() {
  const swiper = new Swiper('.project-slider', {
    // Opsi dasar
    loop: true, // Membuat slider berputar tanpa henti
    slidesPerView: 1, // Menampilkan 1 slide per tampilan di mobile
    spaceBetween: 30, // Jarak antar slide

    // Pagination (titik-titik di bawah)
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation (tombol panah)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Breakpoints untuk tampilan responsif
    breakpoints: {
      // Ketika lebar layar 768px atau lebih
      768: {
        slidesPerView: 2, // Tampilkan 2 slide
        spaceBetween: 30
      },
    }
  });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Render all dynamic content
    renderSkills();
    renderSocials();
    renderProjects();
    
    // Setup interactive features
    setupThemeToggle();
    setupScrollAnimation();
    setupProjectSlider();

    // GANTI DENGAN URL FOTO ASLIMU
    // document.getElementById('avatar').src = 'url_foto_profil_keren.jpg'; 
});

