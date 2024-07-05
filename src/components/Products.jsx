import { motion } from "framer-motion";
import Product from "./Product";
import { useState } from "react";
import  Layout from "../../public/Video/Layout.mp4"
import  Arqitel from "../../public/Video/Arqitel project video 4_3.webm"
import  TTR from "../../public/Video/TTR.webm"
import  cula from "../../public/Video/Cula_promo_new_4_3.mp4"
import  ShowCase from "../../public/Video/showcase_4_3.mp4"

const Products = () => {
  var products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
    },
    {
      title: "cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
    },
    {
      title: "layout land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
    },
    {
      title: "showcase",
      description:
        "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
      live: true,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 21);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full  h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="absolute overflow-hidden w-96 h-[21rem] left-[44%]  -translate-x-[50%] rounded-lg bg-sky-400"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-100 hover:bg-violet-500 transition-colors duration-300"
          >
            <video autoPlay muted loop className="w-full h-full object-cover" controls>
              <source src={Arqitel} type="video/webm" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-200"
          >
            <video autoPlay muted loop className="w-full h-full object-cover" controls>
              <source src={cula} type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <video autoPlay muted loop className="w-full h-full object-cover" controls>
              <source src={Layout} type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400"
          >
            <video autoPlay muted loop className="w-full h-full object-cover" controls>
              <source src={TTR} type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-500"
          >
            <video autoPlay muted loop className="w-full h-full object-cover" controls>
              <source src={ShowCase} type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
