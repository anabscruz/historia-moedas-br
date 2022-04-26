import TimeLine from './components/timeline';
import './style/my-sass.sass'

function App() {
  return (
    <div className='container'>
      <div class="row justify-content-md-center">
        <h1>Quantas vezes o Brasil trocou de moeda?</h1>
        <p>
          <b>De nome, foram 9 vezes.</b> Em duas ocasiões, o nome se manteve, 
          mas os centavos deixaram de existir. Em outras seis, cortaram três zeros - 
          e mil unidades antigas passaram a valer uma unidade nova. A excessão aí
          foi o real: CR$ 2.750 passaram a valer R$ 1, para que a moeda entrasse 
          em paridade com o dólar.
        </p>
        <TimeLine />
      </div>
    </div>
  );
}

export default App;
