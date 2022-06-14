import React from 'react';
import Navbar from './navComponents/Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';




const About = () => (
  <>
    <Helmet>
      <title>About Us | AWESOME ACADEMIC PROOFREADING</title>
      <meta name="keywords" content=" About us, who we are, why choose us,Journal Editing, translation , Journal translation , manuscript formatting, tables formatting, figures formatting, formatting, articles " />
      <meta name="description" content="About  editing  service and provide  editing, translation , journal translation." />
      <meta name="author" content="scopepress.org" />
    </Helmet>

    <Navbar />

    <div className="  pt-5 pb-5">
      <div className="container pt-5 ">
        <div className="row ab">
          <div className="col-md-6">
            <h2 className="mt-5 large">Who We Are?</h2>
            <p>
              AWESOME ACADEMIC PROOFREADING was established on strong academic tradition with affirmation in the 19th century that revolves around the cities in the United Kingdom.
            </p>






            <p className="mt-5">
              AWESOME ACADEMIC PROOFREADING Experts provides developing writers with an honest, detailed and professional

              manuscript appraisal from a highly skilled editor. We help writers understand whether they stand a

              chance of success in the commercial literary market place and if they do, help connect them to a

              literary agent and publisher. We can also advise about the world of self-publishing, and help you

              think about the increasing number of options open to writers in online environments. We also offer

              copy-editing and proofreading on a case-by-case basis.
            </p>

          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={"/images/ab.webp"} alt="AWESOME ACADEMIC PROOFREADING Front Desk Girl" />

          </div>

        </div>

        <div className="row">
          <div className="col-md-12">


            <h3 className="mt-5">AWESOME ACADEMIC PROOFREADING is the name to trust. We are recommended by the world’s leading publishers</h3>

            <ul className="mb-4">
              <li>  Edit your papers into proper American or British English</li>

              <li>The world largest experts of native English editors with PhDs from top universities such as Harvard, Oxford and cambridge.</li>

              <li>Our system perfectly matches your document to experts in your field</li>

              <li>Choose from simple editing, reviewing structure, journal formatting and more</li>

              <li>Guaranteed on-time delivery from 1-7 working business days</li>
            </ul>

            <h3 className="mt-5">Plagiarism Check</h3>
            <p>Plagiarism damage author’s reputation and credibility as a researcher. Our Plagiarism Check service

              helps you identify passages in your manuscript that might be flagged by the journal for accidental

              plagiarism. We use iThenticate, a software that is widely used in the academic community to check the

              originality of a document. We provide a report that highlights the problematic sections of your

              document, along with a publication expert’s comment on how these sections may affect the journal’s

              evaluation.

            </p>


            <h3 className="mt-5">Get AWESOME ACADEMIC PROOFREADING Certificate</h3>

            <p>AWESOME ACADEMIC PROOFREADING provide a certificate confirming that your paper was edited by a native English

              speaker. The certificate also signifies that your manuscript is ready for journal submission, assuming

              all of the proposed changes are incorporated into the manuscript. The certificate is granted for

              documents in which the language quality is ready for publication. It will allow journal editors to

              feel confident that the English language in your paper has been reviewed and improved where necessary.</p>

            <div className="team">
              <h2 className="mt-5 text-center mb-5">Some Of Our Team Members</h2>

              <div className="row text-center">
                <div className="col-md-4 mb-5 mt-5 ">
                  <div className="card ">
                    <img src="/images/1.webp" className="card-img-top" alt="Editor In Chief" />
                    <div className="card-body">
                      <h4 className="mt-4 mb-4">Shane</h4>
                      <p>Editor</p>

                    </div>
                  </div>

                </div>

                <div className="col-md-4 mb-5 mt-5 ">
                  <div className="card ">
                    <img src="/images/2.webp" className="card-img-top" alt="Editor In Chief" />
                    <div className="card-body">
                      <h4 className="mt-4 mb-4">Rosa</h4>
                      <p>Senior Editor</p>

                    </div>
                  </div>

                </div>
                <div className="col-md-4 mb-5 mt-5 ">
                  <div className="card ">
                    <img src="/images/3.webp" className="card-img-top" alt="Editor In Chief" />
                    <div className="card-body">
                      <h4 className="mt-4 mb-4">Erica</h4>
                      <p>Editorial Co-ordinator</p>

                    </div>
                  </div>

                </div>
                <div className="col-md-4 mb-5 mt-5 ">
                  <div className="card ">
                    <img src="/images/4.webp" className="card-img-top" alt="Editor In Chief" />
                    <div className="card-body">
                      <h4 className="mt-4 mb-4">Miles  </h4>
                      <p>Academic Illustrator</p>

                    </div>
                  </div>

                </div>

                <div className="col-md-4 mb-5 mt-5 ">
                  <div className="card ">
                    <img src="/images/5.webp" className="card-img-top" alt="Editor In Chief" />
                    <div className="card-body">
                      <h4 className="mt-4 mb-4">Lakeisha</h4>
                      <p>Academic Translator</p>

                    </div>
                  </div>

                </div>

                <div className="col-md-4 mb-5 mt-5 ">
                  <div className="card ">
                    <img src="/images/6.webp" className="card-img-top" alt="Editor In Chief" />
                    <div className="card-body">
                      <h4 className="mt-4 mb-4">Haley</h4>
                      <p>Editorial Advisor</p>

                    </div>
                  </div>

                </div>


              </div>

            </div>


          </div>

        </div>


      </div>

    </div>

    <Footer />



  </>

)


export default About;