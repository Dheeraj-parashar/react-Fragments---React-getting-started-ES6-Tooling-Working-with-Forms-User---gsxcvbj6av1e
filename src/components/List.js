import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    // code here
     <><ul id='list'>
      {listx.map((e)=>(
        <ListItems  valuex={e} />
      )

      )}
     </ul>
      </>
    
    
  )
}

export default List;