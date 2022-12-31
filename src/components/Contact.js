import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { Form } from "react-final-form";
import TextField from "./TextField";
import LoadingBar from "./LoadingBar";
import { z } from "zod";
import makeValidator from "../utils/makeValidator";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

const validate = makeValidator(formSchema);

export const Contact = () => {
  const handleSubmit = async (values) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });

    console.log(values);

    return;
  };

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
