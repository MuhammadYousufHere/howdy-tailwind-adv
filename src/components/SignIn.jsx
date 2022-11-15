import { Form } from 'formik';
import * as Yup from 'yup';
import { AppForm, SubmitButton, FormInput } from './Form';
const SignIn = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required().label('Username'),
    password: Yup.string().required().label('Password'),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='h[100vh] w-96 bg-slate-400 rounded'>
      <AppForm
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <form onSubmit={handleSubmit}>
          <FormInput
            name='username'
            placeholder='User Name'
          />
          <FormInput
            name='password'
            placeholder='Password...'
            type='password'
          />
          <SubmitButton />
        </form>
      </AppForm>
      {/* <Button
        title='Ji'
        onClick={() => console.log(3)}
      /> */}
    </div>
  );
};

export default SignIn;
