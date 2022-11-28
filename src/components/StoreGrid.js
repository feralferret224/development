import * as React from 'react';
import { StoreItem } from "./StoreItem";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./StoreGrid.css";


export function StoreGrid({ display, add }) {
  return (
    <div className='StoreGrid'>
      {display.map((item, index) => (
        <StoreItem 
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
          add={add}
          item={item}
        ></StoreItem>
      ))}
    </div>
    // <Col >
    //     <Row>
    //       {display.map((item, index) => (
    //         <Col >
    //             <StoreItem 
    //               name={item.name}
    //               description={item.description}
    //               price={item.price}
    //               image={item.image}
    //               add={add}
    //               item={item}
    //             ></StoreItem>
    //         </Col>
    //       ))}
    //     </Row>
    //   </Col>
  );
}

export default StoreGrid;