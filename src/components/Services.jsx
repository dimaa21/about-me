import { services } from '../data';

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="main-title">Services I offer</h2>
        <div className="services-info">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">
                <i className={service.icon} />
              </div>
              <p>{service.title}</p>
              <span>{service.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
