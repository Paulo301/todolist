import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function Todos() {
  
  return (
    <>
      <IconButton color="primary" aria-label="logout" component="span">
        <CloseIcon />
      </IconButton>
    </>
  );
}

export default Todos;