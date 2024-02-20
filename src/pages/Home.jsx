import { ArtisanCard } from '../components/ArtisanCard';
import datas from '../assets/data/datas.json';
import { Carousel } from '../components/Carousel';

export function Home() {
  const artisans = datas.artisans;
  const filterArtisans = artisans.filter((artisan) => artisan.top);

  return (
    <main className='my-4 d-flex justify-content-center flex-column align-items-center '>
      <h1 className=''> Trouve ton artisan</h1>
      <Carousel />
      <div className='container mt-4'>
        <h2 className='mx-auto text-center '>Artisans du mois</h2>
        <div className='row justify-content-center'>
          {filterArtisans.map((artisan) => (
            <div key={artisan.id} className='col-lg-3 col-md-6 col-12 mb-4 '>
              <ArtisanCard
                header={artisan.specialty}
                title={artisan.name}
                text={artisan.location}
                rating={parseFloat(artisan.note)}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
