'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
import TestimonialSlider7 from '@/components/slider/TestimonialSlider7'

export default function Home() {
    const [isOpen, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })


    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="About Us">
                <section className="section-padding">
                <div className="auto-container">
                    <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section_heading mb_20">
                        <span className="section_heading_title_small">About Hotel Ashirwad</span>
                        <h2 className="section_heading_title_big"> A Journey Through  <br />  Spiritual Bliss<br /> Natural Beauty.</h2>
                        </div>
                       
                        <p className="aboout-1-desc mb_30">Nestled along the scenic Manchar-Bhimashankar Road, Hotel Ashirwad & Lodging offers a tranquil retreat in the heart of Bhimashankar. Whether you're visiting for spiritual reflection, relaxation, or business, our hotel provides a comfortable and budget-friendly stay for all travelers. Conveniently located just a short distance from the revered Bhimashankar Temple, our hotel is the ideal choice for both devotees and tourists alike.</p>
                        <div className="about-1-btn mb_30">
                        <Link href="/about" className="btn-1">Discover More<span></span></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <div className="about-2-image-wrap mb_30 p_relative">
                        <div className="about-2-shape-1"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
                        <div className="about-2-image-1" data-parallax='{"y": -20}'><img src="assets/images/resource/sideEntrance1.jpg" alt="" /></div>
                        <div className="about-2-image-2" data-parallax='{"y": 20}'><img src="assets/images/resource/sideEntrance2.jpg" alt="" /></div>
                        <div className="about-2-video-area">
                            <div className="about-2-video-btn">
                            <div className="video-btn">
                                <VideoPopup />
                            </div>
                            </div>
                            <p className="about-2-video-title">Watch Exclusive <br /> Video</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* about-section end */}
                <section className="section-padding feature-3-section gray-bg">
                    <div className="feature-3-shape-1 p_absolute r_30 b_0"><img src="assets/images/shape/pattern-5.png" alt="" /></div>
                    <div className="auto-container">
                        <div className="row p_relative">
                        <div className="feature-3-shape-2"></div>

                        <div className="col-lg-4 col-md-6">
                            <div className="feature-3-block mb_30 wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="feature-3-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-6.jpg" alt="" /></div>
                            <div className="feature-3-offer w_80 h_80 theme-bg p_absolute r_30 t_30 fs_18 text-center text-light pt_20 b_radius_50 lh_20">
                                <span className="fs_22 fw_medium">15%</span><br /> OFF
                            </div>
                            <div className="feature-3-lower-content">
                                <h4 className="feature-3-title">Kick off Summer <br /> in NYC</h4>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="feature-3-block mb_30 wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="feature-3-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-7.jpg" alt="" /></div>
                            <div className="feature-3-offer w_80 h_80 theme-bg p_absolute r_30 t_30 fs_18 text-center text-light pt_20 b_radius_50 lh_20">
                                <span className="fs_22 fw_medium">15%</span><br /> OFF
                            </div>
                            <div className="feature-3-lower-content">
                                <h4 className="feature-3-title">Free Breakfast <br /> Packages</h4>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="feature-3-block mb_30 wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="feature-3-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-8.jpg" alt="" /></div>
                            <div className="feature-3-offer w_80 h_80 theme-bg p_absolute r_30 t_30 fs_18 text-center text-light pt_20 b_radius_50 lh_20">
                                <span className="fs_22 fw_medium">15%</span><br /> OFF
                            </div>
                            <div className="feature-3-lower-content">
                                <h4 className="feature-3-title">Free Breakfast <br /> Packages</h4>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

            <section className="video-2-section">
                <div className="video-1-bg" style={{ backgroundImage: "url(assets/images/background/abouthotel.jpg)" }} data-parallax='{"y": 50}'></div>
                <div className="auto-container">
                    <div className="video-1-video-btn">
                        <div className="video-btn">
                        <VideoPopup />
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section-padding">
                <div className="auto-container">
                    <div className="row">
                    <div className="col-lg-4">
                        <div className="section_heading mb_20">
                        <span className="section_heading_title_small">Testimonials</span>
                        <h2 className="section_heading_title_big">What <br /> They’re Say <br /> About Us?</h2>
                        </div>
                        <p className="testimonial-1-desc">Amet dui scelerisque vel habitant eget <br /> tincidunt facilisis pretium. Porttitor mi <br /> nisi, non vitae tempus.</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="testimonial-1-block-wrap">
                        <div className="testimonial-1-shape-1"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
                        <div className="content-box">
                            {/*Theme Carousel*/}
                            <TestimonialSlider7 />                        
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        
        <section className="section-padding gray-bg">
            <div className="auto-container">
                <div className="team-1-wrapper">
                    <div className="section_heading text-center mb_50">
                        <span className="section_heading_title_small">Discover</span>
                        <h3 className="section_heading_title_big mb_20 color_light">Our Premium Amenities at Ashirwad Hotel</h3>
                        <p>At Ashirwad Hotel, we offer a range of top-tier amenities designed for your comfort and convenience. From spacious rooms to exceptional service, we ensure a relaxing stay. Our facilities include well-maintained surroundings, a peaceful ambiance, and modern comforts. Whether you're here for leisure or business, we provide everything you need for a memorable experience. Enjoy seamless hospitality and a serene environment, making your stay with us truly special.</p>
                    </div>
                    <div className="row">
                        <div className="col_xl_five col-lg-3 col-md-6">
                            <div className="icon_box-1">
                                <div className="icon_box-1-icon"><i className="icon-8"></i></div>
                                <p className="fw_500">Fast wifi</p>
                            </div>
                        </div>
                        <div className="col_xl_five col-lg-3 col-md-6">
                            <div className="icon_box-1">
                                <div className="icon_box-1-icon"><i className="icon-9"></i></div>
                                <p className="fw_500">Coffee</p>
                            </div>
                        </div>
                        <div className="col_xl_five col-lg-3 col-md-6">
                            <div className="icon_box-1">
                                <div className="icon_box-1-icon"><i className="icon-10"></i></div>
                                <p className="fw_500">Bath</p>
                            </div>
                        </div>
                        <div className="col_xl_five col-lg-3 col-md-6">
                            <div className="icon_box-1">
                                <div className="icon_box-1-icon"><i className="icon-11"></i></div>
                                <p className="fw_500">Parking Space​</p>
                            </div>
                        </div>
                        <div className="col_xl_five col-lg-3 col-md-6">
                            <div className="icon_box-1">
                                <div className="icon_box-1-icon"><i className="icon-12"></i></div>
                                <p className="fw_500">Play Ground</p>
                            </div>
                        </div>
                        <div className="col_xl_five col-lg-3 col-md-6">
                            <div className="icon_box-1">
                                <div className="icon_box-1-icon"><i className="icon-13"></i></div>
                                <p className="fw_500">Laundry service</p>
                            </div>
                        </div>
                        <div className="col_xl_five col-lg-3 col-md-6">
                            <div className="icon_box-1">
                                <div className="icon_box-1-icon"><i className="icon-14"></i></div>
                                <p className="fw_500">Breakfast</p>
                            </div>
                        </div>
                       
                        
                        <div className="col_xl_five col-lg-3 col-md-6">
                            <div className="icon_box-1">
                                <div className="icon_box-1-icon"><i className="icon-17"></i></div>
                                <p className="fw_500">Welcome Drink</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="hotel-booking-form-1 alt2 p-0 theme-bg">
            <div className="p_absolute l_0 b_0 r_0 t_0" style={{ background: 'url(assets/images/shape/pattern-4.png) no-repeat center bottom' }}></div>
            <div className="auto-container">
                <div className="hotel-booking-form-1-wrap">
                    <h2 className="color_light mb_40">Make Reservation</h2>
                    <form className="hotel-booking-form-1-form flex-grow-1 d-flex">
                        <div className="form-group">
                            <p className="hotel-booking-form-1-label">Check - in:</p>
                            <input placeholder="17 Sep, 2022" className="" type="text" name="form-name" id="nd_booking_archive_form_date_range_from" />
                        </div>
                        <div className="form-group">
                            <p className="hotel-booking-form-1-label">Check - Out:</p>
                            <input placeholder="21 Sep, 2022" className="" type="text" name="form-name" id="nd_booking_archive_form_date_range_to" />
                        </div>
                        <div className="form-group">
                            <p className="hotel-booking-form-1-label">Rooms:</p>
                            <select>
                                <option data-display="1 Room">1 Room</option>
                                <option value={2}>2 Rooms</option>
                                <option value={3}>3 Rooms</option>
                                <option value={4}>4 Rooms</option>
                                <option value={5}>5 Rooms</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <p className="hotel-booking-form-1-label">Adults:</p>
                            <select>
                                <option data-display="2 Adults">2 Adults</option>
                                <option value={1}>1 Adult</option>
                                <option value={3}>3 Adults</option>
                                <option value={4}>4 Adults</option>
                                <option value={5}>5 Adults</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <p className="hotel-booking-form-1-label">Child:</p>
                            <select>
                                <option data-display="1 Children">1 Children</option>
                                <option value={0}>0 Children</option>
                                <option value={2}>2 Childrens</option>
                                <option value={3}>3 Childrens</option>
                                <option value={4}>4 Childrens</option>
                                <option value={5}>5 Childrens</option>
                            </select>
                        </div>
                        <div className="form-group text-lg-end">
                            <button type="submit" className="btn-1 btn-large btn-light">Check Availability<span></span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <section className="section-padding">
            <div className="auto-container">
                <div className="section_heading text-center mb_70">
                    <span className="section_heading_title_small">Dedicated Team</span>
                    <h2 className="section_heading_title_big">We Have A Professional <br /> Hotel Staff</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap"><img src="assets/images/team/chef2.jpeg" alt="" /></div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <h4 className="team-1-title">Dhananjay Phalke</h4>
                            <p className="team-1-designaiton">Main Chef</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap"><img src="assets/images/team/chef2.jpeg" alt="" /></div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <h4 className="team-1-title">Guy Hawkins</h4>
                            <p className="team-1-designaiton">Sr. Chef</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap"><img src="assets/images/team/chef2.jpeg" alt="" /></div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="/;"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <h4 className="team-1-title">Bessie Cooper</h4>
                            <p className="team-1-designaiton">Jr. Chef</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                {/* service-style-two */}
                <section className="section-padding gray-bg">
                <div className="p_absolute l_0 b_0 r_0 t_0" style={{ background: "url(assets/images/shape/pattern-2.png) no-repeat left bottom" }}></div>
                <div className="auto-container">
                    <div className="section_heading text-center mb_60">
                    <span className="section_heading_title_small">Exclusive Offers</span>
                    <h3 className="section_heading_title_big">Featured Special <br /> Offers</h3>
                    </div>
                    <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                        <div className="feature-2-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image.jpg" alt="" /></div>
                        <div className="feature-2-lower-content">
                            <div className="feature-2-offer w_80 h_80 theme-bg p_absolute r_40 t_0 fs_18 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_22 fw_medium">15%</span><br /> OFF</div>
                            <h4 className="feature-2-title mb_20">Kick off Summer  <br />  Hotel Ashirwad</h4>
                            <p className="feature-2-text">Celebrate the season with a refreshing summer stay at Hotel Ashirwad. Relax in luxury, explore the natural beauty of Ambegaon,<br /> and enjoy the perfect escape from the everyday hustle.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                        <div className="feature-2-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-2.jpg" alt="" /></div>
                        <div className="feature-2-lower-content">
                            <div className="feature-2-offer w_80 h_80 theme-bg p_absolute r_40 t_0 fs_18 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_22 fw_medium">15%</span><br /> OFF</div>
                            <h4 className="feature-2-title mb_20">Free Breakfast <br /> Packages</h4>
                            <p className="feature-2-text">Start your day right with our Free Breakfast Packages! Enjoy a delicious, complimentary breakfast each morning during your stay at Hotel Ashirwad,<br />  making your experience even more enjoyable.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                        <div className="feature-2-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-3.jpg" alt="" /></div>
                        <div className="feature-2-lower-content">
                            <div className="feature-2-offer w_80 h_80 theme-bg p_absolute r_40 t_0 fs_18 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_22 fw_medium">15%</span><br /> OFF</div>
                            <h4 className="feature-2-title mb_20">The Signature <br /> Collection</h4>
                            <p className="feature-2-text">Indulge in our Signature Collection at Hotel Ashirwad. Experience the epitome of luxury with exclusive rooms, premium amenities,<br />  and personalized service that elevate your stay to new heights.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* service-style-two end */} 
                
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
            </Layout>
        </>
    )
}


