import './App.css'

function App() {
  return (
    <div className="App">
      <img
        src="/_Avatar share button.svg"
        alt="share-btn"
        className="share-btn"
      />
      <div className="App-header">
        <img src="/menu-btn.svg" alt="menu-btn" className="menu-btn" />
        <img
          src="/profile-pics.jpg"
          alt="profile-pics"
          className="profile-pics"
          id="profile__img"
        />
        <h3 id="twitter">David Norue</h3>
        <h5 id="slack">DNor</h5>
        <div className="links">
          <a
            href="https://training.zuri.team/"
            className="link-btn"
            id="btn__zuri"
            target="blank"
          >
            Zuri Team
          </a>
          <a
            href="http://books.zuri.team/"
            className="link-btn"
            id="books"
            target="blank"
          >
            Zuri Books
          </a>
          <a
            href="https://books.zuri.team/python-for-beginners?ref_id=DNor"
            className="link-btn"
            id="book__python"
            target="blank"
          >
            Python Book
          </a>
          <a
            href="https://background.zuri.team/"
            className="link-btn"
            id="pitch"
            target="blank"
          >
            Background Check for Coders
          </a>
          <a
            href="https://books.zuri.team/design-rules"
            className="link-btn"
            id="book__design"
            target="blank"
          >
            Design
          </a>
        </div>
        <div className="social-icons">
          <img src="/slack.svg" alt="slack-icon" />
          <img src="/Social icon.svg" alt="github-icon" />
        </div>
      </div>
      <footer className="footer">
        <img src="/Zuri.Internship_Logo.svg" alt="zuri-logo" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src="/I4G.svg" alt="i4g-logo" />
      </footer>
    </div>
  )
}

export default App
