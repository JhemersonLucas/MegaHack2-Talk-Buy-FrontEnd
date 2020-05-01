import React, { useRef, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiInfo, FiUser, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content, Background } from './styles';

import { useToast } from '../../hooks/Toast';
import getValidationErros from '../../utils/getValidationErros';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg';

interface SignInData {
  email: string;
  password: string;
}
const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (data: SignInData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('E-mail inválido')
          .required('Preenchimento obrigatório'),
        password: Yup.string().required('Preenchimento obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // await signIn({ email: data.email, password: data.password });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErros(err);
        formRef.current?.setErrors(errors);
      }

      addToast({
        title: 'teste',
        type: 'error',
        description: 'erro ao fazer login',
      });

      addToast({
        title: 'teste',
        type: 'success',
        description: 'erro ao fazer login',
      });

      addToast({
        title: 'teste',
        description: 'erro ao fazer login',
      });
    }
  }, []);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiUser} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />
          <Button type="submit">Entrar</Button>
          <span>
            <FiInfo />
            <br />
            Acesso padrão: admin, admin
          </span>
        </Form>
      </Content>
    </Container>
  );
};

export default SingIn;
