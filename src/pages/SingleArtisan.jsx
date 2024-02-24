import { useParams } from 'react-router-dom';
import datas from '../assets/data/datas.json';
import { ArtisanCard } from '../components/ArtisanCard';
import { useState } from 'react';

export function SingleArtisan() {
  const { id } = useParams();
  const artisan = datas.artisans.find((v) => v.id === id);
  const emailArtisant=artisan.email
  let messageToSend = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  // varialbes pour afficher enlever les span
  const [spanName, setSpanName] = useState(false);
  const [spanEmail, setSpanEmail] = useState(false);
  const [spanSubject, setSpanSubject] = useState(false);
  const [spanMessage, setSpanMessage] = useState(false);

  //liste des regex utiliser
  const regexList = {
    name: /^[a-z]+?(\s?-?)[a-z]* ?[a-z]*$/gi,
    email: /^[a-z0-9-\\.]+@[a-z0-9-]+.[a-z]{2,}$/gi,
    subject: /^[a-z]+?(\s?-?)[a-z]* ?[a-z]*$/gi,
    message: /^[a-z]+?(\s?-?)[a-z]* ?[a-z]*$/gi,
  };

  //variales des champ controler par React
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  /**
   * controle des champ du formulaire
   * @param {event} e
   */
  const handleChange = (e) => {
    const regex = regexName(e.target.id);
    validateRegex(e.target.value, regex, e.target.id);
  };

  /**
   * determine ma regex à utiliser
   * @param {string} id
   * @returns
   */
  function regexName(id) {
    if (id.toString() === 'name') {
      return regexList.name;
    }
    if (id.toString() === 'email') {
      return regexList.email;
    }
    if (id.toString() === 'subject') {
      return regexList.subject;
    }
    if (id.toString() === 'message') {
      return regexList.message;
    }
  }

  /**
   * valide l'entée des champ Input ou textarea
   * @param {string} entry
   * @param {RegExp} regex
   * @param {string} id id de l'input
   * @returns {boolean}
   */
  function validateRegex(value, regex, id) {
    if (regex.test(value)) {
      removeSpan(id, value);
    } else if (value === '') {
      displaySpan(id, value);
    } else {
      displaySpan(id, value);
    }
  }

  /**
   * permet d'afficher la span en dessous de l'input en cas d'erreur
   * @param {string} id
   * @param {string} value
   * @returns
   */
  function displaySpan(id, value) {
    if (id.toString() === 'name') {
      setSpanName(true);
      setName(value);
    }
    if (id.toString() === 'email') {
      setSpanEmail(true);
      setEmail(value);
    }
    if (id.toString() === 'subject') {
      setSpanSubject(true);
      setSubject(value);
    }
    if (id.toString() === 'message') {
      setSpanMessage(true);
      setMessage(value);
    }
  }

  /**
   * retire la span
   * @param {string} id
   * @param {string} value
   */
  function removeSpan(id, value) {
    if (id.toString() === 'name') {
      setSpanName(false);
      setName(value);
    }
    if (id.toString() === 'email') {
      setSpanEmail(false);
      setEmail(value);
    }
    if (id.toString() === 'subject') {
      setSpanSubject(false);
      setSubject(value);
    }
    if (id.toString() === 'message') {
      setSpanMessage(false);
      setMessage(value);
    }
  }

  /**
   * Envoie les données du formulaire
   * @param {Event} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !spanName &&
      !spanEmail &&
      !spanSubject &&
      !spanMessage &&
      name !== '' &&
      email !== '' &&
      subject !== '' &&
      message !== ''
    ) {
      console.log('formulaire Ok');
      messageToSend.name = name;
      messageToSend.email = email;
      messageToSend.subject = subject;
      messageToSend.message = message;
      

      reset()
    } else {
      console.log('Pas ok');
    }
  };
  const reset = ()=>{
     setName('')
     setEmail('')
     setSubject('')
     setMessage('')
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
            <span className='ps-1 text-danger'>*</span>
            <input
              type='text'
              className='form-control'
              id='name'
              value={name}
              onChange={handleChange}
            />
            {spanName && (
              <span className=' text-danger'>
                Entée incorrect seul les lettres et - sont autorisées
              </span>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              adresse mail
            </label>
            <span className='ps-1 text-danger'>*</span>
            <input
              type='text'
              className='form-control'
              id='email'
              placeholder='name@example.com'
              value={email}
              onChange={handleChange}
            />
            {spanEmail && (
              <span className=' text-danger'>format email incorrect</span>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='subject' className='form-label'>
              Sujet
            </label>
            <span className='ps-1 text-danger'>*</span>
            <input
              type='text'
              className='form-control'
              id='subject'
              value={subject}
              onChange={handleChange}
            />
            {spanSubject && (
              <span className=' text-danger'>Entée incorrect</span>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='message' className='form-label'>
              Message
            </label>
            <span className='ps-1 text-danger'>*</span>
            <textarea
              className='form-control'
              id='message'
              rows='3'
              value={message}
              onChange={handleChange}
            ></textarea>
            {spanMessage && (
              <span className=' text-danger'>Entée incorrect</span>
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
