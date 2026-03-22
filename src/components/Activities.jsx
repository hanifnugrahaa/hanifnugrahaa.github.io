// src/components/Activities.jsx
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';


import {myActivities, projects} from '../data';
import './Activities.css';

const Activities = () =>{
    return(
        <div className="carousel-activity">
            <div className="activities-header">
                <h2 className="activities-title">Recent Activities</h2>
            </div>

            <div className="activity-container">
                {/* {Button Prev} */}
                <button className="activity-nav-btn swiper-button-prev-custom" aria-label="Previous Activity">
                    <ChevronLeft size={24}/>
                </button>

                <div className="activity-swiper-container">
                <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: '.swiper-button-prev-custom',
                    prevEl: ".swiper-button-next-custom",
                }}
                pagination={{ clickable: true, el: '.custom-pagination'}}
                spaceBetween={12}
                slidesPerView='auto'
                centeredSlides={true}
                loop={true}
                speed={600}
                className="activity-swiper"
                >
                {myActivities.map((myActivity, index) => (
                    <SwiperSlide key={index} className="activity-slide">
                    
                    </SwiperSlide>
                ))}
                </Swiper>
                </div>

                {/* Button Next */}
                <button className="activity-nav-btn swiper-button-next-custom" aria-label="Next Activity">
                    <ChevronRight size={24}/>
                </button>
            </div>
        </div>
    );
}