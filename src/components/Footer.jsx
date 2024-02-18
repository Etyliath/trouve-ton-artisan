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
          <i className='bi bi-geo-alt pe-4'></i>
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
          <i className='bi bi-telephone pe-4 '></i>
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
