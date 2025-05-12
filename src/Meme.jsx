import { useEffect, useState } from "react";
import "./meme.css";
export default function Meme() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [count, setCount] = useState(0);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    async function getData() {
      await fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((res) => {
          const arrayOfMemes = res.data.memes;
          console.log(res.data);
          const randomIng = arrayOfMemes[Math.floor(Math.random() * 100)].url;
          setImgSrc(randomIng);
        });
    }
    getData();
  }, [count]);

  function handleTop(e) {
    setFirst(e.target.value);
  }
  function handleBottom(e) {
    setSecond(e.target.value);
  }
  return (
    <>
      <header>
        <p>Meme Generator</p>
        <a href="">More Projects</a>
      </header>
      <main>
        <div>
          <section>
            <input type="text" onChange={handleTop} placeholder="Top Text" />
            <input
              type="text"
              onChange={handleBottom}
              placeholder="Bottom Text"
            />
          </section>
          <img className="img" src={imgSrc} alt="" />
          <div>
            <p className="top">{first}</p>
            <p className="bottom">{second}</p>
          </div>
          <button className="btn" onClick={() => setCount(count + 1)}>
            Generate a New Meme Template
          </button>
        </div>
      </main>
    </>
  );
}
