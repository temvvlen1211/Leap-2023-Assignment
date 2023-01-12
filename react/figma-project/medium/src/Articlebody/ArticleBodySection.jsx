import img from "../images/bigImg.svg";
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
      <img src={img} width="100%" alt="bigImg" />
      <p className=" text-center"> All copyright belongs to the author.</p>

      <div></div>
    </section>
  );
}
