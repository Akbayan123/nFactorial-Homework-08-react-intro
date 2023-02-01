import './App.css';
import Avatar from "./image/avatar.png"
import Image from "./image/Img 1.png"

function App() {
  return (
    <div className="App">
     <div className="logo">
        <div className="logo1">
            <p>medium alike</p>
        </div>
        <div className="logo2">
            <h1>Hello, world!</h1>
        </div>
        </div>
    <div className="news">
     <div className="news-text">
        <div className="infotop">
            <img src={Avatar} alt=""/>
            <p className="name">Authors name</p>
            <p className="data">in</p>
            <p className="name">Topics name ·</p>
            <p className="data">7 july</p>
        </div>
        <div className="text">
            <a href="content.html"> <p id="title">7 Practical CSS Tips</p> </a>
            <p id="body">You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.</p>
        </div>
        <div className="infobottom">
            <button>Java Script</button>
            <p>12 min read</p>
            <p>·</p>
            <p>Selected for you</p>
        </div>
    </div>
    <img className="news-img" src={Image} alt="image"></img>
  </div>
  </div>
  );
}

export default App;
