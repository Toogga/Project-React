import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card12() {
  return (
    <Card className='bg-dark' style={{ width: '15rem' }}>
      <Card.Img variant="top" src="src/imageLibreDeDroit/Publi/andre-hunter-ugjPgy2BQug-unsplash.jpg" />
      <Card.Body className='text-white'>
        <Card.Title>Eric Mclean (Suivi)</Card.Title>
        <Card.Text>
        Rerun N64 Challenge 24/7 **Not Live**
        </Card.Text>
        <Button variant="secondary">Regarder le live</Button>
      </Card.Body>
    </Card>
  );
}

export default Card12;