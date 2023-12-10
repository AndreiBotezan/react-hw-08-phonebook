import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import Card from 'components/Card/Card';
import Label from 'components/ContactForm/Label/Label';
import Button from 'components/Button/Button';
import s from './LoginPage.module.css';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ ...form }));
    setForm({ email: '', password: '' });
  };

  const { email, password } = form;
  return (
    <Section>
      <Container>
        <Card title={'Login'}>
          <form className={s.form} onSubmit={handleSubmit}>
            <Label labelTitle={'Email'}>
              <input
                className={s.input}
                type="email"
                name="email"
                //pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
                placeholder='Enter email'
                required
                value={email}
                onChange={handleChange}
              />
            </Label>
            <Label labelTitle={'Password'}>
              <input
                className={s.input}
                type="password"
                name="password"
                placeholder='Enter password'
                required
                value={password}
                onChange={handleChange}
              />
            </Label>

            <Button type={'submit'} title={'Login'} />
          </form>
        </Card>
      </Container>
    </Section>
  );
}