import classes from "./style/app.module.css"
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return (
          <div className={classes.App}>
              {/*Обертка всего приложения APP, далее разделы приложения header, main(основной контент), header*/}
              <Header/>
              <Main/>
              <Footer/>
          </div>

  );
}

export default App;
