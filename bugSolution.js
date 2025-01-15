```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly using setCount to update state
    setCount(count => count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```