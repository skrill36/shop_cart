import Card from "../UI/Card";
import style from "./Home.module.css";

const About = () => {
  return (
    <div>
      <Card className={style.card}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          iaculis cursus posuere. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas. Sed ex justo,
          pellentesque eu dictum vitae, congue eget sapien. Vivamus ac dui in
          nisi luctus varius. Nam velit mi, imperdiet et neque at, maximus
          auctor mauris. Mauris eu augue at lectus suscipit porttitor sit amet
          quis sem. Nunc neque odio, vestibulum sit amet orci et, aliquam
          rhoncus neque.
        </p>
      </Card>
    </div>
  );
};

export default About;
