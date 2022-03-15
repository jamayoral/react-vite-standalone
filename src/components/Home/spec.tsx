import { mount } from '@cypress/react'

import { renderE2E } from 'utils/testUtils'

import Home from '.'

describe('<Home/> ci', () => {
  it('should render the Home', () => {
    mount(renderE2E(<Home />))
    cy.get('h1').contains('React Vite Standalone')
  })
})
