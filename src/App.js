import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header titulo = "Galeria de imagenes con React" />
      <Card titulo = "Martin Pescador" url = "https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg" descripcion = "Ave Nacional"></Card>
      <Card titulo = "Tigre" url = "https://media.istockphoto.com/photos/siberian-tiger-ready-to-attack-looking-at-you-picture-id525523737?k=20&m=525523737&s=612x612&w=0&h=Opk_5oYUFdYcN0Plhi10rCzTT-vOR-hMdYEEr88f1Cg=" descripcion = "Carnivoro"></Card>
      <Card titulo = "Elefante Bebe" url = "https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009__340.jpg" descripcion = "Abrevadero"></Card>
      <Footer/>   
    </div>
  );
}

export default App;
