import React from 'react'
import './About.css'
function About() {
  return (
    <div className='about'>

    <div className="innerAbout">

    

        <img className='aboutImg' src={require('./about.png')} alt="" />
        <h1 className='abouth1' >ABOUT <br /> US</h1>

        <div className="containAll">


            <div className="questions">

                   <div className="q1"> 

                     <h1 id='q1h1'> Who are we?</h1>
                     <p className="a2">To spread the right kind of awareness among the(most targeted) youth regarding healthy food habits as well as lifestyle in general. <br /><br />
                     We aim to create solutions catering to day-to-day problems/solutions for the youth. As in , we have an ongoing project which shall help any Student(of any age group) by serving as a Study guide with productivity boosting tools , while we scale up & reach out to more people through this initiative.</p>
                     <h1 id='what'> Where are we going?</h1>
    
                  </div>


                <div className="patternDiv">

                     <img className='QnA' src={require('./QnA.png')} alt="img" />

                </div>



                  <div className="q2">

                     <p className="a1">We are due of University Students who are driven by a will to make positive changes in our sociaty/as well as act as an influence on a large scale/platform.</p>
                    
                    <h1 id=''>Why are we <br /> here?</h1>
    
                  <p className='a3'>We aim to reach out to as many people as we can and spread our message along the way . <br /><br />
                  We hope to help/influence(+ve) individuals in any possible way , and raise community where health-issues , mental health and much more can be discussed freely. <br /><br />
                  We shall consult medical professionals soon the be on-board with us , so that people can be guided(if needed in any form).</p>
                  </div>
            </div>

</div>

</div>


    </div>
  )
}

export default About