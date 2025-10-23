import { useState, useRef, useEffect } from 'react'
import './App.css'
import  Diagram  from './DFA.jsx'
import TransitionDiagram from './transitionFunction.jsx'

function App() {
    //will hold current state outside of loop
    const [currentState, setCurrentState] = useState("none")

    //audio sounds
    let bumpSound = new Audio("./src/assets/pokemonBumpSound.mp3")
    let healSound = new Audio("./src/assets/healingSound.mp3")
    let lowHpSound = new Audio("./src/assets/lowHpSound.mp3")

    //when string is accepted, last state
    const [finalState, setFinalState] = useState("none")

    //when string is rejected, last state
    const [failState, setFailState] = useState("none")

    //to disable input bar while transitions are occuring
    const [isDisabled, setIsDisabled] = useState(false)

    //will hold the string from inputBar
    const inputRef = useRef(); 

    //transition table
    const transition = {
        'Q1' : { 'a' : ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'], 'b' : ['Q4', 'Q5']},
        'Q2' : { 'a' : ['Q3'], 'b' : ['Q5']},
        'Q3' : { 'a' : ['none'], 'b' : ['Q2']},
        'Q4' : { 'a' : ['none'], 'b' : ['Q5']},
        'Q5' : { 'a' : ['none'], 'b' : ['none']},
        // 'Q6' : { 'a' : 'Q6', 'b' : 'Q8'},
        // 'Q7' : { 'a' : 'Q5', 'b' : 'Q4'},
        // 'Q8' : { 'a' : 'Q9', 'b' : 'Q7'},
        // 'Q9' : { 'a' : 'QX', 'b' : 'Q2'},
        // 'QX' : { 'a' : 'QX', 'b' : 'QX'},
    }

    const acceptStates = ["Q5"]

    //history of inputted strings
    const [currentStrings, setCurrentStrings] = useState([
      // {
      //   string : "abba",
      //   accepted : false,
      //   transFunc : "0a1b3b1a0"
      // },
      // {
      //   string : "abbba",
      //   accepted : true,
      //   transFunc : "0a1b3b1b3a2"
      // },
      // {
      //   string : "abbaa",
      //   accepted : false,
      //   transFunc : "0a1b3b1a0a1"
      // },
    ])

    //checks each keypress when focusing on input bar
    const handleKeyDown = async (event) => {
      if (event.key === "Enter") {
        //diables input bar
        setIsDisabled(true)

        //takes input bar string
        const inputString = inputRef.current.value

        //initial state
        let current = ["Q1"]
        setCurrentState(current)

        //copies current strings or the input history
        let tempCurrentStrings = [...currentStrings]

        //will be true if not 'a' or 'b'
        let wrongKey = false

        //Final result either accep or reject
        let tempFinal = "none";
        
        //will build the transition function inside the loop
        let tempTranFunc = '1';
        setFailState("none")
        bumpSound.play()
        await new Promise(r => setTimeout(r, 550))

        for(const chars of inputString){
          //character validation
          if(chars != 'a' && chars != 'b'){
            wrongKey = true;
            break;
          }

          //checks current state and checks where it leads
          current.forEach((item) => {
            
          })

          //calls currentState setter for DOM rerendering
          setCurrentState(current)
          bumpSound.play()

          //string for transition function, adds either a or b
          tempTranFunc += chars + current.slice(1);

          await new Promise(r => setTimeout(r, 550))
        }

        //ends in accepting state and last alphabet is a or b
        if(acceptStates.includes(current) && wrongKey === false){
          //creates new object in tempCurrentStrings
          tempCurrentStrings.unshift({ string : inputString, accepted : true, transFunc : tempTranFunc})
          healSound.play()
          //will set finalstate to accept or reject also where it ends
          tempFinal = "accept"
          setFinalState(current + tempFinal)

          
        } else {
          //creates new object in tempCurrentStrings
          tempCurrentStrings.unshift({ string : inputString, accepted : false, transFunc : tempTranFunc})
          lowHpSound.play()

          //no current state since input rejected
          setCurrentState("none")
          setFailState(current)

          //will set finalstate to accept or reject also where it ends
          tempFinal = "reject"
          setFinalState(current + tempFinal)
        }

        //updates currentStrings to include last input
        setCurrentStrings(tempCurrentStrings);
        console.log(tempCurrentStrings)
        inputRef.current.value = '';

        await new  Promise(r => setTimeout(r, 2500))
        //resets all variables used
        setCurrentState("none")
        setFailState("none")
        setFinalState("none")
        //isDisabled disabled
        setIsDisabled(false)
      }

      console.log("current strings are: ", currentStrings)
    };

  return (
    <div className='mainContainer'>

      <div className='diagramContainer'>
        <Diagram currentState={currentState} failState={failState} finalState={finalState}/>
        {/* <img src='./src/assets/diagram.svg' className='diagram'/> */}
      </div>


      <div className='inputContainer'>
        <input  className='inputBar'
                ref={inputRef}
                onKeyDown={handleKeyDown}
                placeholder="Enter string..."
                disabled={isDisabled}/>
        <ul className='listContainer'>
          {
            currentStrings.map((items, index) => (
              <li key={index}>
                <div className='inputText'>
                  <div>{items.string}</div>
                  <div>{items.accepted ? 'Accepted' : 'Rejected'}</div>
                </div>
                <TransitionDiagram transFunc={items.transFunc} acceptStates={acceptStates} accepted={items.accepted}/>
                
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
