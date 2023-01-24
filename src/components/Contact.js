import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { Form } from "react-final-form";
import TextField from "./TextField";
import LoadingBar from "./LoadingBar";
import { z } from "zod";
import makeValidator from "../utils/makeValidator";
import { FORM_ERROR } from "final-form";
import { useSnackbar } from "notistack";
// import ReCAPTCHA from "react-google-recaptcha";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

const validate = makeValidator(formSchema);

export const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values, form) => {
    try {
      const response = await fetch("https://formspree.io/f/xeqwqekd", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          Accept: "application/json",
        },
      });
      form.restart();
      enqueueSnackbar("Message Sent!", { variant: "success" });
      return;
    } catch (err) {
      console.log(err);
      return { [FORM_ERROR]: "Something Went Wrong..." };
    }
  };

  const onChange = () => {};
  return (
    <section className="contact" id="connect">
      <Container className="d-flex">
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Float man" />
          </Col>
          <Col size={12} md={6}>
            <Row>
              <h2 className="text-center">Get In Touch!</h2>
              <div className="d-flex justify-content-center">
                <Form
                  onSubmit={handleSubmit}
                  validate={validate}
                  subscription={{ submitting: true }}
                  render={({ handleSubmit, submitting }) => (
                    <form
                      onSubmit={handleSubmit}
                      className="d-flex flex-column align-items-center justify-content-center gap-3"
                    >
                      <TextField
                        name="name"
                        label="Name"
                        disabled={submitting}
                      />
                      <TextField
                        name="email"
                        label="Email"
                        disabled={submitting}
                      />
                      <TextField
                        name="message"
                        label="Message"
                        multiline
                        disabled={submitting}
                      />
                      <LoadingBar hidden={!submitting} />
                      {/* <ReCAPTCHA
                        sitekey="6LdVlCAkAAAAAJa6uzQnZ_4Movs5L-qT9lEBeOO4"
                        onChange={onChange}
                      /> */}
                      <button
                        type="submit"
                        disabled={submitting}
                        style={{ width: "100%" }}
                      >
                        <span>Send me an email.</span>
                      </button>
                    </form>
                  )}
                />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
