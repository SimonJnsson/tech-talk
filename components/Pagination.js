function Pagination({ currentPage, totalPages, onChange }) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex justify-center items-center my-8">
      <button
        className={`rounded-full text-gray-400 text-lg px-4 py-2 mr-2 ${
          isFirstPage ? 'bg-gray-200 cursor-not-allowed' : 'bg-white hover:bg-gray-100'
        }`}
        onClick={() => !isFirstPage && onChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        ⬅️ Prev
      </button>
      <div className="text-gray-700 font-semibold text-lg mx-4">
        Page {currentPage} of {totalPages}
      </div>
      <button
        className={`rounded-full text-gray-400 text-lg px-4 py-2 ml-2 ${
          isLastPage ? 'bg-gray-200 cursor-not-allowed' : 'bg-white hover:bg-gray-100'
        }`}
        onClick={() => !isLastPage && onChange(currentPage + 1)}
        disabled={isLastPage}
      >
        Next ➡️
      </button>
    </div>
  );
}

export default Pagination;
