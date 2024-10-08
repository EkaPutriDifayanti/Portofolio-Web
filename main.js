import $ from "jquery";
import "./style.css";

$("#app").html(` 
<header class="navbar-container">
    <h2 class="logo">Portofolio</h2>
    <nav>
      <ul>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#my-hobbies">My Hobbies</a></li>
        <li><a href="#my-skills">My Skills</a></li>
        <li><a href="#contact-me">Contact Me</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section class="landing-page">
      <h1>
        Hello, Everyone! <br> I'm <span class="name">Eka Putri Difayanti</span>👋
      </h1>
      <p>
        An Informatics Engineering student at <a href="https://www.unhas.ac.id/">Hasanuddin University</a>
      </p>
    </section>
    <section class="about-me">
      <h2 id="about-me">About Me</h2>
      <p>
        I'm a student who is currently studying at Universitas Hasanuddin. I'm interested in <span>Web Development</span> and I'm currently learning about it. I'm also interested in learning about new things and I'm always open to new opportunities 🤩.
      </p>
    </section>
    <section class="my-hobbies-title" id ="my-hobbies">
      <h2>My Hobbies</h2>
    </section>
    <section class="my-hobbies-card">
      <section class="card" id="reading">
        <h3>Reading</h3>
        <p>Usually reading something that interested me, like manhwa, webtoon, and many more</p>
      </section>
      <section class="card" id="music">
        <h3>Listening to music</h3>
        <p>Any genre from Pop to jedag jedug, it's random so my spotify playlist is called randomcore</p>
      </section>
      <section class="card" id="movie">
        <h3>Watching movies</h3>
        <p>I actually not really into drama and horror, but my family like it so i just get along with it</p>
      </section>
      <section class="card" id="game">
        <h3>Playing games</h3>
        <p>Life is roblox, roblox is life, i also like simulator and chill games because i want something to cool me down (and not stressed me out because of my assignment)</p>
      </section>
    </section>
    <section class="my-skills">
      <h2 id="my-skills">My Skills</h2>
      <ul>
        <li>
          <img src="./image/html.svg" alt="HTML" width="50px" height="50px">
          <p>HTML</p>
        </li>
        <li>
          <img src="./image/css-svgrepo-com.svg" alt="CSS" width="50px" height="50px">
          <p>CSS</p>
        </li>
        <li>
          <img src="./image/javascript-svgrepo-com.svg" width="45px" height="45px" alt="JavaScript">
          <p>JavaScript <span>(not really)</span></p>
        </li>
      </ul>
    </section>
    <section id="contact-me">
      <h2 id="contact-me">Contact Me</h2>
      <p>
        You can contact me through my social media accounts:
      </p>
      <ul>
        <li>
          <a href="https://www.instagram.com/ekaputridfyn/">Instagram</a>
          <img src="./image/instagram.svg" alt="Instagram" width="20px" height="20px">
        </li>
        <li>
          <a href="https://www.linkedin.com/in/eka-putri-difayanti-7b7b3b1b4/">LinkedIn</a>
          <img src="./image/linkedin.svg" alt="LinkedIn" width="20px" height="20px">
        </li>
  </main>
`);


$(function() {
  $(".card").on("click", "h3", function() {
    $(this).next("p").slideToggle();
  });
});

