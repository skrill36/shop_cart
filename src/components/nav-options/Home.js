import Card from "../UI/Card";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.div}>
      <p className={style.p}>
        Your one stop destination for React accessories. Various packages like
        Redux Toolkit, Formik and Tailwind in stock now at discount prices!
      </p>
    </div>
  );
};

export default Home;
