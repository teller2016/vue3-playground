import { useForm } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required().email(),
});

export default function validateComposable() {
  const { values, errors, defineField, meta } = useForm({
    validationSchema: schema,
  });

  //   const [email, emailProps] = defineField("email", {
  //     validateOnModelUpdate: false,
  //     props: (state) => ({
  //       error: state.errors[0],
  //     }),
  //   });
  const [email, emailProps] = defineField("email", (state) => {
    return {
      validateOnModelUpdate: state.errors.length > 0,
    };
  });

  return {
    values,
    email,
    emailProps,
    errors,
    meta,
  };
}
