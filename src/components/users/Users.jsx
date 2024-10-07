import "./users.css";

const Users = ({ UserImage, username, country,userparagraph }) => {
  return (
    <div className="user-card-blocks">
      <div className="user-card">
        <img src={UserImage} alt="" className="user-img-logo" />
        <div className="user-card-text">
          <h5>{username}</h5>
          <h6>{country}</h6>
        </div>
      </div>
      <div className="user-card-footer">
        <p>{userparagraph}</p>
        <a className="star-icon" href="">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </a>
      </div>
    </div>
  );
};

export default Users;
