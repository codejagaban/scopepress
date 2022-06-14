import React from 'react';
import Navbar from './navComponents/Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';


// const cookie = document.cookie;
// console.log(cookie)
const JournalRecommendation = () => (
  <div>
	  <Helmet>
		  <title>Journal Recommendation As A Service | AWESOME ACADEMIC PROOFREADING</title>
	  </Helmet>
      <Navbar/>

<div className="bg-white  pt-5 pb-5">
<div className="container pt-5 ">
<div className="pt-5" />
<div className="row">
	<div className="col-md-9 mx-auto">
		<h3 className="mt-5">Journal Recommendation</h3>
		<p>

        Choosing the right paper for your journal sometimes can be hard, but our team of experts can make it stress-free for you by shortlisting 3 best-suited journals for your manuscript.

We will ensure that all journals selected are well matched to your article’s findings and your publication goals.

</p>
<p>By submitting to this selected journals that match your study, you can avoid unnecessary rejection.
</p>
<p>

Please note Journal Recommendation does not include the following:

<ul className="mt-4">
<li>We cannot guarantee a journal operations and publication of your paper</li>
<li>We are not in position to reject or accept your paper after evaluation</li>
<li>We do not perform peer review of your paper</li>

</ul>
</p>

<p>
The Journal Recommendation report will include  the following:

</p>

<ol type="a">


<li>Journal impact factor</li>
<li>Journal scope</li>
<li>A list of similar articles published by the journal</li>
<li>Article types accepted by the journal</li>

<li>Geographic focus of the journal</li>
<li>How well your paper adheres to the journal guidelines</li>
<li>Link to the journal website</li>
<li>How well the journal adheres to your requirements</li>
<li>Rationale for including the journal in the report</li>
<li>Open Access Options</li>
<li>Rationale for including the journal in the report</li>
</ol>

<a className="btn btn-brand  m-btn-air text-white mt-5  pl-5 pr-5  third-btn mb-5 " href="/quote">Get A Quote</a>

	</div>


</div>



</div>
</div>

<Footer/>



</div>

)


export default JournalRecommendation;