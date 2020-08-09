import React from 'react';
import {Container, Row, Col, Card, Image} from 'react-bootstrap';
import profile_picture from '../assets/profile_picture.jpg';
import styles from '../assets/css/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-solid-svg-icons';
import Proyect from './Proyect';
function importAll(r) {
    return r.keys().map(r);
  }
let proyectsArray =[]
let bossEyeImg = importAll(require.context('../assets/proyects/bossEye', false, /\.(png|jpe?g|svg)$/));
let bossEyeTech = ["ReactJs","Bootstrap 4", "React-Bootstrap","React-Chartist","ChartistJs","NodeJs", "Express", "MySQL", "React Router"]
let bossEyeDescription = "This proyect was for a client that needed to kep track of his remote workforce. It can track how much time the employee spends on his work and how much spends on distractions.The charts were made with React-Chartist, the overall style was made with Bootstrap. The back-end was made with NodeJs/Express and it gets data from a MySQL Database."
let bossEyeObject ={
    title: "BossEye",
    img: bossEyeImg,
    tech: bossEyeTech,
    desc: bossEyeDescription
}
proyectsArray.push(bossEyeObject)

let proyectoSociosImg = importAll(require.context('../assets/proyects/proyectoSocios', false, /\.(png|jpe?g|svg)$/));
let proyectoSociosTech = ["ReactJs","Bootstrap 4", "React-Bootstrap","Docker","NodeJs", "Express", "MySQL","React Router", "Docker", "NGINX"]
let proyectoSociosDescripcion = "This proyect was made as a new initiative from a local football team to make possible for its afilliates to pay and renew their memberships online. It was made with ReactJs on the front-end and with NodeJS on the back-end. Also docker is implemented to auto scale the front or back if needed."
let proyectoSociosObject = {
    title: "Talleres FC",
    img: proyectoSociosImg,
    tech: proyectoSociosTech,
    desc: proyectoSociosDescripcion
}
proyectsArray.push(proyectoSociosObject)

let sancorSegurosImg =importAll(require.context('../assets/proyects/sancorSeguros', false, /\.(png|jpe?g|svg)$/));
let sancorSegurosTech = ["ReactJs","Bootstrap 4", "React-Bootstrap","Docker","NodeJs", "Express", "MySQL","React Router","CRM Integration", "NGINX"]
let sancorSegurosDescripcion = "This proyect was a request from an insurance company to get new clients. The data from the form go to a MySQL database and then to a CRM via an API integration in the NodeJs back-end"
let sancorSegurosObject = {
    title: "Sancor Insurance",
    img: sancorSegurosImg,
    tech: sancorSegurosTech,
    desc: sancorSegurosDescripcion
}
proyectsArray.push(sancorSegurosObject)

const Profile = () => {
    return(
        <Card className={styles.profile_card}>
            <Card.Body >
                <div className={styles.profile_picture}><Image src={profile_picture} thumbnail/></div>
                
                <div>
                    <div className={styles.profile_name}>
                            Camilo Perona
                    </div>
                    <div className={styles.profile_description}>
                            Full Stack Web Developer
                    </div>
                    <div>
                        <i class="fab fa-github-square fa-5x" style={{marginRight:'10px' ,cursor: 'pointer'}} onClick={() => window.open("https://github.com/camiloschier", "_blank")}></i>
                        <i class="fab fa-linkedin fa-5x" style={{marginLeft:'10px', cursor: 'pointer'}} onClick={() => window.open("https://www.linkedin.com/in/camilo-perona", "_blank")}></i>
                    </div>
                </div>
                
                
            </Card.Body>
        </Card>
    );
}
const ProyectContainer = () =>{
    return(
    <>
    {proyectsArray.map(proyect =>{
        return(
            <Card className={styles.profile_card} style={{marginBottom:'20px'}}>
            <Card.Body>
                <Proyect title={proyect.title} imgArray={proyect.img} techArray={proyect.tech} description={proyect.desc}/>
            </Card.Body>
            </Card>
        );
    })}
   </>);
} 

const Home = () => {
    return(
        <Container>
            <Row>
                <Col sm={12} md={12} lg={12} className="mt-5">
                    
                    <Profile />                
                </Col>
                <Col sm={12} md={12} lg={12} className="mt-5">
                    
                    <ProyectContainer />                
                </Col>
            </Row>
        </Container>
    );
}

export default Home;