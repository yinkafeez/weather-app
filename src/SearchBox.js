export default function SearchBox({ cityName, setCityName }) {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <form className="weather-search-box" onSubmit={handleClick}>
      <input
        type="text"
        placeholder="Search for weather by city name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button> Search </button>
    </form>
  );
}
