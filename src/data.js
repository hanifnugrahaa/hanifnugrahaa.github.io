export const skills = [
    
  "Problem Solving",
  "Data Structures",
  "Algorithms",
  "Object-Oriented Programming (OOP)",

  // --- Bahasa Pemrograman ---
  "Python",
  "Java",
  "JavaScript",
  "Kotlin",
  "C++",
  "HTML & CSS",

  // --- Front-End & Back-End ---
  "Web Development",
  "React",
  "Node.js",
  "RESTful APIs",
  "Responsive Design",
  "UI/UX",
  "MySQL",
  "Firebase",

  // --- Pengembangan Mobile ---
  "Android Development",

  // --- IoT  ---
  "IoT",
  "Embedded Systems",
  "Socket Programming",
  "Elektronika",
  "Arduino",
  "ESP32",

  // --- Teknologi Lainnya ---
  "Git",
  "Docker"
];

export const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hanifardiyantanugraha",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M19 0h-14c-2.7 0-5 2.3-5 5v14c0 2.7 2.3 5 5 5h14c2.7 0 5-2.3 5-5v-14c0-2.7-2.3-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-1 0-1.75-.82-1.75-1.75s.75-1.75 1.75-1.75 1.75.82 1.75 1.75-.75 1.75-1.75 1.75zm13.5 11.25h-3v-5.6c0-1.3-.03-2.9-1.77-2.9-1.8 0-2.07 1.4-2.07 2.82v5.68h-3v-10h2.9v1.4h.04c.4-.76 1.38-1.57 2.83-1.57 3 0 3.55 1.98 3.55 4.56v5.6z"/></svg>`
  },
  {
    name: "GitHub",
    url: "https://github.com/hanifnugrahaa",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>`
  }
];

export const projects = [
  {
    name: "IoT Data Logger",
    description: "This project connects an ESP32 to Firebase Realtime Database to periodically log sensor data with a timestamp. It demonstrates real-time data logging and retrieval using Firebase, making it suitable for IoT applications.",
    // SCREENSHOT GAMBAR PROJECT
    imageUrl: "/assets/images/iot logger.png",
    // LINK GITHUB PROYEK INI
    githubUrl: "https://github.com/hanifnugrahaa/firebase-iot-logger" 
  },
  {
    name: "4-DOF Arduino-Based Robotic Arm",
    description: "A 4-DOF (Degree of Freedom) robotic arm prototype controlled by an Arduino. It implements several servo motors for precise movement in performing simple pick-and-place tasks.",
    // VIDEO PROJECT
    imageUrl: "/assets/videos/arm robot.mp4",
    // LINK GITHUB PROYEK INI
    githubUrl: "https://github.com/hanifnugrahaa/Arduino-Robot-Arm-Controller"
  },
  {
    name: "Desktop Cashier Application (Java)",
    description: "This application is designed to support bakery owners in managing production and sales. It features ingredient composition calculations for various bread types, alongside production cost analysis and selling price determination. Developed using Java's Object-Oriented Programming (OOP) concepts, the system ensures a modular structure for future development according to business needs.",
    // SCREENSHOT GAMBAR PROJECT
    imageUrl: "/assets/images/bakery shop.png",
    // LINK GITHUB PROYEK INI
    githubUrl: "https://github.com/hanifnugrahaa/Bakery-shop-program"
  },
  {
    name: "Student Data Management System",
    description: "A Python program to record and manage student grade data. This program can add student data (such as Student ID, Name, Grades, and Average Score), display the stored data in a tabular format along with the highest and lowest average scores, and save the data to a file for analysis.",
    // SCREENSHOT GAMBAR PROJECT
    imageUrl: "/assets/images/student grades.png",
    // LINK GITHUB PROYEK INI
    githubUrl: "https://github.com/hanifnugrahaa/student-grades-app"
  },
  {
    name: "Elins Research Club (ERC) UGM Website",
    description: "Responsible for maintaining and updating the user interface (UI) for erc.elins.id, a platform showcasing research projects and achievements for the Electronics and Instrumentation student community at UGM.",
    // SCREENSHOT GAMBAR PROJECT
    imageUrl: "/assets/images/web-erc.png",
    // LINK GITHUB PROYEK INI
    githubUrl: "https://erc.elins.id/"
  },
  {
    name: "Arithmetic Game Java",
    description: "Developed an educational game that runs entirely in a console environment, built with Java. The application interactively presents addition and subtraction problems to help children learn calculation in a focused, distraction-free interface. Core features include a scoring system to track progress and a lives system for a challenging, game-like experience.",
    // SCREENSHOT GAMBAR PROJECT
    imageUrl: "/assets/images/arithmetic-game.png",
    // LINK GITHUB PROYEK INI
    githubUrl: "https://github.com/hanifnugrahaa/arithmetics-game"
  },
  {
    name: "Smart Plant Watering System PLC",
    description: "A complete schematic and PLC ladder logic design for an automated system that maintains optimal plant health. The design integrates temperature, soil moisture, and NPK sensors to intelligently control actuators ensuring ideal growing conditions are met autonomously. This project serves as the engineering blueprint for the physical implementation of a smart agriculture system.",
    // SCREENSHOT GAMBAR PROJECT
    imageUrl: "/assets/images/plc-smartplant.png",
    // LINK GITHUB PROYEK INI
    githubUrl: "https://github.com/hanifnugrahaa/PLC-Design-Scheme-Smart-Plant-Watering-System"
  }
  ];