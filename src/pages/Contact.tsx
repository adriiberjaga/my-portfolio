import { useState } from "react";
import stylesA from "./Contact.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Contact() {
  const [formAlert, setFormAlert] = useState(false);

  function finish() {
    if (formData.name !== '' && formData.email !== '' && formData.message !== '') {
      setFormAlert(true);
      setTimeout(() => {
        setFormAlert(false);
      }, 3000);
    }
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const submissionData = {
      ...formData,
      access_key: "fd8611a2-4e67-4e24-b25e-80c1cc23a251",
    };

    const json = JSON.stringify(submissionData);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setFormData({ name: "", email: "", message: "" }); // Limpiar el formulario
    } else {
      console.error("Error", res);
    }
  };

  return (
    <div className={stylesA["contact"]}>
      <h3 className={stylesA["title"]}>Contact</h3>

      <div className={stylesA["contactMain"]}>
        <div className={stylesA["contactWrapper"]}>
          <div className={stylesA["description"]}>
            <p>
              <span className={stylesA.icon}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              Barcelona, Badalona, 08918
            </p>
            <p>
              <span className={stylesA.icon}>
              <FontAwesomeIcon icon={faPhone} />
              </span>
              +34 685 53 31 10
            </p>
            <p>
              <span className={stylesA.icon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              adriabdd@gmail.com
            </p>
          </div>
          <form onSubmit={onSubmit} className={stylesA["contactForm"]}>
            <label htmlFor="name" className={stylesA["contactLabel"]}></label>
            <input
              data-aos="zoom-in"
              required
              type="text"
              name="name"
              id="name"
              placeholder="Nombre"
              title="Name"
              value={formData.name}
              onChange={onChange}
              className={stylesA["contactInput"]}
            />
            <input
              data-aos="zoom-in"
              required
              type="email"
              name="email"
              title="Email"
              placeholder="Email"
              value={formData.email}
              onChange={onChange}
              className={stylesA["contactInput"]}
            />
            <textarea
              data-aos="zoom-in"
              required
              maxLength={500}
              name="message"
              title="Message"
              placeholder="Mensaje"
              value={formData.message}
              onChange={onChange}
              className={stylesA["contactTextarea"]}
            ></textarea>
            <button title="Send" onClick={finish} type="submit" className={stylesA["contactButton"]}>
              Enviar
            </button>
          </form>
        </div>
      </div>
      {formAlert && (
        <div className={stylesA["formAlert"]}>
          <p>Formulario enviado correctamente</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
