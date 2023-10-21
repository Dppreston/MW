import "../services/Services.css";
import "../animations.css";

function ServiceMenu(props) {
  const services = props.services;

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
      <div className='services-container'>
        {services.map((service) => (
          <div className='services' key={service.id}>
            <div
              className='service-img-container'
              onMouseEnter={handleGrow}
              onMouseLeave={handleShrink}
            >
              <h1 className='service-title'>{service.type}</h1>
              <img
                src={service.img}
                alt='service-img'
                className='service-img'
              />
            </div>
            <div className='service-description-container'>
              <p className='service-description'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default ServiceMenu;
