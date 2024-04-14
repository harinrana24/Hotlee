import { data } from "../restApi.json";

function WhoAreWe() {
  return (
    <section className="who_are_we" id="who_are_we">
      <div className="container">
        <div className="text_banner">
          {data[0].who_we_are.slice(0, 2).map((element) => {
            return (
              <div className="card" key={element.id}>
                <h1 className="heading" style={{ fontWeight: "300" }}>
                  {element.number}
                </h1>
                <p>{element.title}</p>
              </div>
            );
          })}
        </div>
        <div className="image_banner">
          <img src="/center.svg" alt="Image" className="gradient_bg" />
          <img src="whoweare.png" alt="" />
        </div>
        <div className="text_banner">
          {data[0].who_we_are.slice(2).map((element) => {
            return (
              <div className="card" key={element.id}>
                <h1 className="heading" style={{ fontWeight: "300" }}>
                  {element.number}
                </h1>
                <p>{element.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhoAreWe;
