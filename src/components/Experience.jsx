import { experience } from '../data';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="main-title">Experience</h2>
        <div className="experience-list">
          {experience.map((job) => (
            <article className="experience-item" key={job.title + job.dates}>
              <div className="experience-period">
                <span className="experience-dates">{job.dates}</span>
                <span className="experience-length">{job.length}</span>
              </div>
              <div className="experience-card">
                <div className="experience-logo" aria-hidden="true">
                  {job.logo}
                </div>
                <div className="experience-body">
                  <h3>{job.title}</h3>
                  <p className="experience-company">{job.company}</p>
                  <p className="experience-meta">{job.meta}</p>
                  <div className="experience-skills">
                    {job.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
