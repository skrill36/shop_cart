import CartButton from "../UI/CartButton";
import ShopCards from "../UI/ShopCards";
import style from "./Shop.module.css";
import { useState } from "react";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Redux Toolkit",
    desc: "The official, opinionated, batteries-included toolset for efficient Redux development",
    image: "https://redux-toolkit.js.org/img/redux-logo-landscape.png/",
    alt: "toolkit",
    price: "549",
  },
  {
    id: 2,
    title: "Formik",
    desc: "Build forms in React, without the tears. Formik is the world's most popular open source form library",
    image: "https://spin.atomicobject.com/wp-content/uploads/formik.png",
    alt: "formik",
    price: "999",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    desc: "Rapidly build modern websites without ever leaving your HTML.",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*PRQTp9ABhgNngUNFHtZS7w.png",
    alt: "tailwind",
    price: "1499",
  },
  {
    id: 4,
    title: "Material UI",
    desc: "MUI offers a comprehensive suite of UI tools to help you ship new features faster.",
    image:
      "https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png",
    alt: "material",
    price: "699",
  },
  {
    id: 5,
    title: "MobX",
    desc: "MobX is a battle-tested library that makes state management simple by applying functional reactive programming.",
    image:
      "https://www.nitorinfotech.com/wp-content/uploads/2021/10/Getting-Started-With-Mobx.jpg",
    alt: "mobx",
    price: "1299",
  },

  {
    id: 6,
    title: "grommet",
    desc: "Build responsive and accessible mobile-first projects for the web with an easy to use component library.",
    image: "https://www.rezourze.com/rz-storage/2020/09/Grommet-for-React.jpg",
    alt: "grommet",
    price: "2099",
  },

  {
    id: 7,
    title: "Ant Design",
    desc: "React UI library that contains high quality components and demos for building rich, interactive user interfaces.",
    image:
      "https://miro.medium.com/v2/resize:fit:680/1*j0JFn7118Iwd91I5KsUXug.png",
    alt: "ant",
    price: "499",
  },
  {
    id: 8,
    title: "Rebass",
    desc: "Start your design system without boiling the ocean, Build consistent UI with design constraints and user-defined scales",
    image:
      "https://repository-images.githubusercontent.com/30652354/3d0b3880-6469-11e9-9229-5f59c50c8c47",
    alt: "rebass",
    price: "3399",
  },
  {
    id: 9,
    title: "Material UI",
    desc: "MUI offers a comprehensive suite of UI tools to help you ship new features faster.",
    image:
      "https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png",
    alt: "material",
    price: "699",
  },
  {
    id: 10,
    title: "MobX",
    desc: "MobX is a battle-tested library that makes state management simple by applying functional reactive programming.",
    image:
      "https://www.nitorinfotech.com/wp-content/uploads/2021/10/Getting-Started-With-Mobx.jpg",
    alt: "mobx",
    price: "1299",
  },
];

const Shop = () => {
  const [itemsCount, setItemsCount] = useState(0);

  const addToCartHandler = () => {
    setItemsCount((prev) => prev + 1);
  };

  return (
    <>
      <div>
        <CartButton items={itemsCount}></CartButton>
      </div>
      <div className={style.shopcard}>
        {DUMMY_DATA.map((item) => {
          return (
            <ShopCards
              title={item.title}
              typo={item.desc}
              img={item.image}
              alt={item.alt}
              price={item.price}
              key={item.id}
              onAddToCart={addToCartHandler}
            />
          );
        })}
      </div>
    </>
  );
};

export default Shop;
