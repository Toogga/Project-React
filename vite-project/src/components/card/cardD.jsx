import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card1() {
  return (
    <Card className='bg-dark' style={{ width: '15rem' }}>
      <Card.Img variant="top" src="src/imageLibreDeDroit/Default_make_me_a_sword_art_online_cover_0.jpg" />
      <Card.Body className='text-white'>
        <Card.Title>SWORD ART ONLINE: ----Last Recollection----</Card.Title>
        <Button variant="secondary">Rentrer dans le salon</Button>
      </Card.Body>
    </Card>
  );
}

export default Card1;