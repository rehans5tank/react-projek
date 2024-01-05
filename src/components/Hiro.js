import {Carousel} from "react-bootstrap";
import hiro1 from './../asset/1.png';
import hiro2 from './../asset/2.png';
import hiro3 from './../asset/3.png';

const Hiro = ()=> {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={hiro1} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={hiro2} text="First slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={hiro3} text="First slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hiro;