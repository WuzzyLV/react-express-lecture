import { ErrorCard } from "./components/ErrorCard";
import { MessageBoard } from "./components/MessageBoard";
import { TextField } from "./components/TextField";

const App = () => {
  return (
    <div className="max-w-3xl mx-auto px-2">
      <ErrorCard />
      <TextField />
      <MessageBoard />
    </div>
  );
};

export default App;
