import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card11() {
  return (
    <Card className='bg-dark' style={{ width: '15rem' }}>
      <Card.Img variant="top" src="src/imageLibreDeDroit/Publi/screen-post-hIXmJH9xhoo-unsplash.jpg" />
      <Card.Body className='text-white'>
        <Card.Title>Eric Mclean (Suivi)</Card.Title>
        <Card.Text>
        CUSTOM VGN - Le RDV du Dimanche
        </Card.Text>
        <Button variant="secondary">Regarder le live</Button>
      </Card.Body>
    </Card>
  );
}

export default Card11;