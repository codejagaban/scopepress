import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navComponents/Navbar';
import Sidebar from './navComponents/Sidebar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';


// const cookie = document.cookie;
// console.log(cookie)
const Services = () => (
  <div> 
<Helmet>
  <title>Services | Scope Press</title>
</Helmet>
      <Navbar/>

<div className="bg-grey  pt-5 pb-5">
<div className="container pt-5 ">
<h2 className="pt-5"> Services</h2>

{/* <div className="row">
	<div className="col-md-7">
		<h3 className="mt-5">You want your article published?</h3>
		<p>
Getting your research paper published may takes months, and sometimes, even years. With our publication support services, you can consult experts for guidance at all stages of the publication process. Our experts will review your paper and provide constructive comments so that you can improve your manuscript before submission to the journal of your choice. Our experts will work with you to determine the most suitable journals, assist in manuscript editing before submission, carry out a technical review, and provide post-submission support wherever necessary.
</p>

	</div>

</div> */}

<div className="row">

<div className="col-md-6">
<div class="service-card">
            <h4 className="mt-4 mb-4">Editing</h4>
            <p>Our specialists of editors will edit your papers and ensure that your papers are free from grammatical errors, plagiarism and common sentence structure errors using English</p>
          </div>

    </div>







    <div className="col-md-6">
								<div class="service-card">
            <h4 className="mt-4 mb-4">Tables Formatting</h4>
            <p>We format tables for free. Our team of  illustrators handle the layout, font, spacing, borders, and shading of your tables to accurately and efficiently communicate your results.</p>
          </div>
                                </div>





                                <div className="col-md-6">
								<div class="service-card">
            <h4 className="mt-4 mb-4">Transalation</h4>
            <p>Overcome the language barrier, by having your journals translated and editted from Poland, Portuguese, Taiwan, Turkish, Finnish, Norwegian, Czech
 China,
 French,
 Finland,
 Japanese,
 Korean,
 Spanish, German into accurate British or American English .</p>
          </div>
                                </div>









                                <div className="col-md-6">
								<div class="service-card">
            <h4 className="mt-4 mb-4">Figures Formatting</h4>
            <p>We format figures for free and  generates publication-ready figures from your files that conform to your chosen journal’s specifications. This includes changes to line weights, file type, color space,resolution, font, scale,  and layouts.
  .</p>
          </div>
                                </div>





                                <div className="col-md-6">
								<div class="service-card">
            <h4 className="mt-4 mb-4">Manuscript Formatting</h4>
            <p>We will  help review the language in your manuscript,  or academic book to ensure that your ideas are communicated clearly and then accurately, we will modify your page layout, citations/references to meet the guidelines of your target journal. We will also check the accuracy of your references.</p>
          </div>
                                </div>




                                <div className="col-md-6">
								<div class="service-card">
            <h4 className="mt-4 mb-4">Journal Recommendation</h4>
            <p>Choosing the right paper for your journal sometimes can be hard, but our team of experts can make it stress-free for you by shortlisting 3 best-suited journals for your manuscript. We will ensure that all journals selected are well matched to your article’s findings and your publication goals . . . <a href="/journal-recommendation">read more</a></p>
          </div>
                                </div>
















</div>


</div>
</div>

<Footer/>



</div>

)


export default Services;