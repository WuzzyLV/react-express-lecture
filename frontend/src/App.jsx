import { MessageBoard } from './components/MessageBoard';
import { TextField } from './components/TextField';

const App = () => {
  return (
    <div className='container mx-auto '>
      <TextField />
      <MessageBoard />
    </div>
  );
};

export default App;
