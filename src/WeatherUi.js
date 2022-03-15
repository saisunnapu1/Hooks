import "./WeatherUi";
function WeatherUi({ data }) {
  return (
    <div className="container inner">
      <h1>{data.name}</h1>
    </div>
  );
}
export default WeatherUi;
