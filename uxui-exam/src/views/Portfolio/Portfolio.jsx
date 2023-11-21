import "./Portfolio.css";

function Portfolio() {
  return (
    <div>
      <title>Portfolio</title>
      <header className="portfolio__header">
        <h1>Portfolio</h1>
      </header>
      <main className="portfolio__main">
        <section className="portfolio__images">
          <img src="src\assets\tunnel.jpg" />
          <img src="src\assets\bad.jpg" />
          <img src="src\assets\boys.jpg" />
        </section>
        <section className="portfolio__images">
          <img src="src\assets\walk.jpg" />
          <img src="src\assets\grey.jpg" />
          <img src="src\assets\whitetunnel.JPG" />
        </section>
      </main>
    </div>
  );
}

export default Portfolio;

//alt till alla bilder!!
