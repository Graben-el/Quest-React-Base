import './App.css';
import ColoredText from './componentes/ColoredText'
import { getLabel, Button } from './componentes/Button';


function App() {
  return (
    <>
      {/* lancei uma firula no texto colorido kkkk só de zoa pra testar */}
      <ColoredText textColor='#fff' textCase='uppercase' bgColor='coral' weight='900'/>
      <Button label='DEV EM DOBRO' getLabel={getLabel}/>
    </>
  );
}

export default App;
