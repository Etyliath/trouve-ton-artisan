import PropTypes from 'prop-types';

export function ToastMessage({color,typeMessage,messageSend}) {
  return (
    <div
      className={`toast show position-absolute top-50 start-50 translate-middle ${color}`}
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