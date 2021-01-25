import React from 'react';
import './ImageLink.css'

const ImageLink = ({onInputChange, onSubmit}) => {
  return(
    <div>
      <p className='f3'>
        Here you can detect faces on the photograph. It will not show their name though !!
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' placeholder='Enter an image url' onChange={onInputChange} />
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onSubmit} > Detect </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLink;
