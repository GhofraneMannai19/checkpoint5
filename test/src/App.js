import Profile from './profile/Profile component';
import './App.css';


function App() {
  const handleName = (fullName) => {
    alert(fullName)
  }
  
  return (
    <div>
     <Profile fullName="Ghofrane mannai" bio="Web developerss" profession="Web developer" handleName={handleName}>
     <img src="logo192.png"/>
     </Profile>
    </div>
  );
}

export default App;
