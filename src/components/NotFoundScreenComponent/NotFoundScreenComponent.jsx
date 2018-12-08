import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

export default ({ onGoBackToHomePage }) => (
  <Page>
    <Navbar title="Not found" backLink="Back" onBackClick={onGoBackToHomePage} />
    <Block strong>
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </Block>
  </Page>
);