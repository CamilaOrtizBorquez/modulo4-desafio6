import React from 'react'
import {useState} from 'react'
import Swal from 'sweetalert2'

export const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const validarInput = (e) => {
        e.preventDefault();

        if (email === ''){
            /* alert ('Debes agregar tu Email') */
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debes agregar un Email"
            });
            return;

        }else if (password === ''){
            /* alert ('Debes agregar tu Contraseña') */
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debes agregar una Contraseña"
            });
            return;

        }else if (confirm === ''){
            /* alert ('Debes confirmar tu Contraseña') */
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debes confirmar tu Contraseña"
            });
            return;
        }

        if (password.length < 6 ){
            /* alert ('Tu contraseña debe tener al menos 6 caracteres') */
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Tu contraseña debe tener al menos 6 caracteres"
            });
            return;

        }else if (confirm !== password){
            /* alert ('Contraseñas no coinciden') */
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Contraseñas no coinciden"
            });
            return;
        }

        /* alert ('Usuario registrado correctamente') */
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Usuario registrado correctamente",
            showConfirmButton: false,
            timer: 1500
        });
    }


  return (
    <section className="section_register py-5">
        <article className="article_register my-4">
            <h1 className="register_title mb-3">Registro</h1>
            <form onSubmit={validarInput} className="register_container">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control mb-4" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" id="password" className="form-control" aria-describedby="passwordHelpBlock" onChange={(e) => setPassword(e.target.value)}/>
                <div id="passwordHelpBlock" className="form-text mb-4">
                    El password debe tener al menos 6 caracteres.
                </div>

                <label htmlFor="passwordConfirm" className="form-label">Confirmar Contraseña</label>
                <input type="password" id="passwordConfirm" className="form-control" aria-describedby="passwordHelpBlock" onChange={(e) => setConfirm(e.target.value)}/>
                
                <button type="submit" className="btn btn-success mt-4">Enviar</button>
            </form>
        </article>
    </section>
  )
}

export default Register
