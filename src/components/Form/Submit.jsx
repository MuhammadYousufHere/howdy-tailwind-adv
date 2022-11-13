import { useFormikContext } from 'formik';
import Button from '../Button';

const Submit = ({ title = 'Submit' }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <Button
      title={title}
      type='submit'
    />
  );
};

export default Submit;
