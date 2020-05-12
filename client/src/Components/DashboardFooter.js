import React from 'react';


const DashboardFooter = () => (
<div>
<div className="footer">

<div className="container">
<div className="row">


      <div className="col-md-4">

               <h2>Contact Us</h2>
                 <hr/>
                  <p>
                    155 City Road, EC1V 2NX London, <br/>
                    United Kingdom <br/>

                   312 West 12th Street, New York, NY 10011<br/>
                   USA
                   </p>


       </div>

      <div className="col-md-8">
          <h3 className="text-center mb-5">Any Comment?</h3>
             <form action="" method="post">

             <div className="row">
              <div className="col-md-6">
                    <div className="form-group">

                           <input type="text" className="form-control" name="name"  placeholder="Name"/>

                    </div>
              </div>
              <div className="col-md-6">
                    <div className="form-group">

                           <input type="email" className="form-control" name="email"  placeholder="Email address"/>
                    </div>
              </div>
         </div>
         <div className="row"></div>
              <div className="col-md-12">
                     <div className="form-group">

                         <textarea  id="message" name="comment"  className="form-control" rows="4" placeholder="Message"></textarea>
                     </div>
                     <div className="form-group">
                           <button type="submit" className="btn btn-primary">Submit Request</button>
                    </div>
             </div>

           </form>

      </div>

</div>
</div>
</div>

</div>
)

export default DashboardFooter;