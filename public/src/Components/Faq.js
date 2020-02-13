import React  from 'react';
import Navbar from './navComponents/Navbar';
import Footer from './Footer';

const Faq = () => (
    <div>

		<Navbar/>


    <div class="bg-grey">
		<div className="container">
							<div class="m-portlet__head">
								<div class="m-portlet__head-caption">
									<div class="m-portlet__head-title">
										<h3 class="m-portlet__head-text ">
											FAQs
										</h3>
									</div>
								</div>

							</div>
							<div class="row">
							<div className="col-md-9 mx-auto">
<div class="m-portlet m-portlet--full-height">

									<div class="m-portlet__body">
										{/* <!--begin::Section--> */}
										<div class="m-accordion m-accordion--default m-accordion--solid m-accordion--section  m-accordion--toggle-arrow" id="m_accordion_7" role="tablist">
											{/* <!--begin::Item--> */}
											<div class="m-accordion__item">
												<div class="m-accordion__item-head collapsed" role="tab" id="m_accordion_7_item_1_head" data-toggle="collapse" href="#m_accordion_7_item_1_body" aria-expanded="    false">

													<span class="m-accordion__item-title">
													What does Manuscript Formatting include?
													</span>
													<span class="m-accordion__item-mode"></span>
												</div>
												<div class="m-accordion__item-body collapse" id="m_accordion_7_item_1_body" role="tabpanel" aria-labelledby="m_accordion_7_item_1_head" data-parent="#m_accordion_7">
													<div class="m-accordion__item-content">
														<p>
														Our manuscript formatters check each manuscript against your journal’s style guide and adjust the citations, references, and layout of the document to the correct conventions. All figures and tables are moved to the correct location in the manuscript, and figure titles and legends are standardized according to your journal's specifications.
														</p>


													</div>
												</div>
											</div>
											{/* <!--end::Item-->  */}
                    {/* <!--begin::Item--> */}
											<div class="m-accordion__item">
												<div class="m-accordion__item-head collapsed" role="tab" id="m_accordion_7_item_2_head" data-toggle="collapse" href="#m_accordion_7_item_2_body" aria-expanded="    false">

													<span class="m-accordion__item-title">
													databases.
What file types do you accept for figure formatting?
													</span>
													<span class="m-accordion__item-mode"></span>
												</div>
												<div class="m-accordion__item-body collapse" id="m_accordion_7_item_2_body" role="tabpanel" aria-labelledby="m_accordion_7_item_2_head" data-parent="#m_accordion_7">
													<div class="m-accordion__item-content">
														<p>
														We are currently able to process the following file types: DOC, DOCX (Microsoft Word) PPT, PPTX (Microsoft PowerPoint) XLS, XLSX (Microsoft Excel)
														</p>


													</div>
												</div>
											</div>
											{/* <!--end::Item-->  */}


					{/* <!--begin::Item--> */}
											<div class="m-accordion__item">
												<div class="m-accordion__item-head collapsed" role="tab" id="m_accordion_7_item_3_head" data-toggle="collapse" href="#m_accordion_7_item_3_body" aria-expanded="    false">

													<span class="m-accordion__item-title">
													Who are your editors?
													</span>
													<span class="m-accordion__item-mode"></span>
												</div>
												<div class="m-accordion__item-body collapse" id="m_accordion_7_item_3_body" role="tabpanel" aria-labelledby="m_accordion_7_item_3_head" data-parent="#m_accordion_7">
													<div class="m-accordion__item-content">
														<p>
														Our editors are PhDs and post-docs from the top research universities in the UK and USA. They are all native English speakers and must meet rigorous selection standards.
														</p>

													</div>
												</div>
											</div>
											{/* <!--end::Item--> */}



					{/* <!--begin::Item--> */}
					<div class="m-accordion__item">
												<div class="m-accordion__item-head collapsed" role="tab" id="m_accordion_7_item_4_head" data-toggle="collapse" href="#m_accordion_7_item_4_body" aria-expanded="    false">

													<span class="m-accordion__item-title">
													Should I have my tables formatted?
													</span>
													<span class="m-accordion__item-mode"></span>
												</div>
												<div class="m-accordion__item-body collapse" id="m_accordion_7_item_4_body" role="tabpanel" aria-labelledby="m_accordion_7_item_4_head" data-parent="#m_accordion_4">
													<div class="m-accordion__item-content">
														<p>
														Journals require that tables be submitted in a text format (usually Microsoft Word) for in-house formatting, which comes standard with oucontactr Manuscript Formatting service. If you would like tables formatted and exported as images for use in presentations and posters, we can do this as part of our Figure Preparation service.
														</p>

													</div>
												</div>
											</div>
											{/* <!--end::Item--> */}


												{/* <!--begin::Item--> */}
					<div class="m-accordion__item">
												<div class="m-accordion__item-head collapsed" role="tab" id="m_accordion_7_item_5_head" data-toggle="collapse" href="#m_accordion_7_item_5_body" aria-expanded="    false">

													<span class="m-accordion__item-title">
													Is your website safe?
													</span>
													<span class="m-accordion__item-mode"></span>
												</div>
												<div class="m-accordion__item-body collapse" id="m_accordion_7_item_5_body" role="tabpanel" aria-labelledby="m_accordion_7_item_5_head" data-parent="#m_accordion_5">
													<div class="m-accordion__item-content">
														<p>
														We use the most up-to-date website security features available. We also require that all of our staff members sign a confidentiality agreement to protect your research.
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
							<div className="row mx-auto">
												<div className="col-md-12 text-center">
													<h5>Have some questions to ask or need help?</h5>
<a className="btn btn-outline-brand   mt-5  pl-5 pr-5   mb-5  mt-4" href='/contact'>Contact Us</a>

													</div>

													</div>
					</div>
					</div>
					<Footer/>
                    </div>
)

export default Faq;