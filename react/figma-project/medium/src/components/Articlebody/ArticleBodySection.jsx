import img from "./img/bigImg.svg";
export default function ArticleBodySection() {
  return (
    <section>
      <h1>The best New Year’s resolutions you can make</h1>
      <p>Resolutions that actually work, according to a decision scientist</p>
      <p>
        Happy almost-2023! Chances are that you’re contemplating making some New
        Year’s resolutions, so let’s get you set up for success with a few
        resolutions that will unlock the best version of you.
      </p>
      <img src={img} alt="" />
      <p className=" slim-nav-link  "> All copyright belongs to the author.</p>
      <h3>#1 — Resolve to stop borrowing resolutions</h3>
      <p>
        Different people are different, so what works for you might not be what
        works for anyone else.
      </p>
      <p>
        Understanding this is the single biggest step you can take in the
        direction of success. That’s precisely why I’m not going to do the
        standard guru thing of suggesting you copy my exact wellness plan after
        proving to you that I have a stack of credentials (I do) and I’m in
        shape (I am). My plan fits me, but you need a plan that fits you.
      </p>

      <h3>Quit borrowing other people’s resolutions</h3>
      <p>
        Whenever you’re tempted to copy your favorite celeb’s latest health
        plan, take a moment to think about some potential reasons that person is
        able to stick with it (assuming they are) which you might not know
        about. Do they have a private chef who prevents them from making food
        decisions? Do they secretly loooove cabbage? Is their job less stressful
        than yours? And so on.
      </p>
      <div></div>
    </section>
  );
}
