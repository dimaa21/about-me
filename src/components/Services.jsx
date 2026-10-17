import { services } from '../data';
import SectionHead from './SectionHead';

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHead index="03" title="Services" note="What you can hand over to me." />
        <ol className="service-list">
          {services.map((service, index) => (
            <li key={service.title} data-reveal>
              <span className="service-num">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
