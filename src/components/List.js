import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    // code here
     <><ul id='list'>
      {listx.map((e)=>(
        <li key={e} className='items'>{e}</li>
      )

      )}
     </ul>
     
    
      <ListItems valuex={listx} />
      </>
    
    
  )
}

export default List;