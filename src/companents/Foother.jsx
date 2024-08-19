import React from 'react'
function Foother() {
  return (
    <>
    <div className='footer'>

      <div className="contact">
        <h2>CONTACT</h2>
        <div className="container">

          <div className="row">
            <div className="col-lg-5 form"> <label>First Name</label> <input type="text" /></div>
            <div className="col-lg-5 form"> <label>Last Name</label> <input type="text" /></div>
            <div className="col-lg-5 form"> <label>Email</label> <input type="text" /></div>
            <div className="col-lg-5 form"> <label>Subject</label> <input type="text" /></div>
            <div className="mesg row">  <div className="col-lg-8 form"> <label>Message</label> <input type="text" /></div>
              <div className="col-lg-3"><button className='btn1'>Submit</button></div>
            </div>
            
          </div>  
        </div>
      </div>
       
    </div>
     <div className="last-sect">
      <div className="container">
      <div className="row ">
     <div className="col-lg-4">
       <ul><li>
        <h6> JAMES CONSULTING</h6></li>
         <li>500 Terry Francine Street,
           San Francisco, CA 94158</li>
         <li>Mail: info@mysite.com</li>
         <li>Tel: 123-456-7890</li></ul>
     </div>

     <div className="col-lg-4"><ul>
       <li><h6>MENU</h6></li>
       <li>About</li>
       <li>Object</li>
       <li>Services</li>
       <li>Plans & Pricing </li>
       <li>Tools &Tips</li>
       <li> ontact</li>
       </ul></div>
     <div className="col-lg-4">
       <ul>
         <li><h6>SOCIALS</h6></li>
         <li> <img src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png" alt="" /> <img src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01ab6619093f45388d66736ec22e5885.png" alt="" /> </li>
         <li>© 2035 by JAMES CONSULTING.
         Powered and secured by Wix</li>
       </ul>
     </div>
   </div>
      </div>
     </div>
   </>
  )
}

export default Foother