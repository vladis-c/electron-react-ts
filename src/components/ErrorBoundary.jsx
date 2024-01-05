import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = {hasError: false, error: '', errorInfo: ''};
  }
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI

    return {hasError: true};
  }
  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.log({error, errorInfo});
    this.setState({hasError: true, error, errorInfo});
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <p>{`${this.state.error}, ${this.state.errorInfo}`}</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
