import { Component } from 'react';
import { SectionStyled } from './section.stuled';
import PropTypes from 'prop-types';

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <SectionStyled>
        <h2>{title}</h2>
        {children}
      </SectionStyled>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
};
