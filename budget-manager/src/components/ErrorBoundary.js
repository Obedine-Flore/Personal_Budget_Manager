import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Thus line updates state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // This line logs the error to the console or to an external error tracking service
    console.error("Error caught in Error Boundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // This line renders a fallback UI when an error occurs
      return <h2>Something went wrong while rendering the chart.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;