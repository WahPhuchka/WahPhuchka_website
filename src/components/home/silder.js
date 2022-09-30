import React from 'react'
import { Link } from 'react-router-dom'

export default function silder() {
  return (
   <div className="slider-form">
  <div className="container">
    <div className="row">
      {/*                <div class="col-12" id="result"></div>*/}
      <div className="col-12 wow fadeInUp">
        <form className="row contact-form rounded-pill link no-gutters" id="contact-form-data">
          <div className="col-12 col-lg-8 d-inline-block d-lg-flex align-items-center">
            <div className="form-group">
              <label><i className="fas fa-map-marker-alt" aria-hidden="true" /></label>
              <input type="text" name="userName" placeholder="Your Address" className="form-control" />
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <Link to="" className="btn main-btn rounded-pill w-100 contact_btn"><i className="fa fa-spinner fa-spin mr-2 d-none" aria-hidden="true" />CHECK FOOD DELIVERY
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}
