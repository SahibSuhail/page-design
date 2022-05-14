import React from 'react';
import './Page.css';
export default function Page() {
  return (
    <>
    <div className="container emp-profile secondRow">
           <form>
              
              {/* second row */}
           <div className="row">
             {/* lefdt side */}
             <p className="weigthlow">WORK</p>
             <div className="col-md-4">
                 <div className="row">
                 <div className="col-md-5">
                       <h5>Spotify New York</h5>
                 </div>
                 <div className="col-md-6">
                 <button type="button" class="btn btn-outline-primary btn-sm">Primary</button>
                 </div>
                  </div>
                  <div className="row">
                    <pre>170 william Street<br/>
                    New York, NY 10038-78212-312-51
                    </pre>
                  </div>
                  <div className="row">
                 <div className="col-md-5">
                       <h5>Metropolitan Museum</h5>
                 </div>
                 <div className="col-md-6">
                 <button type="button" class="btn btn-outline-primary btn-sm">Secondary</button>
                 </div>
                  </div>
                  <div className="row">
                    <pre>S2S E 68th Street<br/>
                    New York, NY 10651-78156-187-60
                    </pre>
                  </div>
                  <p className="weigthlow">SKILLS</p>
                  <div className="row">
                      <h6>Branding</h6>
                      <h6>web-Design</h6>
                      <h6>Packaging</h6>
                      <h6>Print & Editorial</h6>
                      <h6>Branding</h6>

                  </div>

             </div>
          

             {/* right side */}
             <div className="col-md-7 pl-5 about-info">
                 <div className="tab-content profile-tab" id="myTabContent">
                     <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                     <div className="row">
                         <div className="info">
                            <p className="weigthlow">CONTACT INFORMATION</p>
                         </div>
                       <div className="row m">
                         <div className="col-md-2">
                            <label>Phone:</label>
                         </div>
                         <div className="col-md-5">
                            <a href='#'>+1 1234567890</a>
                         </div>
                       </div>
                       <div className="row mt-3">
                         <div className="col-md-2">
                            <label>Adress:</label>
                         </div>
                         <div className="col-md-5">
                          <pre>S2S E 68th Street<br/>
                           New York, NY 10651-78156-187-60
                            </pre>
                         </div>
                        </div>

                        <div className="row mt-3">
                         <div className="col-md-2">
                            <label>E-mail:</label>
                         </div>
                         <div className="col-md-5">
                            <a href='#'>hello@jeremyrose.com</a>
                         </div>
                       </div>

                       <div className="row mt-3">
                         <div className="col-md-2">
                            <label>Site:</label>
                         </div>
                         <div className="col-md-5 mb-5">
                            <a href='#'>www.jeremyrose.com</a>
                         </div>
                       </div>
                     </div>
                 </div>
             </div>

            
                         <div className="row  mb-8">
                         <p className="weigthlow">BASIC INFORMATION</p>
                       </div>
                       <div className="row m">
                         <div className="col-md-2">
                            <label>Birthday:</label>
                         </div>
                         <div className="col-md-5">
                            <label>June 5, 1992</label>
                         </div>
                       </div>
                       <div className="row mt-3">
                         <div className="col-md-2">
                            <label>Gender:</label>
                         </div>
                         <div className="col-md-5">
                            <label>Male</label>
                         </div>
                       </div>
           </div>
           </div>

         </form>
      </div>

    </>
  )
}
