import React from 'react'

function RegisterLoginWrapper(props) {
  return (
    <>
     <section className={`container-fluid ${props.page}`}>
        <div className="container h-100">
          <div className="row h-100">
            <div
              className="col-md-6 d-flex align-items-lg-end  align-items-md-center align-items-sm-center
                        justify-content-md-center justify-content-center justify-content-lg-end "
            >
              <div className={`${props.Text}`}>
                Believe you can and you will.
              </div>
            </div>
            {props.children ?  props.children : null}
   
          </div>
        </div>
      </section>
    </>
  )
}

export default RegisterLoginWrapper