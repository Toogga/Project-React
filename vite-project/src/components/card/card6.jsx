import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card6() {
  return (
    <Card className='bg-dark' style={{ width: '15rem' }}>
      <Card.Img variant="top" src="src/imageLibreDeDroit/Publi/carl-raw-m3hn2Kn5Bns-unsplash.jpg" />
      <Card.Body className='text-white'>
        <Card.Title>RetroGame Arcadia</Card.Title>
        <Card.Text>
        Exploration de l'Âge d'Or du Rétro Ga...
        </Card.Text>
        <Button variant="secondary">Regarder le live</Button>
      </Card.Body>
    </Card>
  );
}

export default Card6;