import { events } from "../contants/constants";

const EventsSection = () => {
  return (
    <section id="events" className="events-section">
      <div className="section-container">
        <h2 className="section-title">Café Events</h2>
        <p className="section-subtitle">
          Join our vibrant community gatherings
        </p>

        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
