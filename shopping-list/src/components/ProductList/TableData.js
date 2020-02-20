import React, { Component, Fragment } from 'react'
import ProductData from './data/data.json';
import { Container, Row, Col} from 'react-bootstrap';
import './TableData.scss';
import Carousel from './Carousel';

 class TableData extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             showCarousel: false
         }
     }
     
     toggleCarousel = () => {
        this.setState({
        showCarousel: !this.state.showCarousel      
    });
      }

      handleClose= () =>{
        this.setState({ showCarousel : false });
      }
    render() {
        return (
            <Container>
            <h3>WILLIAM SONOMA</h3>

            <div>
            <Row>
           {ProductData.map((items, index) => {
               return(
                   <Col>
                   <div className="product-table">
                    <div className="table-heading mb-3">
               <h6 key={index}>
               <span>{items.id}</span>
               <span>{items.categoryType}</span>
               <span>{items.name}</span>
               </h6>
               </div>
              <Row>
               <Col>
                   <div className="product-container">
                   {items.groups.map((subItems, id) => {
                   return(
                   
                     <Col xs="auto" md={4} sm={4} className="product-wrapper float-left mb-5">

                    <img src = {subItems.hero.href} className="hero-image" onClick={this.toggleCarousel.bind(this)}
                    />
                   <p className="mb-0">{subItems.name}</p>
                   <p className="high-price mb-0">{`High Price is ${subItems.priceRange.regular.high}`}</p>
                   <p>{`Lowest Price is ${subItems.priceRange.regular.low}`}</p>
                   

                   </Col>
                   
                   )
               })}
                       </div>
                   </Col>
                   </Row>
               </div>
               </Col>
               
               )})
           }
           </Row>
           
            </div>
           
            <div>{this.state.showCarousel ?  <Carousel  handleClose={this.handleClose} /> : null }</div>

            </Container>
        )
    }
}

export default TableData
