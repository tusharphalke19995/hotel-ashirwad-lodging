'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
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
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Our services">
                <div>
                    {/* service-style-two */}
                    <section className="service-style-two p_relative">
                        <div className="auto-container">
                            <div className="sec-title centred mb_50">
                            <span className="sub-title">What We Do</span>
                            <h2>Provide the Best Consulting <br />in This Industry</h2>
                            </div>
                            <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                    <img src="assets/images/service/service-1.jpg" alt="" />
                                    </figure>
                                    <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon-7"></i></div>
                                        <h3><Link href="/strategy-planning">Strategy & Planning</Link></h3>
                                        <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                        <div className="btn-box">
                                        <Link href="/strategy-planning" className="theme-btn-one">Read More</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                    <img src="assets/images/service/service-2.jpg" alt="" />
                                    </figure>
                                    <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon-12"></i></div>
                                        <h3><Link href="/program-manager">Program Manager</Link></h3>
                                        <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                        <div className="btn-box">
                                        <Link href="/program-manager" className="theme-btn-one">Read More</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                    <img src="assets/images/service/service-3.jpg" alt="" />
                                    </figure>
                                    <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon-8"></i></div>
                                        <h3><Link href="/tax-management">Tax Management</Link></h3>
                                        <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                        <div className="btn-box">
                                        <Link href="/tax-management" className="theme-btn-one">Read More</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                    <img src="assets/images/service/service-4.jpg" alt="" />
                                    </figure>
                                    <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon-13"></i></div>
                                        <h3><Link href="/investment-policy">Investment Policy</Link></h3>
                                        <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                        <div className="btn-box">
                                        <Link href="/investment-policy" className="theme-btn-one">Read More</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                    <img src="assets/images/service/service-5.jpg" alt="" />
                                    </figure>
                                    <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon-14"></i></div>
                                        <h3><Link href="/financial-advices">Financial Advices</Link></h3>
                                        <p>Amet minim mollit no duis sit enim aliqua dolor do
                                        </p>
                                        <div className="btn-box">
                                        <Link href="/financial-advices" className="theme-btn-one">Read More</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                    <img src="assets/images/service/service-6.jpg" alt="" />
                                    </figure>
                                    <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon-15"></i></div>
                                        <h3><Link href="/insurance-strategy">Insurance Strategy</Link></h3>
                                        <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                        <div className="btn-box">
                                        <Link href="/insurance-strategy" className="theme-btn-one">Read More</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    {/* service-style-two end */}


                    {/* chooseus-style-two */}
                    <section className="chooseus-style-two sec-pad">
                        <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/chooseus-bg-2.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-xl-6 col-lg-12 offset-xl-6 content-column">
                                    <div className="content_block_six">
                                        <div className="content-box p_relative ml_30">
                                            <div className="sec-title mb_50">
                                                <span className="sub-title">Why Choose Royalking</span>
                                                <h2>Reason For Choosing Our Consultancy</h2>
                                            </div>
                                            <ul className="accordion-box">
                                                {/*Accordion Block*/}
                                                <li className="accordion block">
                                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                        <div className="icon-box"></div>
                                                        <h3>Quick Response</h3>
                                                    </div>
                                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/*Accordion Block*/}
                                                <li className="accordion block">
                                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-box"></div><h3>Experience Consultant</h3></div>
                                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/*Accordion Block*/}
                                                <li className="accordion block">
                                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-box"></div><h3>Flexible Payment</h3></div>
                                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* chooseus-style-two end */}



                    {/* working-process-section */}
                    <section className="working-process-section alternat-2 sec-pad centred">
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-25.png)' }}></div>
                            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-26.png)' }}></div>
                        </div>
                        <div className="auto-container">
                            <div className="sec-title mb_100">
                                <span className="sub-title">Working Process</span>
                                <h2>3 Easy Steps to Get <br />Quick Help</h2>
                            </div>
                            <div className="inner-container">
                                <div className="working-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-24.png)' }}></div>
                                        <div className="count-text">
                                            <h3>01 <span>Step</span></h3>
                                        </div>
                                        <div className="text">
                                            <div className="inner">
                                                <h3>Fill In The Required Form</h3>
                                                <p>Amet minim mollit no duis deserunt ulamco.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="working-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-24.png)' }}></div>
                                        <div className="count-text">
                                            <h3>02 <span>Step</span></h3>
                                        </div>
                                        <div className="text">
                                            <div className="inner">
                                                <h3>Submit <br />Your Documents</h3>
                                                <p>Amet minim mollit no duis deserunt ulamco.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="working-block-one">
                                    <div className="inner-box">
                                        <div className="count-text">
                                            <h3>03 <span>Step</span></h3>
                                        </div>
                                        <div className="text">
                                            <div className="inner">
                                                <h3>Get Ready To <br />Receive your Visa</h3>
                                                <p>Amet minim mollit no duis deserunt ulamco.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* working-process-section end */}

                </div>

            </Layout>
        </>
    )
}