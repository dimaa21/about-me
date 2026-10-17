import { experience } from '../data';
import SectionHead from './SectionHead';

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SectionHead index="05" title="Experience" />
        <ol className="job-list">
          {experience.map((job) => (
            <li className="job" key={job.title + job.dates} data-reveal>
              <div className="job-period">
                <span>{job.dates}</span>
                <span className="job-length">{job.length}</span>
              </div>
              <div className="job-main">
                <h3>{job.title}</h3>
                <p className="job-company">
                  {job.company} · {job.meta}
                </p>
              </div>
              <p className="job-skills">{job.skills.join(' / ')}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
