import React from 'react';
// import studentImg from './assets/student.jpg';
// import studentWithGlobeImg from './assets/student-with-globe.jpg';
// import femaleStudentImg from './assets/female-student.jpg';

const AboutOurCourses = () => {
  return (
    <div className="bg-white text-black py-9 px-8">
      <div className="">
        <div className="flex flex-col md:flex-row gap-5 px-3  md:px-28">
          
          
          <div className="relative px-10 py-9">
      <img
        src="https://e-pora-next.vercel.app/assets/img/about/about-img.png"
        alt="Student"
        className="h-auto w-full object-cover"
      />
      <div className=" hidden md:block absolute top-1/4 left-2/4 transform -translate-x-0.5 -translate-y-1/2">
        <img
          src="https://e-pora-next.vercel.app/assets/img/about/about-shape-01.png"
          alt="Student with Globe"
          className="object-cover h-auto w-full "
        />
      </div>
      <div className=" hidden md:block absolute -left-1 top-2/4">
        <img
          src="https://e-pora-next.vercel.app/assets/img/about/about-shape-04.png"
          alt="Student with Globe"
          className="object-cover h-auto w-full "
        />
      </div>
      <div className=" hidden md:block absolute -top-2 right-0">
        <img
          src="https://e-pora-next.vercel.app/assets/img/about/about-shape-05.png"
          alt="Student with Globe"
          className="object-cover h-auto w-full "
        />
      </div>
      
    </div>

    <div className="hidden md:block py-56 h-32">
        <img
          src="https://e-pora-next.vercel.app/assets/img/about/about-shape-02.png"
          alt="Female Student"
          className="object-cover w-full h-auto"
        />
      </div>

          <div className=" flex flex-col gap-3 ">
            <h2 className="text-3xl font-semibold text-orange-500 mb-4">
              About Our Courses
            </h2>
            <h1 className=' font-bold text-4xl'>Explore Thousands of Creative Classes.</h1>
            <p className="text-gray-800 mb-8">
              Dramatically supply transparent deliverables beforese backward comp
              internal or "organic" sources. Comp transparent leverage other.
            </p>
            <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurCourses;