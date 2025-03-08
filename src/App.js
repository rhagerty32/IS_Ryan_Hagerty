import './App.css';
import { Header } from './Header';
import { useEffect, useState } from 'react';
import { TeamCard } from './TeamCard';

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
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
            }}>
                {teams.length > 0 ? (
                    teams.map((team, index) => <TeamCard key={index} team={team} />)
                ) : (
                    <p>Loading teams...</p>
                )}
            </div>
        </div>
    );
}

export default App;
