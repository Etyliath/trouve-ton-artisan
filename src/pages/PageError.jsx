import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useNavigate } from 'react-router-dom';

export function PageError() {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/');
    }
  return (
    <>
      <Header />
      <main className='container mx-auto d-flex flex-column m-5'>
        <h2 className=' fw-bolder '>Erreur 404</h2>
        <h4>Page non trouvée...</h4>
        <div className='d-flex ms-4'>
          <img src='/src/assets/images/warning-6587278_640.png' alt='' />
        </div>
        <div className='mt-4'>
          <button className='btn btn-primary rounded-pill px-3 py-1' onClick={handleClick}>
            Retour à l&apos;accueil <i className='bi bi-arrow-left-short'></i>
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
