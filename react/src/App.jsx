import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { debounce } from './debounce';

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');

  const callBackFetch = useCallback(
    async function fetchData() {
      try {
        const res = await fetch(
          `https://dummyjson.com/users/search?q=${query}`
        );
        const data = await res.json();
        setUsers(data?.users || []);
      } catch (error) {
        console.log(error);
      }
    },
    [query]
  );

  const callBackDebounce = useCallback(
    () => debounce(callBackFetch, 2000),
    [callBackFetch]
  );

  const debouncedFetch = callBackDebounce();

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
        {users.map((user) => (
          <div>{user.firstName + user.lastName}</div>
        ))}
      </div>
    </>
  );
}

export default App;
