import React, {useState}  from 'react'

const AddPayer = () => {
    
    const [payer, setPayer] = useState({
      name: '',
      points: 0,
    });

    const handleChange = (e) => {
      setPayer({...payer, [e.target.name]: e.target.value})
    }

   const submitForm = () => {
     
   }
        return (
            <>
            <nav>
            <div className="nav-wrapper center-align">
                <a href="/" className='brand-logo'>Fetch Rewards</a>
            </div>
          </nav>
            <div className="row">
            <form className="col s12" onSubmit={submitForm}>
                <h5>Enter the new payer below. Then click the submit button.</h5>
              <div className="row">
                <div className="input-field col s6">
                  <input  type="text" className="validate" name="name" value={payer.name} onChange={handleChange}/>
                  <label htmlFor="payer">Payer</label>
                </div>
                <br/>
              <div className="row">
                <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
              </div>
              </div>
            </form>
          </div>
          </>
        )
}

export default AddPayer;

