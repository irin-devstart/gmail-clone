import { useQueryDebounce } from "query-debounce";
import "./App.css";

function App() {
  const { setValues } = useQueryDebounce<{ id: number }>({});
  setValues("id", 2323);
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-blue-500 text-9xl">Hello</h1>
    </div>
  );
}

export default App;
