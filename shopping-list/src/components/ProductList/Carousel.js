import React, { Component } from 'react'
import {Container, Row} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import ProductData from './data/data.json';
import './Carousel.scss'

 class Carousel extends Component {
     constructor(props) {
         super(props)
         this.goToSlide = this.goToSlide.bind(this);
         this.goToPrevSlide = this.goToPrevSlide.bind(this);
         this.goToNextSlide = this.goToNextSlide.bind(this);
        
        //how to take current INDEX 

        this.state = {
            activeIndex: 0,
            productImages: ProductData.map((product) => {
                        return product.groups.map((carouselImage) => {
                            return carouselImage.thumbnail.href;
                })
            }).flat()
            }
         }
         goToSlide(index) {
            this.setState({
              activeIndex: index
            });
          }
    
     
          goToPrevSlide(e) {
            // debugger
            const activeSlide = this.state.activeIndex === 0 ? this.state.productImages.length - 1 : this.state.activeIndex - 1;
          this.setState({ activeIndex: activeSlide });
          e.preventDefault();
        }
      
        goToNextSlide(e) {
            // debugger
          const activeSlide = this.state.activeIndex === this.state.productImages.length - 1 ? 0: this.state.activeIndex + 1;
          this.setState({ activeIndex: activeSlide });
          e.preventDefault();
        }
      
    render() {
        return (
            <Container>
                <Row>
            <div className="carousel-container">
            <Button variant="info" onClick={this.goToPrevSlide}>Previous</Button>
            {/* <pre>{JSON.stringify(this.state, null, "  ")}</pre> */}
            <Button onClick={this.props.handleClose} className="btn-close">X</Button>
            <img src={this.state.productImages[this.state.activeIndex]} alt="Product Image" />
            <Button variant="info mr-3" onClick={this.goToNextSlide}>Next</Button>
            
          </div>
          </Row>
          </Container>
        )
    }
}

export default Carousel
