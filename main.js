// Data-driven skills and social links
const skills = [
  "Elektronika", "Web Development", "IoT", "HTML & CSS", "JavaScript", "React", "Microcontrollers"
];
const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hanif-ardiyanta-nugraha-96969b336",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="22" height="22"><path d="M19 0h-14c-2.7 0-5 2.3-5 5v14c0 2.7 2.3 5 5 5h14c2.7 0 5-2.3 5-5v-14c0-2.7-2.3-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-1 0-1.75-.82-1.75-1.75s.75-1.75 1.75-1.75 1.75.82 1.75 1.75-.75 1.75-1.75 1.75zm13.5 11.25h-3v-5.6c0-1.3-.03-2.9-1.77-2.9-1.8 0-2.07 1.4-2.07 2.82v5.68h-3v-10h2.9v1.4h.04c.4-.76 1.38-1.57 2.83-1.57 3 0 3.55 1.98 3.55 4.56v5.6z"/></svg>`
  },
  {
    name: "GitHub",
    url: "https://github.com/hanifnugrahaa",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="22" height="22"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>`
  }
  // Add more socials as needed
];

// Render skills
document.getElementById('skills-list').innerHTML =
  skills.map(skill => `<li>${skill}</li>`).join('');

// Render social links
document.getElementById('social-list').innerHTML =
  socials.map(s =>
    `<li title="${s.name}">
      <a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}">
        ${s.icon}
      </a>
    </li>`
  ).join('');

// Theme toggle
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});