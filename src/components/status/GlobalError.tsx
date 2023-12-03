import React, { Component, ErrorInfo, ReactNode } from 'react';

interface GlobalErrorProps {
  children: ReactNode;
}

interface GlobalErrorState {
  hasError: boolean;
}

class GlobalError extends Component<GlobalErrorProps, GlobalErrorState> {
  constructor(props: GlobalErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): GlobalErrorState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error or perform any additional actions here
    console.error(error);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can customize the error message or UI here
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4 text-red-500">Oops! Something went wrong.</h1>
          <p className="text-lg">
            We apologize for the inconvenience. Please try again later.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default GlobalError;