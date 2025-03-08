import './App.css';
import { Header } from './Header';
import { useEffect, useState } from 'react';
import { TeamList } from './TeamList';

function App() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        import('./teams.json')
            .then((data) => setTeams(data.teams))
            .catch((error) => console.error("Error fetching teams:", error));
    }, []);
    return (
        <div className="App">
            <Header />
            <TeamList teams={teams} />
        </div>
    );
}

export default App;
