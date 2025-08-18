import { Banner, CardDealer, InvasiveViewers } from './components'
import './App.css'
import { ContextsProvider } from './context';


function App() {
  return <ContextsProvider>
    <div className='app-layout'>
      <InvasiveViewers/>
      <Banner/>
      <CardDealer/>
      <Banner/>
    </div>
  </ContextsProvider>;
}

export default App
