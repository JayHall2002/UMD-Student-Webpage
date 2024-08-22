import umdlogo from './UMDLOGO.png';
import './App.css';
import dataanalystlogo from './Data-Analyst-Logo.jpg'
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={umdlogo} className="App-logo" alt="logo" />
        <p>
          <div className="App-Subheader">
          <h1>Welcome to UMD Information Science's Course Selector</h1>
          </div>
        </p>
        <button
          className="App-link"
          onclick={() => window.open("https://www.testudo.umd.edu/", '_blank')}
          rel="noopener noreferrer"
        >
          Open UMD Testudo
        </button>
        <div className="Guidance-Instruction">
        <h3>Click on Your Chosen Career Path</h3>
        </div>
        <div className="Data-Analyst">
        <a href='https://www.coursera.org/articles/what-does-a-data-analyst-do-a-career-guide'
         className='Data-Analyst-Interactive' 
         target='_blank'
         >
          <img src={dataanalystlogo} alt='dataanalystlogo' />
        </a>
        <p className="Data-Analyst-Caption">Data Analyst Career Path</p>
        <header className='Data-Analyst-Courses'>
          
          <h4>View Recommended Courses</h4>
        </header>
        </div>
        
      </header>
    </div>
    
  );
}

export default App;
