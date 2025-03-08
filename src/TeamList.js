import { TeamCard } from "./TeamCard"

export const TeamList = ({ teams }) => {
    return (
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
    )
}