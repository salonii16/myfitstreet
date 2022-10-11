import React, { useEffect } from 'react'

function Privacy() {
    useEffect(() => {
        document.body.classList.add('home_index')
        return () => {
          document.body.classList.remove('home_index')
        }
      }, [])
  return (
    <div>
      
        <section className="container-fluid privacy_Policy  pt-5 mt-5">
            <div className="container text-start">
                <div className="row justify-content-center gap-md-0 gap-4 ">
                    <div className="col-md-6 d-flex align-items-center justify-content-center order-2 order-md-1">
                    <div className="side_bar_text_p">
                        <div className="heading_text_Privacy mb-md-5 mb-sm-4 mb-3">Privacy Policy</div>
                        <div className="perograph_text_Privacy">  Learn more about how Fitstreet collects and uses data and your rights as a Fitstreet user user.</div>
                    </div>
                    </div>
                    <div className="col-md-6 col-5 d-flex align-items-center justify-content-center order-1 order-md-2 ">
                        <div className="lock_image">
                            <img src="assets/images/image-54.png" className="w-100" alt="lock-image"/>
                        </div>
                   </div>
                </div>
                <div className="row">
                   <div className="col-12">
                    <h6 className="privecy_heading">Overview</h6>
                    <p className="perograph_prvicey">
                        Fitstreet Holdings Ltd. (“Fitstreet”, “we”, “us” or “our”) is committed to protecting the privacy of personal information (i.e. any information relating to an identified or identifiable natural person) who visit the https://Fitstreet.com website and Fitstreet mobile software application (collectively, the “Site”) and use the services available thereon (the “Services”). Amendments to this Privacy Policy will be posted to the Site and/or Services and will be effective when posted. Your continued use of the Site and/or Services following the posting of any amendment to this Privacy Policy shall constitute your acceptance of such amendment.
                    </p>
                   </div>
                   <div className="col-12">
                    <h6 className="privecy_heading">Your Consent</h6>
                    <p className="perograph_prvicey">
                        When you register as a user of our Site and Services, we ask for personal information that will be used to activate your account, provide the Services to you, communicate with you about the status of your account, and for other purposes set out in this Privacy Policy. Your name,address, telephone number, email address information and certain other information about you may be required by us to provide the Services or be disclosed by you during your use of the Services. You will also be asked to create a user name and private password, which will become part of your account information.<br />

                        By providing personal information to us and by retaining us to provide you with the Services, you voluntarily consent to the collection, use and disclosure of such personal information as specified in this Privacy Policy. The legal bases for our processing of personal information are primarily that the processing is necessary for providing the Services and that the processing is carried out in our legitimate interests, which are further explained below. Without limiting the foregoing, we may on occasion ask you to consent when we collect, use, or disclose your personal information in specific circumstances.
                    </p>
                   </div>
                   <div className="col-12">
                    <h6 className="privecy_heading">Information We Collect</h6>
                    <p className="perograph_prvicey">
                        Our Site collects information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked to, directly or indirectly, with a particular consumer or device (“personal information”). The information may be provided through the following sources:

                    </p>
                   </div>
                   <div className="col-12 pb-5">
                    <div className="prvicey_list pb-5">
                    <ul className="list_pr list-unstyled">
                        <li> <span className="list_image me-2"><img src="assets/images/image-55.png" alt=""/></span> directly by you</li>
                        <li> <span className="list_image me-2"><img src="assets/images/image-55.png" alt=""/></span> by your internet service </li>
                        <li> <span className="list_image me-2"><img src="assets/images/image-55.png" alt=""/></span> operating systems and platforms</li>
                        <li> <span className="list_image me-2"><img src="assets/images/image-55.png" alt=""/></span> provider</li>
                        <li> <span className="list_image me-2"><img src="assets/images/image-55.png" alt=""/></span> ad networks</li>
                        <li> <span className="list_image me-2"><img src="assets/images/image-55.png" alt=""/></span> analytics providers</li>
                    </ul>
                    </div>
                   </div>
                </div>
            </div>
        </section>
        
       
    </div>
  )
}

export default Privacy