import { useState } from 'react'
import './App.css'
import data from './resources/countryData.json'

function App() {
  const [info, setInfo] = useState("");
  const [reciepe, seeReciepe] = useState(true);
  const clickOnChange = (e) => {
    setInfo(e.target.value);
  }

  const find = (searchItem)=>{
    setInfo(searchItem);
    seeReciepe(false);
  } 

  const handleInfo = (e) => {
    if (e.key === 'Escape') {
      seeReciepe(false);
    } else {
      seeReciepe(true);
    }
  };
  return (
    <>
      <div className="box">
      <div><h1>Find Something.....</h1></div>
      <input type="text" value={info} onChange={clickOnChange} placeholder="Find....." onKeyDown={handleInfo} />
      <button onClick={()=>find(info)}>Search</button>

      <div id="recipes" style={{ display: reciepe ? 'block' : 'none' }}>
        {data .filter((item) => {
          const findItems = info.toLowerCase();
          const name = item.name.toLowerCase();
          return findItems && name.startsWith(findItems) && name !== findItems;
        })
        .slice(0,10).map((item) => (
          <div key={item.name} onClick={()=>find(item.name)}> {item.name}</div>
        ))
        }
      </div>
      </div>
    </>
  )
}

export default App