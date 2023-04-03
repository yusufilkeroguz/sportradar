declare global {
  namespace Cypress {
    interface Chainable {
      addMatchComponentMount(): void
    }
  }
}