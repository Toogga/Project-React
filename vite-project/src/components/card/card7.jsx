import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card7() {
  return (
    <Card className='bg-dark' style={{ width: '15rem' }}>
      <Card.Img variant="top" src="src/imageLibreDeDroit/Publi/fabio-magalhaes-nmTm7knUnqs-unsplash.jpg" />
      <Card.Body className='text-white'>
        <Card.Title>Eric Mclean (Suivi)</Card.Title>
        <Card.Text>
        [PC/FR] ON SORT LA GROSSE TEAM PO...
        </Card.Text>
        <Button variant="secondary">Regarder le live</Button>
      </Card.Body>
    </Card>
  );
}

export default Card7;