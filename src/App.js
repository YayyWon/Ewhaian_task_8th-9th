import './App.css';
import './component/main.css';
import toplink from './toplink-bg.gif';
import menu1 from './1.gif';
import menu2 from './2.gif';
import menu3 from './5.gif';
import menu4 from './6.gif';
import menu5 from './8.gif';

function App() {
  return (
    <div className="App">
      <div className="toplink">
        <img src={toplink} />
        <p>
          <img src={menu1} />
          <img src={menu2} />
          <img src={menu3} />
          <img src={menu4} />
          <img src={menu5} />
        </p>
      </div>




    </div>
  );
}

export default App;
