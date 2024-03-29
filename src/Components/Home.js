import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navComponents/Navbar";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "./Footer";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Helmet } from "react-helmet";

const Home = () => {
  const content = [
    {
      image: "/images/bg2.webp",
      title: "AWESOME ACADEMIC PROOFREADING & EDITING",
      break: "EXPERTS.",
      description:
        "Improve your paper with language editing and proofreading from our subject experts.",
    },
    {
      image: "/images/bg3.webp",
      title: "WE HELP YOU ACHIEVE YOUR ACADEMIC",
      break: "GOALS.",
      description: "Get your papers edited and published swiftly",
      button: "Get Started",
      url: "/quote",
    },
    {
      image: "/images/bg1.webp",
      title: "WE HELP YOU ACHIEVE YOUR ACADEMIC",
      break: "GOALS.",
      description: "On time delivery",
      button: "Get Started",
      url: "/quote",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Home | AWESOME ACADEMIC PROOFREADING </title>
        <meta
          name="keywords"
          content="Journal Editing, translation , Journal translation , manuscript formatting, tables formatting, figures formatting, formatting, articles "
        />
        <meta
          name="description"
          content="We are an online editing  service and provide  editing, translation , journal translation , manuscript formatting, tables formatting, figures formatting, formatting,  of scientific and academic journals and articles."
        />
        <meta name="author" content="scopepress.org" />
      </Helmet>

      <Navbar />

      <div id="banner">
        <div className="overlay">
          <div className="">
            <Slider autoplay={2000} infinite>
              {content.map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: ` linear-gradient(rgba(9, 14, 59, 0.8), rgba(9, 14, 59, 0.5)),url('${item.image}') no-repeat`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "75vh",
                  }}
                >
                  <div className="container">
                    <div className="slider-text">
                      <h1>
                        {item.title}{" "}
                        <span className="text-danger">{item.break}</span>
                      </h1>
                      <p className="">{item.description}</p>
                      {item.button && (
                        <p className="btn mt-2 btn-brand text-white px-6 py-2 rounded rounded-3">
                          <Link
                            to={item.url}
                            role="button"
                            className="font-weight-medium text-small pr-2 pl text-white "
                          >
                            {item.button}
                          </Link>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="bg-white pt-5 pb-5">
        <div className="container  ">
          <h2 className="text-center  angle-h">Why are we Awesome?</h2>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="m-portlet">
                <div className="m-portlet__head">
                  <div className="m-portlet__head-caption text-center">
                    <div className="m-portlet__head-title flex justify-content-center align-content-center">
                      <h3 className="m-portlet__head-text text-center">
                        Professional Editors
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="m-portlet__body h-20">
                  We have over 300+ native English-speaking editing
                  professionals, we adhere to the highest standard of editorial
                  excellence to edit your papers accurately and effectively.
                </div>
                <div className="m-portlet__foot m--hide"></div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="m-portlet">
                <div className="m-portlet__head">
                  <div className="m-portlet__head-caption">
                    <div className="m-portlet__head-title">
                      <span className="m-portlet__head-icon">
                        <i className=" home-icon flaticon-folder-2"></i>
                      </span>
                      <h3 className="m-portlet__head-text">Accurate Papers</h3>
                    </div>
                  </div>
                </div>
                <div className="m-portlet__body h-20">
                  We handle language editing, plagiarism check and make sure
                  that your paper is free of grammatical, spelling, and other
                  common editorial errors
                </div>
                <div className="m-portlet__foot m--hide"></div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="m-portlet">
                <div className="m-portlet__head">
                  <div className="m-portlet__head-caption">
                    <div className="m-portlet__head-title">
                      <span className="m-portlet__head-icon">
                        <i className=" home-icon flaticon-interface"></i>
                      </span>
                      <h3 className="m-portlet__head-text">On Time Delivery</h3>
                    </div>
                  </div>
                </div>
                <div className="m-portlet__body h-20">
                  With decades of experience and over 10,000 journals served, we
                  have earned our reputation as a leading provider of English
                  editing services all over the world.
                </div>
                <div className="m-portlet__foot m--hide"></div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              className="btn  btn-brand   mt-5  pl-6 pr-6 py-3   mb-5  mt-4 rounded rounded-3"
              to={"/quote"}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      <div className=" pt-5 pb-5  bg-grey">
        <div id="translation">
          <div className="container">
            <h1 className="text-center  mb-5">Some services we offer </h1>
            <div className="row">
              <div className="col-md-4 ">
                <div className="service-card">
                  <h4 className="mt-4 mb-4">
                    Editing <br />
                  </h4>
                  <p>
                    Our Professional editors will edit your papers and ensure
                    that your papers are free from grammatical errors,
                    plagiarism and common sentence structure errors using
                    English (British and American)
                  </p>
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="service-card">
                  <h4 className="mt-4 mb-4">
                    Translation <br />
                  </h4>
                  <p>
                    Overcome the language barrier, by having your journals
                    translated and edited from Poland, Portuguese, Taiwan,
                    Turkish, Finnish, Norwegian, German into accurate British or
                    American English{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="service-card">
                  <h4 className="mt-4 mb-4">Journal Recommendation</h4>
                  <p className="mt-2">
                    Choosing the right paper for your journal sometimes can be
                    hard, but our team of experts can make it stress-free for
                    you by shortlisting 3 best-suited. . .{" "}
                    <a href="/journal-recommendation">read more</a>.
                  </p>
                </div>
              </div>
            </div>
						<div className="row">
          <div className="col-md-6">
            <h4>Free Tables and Figures formatting</h4>
            <p>
              We format tables and figures formatting for free. Our team of
              illustrators handles the layout, font, spacing, borders, and
              shading of your tables to accurately and efficiently communicate
              your results
            </p>
          </div>

          <div className="col-md-6">
            <Link
              className="btn  btn-outline-brand   mt-5  pl-6 pr-6 py-3   mb-5  mt-4 rounded rounded-3"
              to={"/services"}
            >
              Get Started
            </Link>
          </div>
        </div>
          </div>
        </div>
      </div>

      <div className="bg-testimonial  pt-5 pb-5">
        <div className="container pt-5 pb-5">
          <h2 className="text-center mb-5">
            What some of our authors say about us
          </h2>

          <div className="mt-5 ">
            <OwlCarousel
              className="owl-theme"
              items={1}
              margin={40}
              loop
              lazyContent
              autoplay
              autoplayTimeout={8000}
              responsive={{
                0: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
              }}
            >
              <div className="item">
                <div className="text-center">
                  <p>
                    <i className="la la-quote-left quote"></i> If you want real
                    value for your money, with excellent services then
                    scopepress is your choice.
                    <i className="la la-quote-right quote"></i>{" "}
                  </p>
                  <h6 className="text-mute">- Prof. Yuichi Sanhin</h6>
                </div>
              </div>
              <div className="item">
                <div className="text-center">
                  <p>
                    <i className="la la-quote-left quote"></i> I never thought
                    my article could be presented with such clarity and skill.
                    Thank you scopepress.
                    <i className="la la-quote-right quote"></i>{" "}
                  </p>
                  <h6 className="text-mute">
                    - Dr. Egorov Sergey Vladimirovich
                  </h6>
                </div>
              </div>
              <div className="item">
                <div className="text-center">
                  <p>
                    {" "}
                    <i className="la la-quote-left quote"></i> I was impressed
                    with their level of precision on my article and the timely
                    delivery. I will recommend them any time.{" "}
                    <i className="la la-quote-right quote"></i>{" "}
                  </p>

                  <h6 className="text-mute">- Dr. Guixiang Zhou</h6>
                </div>
              </div>

              <div className="item">
                <div className="text-center">
                  <p>
                    {" "}
                    <i className="la la-quote-left quote"></i> Great job. Very
                    reliable
                    with fast turnaround.{" "}
                    <i className="la la-quote-right quote"></i>{" "}
                  </p>
                  <h6>-Prof. Bernadette H Thomas</h6>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>

      <div className="bg-grey  pt-5 pb-5">
        <div className="container">
          <h2 className="text-center mb-3">FAQs</h2>

          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="m-portlet m-portlet--full-height">
                <div className="m-portlet__body">
                  {/* <!--begin::Section--> */}
                  <div
                    className="m-accordion m-accordion--default m-accordion--solid m-accordion--section  m-accordion--toggle-arrow"
                    id="m_accordion_7"
                    role="tablist"
                  >
                    {/* <!--begin::Item--> */}
                    <div className="m-accordion__item">
                      <div
                        className="m-accordion__item-head collapsed"
                        role="tab"
                        id="m_accordion_7_item_1_head"
                        data-toggle="collapse"
                        href="#m_accordion_7_item_1_body"
                        aria-expanded="false"
                      >
                        <span className="m-accordion__item-title">
                          Is your website safe?
                        </span>
                        <span className="m-accordion__item-mode"></span>
                      </div>
                      <div
                        className="m-accordion__item-body collapse"
                        id="m_accordion_7_item_1_body"
                        role="tabpanel"
                        aria-labelledby="m_accordion_7_item_1_head"
                        data-parent="#m_accordion_7"
                      >
                        <div className="m-accordion__item-content">
                          <p>
                            We use the most up-to-date website security features
                            available. We also require that all of our staff
                            members sign a confidentiality agreement to protect
                            your research.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!--end::Item-->  */}
                    {/* <!--begin::Item--> */}
                    <div className="m-accordion__item">
                      <div
                        className="m-accordion__item-head collapsed"
                        role="tab"
                        id="m_accordion_7_item_2_head"
                        data-toggle="collapse"
                        href="#m_accordion_7_item_2_body"
                        aria-expanded="false"
                      >
                        <span className="m-accordion__item-title">
                          What does Manuscript Formatting include?
                        </span>
                        <span className="m-accordion__item-mode"></span>
                      </div>
                      <div
                        className="m-accordion__item-body collapse"
                        id="m_accordion_7_item_2_body"
                        role="tabpanel"
                        aria-labelledby="m_accordion_7_item_2_head"
                        data-parent="#m_accordion_7"
                      >
                        <div className="m-accordion__item-content">
                          <p>
                            Our manuscript formatters check each manuscript
                            against your journal’s style guide and adjust the
                            citations, references, and layout of the document to
                            the correct conventions. All figures and tables are
                            moved to the correct location in the manuscript, and
                            figure titles and legends are standardized according
                            to your journal's specifications.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!--end::Item-->  */}
                    {/* <!--begin::Item--> */}
                    <div className="m-accordion__item">
                      <div
                        className="m-accordion__item-head collapsed"
                        role="tab"
                        id="m_accordion_7_item_3_head"
                        data-toggle="collapse"
                        href="#m_accordion_7_item_3_body"
                        aria-expanded="false"
                      >
                        <span className="m-accordion__item-title">
                          What file types do you accept for figure formatting?
                        </span>
                        <span className="m-accordion__item-mode"></span>
                      </div>
                      <div
                        className="m-accordion__item-body collapse"
                        id="m_accordion_7_item_3_body"
                        role="tabpanel"
                        aria-labelledby="m_accordion_7_item_3_head"
                        data-parent="#m_accordion_7"
                      >
                        <div className="m-accordion__item-content">
                          <p>
                            We are currently able to process the following file
                            types: DOC, DOCX (Microsoft Word) PPT, PPTX
                            (Microsoft PowerPoint) XLS, XLSX (Microsoft Excel)
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!--end::Item--> */}
                  </div>
                  {/* <!--end::Section--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
