import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [formData, setFormData] = useState({
    colour: 0,
    spendtime: [],
    review: '',
    username: '',
    email: ''
  })

  const [answerData, setAnswerData] = useState([]);
  function handleInput(event) {
    const { name, value } = event.target;
  
    setFormData(prev => {  
      return {
        ...prev,
        [name]: (name === 'spendtime') ? 
          (prev[name].includes(value) ? 
            prev[name].filter(item => item !== value) 
            : 
            [...prev[name], value]) 
          : value
      };
    });
  }

  function onSubmit(){
    event.preventDefault()
    console.log("Submit")
    setAnswerData(prev => ([
      ...prev,
      formData
    ]))
    console.log(formData)
  }

  return (
    <>
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list:</h2>
        
        {(answerData.length > 0) ? (
          <>
            <AnswersList answersList={answerData}/>
          </>
        ) : (
          <>
          <p>No answers to show</p>
          </>
        )

        }
        {/* answers should go here */}
        
      </section>
      <section className="survey__form">{/* a form should be here */}

          <form className="form" onSubmit={() => onSubmit()}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
              <h3>How do you rate your rubber duck colour?</h3>
              {/* Radio inputs go here */}
                <ul>
                  <li>
                    <input onChange={handleInput} id="color-one" type="radio" name="color" value="1" /><label
                      for="color-one"
                      >1</label
                    >
                  </li>
                  <li>
                    <input onChange={handleInput} id="color-two" type="radio" name="color" value="2" /><label
                      for="color-two"
                      >2</label
                    >
                  </li>
                  <li>
                    <input onChange={handleInput} id="color-three" type="radio" name="color" value="3" /><label
                      for="color-three"
                      >3</label
                    >
                  </li>
                  <li>
                    <input onChange={handleInput} id="color-four" type="radio" name="color" value="4" /><label
                      for="color-four"
                      >4</label
                    >
                  </li>
                </ul>

            </div>
            <div className="form__group">
              <h3>How do you like to spend time with your rubber duck</h3>
              {/* checkboxes go here */}
                <ul>
                  <li>
                    <label
                      ><input
                        onChange={handleInput}
                        name="spendtime"
                        type="checkbox"
                        value="swimming"
                      />Swimming</label
                    >
                  </li>
                  <li>
                    <label
                      ><input onChange={handleInput} name="spendtime" type="checkbox" value="bathing" />Bathing</label
                    >
                  </li>
                  <li>
                    <label
                      ><input
                        onChange={handleInput}
                        name="spendtime"
                        type="checkbox"
                        value="chatting"
                      />Chatting</label
                    >
                  </li>
                  <li>
                    <label
                      ><input 
                        onChange={handleInput}
                        name="spendtime" 
                        type="checkbox" 
                        value="noTime" />I don't like to
                      spend time with it</label
                    >
                  </li>
                </ul>

            </div>
            <label
              >What else have you got to say about your rubber duck?<textarea
                onChange={handleInput}
                name="review"
                cols="30"
                rows="10"
              ></textarea></label
            ><label
              >Put your name here (if you feel like it):<input
                onChange={handleInput}
                type="text"
                name="username"
                value={formData.username} /></label
            ><label
              >Leave us your email pretty please??<input
                onChange={handleInput}
                type="email"
                name="email"
                value={formData.email} /></label
            ><input className="form__submit" type="submit" value="Submit Survey!" />
          </form>


      </section>
    </main>
    </>
  );
}

export default Survey;
