import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <h1>QUIZONE</h1>
      <img src={logoImg} alt="Image Not found!" />
    </header>
  );
}
