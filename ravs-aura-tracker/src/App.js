import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { ref, onValue, set } from 'firebase/database';
import './App.css';

function App() {
  const [aura, setAuraLocal] = useState(0);

  useEffect(() => {
    const auraRef = ref(db, 'aura');
    const unsubscribe = onValue(auraRef, (snapshot) => {
      setAuraLocal(snapshot.val() ?? 0);
    });
    return () => unsubscribe();
  }, []);

  const decrementAura = () => {
    const auraRef = ref(db, 'aura');
    set(auraRef, aura - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/Mario_Warped.png'} alt="Mario Warped" style={{ width: '200px', marginBottom: '20px' }} />
        <h1>Ravdeep's Aura Tracker</h1>
        <p className="aura-value">Aura: {aura}</p>
        <button onClick={decrementAura} style={{ fontSize: '1.2rem', padding: '10px 20px' }}>
          Decrement
        </button>
      </header>
    </div>
  );
}

export default App;
