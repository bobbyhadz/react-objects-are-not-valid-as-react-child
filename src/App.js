import './App.css';

export default function App() {
  const employees = [
    {id: 1, name: 'Alice', country: 'Austria'},
    {id: 2, name: 'Bobby Hadz', country: 'Belgium'},
    {id: 3, name: 'Carl', country: 'Canada'},
  ];

  const obj = {
    id: 4,
    name: 'Dean',
    country: 'Denmark',
  };

  return (
    <div>
      {/* 👇️ Rendering an array 👇️ */}
      {employees.map((employee, index) => {
        return (
          <div key={index}>
            <h2>name: {employee.name}</h2>
            <h2>country: {employee.country}</h2>

            <hr />
          </div>
        );
      })}

      <hr />
      <hr />
      <hr />

      {/* 👇️ Rendering an object 👇️ */}

      <div>
        <h2>name: {obj.name}</h2>
        <h2>county: {obj.country}</h2>
      </div>

      <hr />
    </div>
  );
}
