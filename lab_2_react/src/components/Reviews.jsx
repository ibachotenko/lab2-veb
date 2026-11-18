import { useState, useEffect } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const variant = 5;

    fetch('https://jsonplaceholder.typicode.com/posts/' + variant + '/comments')
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <section className="max-w-4xl mx-auto mt-6 px-4">
      <h2 className="text-2xl font-bold mb-4">Відгуки роботодавців</h2>
      {comments.map(comment => (
        <div key={comment.id} className="bg-white dark:bg-slate-700 p-4 rounded-xl shadow mb-3">
          <h3 className="font-bold">{comment.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">{comment.email}</p>
          <p className="mt-2">{comment.body}</p>
        </div>
      ))}
    </section>
  );
}

export default Reviews;
