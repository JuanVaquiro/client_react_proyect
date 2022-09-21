
const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block mt-40 w-20 h-20 border-4 rounded-full text-blue-300"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner