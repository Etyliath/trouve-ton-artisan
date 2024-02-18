import {ArtisanCard} from '../components/ArtisanCard'

export function Home() {
  return (
    <main className='m-4 d-flex justify-content-center flex-column align-items-center'>
      <h1 className=''> Trouve ton artisan</h1>
      <div>
        <h2>Artisans du mois</h2>
        <ArtisanCard header={'menusier'} title={'Jean Paul'} location={'Rozay'} note={3.6} />
      </div>
    </main>
  );
}
