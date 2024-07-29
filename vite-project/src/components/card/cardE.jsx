import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card1() {
  return (
    <Card className='bg-dark' style={{ width: '15rem' }}>
      <Card.Img variant="top" src="src/imageLibreDeDroit/Default_Days_gone_game_cover_0.jpg" />
      <Card.Body className='text-white'>
        <Card.Title>--------Days Gone-------------------------------------</Card.Title>
        <Button variant="secondary">Rentrer dans le salon</Button>
      </Card.Body>
    </Card>
  );
}

export default Card1;