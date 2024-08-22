import umdlogo from './UMDLOGO.png';
import './App.css';
import dataanalystlogo from './Data-Analyst-Logo.jpg'
import cyberseclogo from './Cyber-Security-Analyst.jpg'

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
          onClick={() => window.open("https://www.testudo.umd.edu/", '_blank')}
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
