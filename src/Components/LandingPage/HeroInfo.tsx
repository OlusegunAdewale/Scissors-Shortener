import { appInfo } from "../../Data/appinfo";

export default function HeroInfo() {
  return (
    <section id="Section2">
      <div className="userCon">
        <h2>
          One Stop. <br />
          Four<span> Possibilities</span>.
        </h2>
      </div>
      <div className="userCon2">
        {appInfo.map((info, index) => ( // Added 'index' parameter
          <div className="userBox" key={index}> 
            <h4>{info.name}</h4>
            <small>{info.description}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
