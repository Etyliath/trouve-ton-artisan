import { useParams } from 'react-router-dom';
import datas from '../assets/data/datas.json';
import { ArtisanCard } from '../components/ArtisanCard';

export function SingleArtisan() {
  const { id } = useParams();
  const artisan = datas.artisans.find((v) => v.id === id);
  return (
    <main>
      <h2 className=' text-center mt-4'>Contacter votre artisan</h2>
      <div className='row container mx-auto gap-2'>
        <div className='m-4 col-12 col-md'>
          <ArtisanCard
            header={artisan.specialty}
            title={artisan.name}
            text={artisan.location}
            rating={parseFloat(artisan.note)}
          />
          <div className='mt-4'>
            <h3>A Propos</h3>
            <p>{artisan.about}</p>
          </div>
        </div>
        <form action='' className='col-12 col-md mt-4'>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Nom
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              adresse mail
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='name@example.com'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='subject' className='form-label'>
              Sujet
            </label>
            <input
              type='text'
              className='form-control'
              id='subject'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='message' className='form-label'>
              Message
            </label>
            <textarea
              className='form-control'
              id='message'
              rows='3'
            ></textarea>
          </div>
          <button className='btn btn-primary rounded-pill px-3 py-1'>Envoyer</button>
        </form>
        <div className='container-fluid m-4'>
          <h4>Site Web</h4>
          {artisan.website}
        </div>
      </div>
    </main>
  );
}
