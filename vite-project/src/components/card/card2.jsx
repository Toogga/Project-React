import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card2() {
  return (
    <Card className='bg-dark' style={{ width: '15rem' }}>
      <Card.Img variant="top" src="src/imageLibreDeDroit/Publi/pexels-alscre-3977908.jpg" />
      <Card.Body className='text-white'>
        <Card.Title>Calixte Screville</Card.Title>
        <Card.Text>
        Event Tour de L Empereur + PvP Fact...
        </Card.Text>
        <Button variant="secondary">Regarder le live</Button>
      </Card.Body>
    </Card>
  );
}

export default Card2;