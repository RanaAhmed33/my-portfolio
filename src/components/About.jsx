import React from "react";
// import Services from "./Services";
import person1 from '../assets/webImg.png'
// import icon from '../assets/icons/react-firebase.jpg'

const About = () => {
  // const skills = [
  //   { name: "HTML AND CSS", image: "/src/assets/icons/html-css.jpg" },
  //   { name: "BOOTSTRAP AND TAILWIND CSS", image: "/src/assets/icons/tailwindcss-bootstrap.png" },
  //   { name: "REACT AND FIREBASE", image: "/src/assets/icons/react-firebase.jpg" },
  //   { name: "NODE AND MONGODB", image: "/src/assets/icons/node-mongo.png", },

  // ];
  return (
    // <div className="md:px-10 px-7 sm:-mt-40" id="about">
    //   <h1 className="text-rose-700 font-semibold text-5xl ">ABOUT ME </h1>
    //   <p className="my-3  text-white md:w-2/3 leading-[2]">
    //     Hi, my name is RANA AHMED, i am a front end web developer.As a Front End Developer, I am an expert in Html, Css, Es6, Bootstrap, Tailwind Css, JavaScript,
    //     ReactJs, DaisyUi, and Firebase Authentication.As a passionate and skilled Front End Developer, I possess a deep understanding of the
    //     technologies and tools that power modern web development. when I was in University I did take off a programming contest and it was a group-based contest so I know to work in a group. I am a
    //     quick learner so I can learn anything very quickly.I possess a problem-solving mindset, always seeking elegant
    //     solutions to challenges that arise during development. So as I am passionate about this field I am
    //     always curious about new technologies and excited to learn.
    //   </p>
    //   {/* <div className="md:flex my-7 items-center">
    //     <div className="text-primary text-8xl font-bold">5+</div>
    //     <p className="text-white text-2xl md:ml-5">
    //       Years of experience. Specialised in building apps, while ensuring a
    //       seamless web experience for end users.
    //     </p>
    //   </div> */}

    //   {/* skills */}

    //   <h1 className=" my-7 text-rose-700 text-5xl font-semibold ">MY SKILLS</h1>
    //   <div className="flex flex-col md:flex-row ">
    //     {skills.map((skill, index) => (
    //       <div
    //         key={index}
    //         className="md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500"
    //       >
    //         <img src={skill.image} alt={skill.name} />
    //         <p className="mt-3 text-2xl text-white font-semibold">
    //           {skill.name}
    //         </p>
    //       </div>
    //     ))}
    //   </div>

    //   {/* services section */}
    //   {/* <Services /> */}
    // </div>

    <div className="md:px-10 px-7 sm:-mt-60" id="about">

      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className='lg:w-1/2 relative p-4'>

            <img src={person1} className=" w-4/4 rounded-lg  " />
            {/* <img src={icon} className="w-1/2 rounded-lg shadow-2xl absolute right-4 top-1/2  border-8 border-white " /> */}

          </div>
          <div className='lg:w-1/2 space-y-6 p-5 text-white'>
            <h1 className="text-rose-700 font-semibold text-5xl ">ABOUT ME </h1>
            <p className="py-6 ">Hi, my name is RANA AHMED, i am a front end web developer.As a Front End Developer, I am an expert in Html, Css, Es6, Bootstrap, Tailwind Css, JavaScript,ReactJs, DaisyUi, and Firebase Authentication.As a passionate and skilled Front End Developer, I possess a deep understanding of the technologies and tools that power modern web development. when I was in University I did take off a programming contest and it was a group-based contest so I know to work in a group. I am a quick learner so I can learn anything very quickly. So as I am passionate about this field I am
              always curious about new technologies and excited to learn. </p>
          </div>
        </div>
      </div>

    </div>



  );
};

export default About;
