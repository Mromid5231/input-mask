import { useState } from "react";
import Input from "./Components/Input";
import cityData from "./constants/cities.json";
function App() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };
  const filtered =
    value.length > 0 ? cityData.filter((city) => city.startsWith(value)) : [];
  const hint = value.length > 0 ? filtered.find((city) => city !== value) : "";

  return (
    <div>
      <h1 className="text-center bg-[#EF4056] text-white py-2 font-medium">
        Abbas Taheri | BotoStart
      </h1>
      <Input handleChange={handleChange} value={value} hint={hint} />
      {filtered.length > 0 && (
        <ul className="w-[250px] m-auto mt-2 mb-15 border rounded shadow-2xl bg-[#EF4056] z-10 relative">
          {filtered.map((city) => (
            <li
              key={city}
              className="px-3 py-1 text-sm bg-white mx-4 my-2 rounded text-gray-900 font-medium"
            >
              {city}
            </li>
          ))}
        </ul>
      )}
      <p className="bg-[#EF4056] mt-2 py-2 text-center text-white fixed w-full bottom-0 font-medium z-10"> Designed with ❤️</p>
    </div>
  );
}

export default App;
