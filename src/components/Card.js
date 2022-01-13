/*
- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)
*/
// import Katie from "../images/katie-zaferes.png";
import Star from "../images/star.png";
export default function Card(props) {
  return (
    <>
      <div className="card">
        <img src={`./images/${props.img}`} className="card--image"></img>
        <div className="card--stats">
          <img className="card--star" src={Star}></img>
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount}) • </span>
          <span className="gray">{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p>
          <span className="bold">From ${props.price} </span> / person
        </p>
      </div>
    </>
  );
}
