import { team } from "../contants/constants";

const TeamSection = () => {
  return (
    <section id="team" className="team-section">
      <div className="section-container">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">
          The passionate people behind your perfect cup
        </p>

        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
