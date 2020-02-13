import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navComponents/Navbar';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from './Footer';


const Home = () => (
  <div>

      <Navbar/>
  <div id="banner">
  <div className="overlay">
       <div className="container">
              <div className="row top-row">
                  <div className="col-md-2">
                  </div>
                  <div className="col-md-8 mt-5">
                         <h1 className="display-4 "> We help you achieve your academic goals.</h1>

                         <Link to={'/quote'} className="btn mx-auto  btn-outline-brand   text-white   pl-4 pr-5">Get started</Link>
                  </div>

                  <div className="col-md-2">
                  </div>
              </div>


       </div>


</div>
</div>
<div className="bg-white pt-5 pb-5">
<div className="container  ">
<h2 className="text-center  angle-h">Why Trust Us?</h2>
<div className="row mt-5">



      <div className="col-md-4">
                <div className="m-portlet">
									<div className="m-portlet__head">
										<div className="m-portlet__head-caption">
											<div className="m-portlet__head-title">
												<span className="m-portlet__head-icon">
													<i className=" home-icon flaticon-users"></i>
												</span>
												<h3 className="m-portlet__head-text">
													Professional Editors

												</h3>
											</div>
										</div>
									</div>
									<div className="m-portlet__body">
									We have over 300+ native English-speaking editing professionals, we adhere to the highest standard of editorial excellence to edit your papers accurately and effectively.
									</div>
									<div className="m-portlet__foot m--hide">

									</div>
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
												<h3 className="m-portlet__head-text">
													Accurate Papers

												</h3>
											</div>
										</div>
									</div>
									<div className="m-portlet__body">
									We handle language editing, plagiarism check and make sure that your paper is free of grammatical, spelling, and other common editorial errors
									</div>
									<div className="m-portlet__foot m--hide">

									</div>
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
												<h3 className="m-portlet__head-text">
												A Name You Can Trust

												</h3>
											</div>
										</div>
									</div>
									<div className="m-portlet__body">
									With decades of experience and over 10,000 journals  served, we have earned our reputation as a leading provider of English editing services all over the world.
									</div>
									<div className="m-portlet__foot m--hide">

									</div>
								</div>
                                 </div>


</div>

<div className="text-center">
<Link className="btn  btn-outline-brand   mt-5  pl-5 pr-5   mb-5  mt-4" to={'/quote'}>Get quote</Link>
</div>


</div>
</div>


<div className=" pt-5 pb-5  bg-grey">
<div id="translation">
<div className="container">
    <h1 className="text-center  mb-5">Services we offer </h1>
<div className="row">


<div className="col-md-4 ">
<div className="service-card">
            <h4 className="mt-4 mb-4">Editing <br/></h4>
            <p>Our specialists of editors will edit your papers and ensure that your papers are free from grammatical errors, plagiarism and common sentence structure errors using  English (British and American)</p>
          </div>

    </div>

    <div className="col-md-4 ">
<div className="service-card">
            <h4 className="mt-4 mb-4">Translation <br/></h4>
            <p>Overcome the language barrier, by having your journals translated and editted from Poland,
 Portuguese,
 Taiwan,
 Turkish,
 Finnish,
 Norwegian,
 German into accurate British or American English	 </p>
          </div>

    </div>


    <div className="col-md-4 ">
<div className="service-card">
            <h4 className="mt-4 mb-4">Journal Recommendation</h4>
            <p className="mt-2">Choosing the right paper for your journal sometimes can be hard, but our team of experts can make it stress-free for you by shortlisting 3 best-suited. . . <a href="/journal-recommendation">read more</a>
  .</p>
          </div>

    </div>



</div>
<div className="text-center">
<Link className="btn  btn-outline-brand   mt-5  pl-5 pr-5   mb-5  mt-4" to={'/services'}>See all services</Link>
</div>
</div>

</div>


</div>

<div className="bg-white  pt-5 pb-5">
    <div className="container pt-5 pb-5">
        <h2 className="text-center mb-3">Trusted by some respected names in publishing</h2>

<div className="row mt-5">
<div className="col-md-3 col-6 p-3">
	<img src="/images/client/ox.png" className="img-fluid" width="160"/>
</div>


<div className="col-md-3 col-6 p-3">
	<img src="/images/client/taylor.png" className="img-fluid" width="160"/>
</div>

<div className="col-md-3 col-6 p-3">
	<img src="/images/client/cope.png" className="img-fluid" width="160"/>
</div>


<div className="col-md-3 col-6 p-3">
	<img src="/images/client/ells.png" className="img-fluid" width="160"/>
</div>



</div>
    </div>

</div>



<div className="bg-testimonial  pt-5 pb-5">
    <div className="container pt-5 pb-5">
        <h2 className="text-center mb-5">What authors say about us</h2>


<div className="mt-5 ">


<OwlCarousel
	className="owl-theme"
	items={2}
	margin={40}
	loop
	lazyContent
	nav
	autoplay
	autoplayTimeout={8000}
	responsive ={ {
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
		}
	}

    }
