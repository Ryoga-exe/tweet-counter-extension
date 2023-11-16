import type { PlasmoCSConfig } from "plasmo";
import "styles/global.scss"

export const config: PlasmoCSConfig = {
  matches: ["https://twitter.com/*"]
};

let id: NodeJS.Timeout;
let userId: string;
const set = new Set();

function crawlChunk() {
  const beforeY = window.scrollY;
  scrollBy(0, window.innerHeight);
  const afterY = window.scrollY;
  if (beforeY === afterY) {
    clearInterval(id);
    const note_click = document.querySelector(".tweet-counter-note") as HTMLDivElement;
    note_click.style.display = "none";
    alert(`@${userId} のカウントが終了しました。\n${set.size}回のツイートがありました。`);
  }
  const timeline = document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(3) > section > div > div");
  const tweets = timeline.childNodes;
  for (const tweet of tweets) {
    const tweet_p = tweet as HTMLElement;
    const tweetUser = tweet_p.innerText.split("\n")[1];
    if (tweetUser.toLowerCase() === "@" + userId.toLowerCase()) {
      set.add(tweet.textContent);
    }
  }
}

window.addEventListener("load", () => {
  console.log("Loaded!");
  
  const div = document.createElement("div");
  div.innerText = "ツイート数をカウント";
  div.className = "tweet-counter-div";

  const note = document.createElement("div");
  note.innerText = "ツイート数をカウント中です。しばらくお待ちください。";
  note.className = "tweet-counter-note";

  div.addEventListener("click", () => {
    if (location.pathname !== "/search") {
      alert("検索ページで実行してください。");
    }
    else {
      if (!location.search.includes("f=live")) {
        alert("最新のツイートを検索するタブにしてください。");
      }
      else {
        userId = window.prompt("検索対象のユーザ ID を入力してください。( @ は不要です)", "");
        scrollTo(0, 0);
        set.clear();
        const note_click = document.querySelector(".tweet-counter-note") as HTMLDivElement;
        note_click.style.display = "flex";
        id = setInterval(crawlChunk, 1000);
      }
    }
  });

  document.body.appendChild(div);
  document.body.appendChild(note);
})
