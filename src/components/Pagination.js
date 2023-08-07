export default function Pagination({ setPage, page }) {
  return (
    <div class="col-span-1 md:col-span-2 2xl:col-span-3   flex space-x-5 justify-center mt-12">
      <button
        className="border-2 border-black rounded-lg p-4 text-lg disabled:cursor-pointer disabled:bg-foreground disabled:text-background"
        onClick={() => {
          setPage(0);
        }}
        disabled={page === 0}
      >
        1
      </button>
      <button
        className="border-2 border-black rounded-lg text-lg p-4 disabled:cursor-pointer disabled:bg-foreground disabled:text-background"
        onClick={() => {
          setPage(1);
        }}
        disabled={page === 1}
      >
        2
      </button>
      <button
        className="border-2 border-black rounded-lg text-lg p-4 disabled:cursor-pointer disabled:bg-foreground disabled:text-background"
        onClick={() => {
          setPage(2);
        }}
        disabled={page === 2}
      >
        3
      </button>
      <button
        className="border-2 border-black rounded-lg p-4 text-lg disabled:cursor-pointer disabled:bg-foreground disabled:text-background"
        onClick={() => {
          setPage(3);
        }}
        disabled={page === 3}
      >
        4
      </button>
    </div>
  );
}
