import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Actualiza el estado para mostrar la UI alternativa
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Puedes registrar el error en un servicio externo aquí
    console.error("Error capturado por ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes personalizar este mensaje
      return <h2>¡Ups! Algo salió mal. Revisa tu consola para conseguir el error</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
