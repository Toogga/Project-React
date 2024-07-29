import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card4() {
  return (
    <Card className='bg-dark' style={{ width: '15rem' }}>
      <Card.Img variant="top" src="src/imageLibreDeDroit/Publi/pexels-cottonbro-4691567.jpg" />
      <Card.Body className='text-white'>
        <Card.Title>Cotton Bro</Card.Title>
        <Card.Text>
        🌸 Vie de MJ 🌸 On prépare la suite ...
        </Card.Text>
        <Button variant="secondary">Regarder le live</Button>
      </Card.Body>
    </Card>
  );
}

export default Card4;