import Card from 'react-bootstrap/Card';
import { Rating } from './Rating';
import PropTypes from 'prop-types';

export function ArtisanCard({ header, title, text, rating }) {
  return (
    <>
      <Card bg='primary' text={'white'} >
        <Card.Header>{header}</Card.Header>
        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Text>{text}</Card.Text>
          <Rating note={rating} max={5} />
        </Card.Body>
      </Card>
    </>
  );
}

ArtisanCard.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number,
};
