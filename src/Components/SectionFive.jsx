import "../Style/SectionFive.css";
const SectionFive = () => {
  return (
    <>
      <div className="main-container">
        <div className="img-content">
        <div className="img-side">
          <img className="video-img" src="video_imgs/video.jpg" />
          <button className="video-btn">
            <span></span>
          </button>
        </div>
        <div className="video-content">
          <h3 className="video-heading">Reservation</h3>
          <h1>Book A Table Online</h1>
          <form action="#">
            <input type="text" name="" id="" placeholder="Your Name" />
            <input type="text" name="" id="" placeholder="Your Email" />
            <br />
            <input type="text" name="" id="" placeholder="Date and Time" />
            <select>
              <option value="">No of people</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <br />
            <textarea placeholder="Spacial Request"></textarea>
            <br />
            <button>BOOK NOW</button>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default SectionFive;
