import React from 'react';
import PastElections from './Components/PastElections';
import UpStateElections from './Components/UpStateElections';
import Orgs from './Components/Orgs';
import Stats from './Components/Stats';
import Candidates from './Components/Candidates';
import Logo from './Components/Logo';
import Charti from './Components/Charti';
import './App.css'; 
const EZVote = () => {
  return (
    <div className="ezvote-container">
    <div className='Past'><PastElections /></div>  
     <div className='Up'> <UpStateElections /></div>
      <Orgs />
     <div className='St'><Stats /></div> 
      <Candidates />
  
      <Logo />
      <Charti/>
    </div>
  );
};

export default EZVote;