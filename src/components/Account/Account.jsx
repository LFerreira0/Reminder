import { useState } from "react";
import './Account.scss';

export default function App() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
  })

  const [errors, setErros] = useState({
    name: null,
    email: null,
    password: null,
  })

  const handleSubmit = () => {
    let formIsValid = true;

    if (isEmpty(userForm.name)) {
      setErrors((prev) => ({ ...prev, name: "Name is required." }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, name: null }));
    }

    if (isEmpty(userForm.email)) {
      setErrors((prev) => ({ ...prev, email: "Email is required." }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, email: null }));
    }

    if (isEmpty(userForm.password)) {
      setErrors((prev) => ({ ...prev, password: "Password is required." }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, password: null }));
    }    

    if (!formIsValid) return;

    alert(JSON.stringify(userForm));
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
              value={userForm.name}
              onChange={(e) =>
                setUserForm((prev) => ({ ...prev, name: e.target.value }))
              }
              />
              {errors?.name && <p className="error-message">{errors?.name}</p>}
          </div>

          <div className="form-group">
          <label>E-mail</label>
            <input 
              className={errors?.email && "input-error"}
              type="email" 
              placeholder="Seu email" 
              value={userForm.email}
              onChange={(e) =>
                setUserForm((prev) => ({ ...prev, email: e.target.value }))
              }
              />
              {errors?.email && <p className="error-message">{errors?.email}</p>}
          </div>

          <div className="form-group">
          <label>Senha</label>
            <input 
              className={errors?.password && "input-error"}
              type="password" 
              placeholder="Sua senha" 
              value={userForm.password}
              onChange={(e) =>
                setUserForm((prev) => ({ ...prev, password: e.target.value }))
              }
              />
              {errors?.password && <p className="error-message">{errors?.password}</p>}
          </div>
          <div className="form-group">
            <button onClick={handleSubmit}>Criar conta</button>
          </div>
        </div>
        <div className="login"></div>
      </div>
    </div>
  );
}