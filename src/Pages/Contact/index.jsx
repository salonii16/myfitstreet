import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Contact() {
    useEffect(() => {
        document.body.classList.add('home_index')
        return () => {
          document.body.classList.remove('home_index')
        }
      }, [])
  return (
  <>
     <div class="d-flex flex-column">
   <section className="container-fluid  pt5 mt5 contact-us">
                <div className="container vh-100">
                    <div className="row h-100">
                       <div className="col-12 d-flex align-items-center justify-content-center">
                            <div className="card bg-white contact_Card p-lg-5 border-0">
                                <div className="card-body card_body">
                                    <div className="card-title mb-4">Get In Touch</div>
                                    <div className="list_social">
                                       <ul className="list-unstyled ul_list">
                                           <li className="list_type mb-3"><NavLink className="text-decoration-none text-black" to="https://maps.google.com/"><span className="span_tag"><img className="me-3" src="assets/images/image-59.png" alt="location"/> 2243 Murphy Court 2715 Ontario, Canada</span></NavLink></li>
                                           <li className="list_type mb-3"><NavLink className="text-decoration-none text-black" to="5554280940"><span className="span_tag"><img className="me-3" src="assets/images/image-60.png" alt="phones"/> +91 9012523120</span></NavLink></li>
                                           <li className="list_type mb-3"><NavLink className="text-decoration-none text-black" to="https://mail.google.com/"><span className="span_tag"><img className="me-3" src="assets/images/image-61.png" alt="email"/> support@fitstreet.in</span></NavLink></li>
                                       </ul>
                                    </div>            
                                </div>
                            </div>
                       </div> 
                    </div> 
                </div>
                </section>
                </div>
  </>
  )
}

export default Contact