import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card3() {
  return (
    <Card className='bg-dark' style={{ width: '15rem' }}>
      <Card.Img variant="top" src="src/imageLibreDeDroit/Publi/pexels-kowalievska-1174746.jpg" />
      <Card.Body className='text-white'>
        <Card.Title>Kowa Lievska</Card.Title>
        <Card.Text>
        EA FC 24 MATCH + BESTRAFUNG
        </Card.Text>
        <Button variant="secondary">Regarder le live</Button>
      </Card.Body>
    </Card>
  );
}

export default Card3;