import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import supabase from './client';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ViewCreator from './pages/ViewCreator';
import './App.css';

function App() {
  const [creators, setCreators] = useState([]);

  const fetchCreators = async () => {
    try {
      const { data, error } = await supabase.from('creators').select('*');
      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        setCreators(data);
      }
    } catch (error) {
      console.error('Error fetching creators:', error);
    }
  };

  useEffect(() => {
    fetchCreators();
  }, []);

  
  return (
    <div className="app">
      <header className="app-header">
        <h1>Creatorverse</h1>
      </header>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="creators-list">
                {creators.length === 0 ? (
                  <p className="no-creators-message">NO CREATORS YET 😞</p>
                ) : (
                  <div className="creators-container">
                    {creators.map((creator) => (
                      <div key={creator.rowId} className="creator-card">
                        <ShowCreators
                          name={creator.name}
                          url={creator.url}
                          description={creator.description}
                          imageURL={creator.imageURL}
                          creatorId={creator.rowId}
                        />
                      </div>
                    ))}
                  </div>
                )}
                <div className="add-creator-button">
                  <Link to="/add">Add Creator</Link>
                </div>
              </div>
            }
          />
          <Route path="/add" element={<AddCreator />} />
          <Route path="/edit/:creatorId" element={<EditCreator />} />
          <Route path="/creator/:creatorId" element={<ViewCreator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
