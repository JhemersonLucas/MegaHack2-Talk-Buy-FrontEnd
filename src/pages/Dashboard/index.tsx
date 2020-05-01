/* eslint-disable react-hooks/rules-of-hooks */
import React, {
  useState,
  useEffect,
  FormEvent,
  useRef,
  useCallback,
} from 'react';
import {
  FiChevronRight,
  FiCheck,
  FiTrash,
  FiLink,
  FiFileText,
  FiClipboard,
  FiTag,
} from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import api from '../../services/api';
import getValidationErros from '../../utils/getValidationErros';
import { useToast } from '../../hooks/Toast';

import {
  Container,
  Content,
  FormContent,
  Title,
  Tools,
  Tool,
  CountTools,
  Error,
} from './styles';

import Input from '../../components/Input';

interface Tool {
  id: string;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface FormData {
  title: string;
  link: string;
  description: string;
  tags: string;
}

const DashBoard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [tools, setTools] = useState<Tool[]>([]);
  const [inputError, setInputError] = useState('');
  const { addToast } = useToast();

  useEffect(() => {
    api
      .get('tools')
      .then(response => {
        setTools(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleRemoveTool = useCallback(async (id: string) => {
    try {
      const response = await api.delete(`tools/${id}`);
      setTools(state => state.filter(e => e.id !== id));
    } catch (err) {
      addToast({
        title: 'Erro',
        type: 'error',
        description: 'Não foi possível completar a requisição',
      });
    }
  }, []);

  const handleSubmit = useCallback(
    async ({ title, link, description, tags }: FormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          title: Yup.string().required('Preenchimento Obrigatório'),
          link: Yup.string().required('Preenchimento Obrigatório'),
          description: Yup.string().required('Preenchimento Obrigatório'),
          tags: Yup.string().required('Preenchimento Obrigatório'),
        });

        await schema.validate(
          { title, link, description, tags },
          {
            abortEarly: false,
          },
        );

        // transformar tags
        const arrayTags = tags.split(',').map(e => e.replace(/\s/g, ''));
        const sendData = {
          title,
          link,
          description,
          tags: arrayTags,
        };
        const response = await api.post('tools', sendData);

        if (response) {
          setTools(state => [response.data, ...state]);

          addToast({
            title: 'Adicionado!',
            type: 'success',
            description: 'Adicionado com sucesso!',
          });

          formRef.current?.setFieldValue('title', '');
          formRef.current?.setFieldValue('link', '');
          formRef.current?.setFieldValue('description', '');
          formRef.current?.setFieldValue('tags', '');
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
        }

        addToast({
          title: 'Erro',
          type: 'error',
          description: 'Verifique os campos',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <FormContent>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Insira uma ferramenta:</h2>
          <span>Title</span>
          <Input name="title" icon={FiClipboard} placeholder="Title" />
          <span>Link</span>
          <Input name="link" icon={FiLink} placeholder="Link" />
          <span>Description</span>
          <Input
            name="description"
            icon={FiFileText}
            placeholder="Description"
          />
          <span>Tags</span>
          <Input name="tags" icon={FiTag} placeholder="Tag1, Tag2" />
          <button type="submit">
            <FiCheck />
            Pesquisar
          </button>
        </Form>
        {inputError && <Error>{inputError}</Error>}
      </FormContent>
      <Content>
        <Title>Minhas ferramentas:</Title>
        <CountTools>
          Resultados:
          <b>{tools.length}</b>
        </CountTools>
        <Tools>
          {tools.map(tool => (
            <Tool key={tool.title}>
              <button onClick={() => handleRemoveTool(tool.id)}>
                <FiTrash size={20} />
              </button>
              <div>
                <strong>{tool.title}</strong>
                <p>{tool.description}</p>
                <div>
                  {tool.tags.map(t => (
                    <span>{t}</span>
                  ))}
                </div>
              </div>
              <a href={tool.link} target="_blank">
                <FiChevronRight size={20} />
                Abrir Link
              </a>
            </Tool>
          ))}
        </Tools>
      </Content>
    </Container>
  );
};

export default DashBoard;
