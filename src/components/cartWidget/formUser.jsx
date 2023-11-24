import React, { useRef } from 'react';



const FormUser=()=>{



    const form= useRef()
     
    function ClassName(){
        document.getElementById("container").classList.toggle("display")
        
        
    }

    const sendEmail=(e)=>{
            e.preventDefault();
            alert("Compra finalizada")   
            localStorage.setItem("Usuario", nameUser.value)
            localStorage.setItem("Celular" , phoneUser.value)
            localStorage.setItem("Mail" , mailUser.value)
            form.current.reset();
    }

    

    return(

        <>
        <div className='containerButtonFinally'>
            <button onClick={ClassName}>Finalizar compra</button>
        </div>
        
        <div className='container' id='container'>
            <h2>Por favor, complete el formulario para finalizar su compra</h2>
            <form  ref={form} action="submit" onSubmit={sendEmail} > 
                <input type="text" placeholder='NOMBRE' id='nameUser' required/>
                <input type="number" placeholder='NUMERO' id='phoneUser' required/>
                <input type="email"placeholder='E-MAIL' id='mailUser' required/>
                <input type="email" placeholder='REPETIR E-MAIL' required/>
                <input type="submit" className='buttonForm' value={"Enviar"}  required />   
            </form>
            
        </div>
  
        </> 
  )
  
}

export default FormUser