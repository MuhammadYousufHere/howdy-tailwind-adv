import { Formik } from 'formik';
const Form = ({ onSumbit, validationSchema, initialValues, children }) => {
  return (
    <Formik
      onSubmit={onSumbit}
      initialValues={initialValues}
      // validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default Form;
