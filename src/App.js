import React from 'react';
import './App.css';
import IdCard from './components/idCard/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';

function App() {
  return (
    <div className="App">

      <h1>Id Card</h1>

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height='178'
        birth='1992-07-14'
        picture='https://randomuser.me/api/portraits/men/44.jpg'
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height='172'
        birth='1988-05-11'
        picture='https://randomuser.me/api/portraits/women/44.jpg'
      />

      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1>Random</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

    </div>

  );
}

export default App;
