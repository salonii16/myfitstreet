import React,{useEffect} from 'react'

function Termsandcondition() {
    useEffect(() => {
        document.body.classList.add('home_index')
        return () => {
          document.body.classList.remove('home_index')
        }
      }, [])
  return (
    <div>
       <section className="container-fluid termscondition pt-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center order-2 order-md-1">
                    <div className="side_bar_text_p">
                        <div className="heading_text_Privacy mb-md-5 mb-sm-4 mb-3 text-start">Terms and Condition</div>
                        <div className="perograph_text_Privacy text-start">Read our terms below to learn more about your rights and responsibilities as a Fitstreet user.</div>
                    </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-md-center order-1 order-md-2 justify-content-sm-start">
                        <div className="book_image">
                            <img src="assets/images/image-58.png" className="w-100" alt="lock-image"/>
                        </div>
                   </div>
                </div>
                <div className="row pt-lg-5">
                   <div className="col-12 my-3">
                    <p className="perograph_prvicey text-start">
                        This Terms of Service (the “Terms”) describes the rights and responsibilities that apply to your use of Fitstreet’s websites, services, and mobile app (collectively, the “Service”), each owned and operated byFitstreet Holdings Ltd. (“Fitstreet”, “we”, “our” or “us”).

                        Please read the Terms carefully before using the Service. If you don’t agree to the Terms, as well as Dribbble’s Privacy Policy (the “Privacy Policy”) and Fitstreet’s Community Guidelines (the “Community Guidelines”), you may not use the Service. If you are entering into the Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to the Terms. If you do not have such authority, you must not accept the Terms or use the Service on behalf of such entity. The Service is only available to you if you have entered the age of majority in your jurisdiction of residence and are fully able and competent to enter into, abide by and comply with the Terms.
                    </p>
                   </div>
                   <div className="col-12 mb-3">
                    <p className="perograph_prvicey">
                        Your Fitstreet Account. If you create an account on the Service (your “Account”), you are responsible for maintaining the security of your Account and its Content (as defined below), and you are fully responsible for all activities that occur under your Account and any other actions taken on the Service. You must not describe or assign Content to your Account in a misleading or unlawful manner, including in a manner intended to trade on the name or reputation of others, and Fitstreet may change or remove any description or keyword that it considers inappropriate or unlawful, or otherwise likely to cause Fitstreet liability. You must immediately notify Fitstreet of any unauthorized uses of your Account or any other breaches of security. Fitstreet will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.

                        For paid Accounts (each, a “Paid Account”), Fitstreet deems the person under whose name appears on the credit or charge card or other payment method that pays the charges for the Service to be the owner of the Paid Account. If a corporate or other organization’s name appears on the credit or charge card or other payment method, that corporation or organization is deemed to be the owner. If any dispute arises as to who owns or controls a Paid Account, your most recently provided payment method will continue to be charged and you will be responsible to pay for the Service until Fitstreet receives written confirmation from the Paid Account email address confirming a change in ownership and control of the Paid Account.
                    </p>
                   </div>
                   <div className="col-12 pb-lg-5 ">
                    <p className="perograph_prvicey">
                        Our Site collects information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked to, directly or indirectly, with a particular consumer or device (“personal information”). The information may be provided through the following sources:
                    </p>
                   </div>
                </div>
                </div>
            
        </section> 
    </div>
  )
}

export default Termsandcondition