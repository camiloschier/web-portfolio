import React from 'react';
import {Container, Row, Col, Card, Image, Carousel, Button} from 'react-bootstrap';
import proyect_picture from '../assets/proyects/bossEye/Reportes-Desktop-1.png';
import styles from '../assets/css/Proyect.module.css';


const Proyect = ({imgArray, techArray, description,title}) =>{
    
    return(
        <>
        <div className={styles.proyect_name}>{title}</div>
        <div>
            <Carousel>
                        {
                            imgArray.map(img =>{
                                return(
                                <Carousel.Item> 
                                    <Image src={img} fluid style={{minHeight:'350px',maxHeight:'500px'}}/>
                                    
                                </Carousel.Item>)
                        })}
                            
                     
            </Carousel>
        </div>
        <div className={styles.proyect_tech}>
            
            
                <div style={{margin:'10px'}}>Technologies Used</div>
            <div>
                {
                    techArray.map(tech =>{
                        return(
                            <Button variant="outline-primary" style={{margin:'5px'}}>#{tech}</Button>
                        )
                    })
                }
                

            </div>
        </div>
        <div className={styles.proyect_description}>
            
            
                <div style={{margin:'10px'}}>Proyect Description</div>
                <div className={styles.proyect_description_body}>
                  {description}                
                </div>
        </div>
        </>
    );
}

export default Proyect;