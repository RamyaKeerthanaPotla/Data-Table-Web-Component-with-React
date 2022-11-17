import './App.css';
import './data-table'

function App() {
  return (
    <div>
      <data-table
                src="https://jsonplaceholder.typicode.com/users"
                cols="id,name,username,email,address,phone"
        ></data-table>
    </div>
  );
}

export default App;
