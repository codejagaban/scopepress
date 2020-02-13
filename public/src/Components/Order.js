import React,{ Component } from 'react'
import { formatPrice } from './helper';
import moment from 'moment';


class Order extends Component {
   constructor() {
       super()
   }


    render() {



        return(
            <div className="col-md-4">
            <ul className="price-summary p-0 sticky-top">
            <li className="price-summary-section"><h5 className=" heading text-uppercase text-center">MY ORDER</h5></li>
            <li className="price-summary-section">

            <p><span className="desc">Language: </span>{this.props.language.label ? this.props.language.label: `English`}</p>
            <p><span className="desc">Words: </span>{this.props.wordCount.label ? this.props.wordCount.label : ''}</p>



            </li>

            <li className="price-summary-section">
            <p className="sub-header text-uppercase">Selected Service</p>
            <ul className="service-selected p-0">
            {this.props.isEditing && <li className="service-taked">{this.props.language.value === 'english' ? `${this.props.editType} Editing`: `Translation to english and editing`}
            <span className=" float-right pricing">{formatPrice(this.props.premPrice)}</span>
            <p className="delivery-date">
            <i className="mdi mdi-calendar-check-outline"></i>
            {this.props.editType === 'Standard' ? this.props.standardDeliveryDate : this.props.premiumDeliveryDate}
            </p>
            </li>}

            {this.props.isTables && <li className="service-taked">
            {this.props.tables.label ? this.props.tables.label : '1 Tables'} Formatting

            {console.log(this.props.tables  )}
            <span className=" float-right pricing">{formatPrice(.000)}</span>
            <p className="delivery-date mb-0">
            <i className="mdi mdi-calendar-check-outline"></i>
            {this.props.standardDeliveryDate}
            </p>
            </li>}

            {this.props.isFigures && <li className="service-taked">
            {this.props.figures.label ? this.props.figures.label : '1 Figures'} Formatting
            <span className=" float-right pricing">{formatPrice(.000)}</span>
            <p className="delivery-date mb-0">
            <i className="mdi mdi-calendar-check-outline"></i>
            {this.props.standardDeliveryDate}
            </p>
            </li>}

            {this.props.manuscriptFormating
              && <li className="service-taked">Manuscript Formatting
           <span className=" float-right pricing">{formatPrice(this.props.manuscriptFormatingPrice)}</span>
           <p className="delivery-date mb-0">
           <i className="mdi mdi-calendar-check-outline"></i>
           {this.props.standardDeliveryDate}
           </p>
           </li>}

           {this.props.journalRecommendation
              && <li className="service-taked">Journal Recommendation
           <span className=" float-right pricing">{formatPrice(this.props.journalRecommendationPrice)}</span>
           <p className="delivery-date mb-0">
           <i className="mdi mdi-calendar-check-outline"></i>
           {this.props.standardDeliveryDate}
           </p>
           </li>}


            <li className="service-taked">TOTAL
            <span className=" float-right pricing">
                <input type="hidden"/>
                {formatPrice(this.props.amount)}
                </span>
                </li>


            </ul>


            </li>

            </ul>


            </div>
        )
    }
}


export default Order;