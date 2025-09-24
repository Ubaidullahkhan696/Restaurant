import "../Style/SectionSix.css";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const SectionSix = () => {
  return (
    <>
      <div className="teamMember-container">
        <div className="member-title">
          <h4 className="main-member-title">Team Members</h4>
          <h1 className="Chefs-title">Our Master Chefs</h1>
        </div>
        <div className="chefs-title-img-area">
          <div className="card-container">
            <div className="card">
              {/* <!-- Profile Picture --> */}
              <div className="profile-img">
                <img src="chefs\team-1.jpg" alt="Profile Image" />
              </div>
              {/* <!-- Card Content --> */}
              <div className="card-content">
                <h3 className="name">Full Name</h3>
                <p className="designation">Designation</p>
              </div>
              {/* <!-- Social Icons --> */}
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="fab fa-facebook-f">
                    <FaFacebookF />
                  </i>
                </a>
                <a href="#" className="icon">
                  <i className="fab fa-twitter">
                    <FaTwitter />
                  </i>
                </a>
                <a href="#" className="icon">
                  <i className="fab fa-instagram">
                    <FaInstagram />
                  </i>
                </a>
              </div>
            </div>
            {/* card2 */}
            <div className="card">
              {/* <!-- Profile Picture --> */}
              <div className="profile-img">
                <img src="chefs\team-2.jpg" alt="Profile Image" />
              </div>
              {/* <!-- Card Content --> */}
              <div className="card-content">
                <h3 className="name">Full Name</h3>
                <p className="designation">Designation</p>
              </div>
              {/* <!-- Social Icons --> */}
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="fab fa-facebook-f">
                    <FaFacebookF />
                  </i>
                </a>
                <a href="#" className="icon">
                  <i className="fab fa-twitter">
                    <FaTwitter />
                  </i>
                </a>
                <a href="#" className="icon">
                  <i className="fab fa-instagram">
                    <FaInstagram />
                  </i>
                </a>
              </div>
            </div>
            {/* card 3 */}
            <div className="card">
              {/* <!-- Profile Picture --> */}
              <div className="profile-img">
                <img src="chefs\team-3.jpg" alt="Profile Image" />
              </div>
              {/* <!-- Card Content --> */}
              <div className="card-content">
                <h3 className="name">Full Name</h3>
                <p className="designation">Designation</p>
              </div>
              {/* <!-- Social Icons --> */}
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="fab fa-facebook-f">
                    <FaFacebookF />
                  </i>
                </a>
                <a href="#" className="icon">
                  <i className="fab fa-twitter">
                    <FaTwitter />
                  </i>
                </a>
                <a href="#" className="icon">
                  <i className="fab fa-instagram">
                    <FaInstagram />
                  </i>
                </a>
              </div>
            </div>
            {/* card 4 */}
            <div className="card">
              {/* <!-- Profile Picture --> */}
              <div className="profile-img">
                <img src="chefs\team-4.jpg" alt="Profile Image" />
              </div>
              {/* <!-- Card Content --> */}
              <div className="card-content">
                <h3 className="name">Full Name</h3>
                <p className="designation">Designation</p>
              </div>
              {/* <!-- Social Icons --> */}
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="fab fa-facebook-f">
                    <FaFacebookF />
                  </i>
                </a>
                <a href="#" className="icon">
                  <i className="fab fa-twitter">
                    <FaTwitter />
                  </i>
                </a>
                <a href="#" className="icon">
                  <i className="fab fa-instagram">
                    <FaInstagram />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSix;
