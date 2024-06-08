import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="display-4">Praktikum 10 Belajar React.js</h1>
        <h2 className="h2">Memahami Dasar-dasar React dengan Praktikum</h2>
        <p className="lead">
          Edit <code>src/App.js</code> dan simpan untuk melihat perubahan.
        </p>
        <a
          className="btn btn-primary btn-lg"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pelajari React
        </a>
      </header>
      <main className="container mt-5">
        <section className="row">
          <div className="col-md-6">
            <h3>Apa itu React?</h3>
            <p>
              React adalah library JavaScript untuk membangun antarmuka pengguna. 
              React dikembangkan oleh Facebook dan digunakan dalam berbagai aplikasi besar.
            </p>
          </div>
          <div className="col-md-6">
            <img src="https://ruaxetudong.org/wp-content/uploads/2021/06/cac-doanh-nghiep-co-nen-su-dung-react-JS-khong.jpg" className="img-fluid" alt="Placeholder" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
