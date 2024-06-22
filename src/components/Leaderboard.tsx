export function Leaderboard() {
    const players = [
        { name: 'Player1', status: 'Active' },
        { name: 'Player2', status: 'Eliminated' },
        { name: 'Player3', status: 'Active' },
        // Add more players as needed
    ];

    return (
        <div className="mx-8 lg:mx-60 text-left font-body text-lime text-center">
            <h2 className="text-xl font-bold mt-10">Leaderboard</h2>
            <div className="overflow-x-auto w-full mt-4 flex justify-center">
                <table className="table w-full max-w-2xl bg-black shadow-lg rounded-lg">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b-2 text-white">Username</th>
                            <th className="px-4 py-2 border-b-2 text-white">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, index) => (
                            <tr key={index}>
                                <td className={`px-4 py-2 ${player.status === 'Eliminated' ? 'line-through' : ''}`}>{player.name}</td>
                                <td className={`px-4 py-2 ${player.status === 'Eliminated' ? 'text-red-500' : 'text-green-500'}`}>{player.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Leaderboard;
