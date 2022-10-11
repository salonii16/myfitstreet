import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Career() {
    useEffect(() => {
        document.body.classList.add('home_index')
        return () => {
          document.body.classList.remove('home_index')
        }
      }, [])
  return (
    <div>
          <section className="container-fluid  py-5 my-5 career">
                <div className="container my-5">
                    <div className="row my-5 g-4">
                        <div className="col-12 my-3">
                            <div className="top_Heading">
                                Opening Positions
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card card_marketing">
                              <div className="card-body card_body">
                                <h5 className="card-title border-bottom py-2 card_heading">Social Media Manager</h5>
                               <div className="row">
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Job Type : Full Time
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Experience : 2+ Year
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Location : Delhi
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Publish : Mar 7,2021
                                    </div>
                                  </div>
                                  <div className="col-12">
                                      <NavLink to="/apply-details" className="btn btn-primary card_button">Apply Now</NavLink>
                                  </div>
                               </div>
                               
                              </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card card_marketing">
                              <div className="card-body card_body">
                                <h5 className="card-title border-bottom py-2 card_heading">Ui/Ux Designer</h5>
                               <div className="row">
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Job Type : Full Time
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Experience : 2+ Year
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Location : Delhi
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Publish : Mar 7,2021
                                    </div>
                                  </div>
                                  <div className="col-12">
                                      <NavLink  to="/apply-details" className="btn btn-primary card_button">Apply Now</NavLink>
                                  </div>
                               </div>
                               
                              </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card card_marketing">
                              <div className="card-body card_body">
                                <h5 className="card-title border-bottom py-2 card_heading">Social Media Manager</h5>
                               <div className="row">
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Job Type : Full Time
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Experience : 2+ Year
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Location : Delhi
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Publish : Mar 7,2021
                                    </div>
                                  </div>
                                  <div className="col-12">
                                      <NavLink to="/apply-details" className="btn btn-primary card_button">Apply Now</NavLink>
                                  </div>
                               </div>
                               
                              </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card card_marketing">
                              <div className="card-body card_body">
                                <h5 className="card-title border-bottom py-2 card_heading">Ui/Ux Designer</h5>
                               <div className="row">
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Job Type : Full Time
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Experience : 2+ Year
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Location : Delhi
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Publish : Mar 7,2021
                                    </div>
                                  </div>
                                  <div className="col-12">
                                      <NavLink  to="/apply-details" className="btn btn-primary card_button">Apply Now</NavLink>
                                  </div>
                               </div>
                               
                              </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card card_marketing">
                              <div className="card-body card_body">
                                <h5 className="card-title border-bottom py-2 card_heading">Social Media Manager</h5>
                               <div className="row">
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Job Type : Full Time
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Experience : 2+ Year
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Location : Delhi
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Publish : Mar 7,2021
                                    </div>
                                  </div>
                                  <div className="col-12">
                                      <NavLink to="/apply-details" className="btn btn-primary card_button">Apply Now</NavLink>
                                  </div>
                               </div>
                               
                              </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card card_marketing">
                              <div className="card-body card_body">
                                <h5 className="card-title border-bottom py-2 card_heading">Ui/Ux Designer</h5>
                               <div className="row">
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Job Type : Full Time
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Experience : 2+ Year
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Location : Delhi
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Publish : Mar 7,2021
                                    </div>
                                  </div>
                                  <div className="col-12">
                                      <NavLink  to="apply-details.html" className="btn btn-primary card_button">Apply Now</NavLink>
                                  </div>
                               </div>
                               
                              </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card card_marketing">
                              <div className="card-body card_body">
                                <h5 className="card-title border-bottom py-2 card_heading">Social Media Manager</h5>
                               <div className="row">
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Job Type : Full Time
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Experience : 2+ Year
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Location : Delhi
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Publish : Mar 7,2021
                                    </div>
                                  </div>
                                  <div className="col-12">
                                      <NavLink to="/apply-details" className="btn btn-primary card_button">Apply Now</NavLink>
                                  </div>
                               </div>
                               
                              </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card card_marketing">
                              <div className="card-body card_body">
                                <h5 className="card-title border-bottom py-2 card_heading">Ui/Ux Designer</h5>
                               <div className="row">
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Job Type : Full Time
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Experience : 2+ Year
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Location : Delhi
                                    </div>
                                  </div>
                                  <div className="col-6 my-3">
                                    <div className="card_middle_heading">
                                        Publish : Mar 7,2021
                                    </div>
                                  </div>
                                  <div className="col-12">
                                      <NavLink  to="/apply-details" className="btn btn-primary card_button">Apply Now</NavLink>
                                  </div>
                               </div>
                               
                              </div>
                            </div>
                        </div>
                      </div>
                </div>
                </section>
        </div>
  )
}

export default Career