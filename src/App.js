import React from "react";
import "./App.css";

export default function App() {
  const projects = [
    {
      title: "SmartSaver",
      description:
        "Full-stack platform for households to track and analyze water and electricity usage from CSV uploads, generating interactive charts and actionable insights.Helps users manage consumption efficiently and adopt sustainable habits with data visualization.",
      video: "./project1.mp4",
      button: [
        {
          label: "Website",
          icon: "fas fa-globe",
          link: "https://smart-saver-frontend.vercel.app",
        },
        {
          label: "GitHub",
          icon: "fab fa-github",
          link: "https://github.com/MiraliVaghasiya/SmartSaver",
        },
      ],
    },
    {
      title: "Dabble",
      description:
        "Developed a responsive photography studio website using HTML5, CSS3, Bootstrap, and JavaScript.Designed an intuitive UI with dynamic navigation, portfolio showcase, and off-canvas menu for seamless multi-device experience.",
      video: "./project2.mp4",
      button: [
        {
          label: "GitHub",
          icon: "fab fa-github",
          link: "https://github.com/Mirali-Vaghasiya/Dabble",
        },
      ],
    },
    {
      title: "NextDigi",
      description:
        "Developed a fully responsive digital product agency website using HTML5, CSS3, and JS.Integrated animated elements, service and portfolio sections, and enhanced interactivity with WOW.js for an engaging user experience.",
      video: "./project3.mp4",
      button: [
        {
          label: "GitHub",
          icon: "fab fa-github",
          link: "https://github.com/Mirali-Vaghasiya/NextDigi",
        },
      ],
    },
  ];

  return (
    <div className="main-wrapper" id="Home">
      <header className="intro section ">
        <div className="intro-content">
          <div>
            <h1>
              Hi, I'm <span className="intro-name">Mirali</span>
            </h1>
            <p className="intro-desc">
              Information technology student skilled in full-stack development,
              and graphic design...
            </p>
            <div className="intro-actions">
              <a
                href="https://github.com/Mirali-Vaghasiya"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/mirali-vaghasiya/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a href="mailto:miravaghasiya6108@gmail.com" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://www.behance.net/miravaghasiya07"
                target="_blank"
                rel="noopener noreferrer"
                title="Behance"
              >
                <i className="fab fa-behance"></i>
              </a>
              <a href="/resume.pdf" download title="Download Resume">
                <i className="fas fa-file-download"></i>
              </a>
            </div>
          </div>
          <div className="intro-photo-wrapper">
            <img className="intro-photo" src="./profile.jpg" alt="Profile" />
          </div>
        </div>
      </header>

      <main>
        <section className="about section">
          <h2>
            <span>About</span>
            <span className="section-title-line"></span>
          </h2>
          <p>
            I'm Mirali Vaghasiya, a motivated and detail-oriented B.Tech
            Information Technology student with a strong interest in web
            development and software engineering. I enjoy creating efficient,
            user-friendly applications and am particularly focused on building
            real-world solutions using the MERN stack. With a solid academic
            foundation and a passion for continuous improvement, I am eager to
            contribute to meaningful projects and grow as a developer in dynamic
            and collaborative environments.
          </p>
        </section>

        <section className="section" id="Project">
          <div className="projects-section">
            <div className="projects-header">
              <button className="projects-btn">
                <i className="fas fa-folder-open"></i> My Projects
              </button>
              <h1 className="projects-title-gradient">
                <span>Check out </span>
                <span>my latest work</span>
              </h1>
              <p className="projects-subtitle">
                I've worked on a variety of projects, from simple websites to
                complex web applications. Here are a few of my favorites.
              </p>
            </div>
            <div className="projects-grid">
              {projects.map((project, idx) => (
                <div
                  className="project-card"
                  key={idx}
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open(project.video, "_blank", "noopener,noreferrer")
                  }
                >
                  <div className="project-img-wrap">
                    <video
                      src={project.video}
                      controls
                      autoPlay
                      loop
                      muted
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        pointerEvents: "none",
                      }}
                      alt={project.title}
                    />
                  </div>
                  <div className="project-info">
                    <div className="project-card-title">{project.title}</div>
                    <div className="project-card-desc">
                      {project.description}
                    </div>
                    <div className="project-card-btns">
                      {project.button.map((btn, i) => (
                        <a
                          key={i}
                          className="project-card-btn"
                          href={btn.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className={btn.icon}></i> {btn.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="education-section section">
          <h2 className="section-title">
            Education <span className="section-title-line"></span>
          </h2>
          <div className="education-content">
            <img
              src="./charusat_logo.jpg"
              alt="CHARUSAT University"
              className="education-logo"
            />
            <div>
              <div className="education-school">CHARUSAT University</div>
              <div className="education-degree">
                B.Tech in Information Technology
              </div>
            </div>
            <div className="education-dates">2024 - 2027</div>
          </div>
        </section>

        <section className="skills-section section">
          <h2 className="section-title">
            Skills & Technologies <span className="section-title-line"></span>
          </h2>
          <p className="skills-desc">
            A showcase of my technical expertise and professional toolkit. These
            are the technologies I've mastered and regularly use in my
            development journey.
          </p>
          <div className="skills-list">
            <div className="skills-group">
              <div className="skills-group-label">
                <i className="fas fa-code"></i> Programming Languages
              </div>
              <div className="skills-badges">
                <span className="badge">JavaScript</span>
                <span className="badge">Java</span>
                <span className="badge">C</span>
              </div>
            </div>
            <div className="skills-group">
              <div className="skills-group-label">
                <i className="fas fa-globe"></i> Web Technologies
              </div>
              <div className="skills-badges">
                <span className="badge">HTML</span>
                <span className="badge">CSS</span>
                <span className="badge">Bootstrap</span>
              </div>
            </div>
            <div className="skills-group">
              <div className="skills-group-label">
                <i className="fas fa-cubes"></i> Frameworks & Libraries
              </div>
              <div className="skills-badges">
                <span className="badge">React.js</span>
                <span className="badge">Node.js</span>
                <span className="badge">Express.js</span>
                <span className="badge">Nest.js</span>
              </div>
            </div>
            <div className="skills-group">
              <div className="skills-group-label">
                <i className="fas fa-database"></i> Databases
              </div>
              <div className="skills-badges">
                <span className="badge">MongoDB</span>
                <span className="badge">SQL</span>
              </div>
            </div>
            <div className="skills-group">
              <div className="skills-group-label">
                <i className="fas fa-tools"></i> Tools & Platforms
              </div>
              <div className="skills-badges">
                <span className="badge">GitHub</span>
                <span className="badge">Photoshop</span>
                <span className="badge">Figma</span>
                <span className="badge"> Animate</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section">
          <div className="contact-label">Let's Connect</div>
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-desc">
            Have a project in mind or just want to chat? Feel free to reach out
            <br />
            through{" "}
            <a
              href="https://www.linkedin.com/in/mirali-vaghasiya/"
              target="_blank"
            >
              <b>LinkedIn</b>.
            </a>
          </p>
          <a
            className="contact-btn"
            href="https://www.linkedin.com/in/mirali-vaghasiya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn!
          </a>
        </section>
      </main>

      <nav className="bottom-nav">
        <a href="#Home" title="Home">
          Home
        </a>
        <a href="#Home" title="About">
          About
        </a>
        <a href="#Project" title="Project">
          Projects
        </a>
        <a href="#Home" title="Contact">
          Contact
        </a>
      </nav>
    </div>
  );
}
