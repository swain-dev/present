import './App.css';
import ActionStateHook from './components/hooks/actionState';
import DeferredValueHook from './components/hooks/deferredValue';
import FormStatusHook from './components/hooks/formStatus';
import OptimisticHook from './components/hooks/optimistic';
import TransitionHook from './components/hooks/transition';
import UseHook from './components/hooks/use';

function App() {
  return (
    <div className="App">
      <div className='title'>React 19</div>
      <TransitionHook />
      <ActionStateHook />
      <FormStatusHook />
      <OptimisticHook />
      <DeferredValueHook />
      <UseHook />
    </div>
  );
}

export default App;
