import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Col1, Col2, Heading } from './styles';
import { Text } from '../../containers/Languages';

const HeaderPricingPlan = ({singlePrice}) => (
  <Container>
    <Col1>
      <Heading>
        <Text tid="headerPricesHeadingOneText" /> 
        <span> {singlePrice.title} </span> 
        <Text tid="headerPricesHeadingTwoText" />
      </Heading>
    </Col1>
    <Col2>
      <img src={singlePrice.image} alt="icon"/>
    </Col2>
  </Container>
);

HeaderPricingPlan.propTypes = {
  singlePrice: PropTypes.object
};

HeaderPricingPlan.defaultProps = {
  singlePrice: {}
};

const mapStateToProps = (state) => ({
  singlePrice: state.singlePriceReducer.singlePrice
});

export default connect(mapStateToProps, null)(HeaderPricingPlan);