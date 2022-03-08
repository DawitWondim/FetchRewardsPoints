import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  
  const [option1Selected, setOption1Selected] = useState(false);
  const [option2Selected, setOption2Selected] = useState(false);
  const [option3Selected, setOption3Selected] = useState(false);

  let navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.warn(option1Selected, option2Selected, option3Selected);
    
       if (option1Selected) navigate('/payer');
       if (option2Selected) navigate('/transactions');
       if (option3Selected) navigate('/payer');

  }
  return (
    <div className="container-fluid">
     <nav>
    <div className="nav-wrapper center-align">
        <a href="/" className='brand-logo'>Fetch Rewards</a>
    </div>
  </nav>
    <h2>What would you like to do?</h2>
    <form action="submit" onSubmit={onSubmitForm}>
    <p>
      <label>
        <input type="checkbox" onChange={(e) => setOption1Selected(e.target.checked)}/>
        <span>Spend points</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" onChange={(e) => setOption2Selected(e.target.checked)}/>
        <span>Add transactions</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" onChange={(e) => setOption3Selected(e.target.checked)}/>
        <span>View payer point balances</span>
      </label>
    </p>
    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
  </button>
    </form>
    </div>
  )
}


export default LandingPage;