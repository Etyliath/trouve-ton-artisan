import { ArtisanCard } from '../components/ArtisanCard';
import datas from '../assets/data/datas.json';

export function Home() {
  const artisans = datas.artisans;
  const filterArtisans = artisans.filter(
    (artisan) => artisan.id === '2' || artisan.id === '4' || artisan.id === '10'
  );

  return (
    <main className='m-4 d-flex justify-content-center flex-column align-items-center'>
      <h1 className=''> Trouve ton artisan</h1>
      <div className=''>
        <h2 className='mx-auto text-center '>Artisans du mois</h2>
        <div className='d-flex'>
          {filterArtisans.map((artisan) => (
            <div key={artisan.id} className=''>
              <ArtisanCard
                header={artisan.specialty}
                title={artisan.name}
                location={artisan.location}
                note={parseFloat(artisan.note)}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
