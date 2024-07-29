import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './nav.css'

const options = [
  {
    name: 'Enable body scrolling',
    scroll: true,
    backdrop: false,
  },
];

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <Navbar expand="lg" bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <img src="src/imageLibreDeDroit/bc2a72ba7d62aac5c6da9ed583a92e63-removebg-preview.png" alt="logo" style={{ height: '50px' }} />
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#link">Suivi</Nav.Link>
            <NavDropdown title="Communauté" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Par jeux</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Par plateforme</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Autres</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control type="text" placeholder="Rechercher" className=" mr-sm-2" />
                </Col>
                <Col xs="auto">
                  <Button variant="secondary" type="submit">Rechercher</Button>
                </Col>
                <Col>
                  <ButtonGroup className="me-2" aria-label="Button group">
                    <Button variant="secondary" onClick={handleShow}><i class="fa-solid fa-bell" /></Button>
                    <Button variant="secondary" onClick={handleShow1}><i class="fa-solid fa-user-plus" /></Button>
                    <Button variant="secondary" onClick={handleShow2}><i class="fa-solid fa-comments" /></Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Form>
            
        </Navbar.Collapse>
      </Container>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Notifications</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="notif">
            {[
              "Nouveau commentaire : 'Alice a commenté votre vidéo : Superbe montage ! J'adore la transition à 1:20.'",
              "Mention : 'Paul vous a mentionné dans une discussion de salon : Je pense que @votrenom pourrait avoir des insights intéressants ici.'",
              "Réponse à un commentaire : 'Julie a répondu à votre commentaire : Merci pour le conseil, je vais essayer !'",
              "Nouveau message privé : 'Vous avez reçu un message de Marc : Salut ! As-tu des recommandations pour des logiciels de montage vidéo ?'",
              "Mention J'aime : 'Votre avis sur le dernier film de Marvel a reçu 10 mentions J'aime.'",
              "Nouvelle vidéo d'un abonné : 'Tom a publié une nouvelle vidéo : Mon voyage au Japon - Partie 1.'",
              "Partage de contenu : 'Votre photo de coucher de soleil a été partagée par Anna.'",
              "Recommandation de contenu : 'Découvrez le post de Jean : Les meilleurs livres à lire cet été - Cela pourrait vous intéresser !'",
              "Nouveau abonné VIP : 'L'utilisateur vérifié @star_du_web a commencé à vous suivre !'",
              "Événement à venir : 'Ne manquez pas le live de Sophie sur le thème Voyage et photographie demain à 18h.'",
              "Nouveau sujet de discussion : 'Un nouveau sujet a été créé dans le salon Cuisine : recettes et astuces : Vos desserts préférés pour l'été.'",
              "Badge de popularité : 'Félicitations ! Vous avez gagné le badge Influenceur en herbe pour votre participation active.'",
              "Invitation à collaborer : 'L'utilisateur @artiste_peintre vous a invité à collaborer sur un projet artistique.'",
              "Mise à jour de profil : 'Votre ami @julie_travels a mis à jour sa photo de profil. Allez voir son nouveau look !'",
              "Rappel de sécurité : 'Votre compte est en sécurité, mais pensez à activer la vérification en deux étapes pour plus de protection.'"
            ].map((notification, index) => (
              <div key={index}>
                <p>{notification}</p>
                <hr />
              </div>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={show1} onHide={handleClose1}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Ajout</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container text-center">
            {[
              { name: 'Koffi Malik', img: 'photo perso/pexels-koffi-malik-7776202.jpg' },
              { name: 'Pavel Danilyuk', img: 'photo perso/pexels-pavel-danilyuk-7776150.jpg' },
              { name: 'Ron Lach', img: 'photo perso/pexels-ron-lach-7848991.jpg' },
              { name: 'Alena Darmel', img: 'Perso mess/Alena Darmel.jpg' },
              { name: 'Harsch Shivam', img: 'Perso mess/Harsch Shivam.jpg' },
              { name: 'Eric Mclean', img: 'Perso mess/Eric Mclean 2.jpg' },
              { name: 'Reina Studio', img: 'Perso mess/Reina Studio.jpg' },
              { name: 'Tima Miroshnichenko', img: 'Perso mess/Tima Miroshnichenko.png' },
              { name: 'Yann Krukau', img: 'Perso mess/Yan Krukau.jpg' },
              { name: 'Rayanne Villard', img: 'Perso mess/Rayane Villard.jpg' },
              { name: 'Roman Odintsov', img: 'Perso mess/Roman Odintsov.jpg' }
            ].map((person, index) => (
              <div className="row" key={index}>
                <div className="col-3">
                  <img src={`src/imageLibreDeDroit/${person.img}`} alt={person.name} style={{ height: '80px' }} />
                </div>
                <div className="col-6">
                  <p>{person.name}</p>
                  <p>Vous demande en ami(e)</p>
                </div>
                <div className="col-3">
                  <button type="button" className="btn btn-outline-dark d-flex me-5" data-bs-toggle="button" aria-pressed="true">Suivi</button>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={show2} onHide={handleClose2}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Messagerie</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container text-center">
            {[
              { name: 'Alena Darmel', img: 'Perso mess/Alena Darmel.jpg', message: "Hey tu t’es endormis sur ton clavie..." },
              { name: 'Harsch Shivam', img: 'Perso mess/Harsch Shivam.jpg', message: "Yo tu joue ce soir ?" },
              { name: 'Eric Mclean', img: 'Perso mess/Eric Mclean 2.jpg', message: "Désoler j’étais sur Valo hier j’ai pas vu que..." },
              { name: 'Reina Studio', img: 'Perso mess/Reina Studio.jpg', message: "Ok ça marche moi aussi c’est la derniè..." },
              { name: 'Tima Miroshnichenko', img: 'Perso mess/Tima Miroshnichenko.png', message: "Hey whats’up ? I'll call you when I log in !" },
              { name: 'Yann Krukau', img: 'Perso mess/Yan Krukau.jpg', message: "Enchanté mec, tu joue a LoL à ce que je ..." },
              { name: 'Rayanne Villard', img: 'Perso mess/Rayane Villard.jpg', message: "Une dernière game ?" },
              { name: 'Roman Odintsov', img: 'Perso mess/Roman Odintsov.jpg', message: "Aller c’est bon, je suis mauvais ce soir..." }
            ].map((person, index) => (
              <div className="row" key={index}>
                <div className="col-3">
                  <img src={`src/imageLibreDeDroit/${person.img}`} alt={person.name} style={{ height: '80px' }} />
                </div>
                <div className="col-9">
                  <p>{person.name}</p>
                  <p>{person.message}</p>
                  <hr />
                </div>
              </div>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
    
  )
}

function Example() {
  return (
    <>
      {options.map((props, idx) => (
        <App key={idx} {...props} />
      ))}
    </>
  );
}

export default Example
