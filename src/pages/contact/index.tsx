import ContactForm from "./ContactForm";
import ContactPage from "./ContactPage";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/state/store";

const Contact = () => {
  const openForm = useSelector((state: RootState) => state.form.openForm);
  const edit = useSelector((state: RootState) => state.form.enableEdit);

  return (
    <section className="p-10  h-full">
      {openForm || edit ? <ContactForm /> : <ContactPage />}
    </section>
  );
};

export default Contact;
