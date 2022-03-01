import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (

  <div className="m-grid m-grid--hor m-grid--root m-page">
			<div className="m-grid__item m-grid__item--fluid m-grid  m-error-1" style={{background: "url(/images/bg1.jpg)"}}>
				<div className="m-error_container">
					<span className="m-error_number">
						<h1>
							404
						</h1>
					</span>
					<h5 className="m-error_desc">
						OOPS! Something went wrong here
					</h5>
                    <p className="m-error_desc">Sorry we can't seem to find the page you're looking for.
                    <br/>
                    <Link className="btn  btn-primary m-btn--pill
                     btn-lg m-btn-air text-white mt-3 pl-4 pr-4 mb-5 " to={'/'}>Go Back Home</Link>
                    </p>

				</div>
			</div>
		</div>

)

export default NotFound