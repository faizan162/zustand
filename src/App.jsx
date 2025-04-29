import useStore from "./store/store";

function App() {
  const { count, increment, decrement, reset } = useStore();
  return (
    <div className="w-full h-[100vh] bg-black/80 text-white flex items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold">Count: {count}</h1>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <button
              className="border border-white rounded-sm w-11 bg-white text-black text-2xl cursor-pointer"
              onClick={increment}
            >
              +
            </button>
            <button
              className="border border-white rounded-sm w-11 bg-white text-black text-2xl cursor-pointer"
              onClick={decrement}
            >
              -
            </button>
          </div>
          <button
            className="border border-white rounded-sm w-24 bg-white text-black text-2xl cursor-pointer"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
