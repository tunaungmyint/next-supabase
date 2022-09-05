import { useState } from 'react';
import supabase from '../supabaseClient';
import { useRouter } from 'next/router';
const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [rating, setRating] = useState('');
  const [formError, setFormError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !method || !rating) {
      setFormError('Please fill in all the fields correctly.');
      return;
    }

    const { data, error } = await supabase
      .from('smoothies')
      .insert([{ title, method, rating }]);

    if (error) {
      setFormError('Please fill in all the fields correctly.');
    }

    if (data) {
      setFormError(null);
      router.push('/');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="method">Method:</label>
        <textarea
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          value={rating}
          type="number"
          onChange={(e) => setRating(e.target.value)}
        />

        <button>Create Smoothies </button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Create;
