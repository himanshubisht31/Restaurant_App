import "./Display.css";

export default function Restautant({ data, key }) {
  return (
    <div className="MainDiv">
      {data.map((ele) => (
        <div key={ele.id} className="main">
          <div>
            <img src={ele.img} alt="No " />
          </div>
          <div>
            <div>
              Restaurant : <b>{ele.name}</b>
            </div>
            <div>
              Item : <b>{ele.food}</b>
            </div>
            <div>
              Cost :<b>₹{ele.cost}</b> for one
            </div>
            <div>Cash : {ele.cash ? "✅" : "❌"} </div>
            <div>Card : {ele.card ? "✅" : "❌"} </div>
            <div>UPI : {ele.upi ? "✅" : "❌"} </div>
            <div>
              Rating : <b>{ele.rating}</b>⭐
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
