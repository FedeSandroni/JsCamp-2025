export function Pagination({ pagination, setPagination }) {
  const goToPage = (page) =>
    setPagination({
      currentPage: Math.min(Math.max(1, page), pagination.totalPages),
      totalPages: pagination.totalPages,
    });

  const goToNextPage = () => goToPage(pagination.currentPage + 1);
  const goToPreviousPage = () => goToPage(pagination.currentPage - 1);

  return (
    <nav className="pagination">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          goToPreviousPage();
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </a>

      {Array.from({ length: pagination.totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <a
            key={page}
            href="#"
            className={page === pagination.currentPage ? "is-active" : ""}
            onClick={(e) => {
              e.preventDefault();
              goToPage(page);
            }}
          >
            {page}
          </a>
        );
      })}

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          goToNextPage();
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </a>
    </nav>
  );
}
