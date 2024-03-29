import {Navbar as Navbarbs, Container,Nav,Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import "./styles/Header.css"
import "./styles/logo.css"
// import ukadlogo from "./icons/Ukadlogo.svg"

export function Navbar () {

  const navigate = useNavigate();

  const navigateToAnimes = () => {
    navigate("/animes");
  };

  const navigateHome = () => {
    navigate('/');
  };



    return (
        <Navbarbs sticky="top" className="header">  
            <Container>
                <Nav>
                    <Button variant="">
                    <svg width="110" height="28" viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M106.121 3.55846C103.534 1.20097 99.8231 0.0222934 94.9871 0.0224401H85.4045V26.1313L74.0801 0.0224401H68.2219L57.5081 24.7237C56.4337 23.2234 55.1109 21.3721 53.5399 19.1697C51.0315 15.6535 49.3118 13.2512 48.3807 11.9626L59.1655 0.0224401H51.6777L41.4364 11.1124V0.0224401H35.3842V27.0334H41.4364V19.3819L44.1513 16.3683L52.1051 27.0333H62.9467L65.4676 21.1985H76.8344L79.3566 27.0334H94.677C99.8492 27.0334 103.696 25.8098 106.218 23.3627C108.739 20.9155 110 17.5921 110 13.3927C110 9.19359 108.707 5.91552 106.121 3.55846ZM67.7568 15.9046L71.1711 8.05992L74.5465 15.9046H67.7568ZM101.679 19.614C100.191 21.0052 98.0641 21.7008 95.2972 21.7006H91.4571V5.27752H94.8321C97.909 5.27752 100.191 5.99246 101.679 7.42234C103.166 8.85237 103.909 10.894 103.91 13.5471C103.91 16.2005 103.166 18.2228 101.679 19.614Z" fill="white"/>
                    <path d="M25.618 14.9383C25.618 17.1025 25.1202 18.8092 24.1247 20.0584C23.1282 21.3085 21.7769 21.9333 20.0707 21.9327C18.364 21.9327 17.0059 21.3079 15.9964 20.0584C14.9886 18.8091 14.4844 17.1024 14.4837 14.9383V5.27406L9.49295 0.0224401L0 0L2.64737 2.63703L0 5.27406H14.4837L8.43236 6.52165V15.1316C8.43236 19.0217 9.52485 22.023 11.7098 24.1353C13.8956 26.2478 16.6825 27.304 20.0707 27.3038C23.4587 27.3038 26.2389 26.2541 28.4113 24.1547C30.5836 22.0552 31.6696 19.0475 31.6693 15.1316V0.0224401L25.618 0V14.9383Z" fill="white"/>
                    </svg>    
                    </Button>
                    <Nav.Link style={{color: "white"}}  onClick={navigateHome}>Home</Nav.Link>
                    <Nav.Link style={{color: "white"}}  onClick={navigateToAnimes}>Animes of 2023</Nav.Link>
                </Nav>             
            </Container>
        </Navbarbs>
    ) 
}