import React from 'react'
import {useState} from 'react'
import Swal from 'sweetalert2'

export const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const validarInput = (e) => {
    e.preventDefault();

    if (email === ''){
      /* alert ('Debes agregar tu Email') */
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes agregar tu Email"
    });
      return;

    }if (password === ''){
      /* alert ('Debes agregar tu Contraseña') */
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes agregar tu Contraseña"
    });
      return;

    }if (password.length < 6 ){
      /* alert ('Tu contraseña debe al menos 6 caracteres') */
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tu contraseña debe tener al menos 6 caracteres"
    });
      return;

    }
    /* alert ('Usuario ingresado correctamente') */
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Usuario ingresado correctamente",
      showConfirmButton: false,
      timer: 1500
  });

  }
  
  return (
    <section className="section_register py-5">
        <article className="article_register my-5">
            <h1 className="register_title mb-3">Login</h1>
            <form onSubmit={validarInput} className="register_container mb-5">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control mb-4" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="inputPassword5" className="form-label">Contraseña</label>
                <input type="password" id="inputPassword5" className="form-control mb-4" aria-describedby="passwordHelpBlock" onChange={(e) => setPassword(e.target.value)}/>

                <button type="submit" className="btn btn-success">Enviar</button>
            </form>
        </article>
    </section>
  )
}
