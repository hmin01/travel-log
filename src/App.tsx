import { useState } from 'react';
// Component
import { SPLayout, Section } from './compoenents/SPLayout';
import { TripPageHeader } from './compoenents/Header';
import { Hero } from './compoenents/Hero';
// Styled
import styled, { createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion'

/** [Styled element] Global style */
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      {/* <SPLayout>
        <Section>
          <TripPageHeader date='2021.11.04.' destination='Jeonju' />
        </Section>
      </SPLayout> */}
      <Hero />
    </>
  )
}

export default App;