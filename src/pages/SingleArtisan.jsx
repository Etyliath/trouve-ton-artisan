import { useParams } from 'react-router-dom';
import datas from '../assets/data/datas.json';
import { ArtisanCard } from '../components/ArtisanCard';
import { useState } from 'react';

export function SingleArtisan() {
  const { id } = useParams();
  const artisan = datas.artisans.find((v) => v.id === id);
  const [visible, setVisible] = useState({
    inputName: false,
    inputMail: false,
    inputSubject: false,
    texareaMessage: false,
  });

  const [validatorMessage, setValidatorMessage] = useState('');

  const regexName = /^[a-z]+?(\s?-?)[a-z]* ?[a-z]*$/gi;
  const regexMail = /^[a-z0-9-\\.]+@[a-z0-9-]+.[a-z]{2,}$/gi;
  const [messageToSend, setMessageToSend] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    if (regexName.test(e.target.value) || e.target.value === '') {
      if (e.target.id === 'name') {
        setMessageToSend({ ...messageToSend, name: e.target.value });
        setVisible({ ...visible, inputName: false });
      }
    } else {
      setValidatorMessage(
        'valeur incorrect seul chiffres et les lettres sont autorisé'
      );
      if (e.target.id === 'name') {
        setVisible({ ...visible, inputName: true });
      }
    }
    if (regexMail.test(e.target.value) || e.target.value === '') {
      console.log(e.target.value);
      if (e.target.id === 'email') {
        setMessageToSend({ ...messageToSend, email: e.target.value });
        setVisible({ ...visible, inputMail: false });
      }
    } else {
      if (e.target.id === 'email') {
        setVisible({ ...visible, inputMail: true });
      }
    }
    if (regexName.test(e.target.value) || e.target.value === '') {
      if (e.target.id === 'subject') {
        setMessageToSend({ ...messageToSend, subject: e.target.value });
        setVisible({ ...visible, inputSubject: false });
      }
    } else {
      setValidatorMessage(
        'valeur incorrect seul chiffres et les lettres sont autorisé'
      );
      if (e.target.id === 'subject') {
        setVisible({ ...visible, inputSubject: true });
      }
    }
    if (regexName.test(e.target.value) || e.target.value === '') {
      if (e.target.id === 'message') {
        setMessageToSend({ ...messageToSend, message: e.target.value });
        setVisible({ ...visible, texareaMessage: false });
      }
    } else {
      setValidatorMessage(
        'valeur incorrect seul chiffres et les lettres sont autorisé'
      );
      if (e.target.id === 'message') {
        setVisible({ ...visible, texareaMessage: true });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
            <input
              type='text'
              className='form-control'
              id='name'
              value={messageToSend.name}
              onChange={handleChange}
            />
            {visible.inputName && (
              <span className=' text-danger'>{validatorMessage}</span>
            )}
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
              value={messageToSend.email}
              onChange={handleChange}
            />
            {visible.inputMail && (
              <span className=' text-danger'>{validatorMessage}</span>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='subject' className='form-label'>
              Sujet
            </label>
            <input
              type='text'
              className='form-control'
              id='subject'
              value={messageToSend.subject}
              onChange={handleChange}
            />
            {visible.inputSubject && (
              <span className=' text-danger'>{validatorMessage}</span>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='message' className='form-label'>
              Message
            </label>
            <textarea
              className='form-control'
              id='message'
              rows='3'
              value={messageToSend.message}
              onChange={handleChange}
            ></textarea>
            {visible.texareaMessage && (
              <span className=' text-danger'>{validatorMessage}</span>
            )}
          </div>
          <button
            type='submit'
            className='btn btn-primary rounded-pill px-3 py-1'
          >
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
