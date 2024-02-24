import { useEffect } from "react";
import PropTypes from 'prop-types';

export function ToastMessage({color,typeMessage,messageSend}) {
  useEffect(() => {
      document.querySelector('.toast').classList.add(color);
    },[]);
  return (
    <div
      className='toast show position-absolute top-50 start-50 '
      role='alert'
      aria-live='assertive'
      aria-atomic='true'
    >
      <div className='toast-header d-flex flex-column mt-2'>
        <img
          src='/src/assets/images/favicon.png'
          alt=''
          className='rounded me-auto '
        />
         <strong className='me-2'>Message </strong>
        <div>
         
          <small>{typeMessage}</small>
        </div>
      </div>
      <div className='toast-body'>
        {messageSend}
      </div>
    </div>
  );
}

ToastMessage.propTypes = {
    color:PropTypes.string,
    typeMessage: PropTypes.string,
    messageSend:PropTypes.string
}