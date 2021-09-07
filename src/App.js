import React from 'react';
import './App.css';
import Slide from './Slide';
import {services} from './utils.js';

console.log(services)

function App() {

  const [list, setList] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  const [basket,setBasket] = React.useState([]);

  React.useEffect(()=>{
    fetch(`${services.apiUrl}/photos`).then(res=>res.json()).then(result=>{
      const arr = [...result];
      setList(arr.slice(0,50));
    });
  },[]);

  const next = ()=>{
    index<list.length-6 && setIndex(index+5) ;
    if(list.slice(index).length<=5){
      setIndex(0);
    };
  }
  const prev = ()=>{
    index>0 && setIndex(index-5);
  }

  React.useEffect(()=>{
    console.log(basket);
  },[basket]);

  const removeBasketItem = (id)=>{
    let backUp = [...basket];
    const idx= backUp.findIndex((el)=>(el.id===id));
    backUp.splice(idx,1);
    setBasket(backUp);
  }

  return (
    <div className="All">
      <div className="App">
      <button onClick={prev} className={index>0?"l-btn":"hidden"} id="lbtn"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg></button>
      <div className="main">        
        {list.slice(index,index+5).map((el)=>(
          <Slide item={el} basket={basket} setBasket={setBasket}></Slide>
        ))}     
      </div>
      <button onClick={next} className={"r-btn"} id="rbtn"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg></button></div>
      <h3 className="pageNum">{index/5+1}</h3>
      <div className="bigBilgi">
      <div className="bilgi">
        <div className="sepetIcon"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg></div>
        <h4>Sepetim {basket.length}</h4></div>
      <div className="basketContent">{basket.length?(basket.map((element)=>(
        <div className="basketList">
        <li>{element.title}</li>
        <button className="deleteItem" onClick={()=>removeBasketItem(element.id)}>Sil</button></div>
      ))):"Sepetinizde ürün bulunmamaktadır"}</div>
      </div>
    </div>
  );

}

export default App;
