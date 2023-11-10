import "./Home.css";
//navigate

function Home() {
  return (
    <main className="main">
      <section className="main__background">
        <section className="main__section">
          <h1 className="main__title">Photography by Mary</h1>
        </section>
        <section className="flex">
          <section className="links">
            <button className="button">ABOUT</button>
            <button className="button">PORTFOLIO</button>
            <button className="button">CONTACT</button>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Home;
