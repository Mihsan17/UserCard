import PropTypes from "prop-types";

const UserData = [
  {
    name: "Chris",
    city: "Los Angeles",
    description: "Front-End Developer",
    skills: ["UI/UX", "Front-End Development", "HTML", "CSS", "JavaScript", "React", "Node"],
    profile: "images/50.jpg",
    online: false,
  },
  {
    name: "Emma",
    city: "New York",
    description: "Full-Stack Developer",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
    profile: "images/20.jpg",
    online: true,
  },
  {
    name: "Alexandra",
    city: "San Francisco",
    description: "Software Engineer",
    skills: ["Java", "Python", "C++", "Spring Boot", "Django", "MySQL", "AWS"],
    profile: "images/30.jpg",
    online: false,
  },
  {
    name: "Leonardo",
    city: "Chicago",
    description: "Data Scientist",
    skills: ["Python", "R", "Machine Learning", "Data Visualization", "SQL", "TensorFlow", "Tableau"],
    profile: "images/60.jpg",
    online: true,
  },
  {
    name: "Tom",
    city: "Seattle",
    description: "UI/UX Designer",
    skills: ["UI Design", "UX Research", "Adobe XD", "Sketch", "Figma", "Prototyping", "User Testing"],
    profile: "images/40.jpg",
    online: false,
  },
  {
    name: "christon",
    city: "Los Angeles",
    description: "Mobile App Developer",
    skills: ["Swift", "Kotlin", "React Native", "Flutter", "iOS Development", "Android Development", "Firebase"],
    profile: "images/10.jpg",
    online: true,
  },
];


function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
      <img src={props.profile} className="img" alt="user" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill,index) =>(
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
const UserCard = () => {
  return (
    
    <>{
      UserData.map((user,index) =>(
      <User key={index} name={user.name} city={user.city} description={user.description} skills={user.skills} profile={user.profile} online={user.online} />
      ))
    }
    </>
  );
}

User.propTypes={
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  online: PropTypes.bool.isRequired,
  profile: PropTypes.string.isRequired
};

export default UserCard;

