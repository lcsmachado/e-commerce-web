import React from 'react';
import styles from '../../../../styles/Header.module.css';
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';

const StorefrontHeader: React.FC = () => {
  return(
    <Row className={ styles.background }>
      <Col md={8} className='mt-2'>
        Logo
      </Col>
      <Col md={4} className='mt2 text-center'>
        <Row>
          <Col md={6} className='mb-4 mb-md-0'>
            <InputGroup>
              <FormControl placeholder='Pesquisar Produto' />
            </InputGroup>
          </Col>
          <Col md={6}>
            Icones
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default StorefrontHeader;
