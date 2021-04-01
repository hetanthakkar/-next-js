// import "../styles/globals.css";

export default function App() {
  return (
    <div className="App">
      <hr />
      <div>
        <div>
          <h4>
            <span style={{ backgroundColor: "#EBEDF0", fontWeight: "bold" }}>
              containerStyle
            </span>
          </h4>
        </div>
        <p>Stylye for the container (optional)</p>
        <div>
          <table>
            <tr>
              <th>Type</th>
              <th>Default</th>
            </tr>
            <tr>
              <td>View style (object) </td>
              <td>Internal Style</td>
            </tr>
          </table>
        </div>
      </div>
      <hr />
    </div>
  );
}
