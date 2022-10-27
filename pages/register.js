import Form from '../components/Form';
import styles from '../styles/Register.module.css';

const isEmpty = (val) => val?.length <= 0;
const isValidEmail = (val) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val);
const isValidPassword = (val) => val?.length >= 7;

const fields = [
  {
    id: 'name',
    type: 'text',
    getErrorMessage: (val) => {
      return isEmpty(val) ? 'Name field should not be empty' : '';
    },
    placeholder: 'Name',
  },
  {
    id: 'email',
    type: 'email',
    getErrorMessage: (val) => {
      if (!val?.length) return 'Email field should not be empty';

      return isValidEmail(val) ? '' : 'Invalid email format';
    },
    placeholder: 'Email',
  },
  {
    id: 'password',
    type: 'password',
    getErrorMessage: (val) => {
      return isValidPassword(val)
        ? ''
        : 'Password should contain at least 8 characters';
    },
    placeholder: 'Password',
  },
];

export const Register = () => {
  const onSuccess = async (values) => {
    const payload = fields?.reduce((res, curr, idx) => {
      res[curr.id] = values[idx];

      return res;
    }, {});
    // API call here with payload above

    alert('User was successully created!');
  };

  return (
    <div className={styles.container}>
      <h1>Register Form</h1>

      <Form fields={fields} onSuccess={onSuccess} btnText="Submit" />
    </div>
  );
};

export default Register;
