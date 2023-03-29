import React, {useState} from 'react';
import Navbar from './components/navigation';
import About from './pages/aboutpage';
import Portfolio from './pages/portfoliopage';
import Contact from './pages/contactpage';
import Resume from './pages/resumepage';
import './styles/app.css';



function App() {
    const [currentPage, setCurrentPage] = useState('aboutpage');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'aboutpage') {
        return <About />;
      }
      if (currentPage === 'portfoliopage') {
        return <Portfolio />;
      }
      if (currentPage === 'contactpage') {
        return <Contact />;
      }
      return <Resume />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
    );
}

export default App;