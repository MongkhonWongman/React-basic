import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      new commit 2

      <Link to='/for-php' >
        <button type='button'>สำหรับ PHP</button>
      </Link>
      &nbsp;&nbsp;

      <Link to='/for-tomcat-service' >
        <button type='button'>สำหรับ TOMCAT SERVICE</button>
      </Link>

    </div>
  );
}

export default App;
