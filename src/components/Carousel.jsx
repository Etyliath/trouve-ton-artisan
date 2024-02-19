import { wrap } from '../functions/wrap';
import { useState } from 'react';

export function Carousel() {
  const [page, setPage] = useState(0);

  const dataCarousel = [
    {
      id: 1,
      title: 'etape 1 - choisis ta catégorie ',
      body: (
          <div className='d-flex flex-column px-4 align-items-center '>
            <a
              className='btn btn-primary disabled placeholder rounded-5 '
              aria-disabled='true'
            >Catégorie <i className="bi bi-chevron-down ms-5"></i></a>
            <p className=' placeholder-wave d-flex flex-column '>
              <span className='placeholder my-2'>Batiment</span>
              <span className='placeholder my-2'>1hjfsdjfdsfsdfsd</span>
              <span className='placeholder my-2'>1hjfsdjfdsfsdfsd</span>
              <span className='placeholder my-2'>1hjfsdjfdsfsdfsd</span>
            </p>
          </div>
      ),
      description: 'clique sur le bouton catégorie en haut de page pour en choisir une',
    },
    {
      id: 2,
      title: 'etape 2',
      body: <div> contenu 2</div>,
      description: 'faire une descriptions',
    },
    {
      id: 3,
      title: 'etape 3',
      body: <div> contenu 3</div>,
      description: 'faire une descriptions',
    },
    {
      id: 4,
      title: 'etape 4',
      body: <div> contenu 4</div>,
      description: 'faire une descriptions',
    },
  ];

  const cardIndex = wrap(0, dataCarousel.length, page);
  const paginate = (newDirection) => {
    setPage(page + newDirection);
  };

  return (
    <>
      <div className='container-fluid d-flex justify-content-center mt-4'>
        <button
          className='btn btn-primary align-self-center rounded-5 py-2'
          style={{ transform: 'translate(25px)' }}
          onClick={() => paginate(-1)}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <div className=' border border-primary p-3 d-flex flex-column align-items-center'>
          <h3 className='pt-2 text-center '>{dataCarousel[cardIndex].title}</h3>
          <div className='w-100 d-flex  g-2 m-2 justify-content-center'>
            {dataCarousel[cardIndex].body}
          </div>
          <p className=''>{dataCarousel[cardIndex].description}</p>
        </div>
        <button
          className='btn btn-primary align-self-center rounded-5 py-2'
          style={{ transform: 'translate(-25px)' }}
          onClick={() => paginate(1)}
        >
         <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </>
  );
}
