declare namespace Outseta {
  interface Auth {
    open(options: { open: string }): void;
    // Other methods and properties
  }
  // Add more interfaces for other parts of the Outseta object
}
// Extend the Window interface to include the Outseta object
interface Window {
  DemoOutseta: Outseta.Auth;
  // Modify this based on the structure of Outseta
}
