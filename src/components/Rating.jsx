import PropTypes from 'prop-types';

/**
 *permet de transforme une note en étoile
 * @param {number} note definit le nombre d'étoile a afficher
 * @param {number} max définit le nombre d'étoile maximum
 * @returns {ReactElement}
 */
export function Rating({ note, max }) {
  const rating = [];
  let id = 0;
  let noteVirgule = false;
  //affiche les étoile pleine
  for (let i = 1; i <= Math.trunc(note); i++) {
    id++;
    rating.push({
      id: id,
      class: 'bi bi-star-fill me-1 text-warning',
    });
  }
  if (note < max) {
    // affiche l'étoile de la décimal
    if (!Number.isInteger(note)) {
      id++;
      noteVirgule = true;
      rating.push({
        id: id,
        class: 'bi bi-star-half me-1 text-warning',
      });
    }
    //affiche les étoile vide
    if (noteVirgule) {
      for (let j = 1; j <= max - Math.trunc(note) - 1; j++) {
        id++;
        rating.push({
          id: id,
          class: 'bi bi-star me-1 text-warning',
        });
      }
    } else {
      for (let j = 1; j <= max - Math.trunc(note); j++) {
        id++;
        rating.push({
          id: id,
          class: 'bi bi-star me-1 text-warning',
        });
      }
    }
  }

  return (
    <>
      {rating.map((star) => (
        <i key={star.id} className={star.class}></i>
      ))}
    </>
  );
}

Rating.propTypes = {
  note: PropTypes.number,
  max: PropTypes.number,
};
