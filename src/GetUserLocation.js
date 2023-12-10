import { useEffect } from "react";
export default function GetUserLocation({ setUserLocation }) {
  useEffect(() => {
    // Function to get user's location
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            // Get latitude and longitude from the position object
            const { latitude, longitude } = position.coords;

            // Call the reverse geocoding API to get the city name
            const apiKey = "32ab4ed9eee942568809751462399d65";
            const reverseGeocodingApi = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

            try {
              const response = await fetch(reverseGeocodingApi);
              const data = await response.json();
              // console.log(data);

              // Extract the city name from the response
              const cityName =
                data.results[0]?.components.city ||
                data.results[0]?.components.town ||
                data.results[0]?.components.state;

              setUserLocation(cityName || "");
            } catch (error) {
              console.error("Error fetching location:", error);
              setUserLocation("Unknown");
            }
          },
          (error) => {
            console.error("Error getting location:", error);
            setUserLocation("Unknown");
          }
        );
      } else {
        console.error("Geolocation is not supported by your browser");
        setUserLocation("Unknown");
      }
    };

    // Call the function to get user's location when the component mounts
    getUserLocation();
  }, [setUserLocation]);
}
