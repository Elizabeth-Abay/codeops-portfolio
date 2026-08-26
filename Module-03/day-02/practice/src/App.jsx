import './App.css'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';

// app
function App(){
  return (
    <section className="mainApp">
      <Header />
      <Main/>
      <Footer/>
    </section>
  )
}

export default App