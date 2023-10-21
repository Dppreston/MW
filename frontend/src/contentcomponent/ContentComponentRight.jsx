import "../contentcomponent/ContentComponent.css";

function ContentComponentRight({ componentContentRight, otherImgs }) {
  const [{ heading1, heading2 }] = componentContentRight;

  return (
    <div className="content-container">
      <div className="content-row-container">
        <div className="content-text-container">
          <h1>{heading1}</h1>
          <h2>{heading2}</h2>
        </div>
        <div className="content-img-container">
          <img className="contentImg" src={otherImgs[1]} alt="#" />
        </div>
      </div>
    </div>
  );
}
export default ContentComponentRight;
