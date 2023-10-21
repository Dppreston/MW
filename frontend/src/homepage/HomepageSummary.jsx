import "../homepage/Homepage.css";

function HomepageSummary(props) {
  const content = props.homepageSummaryContent;

  return (
    <>
      <div className='summary-wrapper'>
        <div className='summary'>
          {content.map((content) => (
            <div className='summary-container' key={content.id}>
              <h1 className='summary-title'>{content.title}</h1>
              <p className='summary-body'>{content.content}</p>
              <button
                value={content.path}
                onClick={(e) => {
                  location.href = e.currentTarget.value;
                }}
              >
                <p>{content.anchor}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default HomepageSummary;
