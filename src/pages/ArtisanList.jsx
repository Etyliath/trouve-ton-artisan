import { useParams } from 'react-router-dom';
import datas from '../assets/data/datas.json';
import { ArtisanCard } from '../components/ArtisanCard';
import { Link } from 'react-router-dom';

export function ArtisanList() {
  const { filter, result } = useParams();
  const artisans = datas.artisans;
  let filterArtisans = [];

  if (filter === null && result === null) {
    filterArtisans = artisans;
  } else {
    if (filter !== null && result === undefined) {
      filterArtisans = artisans.filter(
        (artisan) => artisan.category === filter
      );
    }
    if (result !== null && filter === undefined) {
      filterArtisans = artisans.filter(
        (artisan) =>
          artisan.name.toLowerCase().includes(result.toLowerCase()) ||
          artisan.location.toLowerCase().includes(result.toLowerCase()) ||
          artisan.specialty.toLowerCase().includes(result.toLowerCase())
      );
    }
  }

  return (
    <main className=' container-fluid m-3  '>
      <h2 className=' text-center'>Liste des artisans {filter}</h2>
      <div className='row justify-content-center my-4'>
        {filterArtisans.map((artisan) => (
          <div className='col-10 col-md-3 m-1 ms-sm-2' key={artisan.id}>
            <Link to={`/artisan/${artisan.id}`}>
              <ArtisanCard
                header={artisan.specialty}
                title={artisan.name}
                text={artisan.location}
                rating={parseFloat(artisan.note)}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
