import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import RepoWalker from "./RepoWalker";




function MiComponente()
{
  let location = useLocation();
  return <RepoWalker />;
}

function App()
{
  return (
    <Router>
      <MiComponente />
    </Router>
  );
}

export default App;