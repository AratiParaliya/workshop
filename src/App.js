
import React from 'react';
// import LifeCycle from './component/lifecycleendstatewithclasscomponent';
// import UseStateFun from './component/usestatewithfunction';
import './App.css';
import Render from './Excericise/render';
import PersonDefaultDemo from './Components/DefaultProp';
import Weather from './component3/Weather';
import Person from './Components/Person_FunctionComponent';

function App() {
  const props = {
    fontSize: '20',
    backgroundColor: 'lightgrey',
    fontColor: 'black',
    fontStyle: 'italic',
 
}
  const personInfo = { firstName: "Abhishek", lastName: "Pujara" };
  const personJobInfo = { designation: "Sr. Front End Developer", experience: "14 years" };
  return (
    <>

     <Render/>
     <Render fontSize = "30"backgroundColor="lightblue" fontColor="white"fontStylr="bold"/>
     <Render fontSize = "30"backgroundColor="green" fontColor="white"fontStylr="bold"/>
    
       <PersonDefaultDemo/>
       <PersonDefaultDemo name="Abhishek Pujara" gender="Male" designation="Founder"/>
       <PersonDefaultDemo name="Nidhi Pujara" gender="Female" designation="Co-Founder"/>
       <PersonDefaultDemo name="Jay Poojara" gender="Male"  designation="Chairman"/>
    

       <Weather/>
    </>
   

 
  );
}

export default App;
