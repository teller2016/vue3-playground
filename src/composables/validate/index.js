import { useForm } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required().email(),
});

export default function validateComposable() {
  const { values, errors, defineField } = useForm({
    validationSchema: schema,
  });

  const [email, emailAttrs] = defineField("email");

  return {
    values,
    email,
    emailAttrs,
    errors,
  };
}
