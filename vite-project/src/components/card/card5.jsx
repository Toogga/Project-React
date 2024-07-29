import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card5() {
  return (
    <Card className='bg-dark' style={{ width: '15rem' }}>
      <Card.Img variant="top" src="src/imageLibreDeDroit/Publi/pexels-tima-miroshnichenko-7047326.jpg" />
      <Card.Body className='text-white'>
        <Card.Title>Tima Miroshnichenko</Card.Title>
        <Card.Text>
        🍑[FR] TOP #? FASTEST SNIPER | NO FAC...
        </Card.Text>
        <Button variant="secondary">Regarder le live</Button>
      </Card.Body>
    </Card>
  );
}

export default Card5;