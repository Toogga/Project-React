import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card10() {
  return (
    <Card className='bg-dark' style={{ width: '15rem' }}>
      <Card.Img variant="top" src="src/imageLibreDeDroit/Publi/sam-pak-X6QffKLwyoQ-unsplash.jpg" />
      <Card.Body className='text-white'>
        <Card.Title>Eric Mclean (Suivi)</Card.Title>
        <Card.Text>
        [✅DROPS ON✅] [PUBG] Chill avec ...
        </Card.Text>
        <Button variant="secondary">Regarder le live</Button>
      </Card.Body>
    </Card>
  );
}

export default Card10;