import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export function Header() {
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    e.preventDefault()
    setResult(e.target.value);
  };
  const handleClick = () => {
    console.log('recherche demandé')
    setResult('');
  };
  const handleChangeClass=()=>{
    document.querySelector('.navbar-collapse').classList.remove('show')
  }

  return (
    <header className='header text-primary px-4 shadow justify-content-center '>
      <nav className='navbar navbar-expand-lg py-4'>
        <div className='container-fluid d-flex '>
          <NavLink className='navbar-brand order-0 me-4' to='/' onClick={handleChangeClass}>
            <img src="../src/assets/images/Logo.png" alt="logo du site" />
          </NavLink>
          <button
            className='navbar-toggler order-3 mt-4 m-md-0 border-primary'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse order-3 order-lg-2' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle bg-primary text-secondary rounded-5 p-1'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Catégories
                </a>
                <ul className='dropdown-menu '>
                  <li>
                    <Link className='dropdown-item' to='/list' state={{ category: 'Bâtiment' }} onClick={handleChangeClass}>
                      Bâtiment
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/list' state={{ category: 'Services' }} onClick={handleChangeClass}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/list' state={{ category: 'Fabrication' }} onClick={handleChangeClass}>
                      Fabrication
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/list' state={{ category: 'Alimentation' }} onClick={handleChangeClass}>
                      Alimentation
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <form className='d-flex order-2 mt-4 m-md-0 ' role='search'>
            <input
              className='form-control me-3 bg-secondary border-primary '
              type='search'
              placeholder='Search'
              aria-label='Search'
              name='search'
              value={result}
              onChange={handleChange}
            />
              <button
                className='btn btn-outline-primary'
                type='button'
                onClick={handleClick}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-search'
                  viewBox='0 0 16 16'
                >
                  <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
                </svg>
              </button>
          </form>
        </div>
      </nav>
    </header>
  );
}
