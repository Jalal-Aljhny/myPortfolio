import {
  FaEnvelopeOpen,
  FaFacebookF,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import styles from "./Contact.module.css";
import { useRef } from "react";
import { useAnimation } from "../../hooks/useAnimation1";
const Contact = () => {
  const dataRef = useRef(null);
  const styleAnimation1 = useAnimation(dataRef);
  const formRef = useRef(null);
  const styleAnimation2 = useAnimation(formRef);
  return (
    <section className="section contact">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className={`${styles.contact__container} container grid`}>
        <div
          className={`${styles.contact__data}`}
          ref={dataRef}
          style={styleAnimation1}
        >
          <h3 className={`${styles.contact__title}`}>Dont&apos;t be shy !</h3>
          <p className={`${styles.contact__description}`}>
            Fell free to get in touch with me . I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className={`${styles.contact__info}`}>
            <div className={`${styles.info__item}`}>
              <FaEnvelopeOpen className={`${styles.info__icon}`} />
              <div>
                <span className={`${styles.info__title}`}>Mail me</span>
                <h4 className={`${styles.info__desc}`}>
                  jalalaljhny@gmail.com
                </h4>
              </div>
            </div>
          </div>
          <div className={`${styles.contact__social}`}>
            <a
              href="https://github.com/Jalal-Aljhny"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://facebook.com/Jalal-Aljhny"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a href="https://t.me/JalalAljhny" target="_blank" rel="noreferrer">
              <FaTelegram />
            </a>
          </div>
        </div>
        <form
          ref={formRef}
          style={styleAnimation2}
          action="https://formspree.io/f/xjvnepwv"
          method="POST"
        >
          <div className={`${styles.form__group}`}>
            <div className={`${styles.form__input}`}>
              <input type="text" placeholder="Your name" name="name" required />
            </div>
            <div className={`${styles.form__input}`}>
              <input
                type="email"
                placeholder="Your email"
                name="_replyto"
                required
              />
            </div>
            <div className={`${styles.form__input}`}>
              <input
                type="text"
                placeholder="Your subject"
                name="subject"
                required
              />
            </div>
          </div>
          <textarea
            placeholder="Your message"
            name="message"
            required
          ></textarea>
          <button className={`${styles.submit} btn`} type="submit">
            Send message
            <span className="btn__icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
