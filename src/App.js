import TextContent from './components/TextContent';
import Submit from './components/Submit';
import './App.css';
import { useEffect, useState } from 'react';
import Submited from './components/Submited';
import image from './images/illustration-thank-you.svg'

function App() {

  const [submit, setSubmit] = useState(null);

  useEffect(()=>{
    console.log(submit)
  },[submit])


  function onSubmitButton(rating){


    const rateItem = rating.filter(item => item.checked === true);
    const submited = new Submited(rateItem[0].value);
    setSubmit(submited);
    

  }

  if(!submit){

    return (
      <div className="container">
          <TextContent></TextContent>
          <Submit onSubmitButton={onSubmitButton}></Submit>
      </div>
    );

  } else {
    return(

      <div className="container">

        <img className='thanksImg' src={image} alt="" />

        <p className="result">You selected {submit.value} out of 5</p>

        <h1 className='submitTitle'>Thank you!</h1>

        <p className='submitContent'>We appreciate you taking the time to give a
         rating.
          if you ever need more support, don't
          hesitate to get in touch!
        </p>
          
      </div>

    )
  }

  
}

export default App;
