import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/Logo.png';

export function Header() {
  const [result, setResult] = useState('');
  const navigate = useNavigate();
  const target = useRef(null);
  const [spanSearch, setSpanSearch] = useState(false);

  /**
   * récupère la valeur de la searchBar
   * @param {Event} e
   */
  const handleChange = (e) => {
    e.preventDefault();
    const regex =
      /^[a-z0-9ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ',_-\s]+$/gi;
    if (regex.test(e.target.value)) {
      setSpanSearch(false);
      setResult(e.target.value);
    } else {
      setSpanSearch(true);
      setResult(e.target.value);
    }
  };

  /**
   * Ouvre la page ArisanList avec le résultat de la recherche
   * @param {Event} e
   */
  const handleSubmit = (e) => {
    const regex =
    /^[a-z0-9ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ',_-\s]+$/gi;
    e.preventDefault();
    if (spanSearch || result === '' || result.length < 2 || !regex.test(result)) {
      setSpanSearch(true)
      setTimeout(() => {
        setSpanSearch(false);
      }, 3000);
    } else {
      navigate(`/list/search/${result}`);
      setResult('');
    }
  };

  const handleChangeClass = () => {
    document.querySelector('.navbar-collapse').classList.remove('show');
  };

  return (
    <header className='header text-primary px-4 shadow justify-content-center '>
      <nav className='navbar navbar-expand-lg py-4 '>
        <div className='container-fluid d-flex p-0'>
          <Link
            className='navbar-brand order-0 '
            to='/'
            onClick={handleChangeClass}
          >
            <img src={logo} alt='logo du site' />
          </Link>
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
          <div
            className='collapse navbar-collapse order-3 order-lg-2'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle bg-primary text-secondary rounded-pill px-3 py-1 ms-auto '
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Catégories
                </a>
                <ul className='dropdown-menu '>
                  <li>
                    <Link
                      className='dropdown-item'
                      to='/list/category/Bâtiment'
                      onClick={handleChangeClass}
                    >
                      Bâtiment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='dropdown-item'
                      to='/list/category/Services'
                      onClick={handleChangeClass}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='dropdown-item'
                      to='/list/category/Fabrication'
                      onClick={handleChangeClass}
                    >
                      Fabrication
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='dropdown-item'
                      to='/list/category/Alimentation'
                      onClick={handleChangeClass}
                    >
                      Alimentation
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <form
            className='d-flex order-2 mt-4 m-md-0 '
            onSubmit={handleSubmit}
            role='search'
          >
            <div className="d-flex flex-column align-items-center">
            <input
              className='form-control bg-secondary border-primary '
              type='search'
              ref={target}
              aria-label='Search'
              name='search'
              value={result}
              onChange={handleChange}
            />
            {spanSearch && (
              <span className='pt-1 text-danger'>Entée incorrect</span>
            )}
            </div>
            <button className='btn btn-outline-primary ms-3 ' type='submit'>
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
