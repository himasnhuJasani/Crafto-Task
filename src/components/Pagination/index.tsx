// src/components/Pagination.js
import React from 'react';
interface PaginationProps {
  currentPage: number;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  onPageChange: (page: number) => void;
  setHasMoreData:React.Dispatch<React.SetStateAction<boolean>>;
  hasMoreData: boolean;
}
const Pagination: React.FC<PaginationProps> = ({ currentPage,offset,setOffset, onPageChange, hasMoreData,setHasMoreData }) => {
  const handleNextPageChange = (page: number) => {
    if (page >= 1 && hasMoreData) {
      onPageChange(page);
      setOffset(offset+20)
    }
  };
  const handlePreviousPageChange = (page: number) => {
    if (page >= 1) {
      onPageChange(page);
      setOffset(offset-20)
      setHasMoreData(true)
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => handlePreviousPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`py-2 px-4 mx-1 rounded-lg ${currentPage === 1 ?  'bg-gray-300 text-gray-700': 'bg-blue-500 text-white' }`}
      >
        Previous
      </button>
       <button
          className="py-2 px-4 mx-1 rounded-lg bg-gray-300 text-gray-700"
        >
          {currentPage}
        </button>
     
      <button
        onClick={() => handleNextPageChange(currentPage + 1)}
        disabled={!hasMoreData}
        
        className={`py-2 px-4 mx-1 rounded-lg ${hasMoreData ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
