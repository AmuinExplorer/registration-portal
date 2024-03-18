import Nav from "../components/navbar";

function Home() {
    return (
      <div className="h-screen flex flex-col">

        <Nav />

        <div className="sm:flex justify-center items-center text-white w-screen py-10" style={{ backgroundImage: "url(https://www.minsu.edu.ph/template/images/about-bg.jpg)" }}>
          <div className="flex justify-center align-middle">
            {/* MinSU Logo */}
            <img src="https://www.minsu.edu.ph/template/images/logo.png" alt="MinSU logo" width={200} className="px-5"></img>
          </div>
          <div className="flex justify-center align-middle flex-col text-center">
            <p className="sm:text-3xl text-3xl font-bold leading-8">Mindoro State University</p>
            <p className="sm:text-xl text-sm font-normal leading-6">Laboratory High School Department</p>
            <p className="sm:text-base text-sm font-light leading-6">Masipit, Calapan City, Oriental Mindoro</p>
          </div>
        </div>
  
        <div className="flex-1 items-center justify-center">
          <div className="flex sm:flex-row flex-col">
            <div className="flex-1 sm:m-10 m-4">
              <h1 className=" font-extrabold sm:text-2xl text-1xl text-left text-green-600">
                "Empower Your Future: Enroll Today and Unleash Your Potential at Mindoro State University's Laboratory High School"
              </h1>
              <br />
              <p className=" text-justify indent-10 sm:text-1xl text-sm">
              Choosing to enroll in Mindoro State University's Laboratory High School department is a decision that lays the foundation for a future brimming with academic prowess, personal development, and boundless opportunities. Our Laboratory High School department stands as a beacon of educational excellence, providing students with a nurturing environment where they can thrive academically and grow holistically.
              <br />
              <br />
              At Mindoro State University's Laboratory High School department, we are dedicated to providing a comprehensive and well-rounded education that prepares students for the challenges and opportunities of the modern world. With a team of dedicated educators who are passionate about nurturing young minds, we ensure that every student receives individualized attention and support to reach their full potential.
              <br />
              <br />
              Our curriculum is designed to foster critical thinking, creativity, and innovation, equipping students with the skills and knowledge they need to excel in their academic pursuits and beyond. From rigorous academic programs to enriching extracurricular activities, we offer a diverse range of opportunities for students to explore their interests, develop their talents, and cultivate a lifelong love for learning.
              <br />
              <br />
              Moreover, our Laboratory High School department provides state-of-the-art facilities and resources that enhance the learning experience and enable students to engage in hands-on, experiential learning opportunities. Whether it's conducting science experiments in our well-equipped laboratories, participating in cultural events and competitions, or engaging in community service projects, students at Mindoro State University's Laboratory High School department are empowered to discover their passions and make a positive impact on the world.
              <br />
              <br />
              But beyond academics, our Laboratory High School department is committed to nurturing the holistic development of students, instilling in them values of integrity, leadership, and social responsibility. We believe in fostering a supportive and inclusive community where every student feels valued, respected, and empowered to realize their dreams.
              <br />
              <br />
              By choosing to enroll in Mindoro State University's Laboratory High School department, you are investing in a transformative educational experience that will shape the trajectory of your future. Join us on this exciting journey of discovery, growth, and limitless possibilities. Your path to success starts here.
              </p>
            </div>
            <div className="flex-1 sm:m-10 m-4">
              <div className="">
                <br />
                <p className=" font-extrabold sm:text-2xl text-1xl text-left text-green-600">
                  Laboratory High School Department
                </p>
                <br />
                <p className=" indent-10 text-sm sm:text-1xl">
                  MinSCAT maintains Laboratory High School that serves as training ground for the student teachers. The Secondary Department adopts the Basic Education Curriculum (BEC)
                </p>
              </div>
              <div>
                <br />
                <p className=" font-bold sm:text-2xl text-1xl text-green-600">
                  Requirements for Grade 7 Only
                </p>
                <div className=" text-green-500 bg-green-50 rounded-lg p-3 text-sm sm:text-1xl">
                  <p>Entrance Examination</p>
                  <p>Physical and Medical Exams (School Clinic)</p>
                  <p>Photocopy of Elementary Report Card (Form 138)</p>
                  <p>Four(4) pieces 1" x 1" recent color photo(white background)</p>
                  <p>Two(2) pieces of 2" x 2" recent color picture(white background)</p>
                  <p>Photocopy of Good Moral</p>
                  <p>Photocopy of PSA</p>
                  <p className=" font-extrabold">Grade Requirements</p>
                  <p>Aspiring Laboratory High School student must have an average grade of atleast <strong>85</strong> in the following subjects:</p>
                  <p>*English</p>
                  <p>*Mathematics</p>
                  <p>*Science</p>
                  <p>*Araling Panlipunan</p>
                  <p>*Filipino</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-2 p-5 flex flex-col sm:flex-row" style={{ backgroundImage: "url(https://www.minsu.edu.ph/template/images/chart_bg.jpg)" }}>
          <div className="flex items-center align-middle justify-center">
            <img src="https://www.minsu.edu.ph/template/images/logo.png" wi alt="MinSU logo" width={100} className="mx-5" />
          </div>
          <div className="text-white flex sm:flex-row align-middle justify-center items-center flex-col text-sm sm:text-1xl">
            <div>
              <p className=" text-2xl font-semibold">Contact us</p>
              <p className="font-light ">Address: Alcate, Victoria Oriental Mindoro</p>
            </div>
            <div className="p-2">
              <a href="https://www.facebook.com/minsuofficialpage"><img src="fb-icon.png" width={48} alt="facebook icon" /></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  