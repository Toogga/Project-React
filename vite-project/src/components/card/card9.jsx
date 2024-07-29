import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card9() {
  return (
    <Card className='bg-dark' style={{ width: '15rem' }}>
      <Card.Img variant="top" src="src/imageLibreDeDroit/Publi/glenn-carstens-peters-0woyPEJQ7jc-unsplash.jpg" />
      <Card.Body className='text-white'>
        <Card.Title>Eric Mclean (Suivi)</Card.Title>
        <Card.Text>
        La meilleur MP7 ! DROPS☑️ !8s #Ubiso...
        </Card.Text>
        <Button variant="secondary">Regarder le live</Button>
      </Card.Body>
    </Card>
  );
}

export default Card9;