import React, { useState } from 'react';
import profileImage from './assets/profil_Image.jpg'

// import { GitHub, Linkedin, Instagram, Mail, Menu, X } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Naufal Nur Fahriza</h1>
          
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About Me</a>
            <a href="#technologies" className="hover:text-blue-600 transition-colors">Technologies</a>
            <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          
          {/* <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="hover:text-blue-600 transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#about" className="hover:text-blue-600 transition-colors" onClick={toggleMenu}>About Me</a>
              <a href="#technologies" className="hover:text-blue-600 transition-colors" onClick={toggleMenu}>Technologies</a>
              <a href="#education" className="hover:text-blue-600 transition-colors" onClick={toggleMenu}>Education</a>
              <a href="#experience" className="hover:text-blue-600 transition-colors" onClick={toggleMenu}>Experience</a>
              <a href="#portfolio" className="hover:text-blue-600 transition-colors" onClick={toggleMenu}>Portfolio</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-blue-600 mb-2">Hello there 👋, My name is</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Naufal Nur Fahriza</h1>
              <h2 className="text-2xl text-gray-600 mb-6">Bachelor of Informatics</h2>
              <p className="text-lg mb-8">Passionate about delivering high-quality and efficient solutions.</p>
              <a 
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors inline-block"
              >
                Contact Me
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
  <div className="bg-white rounded-full w-64 h-64 md:w-80 md:h-80 shadow-lg flex items-center justify-center overflow-hidden">
    <img 
      src={profileImage} 
      alt="Profile" 
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              I am a passionate web developer with a strong interest in mobile and front-end web development. 
              As a fresh graduate in Informatics from Universitas Pembangunan Nasional "Veteran" Yogyakarta, 
              I specialize in front-end web development, mobile app development, and Golang.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I am eager to enhance my expertise in ReactJS, React Native, and Golang, with a strong willingness 
              to learn and adapt to new technologies. Detail-oriented, a fast learner, and capable of working 
              both independently and in a team. Currently, I am seeking opportunities to contribute to the 
              ever-growing IT industry.
            </p>
            <p className="text-lg leading-relaxed">
              Always exploring new technologies and striving for continuous improvement. Let's connect and innovate together!
            </p>
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section id="technologies" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies</h2>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">Tech Stack I am Familiar With:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-12">
              {['HTML', 'CSS', 'JavaScript', 'React.js', 'React Native', 'Postman', 'Golang', 'PHP', 'MySQL', 'PostgreSQL', 'TailwindCSS'].map((tech, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                    <span className="text-blue-600 text-xl font-bold">{tech.charAt(0)}</span>
                  </div>
                  <p className="font-medium">{tech}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mb-6">Currently Learning:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
              {['Next.js', 'Node.js', 'Python'].map((tech, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="bg-green-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                    <span className="text-green-600 text-xl font-bold">{tech.charAt(0)}</span>
                  </div>
                  <p className="font-medium">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-gray-200 w-full h-32 rounded-md flex items-center justify-center">
                    <span className="text-gray-500">UPN Logo</span>
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-6">
                  <h3 className="text-xl font-bold mb-2">UPN "Veteran" Yogyakarta</h3>
                  <p className="text-gray-600 mb-4">Bachelor of Informatics (B.Inf) - Faculty of Information and Technology</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                    <p><span className="inline-block mr-2">📅</span> 2019 - 2025</p>
                    <p><span className="inline-block mr-2">📊</span> GPA: 3.61/4.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Scholarship */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">AI Engineer Cohort</h3>
                  <p className="text-gray-600">Lintasarta</p>
                </div>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">February 2024 - Present</span>
              </div>
              <p className="mb-4">Selected as one of 600 participants in the prestigious Laskar AI program, out of 13,500+ applicants.</p>
              <p className="mb-4">The Laskar AI program, initiated by Lintasarta in collaboration with Dicoding and NVIDIA, focuses on developing AI-driven digital talents to support Indonesia Emas 2045.</p>
              <h4 className="font-semibold mb-2">Key Learning Areas:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Machine Learning & Data Science foundations</li>
                <li>Software testing and data analysis</li>
                <li>Building innovative AI solutions</li>
              </ul>
            </div>
            
            {/* Freelance Mobile Dev */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Mobile Developer</h3>
                  <p className="text-gray-600">Self-Employed - Freelance</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">March - July 2024</span>
              </div>
              <p className="mb-4">Developed a file management app called Arsipku for an individual client using React Native.</p>
              <h4 className="font-semibold mb-2">Key Tasks:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Designed and built the app logo and UI using Figma</li>
                <li>Converted Figma designs into a functional mobile app</li>
                <li>Implemented file system functions (create, delete, rename files & folders)</li>
                <li>Added error handling mechanisms for a seamless user experience</li>
              </ul>
            </div>
            
            {/* Freelance Frontend Dev */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-green-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Frontend Developer</h3>
                  <p className="text-gray-600">Uphitz.com - Freelance</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">October - December 2023</span>
              </div>
              <p className="mb-4">Worked as a freelance Frontend Developer for Uphitz.com, contributing to the Digital Talent Management web platform using Next.js and TailwindCSS.</p>
              <h4 className="font-semibold mb-2">Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Developed UI components based on Figma design</li>
                <li>Implemented TailwindCSS for styling consistency</li>
                <li>Improved button styles, font consistency, and UI responsiveness</li>
                <li>Integrated a contact page with a contact form</li>
                <li>Optimized website performance and UI responsiveness</li>
              </ul>
            </div>
            
            {/* Ruangguru Internship */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-yellow-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Frontend Engineer Intern</h3>
                  <p className="text-gray-600">Ruangguru CAMP</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">August - December 2022</span>
              </div>
              <p className="mb-4">I was selected for the MSIB (Merdeka Belajar Kampus Merdeka) program and interned as a Frontend Engineer.</p>
              <h4 className="font-semibold mb-2">Key Contributions:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Actively participated in formulating solutions and technical discussions</li>
                <li>Followed and implemented the structured syllabus provided by mentors</li>
                <li>Reviewed and analyzed requirements, specifications, and design documents</li>
                <li>Used GitHub for repository management</li>
                <li>Developed web applications using ReactJS</li>
                <li>Worked with RESTful API methods (GET, POST, PUT, PATCH, DELETE)</li>
                <li>Deployed websites using Netlify/Vercel</li>
              </ul>
            </div>
            
            {/* School Internship */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-gray-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">IT Staff Intern</h3>
                  <p className="text-gray-600">SMAN 1 Teladan Yogyakarta</p>
                </div>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">March - May 2022</span>
              </div>
              <p className="mb-4">During my 6th semester, I interned as an IT Staff at SMAN 1 Teladan Yogyakarta as part of my work practice requirement.</p>
              <h4 className="font-semibold mb-2">Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Assisted the school IT team in technical tasks</li>
                <li>Managed data entry for mid-semester exam questions</li>
                <li>Supervised online and offline examinations in classrooms</li>
                <li>Helped set up and maintain computer lab equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Portfolio</h2>
          <p className="text-center text-gray-600 mb-12">Latest Projects</p>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Arsipku Screenshot</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">🚀 Arsipku (Mobile App)</h3>
                <div className="mb-4">
                  <p className="mb-1"><span className="font-semibold">🔹 Tech Stack:</span> React Native, Tailwind CSS, File System API</p>
                  <p className="mb-1"><span className="font-semibold">🔹 Project Type:</span> Personal Client (Freelance)</p>
                </div>
                <p className="text-gray-600 mb-4">
                  A file management mobile app that allows users to create, delete, and organize files/folders
                </p>
                <div className="flex space-x-3">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition-colors text-sm">View Details</button>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Website Screenshot</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">🌐 Digital Talent Management (Website)</h3>
                <div className="mb-4">
                  <p className="mb-1"><span className="font-semibold">🔹 Tech Stack:</span> Next.js, Tailwind CSS</p>
                  <p className="mb-1"><span className="font-semibold">🔹 Project Type:</span> Freelance at Uphitz.com</p>
                </div>
                <p className="text-gray-600 mb-4">
                  Developed and improved a digital talent management platform
                </p>
                <div className="flex space-x-3">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition-colors text-sm">View Details</button>
                </div>
              </div>
            </div>
            
            {/* Coming Soon Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow md:col-span-2">
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">🛠 More projects coming soon!</h3>
                <p className="text-gray-600">Stay tuned for additional projects that showcase my skills and expertise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Hire Me!</h2>
          <p className="text-center text-blue-600 text-lg mb-12">Let's work together on your next project</p>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    {/* <Mail className="text-blue-600 mr-3" size={20} /> */}
                    <a href="mailto:naufalnurfahriza@gmail.com" className="hover:text-blue-600 transition-colors">naufalnurfahriza@gmail.com</a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-6">Follow Me!</h3>
                <div className="flex space-x-4">
                  {/* <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <GitHub size={20} />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <Instagram size={20} />
                  </a> */}
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-center text-gray-700">
                  "I'm open to new opportunities and excited to collaborate on innovative projects!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold mb-2">Naufal Nur Fahriza</p>
              <p className="text-gray-400">Frontend & Mobile Developer</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-6 mb-4">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
              <p className="text-gray-400">🚀 Copyright © 2025. Built with ReactJS & TailwindCSS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;