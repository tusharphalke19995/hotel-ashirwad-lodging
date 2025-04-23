"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  return (
    <>
      <section className="banner-section p_relative">
        <Swiper {...swiperOptions} className="banner-carousel">
          <SwiperSlide className="slide-item p_relative">
            <div
              className="swiper-slide"
              style={{
                backgroundImage: "url(assets/images/main-slider/banner-1.jpg)",
              }}
            >
              <div className="content-outer">
                <div className="content-box justify-content-center text-center">
                  <div className="inner">
                    <h4>Summer Vacations</h4>
                    <h2 className="color_light">
                    Where Every Stay is  <br />a Story
                     
                    </h2>
                    <div className="text">
                    Where Nature Meets Luxury: Stay {" "}
                      <br />at Hotel Ashirwad
                    </div>
                    <div className="link-box">
                      <Link href="/room" className="btn-1">
                        Book Room <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item p_relative">
            <div
              className="swiper-slide"
              style={{
                backgroundImage: "url(assets/images/main-slider/banner-2.jpg)",
              }}
            >
              <div className="content-outer">
                <div className="content-box justify-content-center text-center">
                  <div className="inner">
                    <h4>Summer Vacations</h4>
                    <h2 className="color_light">
                    Experience Tranquility in<br />Splendor
                    </h2>
                    <div className="text">
                    Breathtaking Views and Unmatched Luxury at Hotel Ashirwad{" "}
                      <br /> at Hotel Ashirwad
                    </div>
                    <div className="link-box">
                      <Link href="/room" className="btn-1">
                        Book Room <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item p_relative">
            <div
              className="swiper-slide"
              style={{
                backgroundImage: "url(assets/images/main-slider/banner-3.jpg)",
              }}
            >
              <div className="content-outer">
                <div className="content-box justify-content-center text-center">
                  <div className="inner">
                    <h4>Summer Vacations</h4>
                    <h2 className="color_light">
                    Indulge in Unmatched<br /> Luxury
                     
                    </h2>
                    <div className="text">
                    Escape the Ordinary: Experience Premium Comfort{" "}
                      <br /> at Hotel Ashirwad
                    </div>
                    <div className="link-box">
                      <Link href="/room" className="btn-1">
                        Book Room <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item p_relative">
            <div
              className="swiper-slide"
              style={{
                backgroundImage: "url(assets/images/main-slider/banner-4.jpg)",
              }}
            >
              <div className="content-outer">
                <div className="content-box justify-content-center text-center">
                  <div className="inner">
                    <h4>Summer Vacations</h4>
                    <h2 className="color_light">
                    Stay, Relax, <br /> Rejuvenate.
                    </h2>
                    <div className="text">
                    Your Perfect Getaway Awaits: Hotel Ashirwad{" "}
                     
                    </div>
                    <div className="link-box">
                      <Link href="/room" className="btn-1">
                        Book Room <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item p_relative">
            <div
              className="swiper-slide"
              style={{
                backgroundImage: "url(assets/images/main-slider/banner-5.jpg)",
              }}
            >
              <div className="content-outer">
                <div className="content-box justify-content-center text-center">
                  <div className="inner">
                    <h4>Summer Vacations</h4>
                    <h2 className="color_light">
                    Luxury Hotel For <br /> Vacation.
                    </h2>
                    <div className="text">
                    Relax in Style: Hotel Ashirwad – Where Luxury{" "}
                      <br /> Meets Tranquility
                    </div>
                    <div className="link-box">
                      <Link href="/room" className="btn-1">
                        Book Room <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item p_relative">
            <div
              className="swiper-slide"
              style={{
                backgroundImage: "url(assets/images/main-slider/banner-6.jpg)",
              }}
            >
              <div className="content-outer">
                <div className="content-box justify-content-center text-center">
                  <div className="inner">
                    <h4>Summer Vacations</h4>
                    <h2 className="color_light">
                      Your Home For <br /> Vacation.
                    </h2>
                    <div className="text">
                    A Serene Escape: Experience Ultimate Luxury {" "}
                      <br /> at Hotel Ashirwad
                    </div>
                    <div className="link-box">
                      <Link href="/room" className="btn-1">
                        Book Room <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
