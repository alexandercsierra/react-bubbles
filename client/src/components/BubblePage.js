import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWIthAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(()=>{
    axiosWithAuth().get('/api/colors')
      .then(res=>setColorList(res.data))
      .catch(err=>console.log(err))

      console.log(colorList);
  },[])



  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      
    </>
  );
};

export default BubblePage;