>
    <div class="item">
	<div className="text-center">

			<p><i className="la la-quote-left quote"></i> If you want real value for your money, with excellent services then scopepress is your choice.<i className="la la-quote-right quote"></i> </p>
			<h6 className="text-mute">- Prof. Yuichi Sanhin</h6>
		</div>

	</div>
	<div className="item">
	<div className="text-center">
			<p ><i className="la la-quote-left quote"></i> I never thought my article could be presented with such clarity and skill.
				 Thank you scopepress.<i className="la la-quote-right quote"></i> </p>
			<h6 className="text-mute">- Dr. Egorov Sergey Vladimirovich</h6>

		</div>

	</div>
	<div className="item">
	<div className="text-center">

			<p > <i className="la la-quote-left quote"></i> I was impressed with their level of precision on my article and the
				 timely delivery. I will recommend them any time. <i className="la la-quote-right quote"></i> </p>

<h6 className="text-mute">- Dr. Guixiang Zhou</h6>
		</div>

	</div>

	{/* <div className="item">
<div className="text-center">

<p> <i className="la la-quote-left quote"></i> Great job. Very reliable <br/>
 with fast turnaround. <i className="la la-quote-right quote"></i> </p>
	<h6>-Prof. Bernadette H Thomas</h6>

</div>

	</div> */}



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
										<div className="m-accordion m-accordion--default m-accordion--solid m-accordion--section  m-accordion--toggle-arrow" id="m_accordion_7" role="tablist">
											{/* <!--begin::Item--> */}
											<div className="m-accordion__item">
												<div className="m-accordion__item-head collapsed" role="tab" id="m_accordion_7_item_1_head" data-toggle="collapse" href="#m_accordion_7_item_1_body" aria-expanded="    false">

													<span className="m-accordion__item-title">
													Is your website safe?
													</span>
													<span className="m-accordion__item-mode"></span>
												</div>
												<div className="m-accordion__item-body collapse" id="m_accordion_7_item_1_body" role="tabpanel" aria-labelledby="m_accordion_7_item_1_head" data-parent="#m_accordion_7">
													<div className="m-accordion__item-content">
														<p>
														We use the most up-to-date website security features available. We also require that all of our staff members sign a confidentiality agreement to protect your research.
														</p>


													</div>
												</div>
											</div>
											{/* <!--end::Item-->  */}
                    {/* <!--begin::Item--> */}
											<div className="m-accordion__item">
												<div className="m-accordion__item-head collapsed" role="tab" id="m_accordion_7_item_2_head" data-toggle="collapse" href="#m_accordion_7_item_2_body" aria-expanded="    false">

													<span className="m-accordion__item-title">
													What does Manuscript Formatting include?
													</span>
													<span className="m-accordion__item-mode"></span>
												</div>
												<div className="m-accordion__item-body collapse" id="m_accordion_7_item_2_body" role="tabpanel" aria-labelledby="m_accordion_7_item_2_head" data-parent="#m_accordion_7">
													<div className="m-accordion__item-content">
														<p>
														Our manuscript formatters check each manuscript against your journal’s style guide and adjust the citations, references, and layout of the document to the correct conventions. All figures and tables are moved to the correct location in the manuscript, and figure titles and legends are standardized according to your journal's specifications.
														</p>


													</div>
												</div>
											</div>
											{/* <!--end::Item-->  */}
                    {/* <!--begin::Item--> */}
											<div className="m-accordion__item">
												<div className="m-accordion__item-head collapsed" role="tab" id="m_accordion_7_item_3_head" data-toggle="collapse" href="#m_accordion_7_item_3_body" aria-expanded="    false">

													<span className="m-accordion__item-title">
													What file types do you accept for figure formatting?
													</span>
													<span className="m-accordion__item-mode"></span>
												</div>
												<div className="m-accordion__item-body collapse" id="m_accordion_7_item_3_body" role="tabpanel" aria-labelledby="m_accordion_7_item_3_head" data-parent="#m_accordion_7">
													<div className="m-accordion__item-content">
														<p>
														We are currently able to process the following file types: DOC, DOCX (Microsoft Word) PPT, PPTX (Microsoft PowerPoint) XLS, XLSX (Microsoft Excel)
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




            <Footer/>




</div>

)


export default Home;