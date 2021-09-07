import React from 'react';
import './Slide.css';
import SlideImg from './SlideImg';

const Slide = ({item, basket,setBasket})=>{

    const sepeteEkle = (test)=>{
        let backup = [...basket];

        if(backup.filter((x)=>(
            x.id===test.id
        )).length<=0){
            backup.push(test);
        }else{
            alert("Bir üründen en fazla 1 adet ekleyebilirsiniz");
        }
        setBasket(backup);
    };

    return(
        <div className="slide" key={item.id}>
            <SlideImg src={item.url} size="200px"></SlideImg>
            <h4 className="text">{item.title}</h4>
            <button className="sepeteEkle" onClick={()=>sepeteEkle(item)}>Sepete ekle</button>
        </div>
    )
}
export default Slide;