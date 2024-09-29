// Components/pages/Contact.js or where the Contact component is defined
import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data); // For debugging
    return null; // Adjust if you need to return something
  } catch (error) {
    console.error("Error handling contact data:", error.message);
  }
};

export const Contact = () => {
  return (
    <section className="container">
      <h2 className="section-common--heading">Contact Us</h2>
      <p className="section-common--subheading">
        Get in touch with us. We are always here to help you.
      </p>

      <div className="section-contact">
        <div className="grid grid-two--cols">
          <div className="contact-content">
            <Form method="POST" action="/contact">
              <div className="grid grid-two-cols mb-3">
                <div>
                  <label htmlFor="username">Full Name</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    autoComplete="off"
                    placeholder="Enter Full Name"
                  />
                </div>

                <div>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="off"
                    placeholder="abc@dipu.com"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="We are always here to help you."
                ></textarea>
              </div>

              <div className="mt-3">
                <button type="submit" className="btn contact-btn">
                  Send Message
                </button>
              </div>
            </Form>
          </div>
          {/* <div className="contact-image">
            <figure>
              <img
                src="/contact.png"
                alt="Contact"
                className="contact_image"
              />
            </figure>
          </div> */}
        </div>
      </div>
    </section>
  );
};
