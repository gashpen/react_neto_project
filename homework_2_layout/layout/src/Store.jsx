import IconSwitch from "./IconSwitch";
import CardView from "./CardView"
import ListView from "./ListViev";
import { useState } from "react";
import products from "./product";

export default function Store(){

  const [viewIcon, newViewIcon] = useState('view_module')

      function onSwitch(e){
        newViewIcon(e.target.textContent) 
      }

      return (

        <>
          <IconSwitch
              icon = {viewIcon}
              onSwitch={onSwitch}
          />
          {(viewIcon === 'toc') ? <ListView items = {products}/> : <CardView cards = {products}/>}
        </>
      )
}