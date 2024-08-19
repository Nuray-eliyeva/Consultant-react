import React from 'react'

function About() {
    return (
        <>
            {/*section1*/}
            <div id="header">
                <div className="header-txt mt-4 mb-5"><p>Developing Innovative Strategies</p>
                    <h1 className='mt-4 mb-4'>ACHIEVING GROWTH</h1> <button className='btn2 '> Free Consultant</button></div>
            </div>
            {/*section 2*/}
            <div id="about">
                <div className="container">
                    <div className="row about-item">
                        <div className="col-lg-4"><h3>SERVICES</h3><p className='mb-4 mt-4'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p> <button className='btn2'>More Info</button></div>
                        <div className="col-lg-4"><h3>PROJECTS</h3> <p className='mb-4 mt-4'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p> <button className='btn2'>More Info</button></div>
                        <div className="col-lg-4"><h3>CLIENTS</h3><p className='mb-4 mt-4'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p><button className='btn2'>More Info</button></div></div></div>
            </div>
            {/*section3*/}
            <div id="about-us">
               <div className="container">
               <div className="about-txt"><h1>ABOUT US</h1>
                    <p  className='mb-4 mt-4'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <p className='mb-4 mt-4'>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                   <button className='btn2 mt-4'>Learn More</button>
                </div>
               </div>
            </div>

           
        </>
    )
}

export default About