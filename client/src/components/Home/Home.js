import React, { useEffect } from "react";
import "./Home.css";
import Homecard from "./Homecard";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="main-container">
      <div className="section-1">
        <div className="text-content">
        <h1>THINK-EAT!</h1>
          <p>"
          At ThinkEat, we believe that fitness and nutrition go hand in hand to create a healthier, happier you. We are here to empower and inspire you on your journey to a fitter and more fulfilling life. Our platform offers a wealth of valuable information, expert advice, and practical tips to help you achieve your fitness goals and adopt a sustainable and balanced approach to eating.
            "</p>
          <br />
            <h3>Nutrition</h3>
            <p>Eating right is at the core of a healthy lifestyle. Our nutrition specialists are committed to bringing you evidence-based information on balanced eating, meal planning, and dietary tips. Discover delicious and nutritious recipes that cater to various dietary preferences, helping you fuel your body with the right nutrients.</p>
       
          <br />
            <h3>Fitness</h3>
            <p>At ThinkEat, we are passionate about fitness and its transformative power. Our team of fitness experts and trainers are dedicated to guiding you through effective workouts, tailored to suit all fitness levels and preferences. Whether you're a beginner or a seasoned athlete, our workout routines, training tips, and exercise videos will help you stay motivated and on track.</p>
       
        </div>
        <div className="donut"></div>
        <div className="circle"></div>
        <div className="circle-2"></div>
        <img className="section-1-image" src={require("./tangarine.jpg")} alt="food-pic" />
      </div>

      <div className="section-2">
        <img className="dot" src={require("./ellipsis.png")} alt="three-dots" />
        <Homecard animate="fade-right" class="box-1 sb" body=" Upon observations we found that : Some struggle with the intake control and become overweight while the other restrict the food intake which fails their body to meet their nutritional requirements."/>

        <Homecard animate="fade-left" class="box-2 sb2" body=" 1 out of 5 young females are victim of issues like PCOD , Thyroid , PCOS etc , due to their poor lifestyle choices including imbalanced fooding habits. "/>

        <Homecard animate="fade-right" class="box-3 sb3" body="Students cope up with hectic schedules now-a-days ,and not having proper diet leads them to having lack of motivation , energy , productivity etc."/>

         <Homecard animate="fade-left" class="box-4 sb4" body="1 out of 4 males are struggling with cardiac disease due to the cholesterol intake they have , and it occurs at late 40’s and 50’s , which is too late. "/>
        
        <Homecard animate="fade-right" class="box-5 sb5" body=" Another issue which has been observed is the amount of negligence prevailing among the youth regarding health , food and nutrition ."/>
            
        <img className="dot" src={require("./ellipsis.png")} alt="three-dots" />
      </div>

      <div className="section-3">
        <div className="survey-heading">
          <h1 className="survey-header-text">
            We conducted a survey among some people in their early 20s :
          </h1>
        </div>
        <div className="survey-ques-1">
          <h3>1.Do you exercise?</h3>
          <div data-aos="fade-right" className="ans-1">
            <div className="ans-1-inner"></div>
            <p>45%</p>
          </div>
        </div>
        <div className="survey-ques-2">
          <h3>2.Do you go to gym?</h3>
          <div data-aos="fade-right" className="ans-2">
            <div className="ans-2-inner"></div>
            <p>35%</p>
          </div>
        </div>
        <div className="survey-ques-3">
          <h3>3.Do you maintain healthy fooding habits?</h3>
          <div data-aos="fade-right" className="ans-3">
            <div className="ans-3-inner"></div>
            <p>20%</p>
          </div>
        </div>
        <div className="survey-ques-4">
          <h3>4.What's your definition of a healthy lifestyle?</h3>
          <div data-aos="fade-right" className="ans-4">
            <p className="ans-4-p">Some of the answers were :{" "}</p>
            <p className="survey-point">Free mind,better concentration on work,progressive nature</p>
            <p className="survey-point">A healthy body with complete concentration and free of distraction</p>
            <p className="survey-point">A healthy lifestyle keeps you fit,energetic and at reduced risk of diseases.</p>
            <p className="survey-point">Where you eat healthy and stay Active daily..without being paranoid</p>
            <p className="survey-point">Eat healthy and work it out accordingly.</p>
          </div>
        </div>
        <img className="dot" src={require("./ellipsis.png")} alt="three-dots" />
      </div>

      <div className="section-4">
        <div className="about-text">
          <h1>Our Purpose</h1>
          <img className="section-4-icon" src={require("./record-button.png")} alt="food-pic" />
        </div>
        <div className="purpose-container">
          <p className="purpose-content">This(project/initiative/idea) is a child born to observation ,aiming
            to make the budding generation a bit more healthier, to inspire them to take a pause and learn to take care of themselves by making tiny
            tweaks in their lifestyle, taking it bit by bit(self-paced).</p>
        </div>
        <img className="section-4-icon2" src={require("./motivation.png")} alt="icon2-pic"/>
        <img className="section-4-icon3" src={require("./goals.png")} alt="icon3-pic" />
        <img className="section-4-icon5" src={require("./focus3.png")} alt="icon5-pic" />
        <img className="section-4-icon6" src={require("./focus2.png")} alt="icon5-pic" />
      </div>
      <div className="section-5">
        <img className="section-5-icon1" src={require("./respect.png")} alt="icon6-pic" />
        <img className="section-5-icon2" src={require("./online-community.png")} alt="icon7-pic"  />
        <img className="section-5-icon3" src={require("./assistance (1).png")} alt="icon8-pic"/>
        <img className="section-5-icon4" src={require("./teamwork.png")} alt="icon9-pic" />
        <div className="join-container">
          <h2 className="join-content">
          Stay up-to-date with the latest trends, research, and breakthroughs in the world of fitness and nutrition. Our blog section regularly publishes informative articles to keep you informed and motivated.
          Join us at ThinkEat and take the first step towards a healthier and happier you. Remember, with the right mindset, nutrition, and fitness routine, anything is possible. 
          </h2>
        </div>
        <div className="join-text">
          <h1>Join Us</h1>
          <img className="section-6-icon-2" src={require("./record-button.png")} alt="food-pic" />
        </div>
      </div>
      <div className="section-6">
        <div className="message-section">
          <h1 className="section-6-h1">You're still here !</h1>
          <p className="section-6-p">Then I request you to checkout the other pages we have for YOU and start your fitness journey with US today!</p>
          <img className="section-6-icon" src={require("./yoga(1).png")} alt="icon9-pic" />
        </div>
        {/* <div className="footer">
        <div className="footer-section-1">
        <img className="footer-img" src={require("./white-heading.png")} alt="footer-img" />
          <p className="footer-p">ThinkEat is a baby born to imagination of a UnderGrad Student towards society.</p>
        </div>
           <div className="footer-content">
           <ul>
           <li><a>Home</a>
           <p>Lorem ipsum dolor sit amet consectetur </p></li>
           <li><a>News</a><p>Lorem ipsum dolor sit amet consectetur </p></li>
           <li><a>Contact</a><p>Lorem ipsum dolor sit amet consectetur  </p></li>
           <li><a>About</a><p>Lorem ipsum dolor sit amet consectetur </p></li>
          </ul>
           </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
