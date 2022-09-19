
const Spinner = () => {
  return (
    <div
      class="spinner-border animate-spin inline-block mt-40 w-20 h-20 border-4 rounded-full text-blue-300"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  );
}

export default Spinner