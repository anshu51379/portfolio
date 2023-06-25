import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/anshu51379"}
          alt="Founder"
        />

        <h2>Abhishek Kumar</h2>
        <p>The ways of the heart cannot be explained. It wants what it wants.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://github.com/anshu51379" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://instagram.com/anshu51379" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://www.youtube.com/AbhishekKumar51379" target={"blank"}>
            <AiFillYoutube />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
