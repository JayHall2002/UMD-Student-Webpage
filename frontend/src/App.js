import umdlogo from './UMDLOGO.png';  // The University of Maryland logo that spins at the top of the page
import './App.css'; // Imports styling changes from App.css
import dataanalystlogo from './Data-Analyst-Logo.jpg' // Image for the Data Analyst image on Main page
import cyberseclogo from './Cyber-Security-Analyst.jpg'  // Image for the Cyber Secuirty Analyst on Main page

function App() {
  return (
      
    <div className="App">  {/* This is the code for the top of the Homepage */}
      <header className="App-header">
        <img src={umdlogo} className="App-logo" alt="logo" />
        <p>
          <div className="App-Subheader">
          <h1>Welcome to UMD Information Science's Course Selector</h1>
          </div>
        </p>
        {/* The Circle that links to Testudo so students may refer to schedule of classes or register */}
        <button
          className="App-link"
          onClick={() => window.open("https://www.testudo.umd.edu/", '_blank')}
          rel="noopener noreferrer"
        >
          Open UMD Testudo
        </button>
        {/* Nonfunctional Message to Instruct users to click on the Icons Below */}
        <div className="Guidance-Instruction">
        <h3>Click on Your Chosen Career Path</h3>
        </div>
        /* The image of a Data Analyst Hyperlinks to a credible source to explain what a Data Analyst is */
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
      {/* Creating the CyberSecurity Logo and captions */}
      <div className='Cyber-Security'>
        <a href='https://www.neit.edu/blog/what-does-a-cyber-security-analyst-do' className='Cyber-Security-Interactive' target='_blank'>
          <img src={cyberseclogo} alt='cyber-security' />
        </a>
        <p className='Cybersec-caption'>Cyber Security Analyst</p>
        <header className='Cyber-Analyst-Courses'>
          <h4>View Recommended Courses</h4>
        </header>
      </div>
    </div>
    
  );
}

export default App;
