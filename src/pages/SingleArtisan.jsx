import { useParams } from 'react-router-dom';
import datas from '../assets/data/datas.json';
import { ArtisanCard } from '../components/ArtisanCard';

export function SingleArtisan() {
  const { id } = useParams();
  const artisan = datas.artisans.find((v) => v.id === id);
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <main>
      <h2 className=' text-center mt-4'>Contacter votre artisan</h2>
      <div className='row justify-content-center  gap-1'>
        <div className='m-4 col-10 col-md-4'>
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
        <form onSubmit={handleSubmit} className='col-10 col-md-4 mt-4'>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Nom
            </label>
            <input type='text' className='form-control' id='name' />
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
            <input type='text' className='form-control' id='subject' />
          </div>
          <div className='mb-3'>
            <label htmlFor='message' className='form-label'>
              Message
            </label>
            <textarea className='form-control' id='message' rows='3'></textarea>
          </div>
          <button type='submit' className='btn btn-primary rounded-pill px-3 py-1'>
            Envoyer
          </button>
        </form>
        {artisan.website && (
          <div className='col-10 col-md-8 m-4'>
            <h4>Site Web</h4>
            {artisan.website}
          </div>
        )}
      </div>
    </main>
  );
}
