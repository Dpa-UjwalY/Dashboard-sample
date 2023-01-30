import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "../App.css"
import { ItoItem } from '../components/ItoItem';
import ito from "./items.json";

export const Ito = () => {
  return (
    <div>
      <Row lg={1} className="g-3 ipo-align">
        {ito.map((items) => (
          <Col key={items.id}>
            <ItoItem {...items} />
          </Col>
        ))}
      </Row>
    </div>
  )
}