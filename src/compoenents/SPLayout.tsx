import { useEffect, useState } from 'react';
// Component
import { Col, Row } from 'antd';
// Styled
import styled, { css } from 'styled-components';

/** [Styled element] Layout */
const StyledLayout = styled.div`
  position: relative;
  width: 100vw;
`;
/** [Styled element] Section */
const StyledSection = styled.div`
  position: relative;
  width: 100%;
`;


/** [Interface] 기본적인 Element 속성 */
interface BasicElementProps {
  children?: JSX.Element|JSX.Element[];
}

/**
 * [Component] Single Page Layout
 */
export const SPLayout = ({ children }: BasicElementProps): JSX.Element => {
  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  );
}
/**
 * [Component] Section
 */
export const Section = ({ children }: BasicElementProps): JSX.Element => {
  // Return an element
  return (
    <StyledSection>
      <Row justify='center'>
        <Col span={16}>{children}</Col>
      </Row>
    </StyledSection>
  )
}