// src/pages/QuoteCreationPage.js
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const uploadMedia = async (file: any) => {
  const formData = new FormData();
  formData.append('file', file);
  const {data} = await axios.post('https://crafto.app/crafto/v1.0/media/assignment/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data.length ? data[0].url : ''
};

const createQuote = async (quoteText : string, mediaUrl: string) => {
    const token = localStorage.getItem('LoginAuthToken')
    const {data} = await axios.post('https://assignment.stage.crafto.app/postQuote', { text: quoteText, mediaUrl }, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
  });
  return data
};

const QuoteCreationPage = () => {
  const [quoteText, setQuoteText] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e: any) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (image) {
      const  mediaUrl  = await uploadMedia(image) || '';
      await createQuote(quoteText, mediaUrl);
      navigate('/quotes');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Create a New Quote</h2>
        <textarea
          placeholder="Enter quote text"
          value={quoteText}
          onChange={(e) => setQuoteText(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full h-32"
        />
        <input
          type="file"
          accept="image/png, image/gif, image/jpeg"
          onChange={handleImageChange}
          className="mb-4 w-full"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white rounded-lg py-2 mb-4 w-full"
        >
          Submit
        </button>
        <Link
          to='/quotes'
          className="bg-blue-500 text-white rounded-lg py-2 w-full block text-center"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default QuoteCreationPage;
