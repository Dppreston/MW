import "../about/about.css";
import "../animations.css";

function Team(props) {
  const teamMembers = props.teamMember;

  const handleGrow = (e) => {
    e.currentTarget.classList.add("grow");
    e.currentTarget.classList.remove("shrink");
  };
  const handleShrink = (e) => {
    e.currentTarget.classList.add("shrink");
    e.currentTarget.classList.remove("grow");
  };

  return (
    <>
      {teamMembers.map((current) => (
        <div
          className='team-member'
          onMouseEnter={handleGrow}
          onMouseLeave={handleShrink}
          key={current.id}
        >
          <div className='team-member-info'>
            <div className='team-member-name-title'>
              <h1 className='team-member-name'>{current.name}</h1>
              <h2 className='team-member-title'>{current.title}</h2>
            </div>
            <div className='team-member-bio-container'>
              <p className='team-member-bio'>{current.bio}</p>
            </div>
          </div>
          <div className='team-member-img-container'>
            <img className='team-member-img' src={current.img} alt='#' />
          </div>
        </div>
      ))}
    </>
  );
}
export default Team;
