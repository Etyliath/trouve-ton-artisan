import Card from 'react-bootstrap/Card';
import { Rating } from './Rating';
import PropTypes from 'prop-types';

export function ArtisanCard({ header, title, location, note }) {
  return (
    <>
      <Card bg='primary' text={'white'} >
        <Card.Header>{header}</Card.Header>
        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Text>{location}</Card.Text>
          <Rating note={note} max={5} />
        </Card.Body>
      </Card>
    </>
  );
}

ArtisanCard.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  note: PropTypes.number,
};
