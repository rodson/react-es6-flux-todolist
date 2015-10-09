import React from 'react';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';

class TodoApp extends React.Component {
  render() {
    return (
      <div className="todoapp">
        <Header />
        <MainSection />
        <Footer />
      </div>
    );
  }
}

export default TodoApp;
