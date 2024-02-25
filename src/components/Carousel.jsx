import { wrap } from '../functions/wrap';
import { useEffect, useState } from 'react';

export function Carousel() {
  const [page, setPage] = useState(0);
  const [autoScroll, toggle] = useState(true);

  //datas of carousel page
  const dataCarousel = [
    {
      id: 1,
      title: 'Etape 1 - Choisir ma catégorie ',
      body: (
        <div className='d-flex flex-column px-4 align-items-center '>
          <a
            className='btn btn-primary disabled placeholder rounded-5 '
            aria-disabled='true'
          >
            Catégorie <i className='bi bi-chevron-down ms-5'></i>
          </a>
          <p className=' placeholder-wave col-10 border px-2 pb-2 '>
            <span className='placeholder rounded-2 col-12'></span>
            <span className='placeholder rounded-2 col-12'></span>
            <span className='placeholder rounded-2 col-12'></span>
            <span className='placeholder rounded-2 col-12'></span>
          </p>
        </div>
      ),
      description:
        "Cliquez sur le bouton de liste déroulant en haut de page pour en choisir ma catégorie",
    },
    {
      id: 2,
      title: 'Etape 2 - Choisir mon artisan',
      body: (
        <div className='container d-flex flex-wrap justify-content-center gap-2 warning'>
          <div className='bg-primary d-flex flex-column p-2 rounded-2 m-2 p-3'>
            <p className=' placeholder-glow col-12 m-0 w-100 '>
              <span
                className='placeholder col-12'
                style={{ width: '150px' }}
              ></span>
            </p>
            <hr className=' border border-secondary m-2' />
            <h5 className='placeholder-glow m-0'>
              <span className='placeholder col-12 m-0'></span>
            </h5>
            <p className='placeholder-glow m-0'>
              <span className='placeholder col-12 me-1'></span>
            </p>
            <div className='mt-2 d-flex'>
              <span className='placeholder col-2 me-1 bg-warning'></span>
              <span className='placeholder col-2 me-1 bg-warning'></span>
              <span className='placeholder col-2 me-1 bg-warning'></span>
              <span className='placeholder col-2 me-1 bg-warning'></span>
              <span className='placeholder col-2 me-1 bg-warning'></span>
            </div>
          </div>
          <div className='bg-primary d-flex flex-column p-2 rounded-2 m-2 p-3'>
            <p className=' placeholder-glow col-12 m-0 w-100 '>
              <span
                className='placeholder col-12'
                style={{ width: '150px' }}
              ></span>
            </p>
            <hr className=' border border-secondary m-2' />
            <h5 className='placeholder-glow m-0'>
              <span className='placeholder col-12 m-0'></span>
            </h5>
            <p className='placeholder-glow m-0'>
              <span className='placeholder col-12 me-1'></span>
            </p>
            <div className='mt-2 d-flex'>
              <span className='placeholder col-2 me-1 bg-warning'></span>
              <span className='placeholder col-2 me-1 bg-warning'></span>
              <span className='placeholder col-2 me-1 bg-warning'></span>
              <span className='placeholder col-2 me-1 bg-warning'></span>
              <span className='placeholder col-2 me-1 bg-warning'></span>
            </div>
          </div>
        </div>
      ),
      description:
        'Choisir mon artisan parmis la liste des cartes affichées',
    },
    {
      id: 3,
      title: 'Etape 3 - Remplir mon formulaire',
      body: (
        <div className='container d-flex flex-wrap justify-content-center gap-2 warning'>
          <div className=' border border-primary  d-flex flex-column p-2 rounded-2 m-2 p-3'>
            <p className=' placeholder-glow col-12 m-0 w-100 '>
              <span className='placeholder placeholder-xs col-12 m-0 rounded-2'></span>
              <span className='placeholder placeholder-xs col-12 rounded-2'></span>
              <span className='placeholder placeholder-lg col-12 rounded-2'></span>
            </p>
            <a
              className='btn btn-primary disabled placeholder rounded-5 p-1 px-4 mt-2 mx-5'
              aria-disabled='true'
            >
              Envoyer
            </a>
          </div>
        </div>
      ),
      description:
        'Remplir mon formulaire avec mon nom, email et mon message pour contacter mon artisan',
    },
    {
      id: 4,
      title: 'Etape 4 - une réponse',
      body: (
        <div>
          <img
            src='/src/assets/images/paper-airplane-3128885_128.png'
            alt="dessin d'une ennveloppe"
          />
        </div>
      ),
      description: 'Une reponse vous sera envoyée sous 48 heures',
    },
  ];

  const cardIndex = wrap(0, dataCarousel.length, page);
  /**
   * scroll carousel
   * @param {number} newDirection 
   */
  const paginate = (newDirection) => {
    setPage(page + newDirection);
  };

  /**
   * scroll carousel and stop autoscroll
   * @param {number} newDirection 
   */
  const paginateWithStop = (newDirection) => {
    toggle(false);
    setPage(page + newDirection);
  };

  /**
   * start autoscroll carousel
   */
  useEffect(() => {
    if (autoScroll) {
      const timer = setInterval(() => {
        paginate(1);
        if (page > dataCarousel.length - 2) {
          setPage(0);
        }
      }, 10000);
      return () => {
        clearInterval(timer);
      };
    }
  },);

  return (
    <>
      <div className='container-fluid d-flex justify-content-center mt-4 p-0'>
        <button
          className='btn btn-primary align-self-center rounded-5 py-2 m-0'
          style={{ transform: 'translate(10px)' }}
          onClick={() => paginateWithStop(-1)}
        >
          <i className='bi bi-chevron-left'></i>
        </button>
        <div className=' border border-primary pt-2 col-md-8 row align-items-center'>
          <h4 className='text-center col-12'>Comment touver mon artisan</h4>
          <h5 className='pt-2 text-center col-12'>{dataCarousel[cardIndex].title}</h5>
          <div className='w-100 d-flex  g-2 justify-content-center'>
            {dataCarousel[cardIndex].body}
          </div>
          <p className='px-4 text-wrap text-center'>
            {dataCarousel[cardIndex].description}
          </p>
        </div>
        <button
          className='btn btn-primary align-self-center rounded-5 py-2'
          style={{ transform: 'translate(-10px)' }}
          onClick={() => paginateWithStop(1)}
        >
          <i className='bi bi-chevron-right'></i>
        </button>
      </div>
    </>
  );
}
