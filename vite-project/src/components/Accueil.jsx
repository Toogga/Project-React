import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Accueil.css'


function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col className='titre'>Gameplay</Col>
      </Row> 
      <Row className='wrapper'>
        <Col className='item'>
            <Row className='carte'>
                <img className='jaquette' src="src/imageLibreDeDroit/Publi/Eric Mclean.jpg" alt="Eric Mclean" />
                <p>Eric Mclean (Suivi)</p>
                <p>🍑BLACK OPS 6 REVEAL🍑 WSOW ...</p>
            </Row>
        </Col>
        <Col className='item'>
            <Row className='carte'>
                <img className='jaquette' src="src/imageLibreDeDroit/Publi/pexels-alscre-3977908.jpg" alt="Cotton Bro" />
                <p>Calixte Screville</p>
                <p>Event Tour de L'Empereur + PvP Fact...</p>
            </Row>
        </Col>
        <Col className='item'>
            <Row className='carte'>
                <img className='jaquette' src="src/imageLibreDeDroit/Publi/pexels-kowalievska-1174746.jpg" alt="Kowa Lievska" />
                <p>Kowa Lievska</p>
                <p>EA FC 24 MATCH + BESTRAFUNG</p>
            </Row>
        </Col>
        <Col className='item'>
            <Row className='carte'>
                <img className='jaquette' src="src/imageLibreDeDroit/Publi/pexels-cottonbro-4691567.jpg" alt="Cotton Bro" />
                <p>Cotton Bro</p>
                <p>🌸 Vie de MJ 🌸 On prépare la suite ...</p>
            </Row>
        </Col>
        <Col className='item'>
            <Row className='carte'>
                <img className='jaquette' src="src/imageLibreDeDroit/Publi/pexels-tima-miroshnichenko-7047326.jpg" alt="Tima Miroshnichenko" />
                <p>Tima Miroshnichenko</p>
                <p>[FR] TOP #? FASTEST SNIPER | NO FAC...</p>
            </Row>
        </Col>
        <Col className='item'>
            <Row className='carte'>
                <img className='jaquette' src="src/imageLibreDeDroit/Publi/carl-raw-m3hn2Kn5Bns-unsplash.jpg" alt="RetroGame Arcadia" />
                <p>RetroGame Arcadia</p>
                <p>Exploration de l'Âge d'Or du Rétro Ga...</p>
            </Row>
        </Col>
      
        <Col className='item'>
            <Row className='carte'>
                <img className='jaquette' src="src/imageLibreDeDroit/Publi/fabio-magalhaes-nmTm7knUnqs-unsplash.jpg" alt="Eric Mclean" />
                <p>Eric Mclean</p>
                <p>[PC/FR] ON SORT LA GROSSE TEAM PO...</p>
            </Row>
        </Col>
        <Col className='item'>
            <Row className='carte'>
                <img className='jaquette' src="src/imageLibreDeDroit/Publi/florian-olivo-Mf23RF8xArY-unsplash.jpg" alt="Eric Mclean" />
                <p>Eric Mclean</p>
                <p>Halo Infinite ~ Ranked !!!</p>
            </Row>
        </Col>
        <Col className='item'>
            <Row className='carte'>
                <img className='jaquette' src="src/imageLibreDeDroit/Publi/glenn-carstens-peters-0woyPEJQ7jc-unsplash.jpg" alt="Eric Mclean" />
                <p>Eric Mclean</p>
                <p>La meilleur MP7 ! DROPS☑️ !8s #Ubiso...</p>
            </Row>
        </Col>
        <Col className='item'>
            <Row className='carte'>
                <img className='jaquette' src="src/imageLibreDeDroit/Publi/sam-pak-X6QffKLwyoQ-unsplash.jpg" alt="Eric Mclean" />
                <p>Eric Mclean</p>
                <p>[✅DROPS ON✅] [PUBG] [Chill avec ...</p>
            </Row>
        </Col>
        <Col className='item'>
            <Row className='carte'>
                <img className='jaquette' src="src/imageLibreDeDroit/Publi/screen-post-hIXmJH9xhoo-unsplash.jpg" alt="Eric Mclean" />
                <p>Eric Mclean</p>
                <p>CUSTOM VGN - Le RDV du Dimanche</p>
            </Row>
        </Col>
        <Col className='item'>
            <Row className='carte'>
                <img className='jaquette' src="src/imageLibreDeDroit/Publi/andre-hunter-ugjPgy2BQug-unsplash.jpg" alt="Eric Mclean" />
                <p>Eric Mclean</p>
                <p>Rerun N64 Challenge 24/7 **Not Live**</p>
            </Row>
        </Col>
      </Row>
      <Row>
        <Col className='titre'>Salon Suivi</Col>
      </Row>
      <Row className='wrapper'>
        <Col className='item'>
            <Row>
                <img className='jeu' src="src/imageLibreDeDroit/Default_make_me_a_destiny_2_cover_0.jpg" alt="Eric Mclean"/>
                <p>Destiny 2</p>
            </Row>
        </Col>
        <Col className='item'>
            <Row>
                <img className='jeu' src="src/imageLibreDeDroit/Default_make_me_a_dying_light_2_cover_0.jpg" alt="Cotton Bro" />
                <p>Dying light 2 : Stay Human</p>
            </Row>
        </Col>
        <Col className='item'>
            <Row>
                <img className='jeu' src="src/imageLibreDeDroit/Default_make_me_a_genshin_impact_cover_Teyvat_0.jpg" alt="Kowa Lievska" />
                <p>Genshin Impact</p>
            </Row>
        </Col>
        <Col className='item'>
            <Row>
                <img className='jeu' src="src/imageLibreDeDroit/Default_make_me_a_sword_art_online_cover_0.jpg" alt="Cotton Bro" />
                <p>SWORD ART ONLINE : Last Recollection</p>
            </Row>
        </Col>
        <Col className='item'>
            <Row>
                <img className='jeu' src="src/imageLibreDeDroit/Default_Days_gone_game_cover_0.jpg" alt="Eric Mclean" />
                <p>Days Gone</p>
            </Row>
        </Col>
        <Col className='item'>
            <Row>
                <img className='jeu' src="src/imageLibreDeDroit/Default_make_me_a_call_of_duty_warzone_cover_0.jpg" alt="Eric Mclean" />
                <p>Call of Duty : Warzone</p>
            </Row>
        </Col>
        <Col className='item'>
            <Row>
                <img className='jeu' src="src/imageLibreDeDroit/Default_Sekiro_game_cover_3.jpg" alt="Eric Mclean" />
                <p>Sekiro</p>
            </Row>
        </Col>
        <Col className='item'>
            <Row>
            <img className='jeu' src="src/imageLibreDeDroit/Default_make_me_a_Fall_guys_cover_0.jpg" alt="Eric Mclean" />
              <p>Fall Guys</p>
            </Row>
        </Col>
      </Row>
    </Container>
    
  );
}

export default AutoLayoutExample;