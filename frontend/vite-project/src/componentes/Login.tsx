import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [stateButton, setButton] = useState(false);
    const [age, setAge] = useState(Number);
    const [accept, setAccept] = useState(Boolean);

    
    /* eu quero que o botao seja true quando eu clicar o nome for maior que 3 e se o email estiver no formato de regex e q */
    const navigate = useNavigate();
    useEffect(() => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = emailRegex.test(email);
        if(stateButton === true && name.length > 3 && isValid) {
        navigate('/Main');
        
      } 
    }, [name, email, stateButton])

    
    return (
        <div className="container">
            <header className="header">
                Screen login
            </header>
            <main className="main-content" >
                <label className="name" htmlFor="name"> nome </label>
                <input
                    id="name"
                    className="inputs"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                />

                <br />
                <label className="email" htmlFor=""> email </label>
                <input 
                value={ email } 
                onChange={(event) => setEmail(event.target.value)} 
                className="inputs" 
                type="text" 
                name="" 
                id="" />
                <button 
                className="button"
                onClick={() => setButton(true)}
                disabled={ stateButton } 
                > Botao aqui</button>
            </main>
        </div>
    )
}