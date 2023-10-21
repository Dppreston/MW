import "../homepage/Homepage.css";
import "../animations.css";

function Statement(props) {
  const statement = props.statementContent;

  const handleImgGrow = (e) => {
    e.currentTarget.classList.add("grow");
    e.currentTarget.classList.remove("shrink");
  };
  const handleImgShrink = (e) => {
    e.currentTarget.classList.remove("grow");
    e.currentTarget.classList.add("shrink");
  };

  return (
    <>
      <div className='homepage-statement-container'>
        {statement.map((currentStatement) => (
          <div
            className='statement'
            key={currentStatement.id}
            onMouseEnter={handleImgGrow}
            onMouseLeave={handleImgShrink}
          >
            <h1>{currentStatement.heading}</h1>
            <img
              className='statement-img'
              src={currentStatement.img}
              alt='according-img'
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default Statement;
