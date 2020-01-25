import React,{useState} from 'react'
import './Login.css'
import Octicon,{X,Person} from '@primer/octicons-react'
export default function Login()
{
    const [context,setContext] = useState(0);

    var Login = () =>
    {
        var state = document.getElementById('login').style.display;
        if(state!='flex') document.getElementById('login').style.display='flex';
        else document.getElementById('login').style.display='none';
    }

    return <div>
          <div className='overlay' id='login'>
          <div className="pop flex-column friends padding-10 level">
              <div className="pop-header wide ">
                  <span><Octicon className='pop-header-icon'   icon={Person}></Octicon>USER</span>
                  <div className="pop-overlay-close" onClick={Login}><Octicon   icon={X}></Octicon></div>
                  </div>
                <div className="loginform">
                    
           {context===0? <div className="flex-column">
                        <span>EMAIL</span>
                        <input type="email" ></input>
                        <span>PASSWORD</span>
                        <input type="password" ></input>
                        <button className="btn btn-blue">Accedi</button>
                        <button className="btn">Accedi con Google</button>
                        <p>Vuoi creare un nuovo account? <a onClick={()=>{setContext(1)}}>Registrati</a></p>
                        </div>
                        :
                        <div className="flex-column">
                        <span>USERNAME</span>
                        <input type="text" ></input>
                        <span>EMAIL</span>
                        <input type="email"></input>
                        <span>PASSWORD</span>
                        <input type="password" ></input>
                        <span>CONFERMA PASSWORD</span>
                        <input type="password" ></input>
                        <button className="btn btn-blue">Registrati</button>
                        <p>Sei già registrato? <a onClick={()=>{setContext(0)}}>Accedi</a></p>
                        </div>
                        }
                       
               
                        

                </div>  
         </div>
        </div>
         <button className="login" onClick = {Login}> Sign in </button>
    </div>
}
