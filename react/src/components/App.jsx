import { useEffect, useState } from 'react';
import { useRef } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  let timer = useRef(null);

  async function fetchData() {
    try {
      const res = await fetch(`https://dummyjson.com/users/search?q=${query}`);
      const data = await res.json();
      setUsers(data?.users || []);
    } catch (error) {
      console.log(error);
    }
  }

  function debounce(fn, delay) {
    return () => {
      if (timer.current) clearTimeout(timer.current);

      timer.current = setTimeout(() => {
        fn();
      }, delay);
    };
  }

  const debouncedFetch = debounce(fetchData, 2000);

  useEffect(() => {
    debouncedFetch();
  }, [query]);

  return (
    <>
      <div>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {users.map((user, indx) => (
          <div key={indx}>{user.firstName + user.lastName}</div>
        ))}
      </div>
    </>
  );
}

export default App;
