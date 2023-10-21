import "../contentcomponent/ContentComponent.css";

function ContentComponentLeft({ componentContentLeft, otherImgs }) {
  const [{ heading1, heading2 }] = componentContentLeft;

  return (
    <div className="content-container">
      <div className="content-row-container">
        <div className="content-img-container">
          <img className="contentImg" src={otherImgs[0]} alt="#" />
        </div>
        <div className="content-text-container">
          <h1>{heading1}</h1>
          <h2>{heading2}</h2>
        </div>
      </div>
    </div>
  );
}
export default ContentComponentLeft;
