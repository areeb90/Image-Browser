import './index.css';
import React , {useState} from 'react';
import SearchResult from "./SearchResult";


function App() {
  const [typo, setTypo] = useState('')



  const TypeSearch = (event) => {
    const userT = event.target.value;
    // console.log(userT)
    setTypo(userT)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Image Browser</a>
        </div>
      </nav>
      <div className="inputField">
        <input type='text' placeholder="Type to browse" value={typo} onChange={TypeSearch}/>
        
        {typo === "" ? null : <h3>{`Related Result for : "${typo}"`}</h3>}
      </div>
      
      {typo === "" ? null : <SearchResult name={typo}/>}
      


    </>

  );
}

export default App;
