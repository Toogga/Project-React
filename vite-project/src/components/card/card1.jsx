import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card1() {
  return (
    <Card className='bg-dark' style={{ width: '15rem' }}>
      <Card.Img variant="top" src="src/imageLibreDeDroit/Publi/Eric Mclean.jpg" />
      <Card.Body className='text-white'>
        <Card.Title>Eric Mclean (Suivi)</Card.Title>
        <Card.Text>
        🍑BLACK OPS 6 REVEAL🍑 WSOW ...
        </Card.Text>
        <Button variant="secondary">Regarder le live</Button>
      </Card.Body>
    </Card>
  );
}

export default Card1;