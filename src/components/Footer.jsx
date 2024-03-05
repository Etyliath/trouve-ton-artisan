import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className='container-fluid bg-primary p-0 mt-auto'>
      <div
        className=' bg-white mx-lg-4 mx-md-2 rounded-bottom-5 '
        style={{ height: '30px' }}
      ></div>
      <div className='text-white'>
        <div className='pt-4 d-flex justify-content-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-geo-alt me-2'
            viewBox='0 0 16 16'
          >
            <path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10' />
            <path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6' />
          </svg>
          <p className='m-0'>
            101 cours Charlemagne
            <br />
            CS 20033
            <br />
            69269 LYON CEDEX 02
            <br />
            France
          </p>
        </div>
        <div className='pt-1 pb-4 d-flex justify-content-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-telephone me-2'
            viewBox='0 0 16 16'
          >
            <path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z' />
          </svg>
          <p className='m-0 pe-3'>+33 (0)4 26 73 40 00</p>
        </div>
        <div className='border-top mx-4'>
          <div className='py-4 d-flex justify-content-center flex-wrap '>
            <Link
              className='text-secondary text-decoration-none pe-2'
              to='legales/mentions'
            >
              Mentions légales
            </Link>
            <Link
              className='text-secondary text-decoration-none pe-2'
              to='legales/personal'
            >
              Données personnelles
            </Link>
            <Link
              className='text-secondary text-decoration-none pe-2'
              to='legales/accessibility'
            >
              Accessibilité
            </Link>
            <Link
              className='text-secondary text-decoration-none pe-2'
              to='legales/cookies'
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
