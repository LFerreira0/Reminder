import { useState } from "react";
import './Account.scss';
import { isEmpty } from "lodash";
import { useForm } from 'react-hook-form';
import validator from 'validator';
import axios from 'axios';

import { Button } from '@mui/base/Button';


export default function App() {

  const { register, handleSubmit, formState: { errors, isSubmitting, isDirty, isValid } } = useForm({mode: "onChange"});
  
  const onSubmit = (data) => {
    axios.post('http://localhost:3333/users', data)
    .then((response) => { console.log(response)})
    .catch((error) => { console.log(error)})
  };  

  return (
    <div className="container">
      <div className="formGroup">
        <div className="create">
          <h1>Crie uma conta Reminder</h1>
          <div className="form-group">
          <label>Nome</label>
            <input 
              className={errors?.name && "input-error"}
              type="text" 
              placeholder="Seu nome"     
              {...register('name', {required: true})}
              />
              <span>{errors?.name?.type === 'required' && <p className="error-message">Name is required</p>}</span>
          </div>

          <div className="form-group">
          <label>E-mail</label>
            <input 
              className={errors?.email && "input-error"}
              type="email" 
              placeholder="Seu email"  
              {...register('email', {required: true, validate: (value) => validator.isEmail(value)})}
       
              />
              <span>{errors?.email?.type === 'required' && <p className="error-message">Email is required</p>}</span>
              <span>{errors?.email?.type === 'validate' && <p className="error-message">Email is invalid</p>}</span>

          </div>

          <div className="form-group">
          <label>Senha</label>
            <input 
              className={errors?.password && "input-error"}
              type="password" 
              placeholder="Sua senha"  
              {...register('password', { required: true, minLength: 8})}
         
              />
              <span>{errors?.password?.type === 'minLength' && <p className="error-message">Password must have at least 8 characters.</p>}</span>
              <span>{errors?.password?.type === 'required' && <p className="error-message">Password is required</p>}</span>

          </div>
          <div className="form-group">
            <button disabled={!isDirty || !isValid} onClick={() => handleSubmit(onSubmit)()}>Criar conta</button>
          </div>
        </div>
        <div className="login">
          <h1>Já possui uma conta ?</h1>
          <Button>Click Me</Button>
        </div>
      </div>
    </div>
  );
}