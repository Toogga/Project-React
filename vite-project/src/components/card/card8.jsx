import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card8() {
  return (
    <Card className='bg-dark' style={{ width: '15rem' }}>
      <Card.Img variant="top" src="src/imageLibreDeDroit/Publi/florian-olivo-Mf23RF8xArY-unsplash.jpg" />
      <Card.Body className='text-white'>
        <Card.Title>Eric Mclean (Suivi)</Card.Title>
        <Card.Text>
        🍑Halo Infinite ~ Ranked !!!
        </Card.Text>
        <Button variant="secondary">Regarder le live</Button>
      </Card.Body>
    </Card>
  );
}

export default Card8;