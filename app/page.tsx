"use client"

import { useEffect, useState } from "react"
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  MapPin,
  Github,
  SquareStackIcon as StackOverflow,
  Linkedin,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="portfolio">
      {/* Mobile Menu Toggle */}
      <div className="mobile-menu-open" onClick={() => setIsMenuOpen(true)}>
        <Menu className="w-6 h-6" />
      </div>

      {/* Header */}
      <header className={isMenuOpen ? "active" : ""}>
        <div className="mobile-menu-close" onClick={() => setIsMenuOpen(false)}>
          <span>Close</span> <X className="w-4 h-4 inline ml-2" />
        </div>
        <ul className="menu shadow">
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("about")
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("experience")
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("education")
              }}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("projects")
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("skills")
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </header>

      {/* Lead Section */}
      <div id="lead">
        <div className="lead-content">
          <h1>Isaac Meyers</h1>
          <h2>Full Stack Developer</h2>
          <a href="#" className="btn-rounded-white">
            Download Resume
          </a>
        </div>
        <div className="lead-overlay"></div>
        <div className="lead-down" onClick={scrollToNext}>
          <span>
            <ChevronDown className="w-4 h-4 animate-pulse" />
          </span>
        </div>
      </div>

      {/* About Section */}
      <div id="about">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h2 className="heading">About Me</h2>
            </div>
            <div className="md:col-span-8">
              <p>
                Iowa State University '24 | Software Engineer at Tractor Zoom
                <br />
                <br />
                Experience:
              </p>
              <ul className="list-disc ml-6 mt-4">
                <li>3+ years of Professional Software Development.</li>
                <li>Experience with a multitude of programming languages, specializing in Full Stack Development.</li>
                <li>Received B.S. in Computer Science from Iowa State.</li>
              </ul>
              <p className="mt-4">Other Achievements:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Director of IT for ISU Student Government</li>
                <li>Vice President / Treasurer / Webmaster for ISU Web Development Club</li>
                <li>Judges Choice in the Game2Work 2021 Game Jam, a 48hr coding competition.</li>
                <li>Nominated for "Best Leader" in Software Development Practices Class</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills">
        <h2 className="heading">Skills</h2>
        <ul className="skills-list">
          {[
            "Typescript",
            "JavaScript",
            "C# / ASP.net",
            "Node.js",
            "Angular",
            "React / ReactNative",
            "SQL",
            "Git",
            "Python",
            "Java",
            "GraphQL",
            "Jest",
            "Wordpress",
            "Drupal",
            "Umbraco",
          ].map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Experience Section */}
      <div id="experience" className="background-alt">
        <h2 className="heading">Experience</h2>
        <div className="experience-timeline">
          <div className="timeline-item" data-date="February 2022 - May 2024">
            <div className="timeline-icon">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="timeline-content">
              <h3>Thinix</h3>
              <h4>Software Engineer Intern</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet
                urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi
                dapibus porta quam laoreet placerat.
              </p>
            </div>
          </div>

          <div className="timeline-item" data-date="May 2024 - August 2024">
            <div className="timeline-icon">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="timeline-content">
              <h3>Tractor Zoom</h3>
              <h4>Software Engineer Intern</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet
                urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi
                dapibus porta quam laoreet placerat.
              </p>
            </div>
          </div>

          <div className="timeline-item" data-date="August 2024 - Present">
            <div className="timeline-icon">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="timeline-content">
              <h3>Tractor Zoom</h3>
              <h4>Software Engineer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet
                urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi
                dapibus porta quam laoreet placerat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div id="education">
        <h2 className="heading">Education</h2>
        <div className="education-block">
          <h3>Iowa State University</h3>
          <span className="education-date">2020 - 2024</span>
          <h4>Bachelor of Science in Computer Science</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet
            urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi
            dapibus porta quam laoreet placerat.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="background-alt">
        <h2 className="heading">Projects</h2>
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <div className="project shadow-large">
              <div className="project-image">
                <img src="/placeholder.svg?height=300&width=300" alt="Project" />
              </div>
              <div className="project-info">
                <h3>Raspberry Pi Site Hosting</h3>
                <ul className="list-disc ml-6">
                  <li>Utilized CloudFlare tunnels and Nginx to create a reverse proxy for my Raspberry Pi</li>
                  <li>Deployed new static pages to be hosted from the Pi using TCP tools</li>
                </ul>
                <a href="https://saac-pi.com/" className="project-link">
                  View Project
                </a>
              </div>
            </div>

            <div className="project shadow-large">
              <div className="project-image">
                <img src="/placeholder.svg?height=300&width=300" alt="Project" />
              </div>
              <div className="project-info">
                <h3>Project Name Here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat
                  laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur
                  libero. Morbi dapibus porta quam laoreet placerat.
                </p>
                <a href="#" className="project-link">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact">
        <h2 className="heading text-white">Get in Touch</h2>
        <div className="contact-form">
          <form>
            <input type="email" placeholder="Your email" required />
            <textarea placeholder="Your message" rows={5} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="copyright">
              <p>Copyright &copy; {currentYear} Isaac Meyers</p>
            </div>
            <div className="text-center">
              <span className="to-top" onClick={scrollToTop}>
                <ChevronUp className="w-4 h-4" />
              </span>
            </div>
            <div className="social">
              <ul className="flex justify-end space-x-4">
                <li>
                  <a href="https://github.com/IMeyers2020" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackoverflow.com/users/21644695/imeyers20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StackOverflow className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/real-isaac-meyers/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
