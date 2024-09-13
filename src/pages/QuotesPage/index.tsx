// src/pages/QuoteListPage.js
import axios from "axios";
import Pagination from "components/Pagination";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const fetchQuotes = async (page: any) => {
  const token = localStorage.getItem("LoginAuthToken");
  try {
    const { data } = await axios.get(
      `https://assignment.stage.crafto.app/getQuotes?limit=20&offset=${page}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return data.data;
  } catch (e) {
    localStorage.removeItem("LoginAuthToken");
  }
};

const QuoteListPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setQuotes([]);
  };

  useEffect(() => {
    const loadQuotes = async () => {
      const data = await fetchQuotes(offset);
      if (data?.length === 0) {
        setHasMore(false);
      } else if (data?.length < 20) {
        setQuotes(data);
        setHasMore(false);
      } else {
        setQuotes(data);
      }
    };
    loadQuotes();
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {quotes?.map((quote: any) => (
          <div key={quote.id} className="bg-white p-4 rounded-lg shadow-md">
            <div
              className="relative bg-cover bg-center h-48 md:h-56 lg:h-64 rounded-lg"
              style={{ backgroundImage: `url(${quote.mediaUrl})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-sm md:text-lg font-semibold p-2 md:p-4">
                {quote.text}
              </div>
            </div>
            <div className="mt-2 text-gray-600 text-xs sm:text-sm">
              <p>{quote.username}</p>
              <p>{new Date(quote.updatedAt).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={page}
        offset={offset}
        setOffset={setOffset}
        onPageChange={handlePageChange}
        hasMoreData={hasMore}
        setHasMoreData={setHasMore}
      />
      <Link to="/create-quote">
        <button className="fixed bottom-8 right-8 bg-blue-500 text-white rounded-full p-4 shadow-lg text-xl">
          +
        </button>
      </Link>
    </div>
  );
};

export default QuoteListPage;
