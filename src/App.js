
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';

//To import the useState
import { useState } from 'react';




// import PartOne from './components/PartOne';

function App() {

  let [count,setCount]=useState(0);

 

  const incrememnt =()=>{
    setCount(count+1)
    
  }

  const decrement =()=>{
    setCount(count-1)
  }
  
  return (
    //Set state
    <>
    <span className='titile'> My Counter</span>
    <p className='subtitle'>The count is {count}</p>
    <button className='button' onClick={incrememnt}>+</button>
    <button className='button' onClick={decrement}>-</button>

    </>
    



    // <Router>
    //  <div>
      
    //     <Switch>

    //       <Route exact path="/">
    //         <Home/>
    //       </Route>

    //       <Route path="/About">
    //         <About/>
    //       </Route>

    //       <Route path="/Contact">
    //         <Contact/>
    //       </Route>


    //     </Switch>
      
    //   </div> 
    // </Router>
  );
}

export default App;
