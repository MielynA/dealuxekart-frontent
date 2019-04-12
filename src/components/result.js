import React from 'react';
import { Link } from 'react-router-dom';
const Result = ({ image, id, title}) => {
   
  return(
      <React.Fragment>
       <div className = 'col-6'>
       <Link to={'/result/'+id} />
       </div>
      </React.Fragment>
  )


}

export default Result; 