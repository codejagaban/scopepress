import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navComponents/Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';



const Pricing = () => (
<div>
	<Helmet>
		<title>Pricing | AWESOME ACADEMIC PROOFREADING</title>
	</Helmet>
<Navbar/>

<div class="m-portlet bg-grey mb-0">

<div class="m-portlet__body pb-0">
<div class="m-pricing-table-3 m-pricing-table-3--fixed">
	<div class="m-pricing-table-3__items">

		<div class="row m-row--no-padding">
			<div class="m-pricing-table-3__item col-lg-4">

				<div class="m-pricing-table-3__wrapper bg-white">
					<h3 class="m-pricing-table-3__title">
					Bronze Editing
					</h3>
					<span class="m-pricing-table-3__label">
							$20 / per page
						</span>

					<br/>
					<span class="m-pricing-table-3__description">
						Experts in your field will ensure that  your ideas are communicated clearly and accurately, paper will be ready in 72 hours
<span class="m-pricing-table-3__number m--font-light">

						</span>


						<br/>
					</span>
					<div class="m-pricing-table-3__btn">
						<Link to="/quote" class="btn   btn-outline-brand m-btn--wide m-btn--uppercase m-btn--bolder m-btn--lg">
							get quote
						</Link>
					</div>
				</div>
			</div>
			<div class="m-pricing-table-3__item m-pricing-table-3__item--focus m--bg-brand col-lg-4">
				<div class="m-pricing-table-3__wrapper bg-white ">
					<h3 class="m-pricing-table-3__title ">
						Silver Editing
					</h3>
						<span class="m-pricing-table-3__label">
							$30 / per page
						</span>


					<br/>
					<span class="m-pricing-table-3__description text-dark">
					Experts in your field will ensure that  your ideas are communicated clearly and accurately, paper will be ready in 48 hours
					</span>
					<div class="m-pricing-table-3__btn">
						<Link to="/quote"  class="btn   btn-light m-btn--label-brand m-btn--wide m-btn--uppercase m-btn--bolder m-btn--lg">
							get quote
						</Link>
					</div>
				</div>
			</div>


			<div class="m-pricing-table-3__item col-lg-4">
				<div class="m-pricing-table-3__wrapper bg-white">
					<h3 class="m-pricing-table-3__title">
						Gold Editing
					</h3>
						<span class="m-pricing-table-3__label">
							$40 / per page
						</span>


					<br/>
					<span class="m-pricing-table-3__description">
					Experts in your field will ensure that  your ideas are communicated clearly and accurately, paper will be ready in 24 hours

					</span>
					<div class="m-pricing-table-3__btn">
						<Link to="/quote"  class="btn   btn-outline-brand m-btn--wide m-btn--uppercase m-btn--bolder m-btn--lg">
							Get Quote
						</Link>
					</div>
				</div>
			</div>



		</div>
	</div>
</div>
</div>






<div class="m-portlet__body pb-0">
<div class="m-pricing-table-3 m-pricing-table-3--fixed">
	<div class="m-pricing-table-3__items">

		<div class="row m-row--no-padding justify-content-center">

			<div class="m-pricing-table-3__item col-lg-4">
				<div class="m-pricing-table-3__wrapper bg-white">
					<h3 class="m-pricing-table-3__title">
					Translation
					</h3>
					<span class="m-pricing-table-3__price">
						<span class="m-pricing-table-3__label">
							$
						</span>
						<span class="m-pricing-table-3__number">
							320
						</span>

					</span>
					<br/>
					<span class="m-pricing-table-3__description">

					Translation service is focused on preparing a publication-quality manuscript.
Your journals will be translated into proper American or British English

						<br/>
					</span>
					<div class="m-pricing-table-3__btn">
						<Link to="/quote" class="btn   btn-outline-brand m-btn--wide m-btn--uppercase m-btn--bolder m-btn--lg">
							get quote
						</Link>
					</div>
				</div>
			</div>



			<div class="m-pricing-table-3__item bg-white col-lg-4 mx-a">
				<div class="m-pricing-table-3__wrapper bg-white">
					<h3 class="m-pricing-table-3__title">
						Journal Recommendation
					</h3>
					<span class="m-pricing-table-3__price">
						<span class="m-pricing-table-3__label">
							$
						</span>
						<span class="m-pricing-table-3__number">
							150
						</span>

					</span>
					<br/>
					<span class="m-pricing-table-3__description">
					AWESOME ACADEMIC PROOFREADING team will shortlists 3 best-suited journals to you.
By submitting to this selected journals that match your study,
you can avoid unnecessary rejection.

					</span>
					<div class="m-pricing-table-3__btn">
						<Link to="/quote"  class="btn   btn-outline-brand m-btn--wide m-btn--uppercase m-btn--bolder m-btn--lg">
							Get Quote
						</Link>
					</div>
				</div>
			</div>



		</div>
	</div>
</div>
</div>


<div class="m-portlet__body pb-0">
<div class="m-pricing-table-3 m-pricing-table-3--fixed">
	<div class="m-pricing-table-3__items">
		<div class="row m-row--no-padding">
			<div class="m-pricing-table-3__item col-lg-4">
				<div class="m-pricing-table-3__wrapper bg-white">
					<h3 class="m-pricing-table-3__title">
						Tables Formatting
					</h3>
					<span class="m-pricing-table-3__price">

						<span class="m-pricing-table-3__number">
							Free
						</span>

					</span>

					<br/>
					<span class="m-pricing-table-3__description">
					Our  illustrators handles the
layout, borders, and shading of your tables to accurately
and efficiently communicate your results.

					</span>
					<div class="m-pricing-table-3__btn">
						<Link to="/quote" class="btn   btn-outline-brand m-btn--wide m-btn--uppercase m-btn--bolder m-btn--lg">
							get quote
						</Link>
					</div>
				</div>
			</div>
			<div class="m-pricing-table-3__item m-pricing-table-3__item--focus m--bg-brand col-lg-4">
				<div class="m-pricing-table-3__wrapper bg-white ">
					<h3 class="m-pricing-table-3__title">
						Manuscript Formatting
					</h3>
					<span class="m-pricing-table-3__price">
						<span class="m-pricing-table-3__label">
							$
						</span>
						<span class="m-pricing-table-3__number m--font-light">
							125
						</span>

					</span>
					<br/>
					<span class="m-pricing-table-3__description text-dark">
					Your page layout, text, formatting,
headings, image placement, and citations/references will be modified to meet the guidelines of your target journal.
					</span>
					<div class="m-pricing-table-3__btn">
						<Link to="/quote"  class="btn   btn-light m-btn--label-brand m-btn--wide m-btn--uppercase m-btn--bolder m-btn--lg">
							get quote
						</Link>
					</div>
				</div>
			</div>


			<div class="m-pricing-table-3__item col-lg-4">
				<div class="m-pricing-table-3__wrapper bg-white">
					<h3 class="m-pricing-table-3__title">
						Figures Formatting
					</h3>

					<span class="m-pricing-table-3__price">

						<span class="m-pricing-table-3__number ">
						Free
						</span>

					</span>

					<br/>
					<span class="m-pricing-table-3__description">
						Publication-ready figures will be created from your files that conform to your chosen journal’s specifications.
This includes changes to file type, resolution, color space etc.
					</span>
					<div class="m-pricing-table-3__btn">
						<Link to="/quote"  class="btn   btn-outline-brand m-btn--wide m-btn--uppercase m-btn--bolder m-btn--lg">
							Get Quote
						</Link>
					</div>
				</div>
			</div>



		</div>
	</div>
</div>
</div>





</div>

<Footer/>
</div>
)


export default Pricing