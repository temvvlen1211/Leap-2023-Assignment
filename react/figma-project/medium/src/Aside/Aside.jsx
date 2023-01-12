import AsideBody from "./AsideBody";
import AsideHeader from "./AsideHeader";
import data from "../data/AsideData.json";
import HelpMenu from "./HelpMenu";

export default function Aside() {
  return (
    <aside>
      <AsideHeader />
      <div className="my-5 aside-body">
        <p>More from Medium</p>
        {data.map((data, index) => (
          <AsideBody key={index} data={data} />
        ))}
      </div>
      <HelpMenu />
    </aside>
  );
}
