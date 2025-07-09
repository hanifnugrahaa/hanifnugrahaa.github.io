// src/components/ProjectSlider.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Impor komponen Swiper
import { Navigation, Pagination } from 'swiper/modules'; // Impor modul Swiper
import 'swiper/css'; // Impor gaya dasar Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { projects } from '../data'; // Impor data proyek

// Komponen card proyek 
function ProjectCard({ project }) {
  // Logika untuk memilih antara video atau gambar
  const isVideo = project.imageUrl.endsWith('.mp4');

  return (
    <div className="project-card">
      {isVideo ? (
        <video className="project-card__image" autoPlay loop muted playsInline>
          <source src={project.imageUrl} type="video/mp4" />
        </video>
      ) : (
        <img src={project.imageUrl} alt={`Gambar Proyek ${project.name}`} className="project-card__image" loading="lazy" />
      )}
      <div className="project-card__content">
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__links">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
            Check it out on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

// Komponen slider utama
function ProjectSlider() {
  return (
    <>
    <h2 className="section-title">Featured Projects</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        className="project-slider"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ProjectSlider;