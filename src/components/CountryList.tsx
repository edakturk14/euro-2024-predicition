import { useState } from 'react';

interface Team {
    name: string;
    code: string;
}

const teams: Team[] = [
    { name: "Austria", code: "AT" },
    { name: "Belgium", code: "BE" },
    { name: "Croatia", code: "HR" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Denmark", code: "DK" },
    { name: "England", code: "GB-ENG" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "Hungary", code: "HU" },
    { name: "Italy", code: "IT" },
    { name: "Netherlands", code: "NL" },
    { name: "North Macedonia", code: "MK" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Russia", code: "RU" },
    { name: "Scotland", code: "GB-SCT" },
    { name: "Slovakia", code: "SK" },
    { name: "Spain", code: "ES" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Turkey", code: "TR" },
    { name: "Ukraine", code: "UA" },
    { name: "Wales", code: "GB-WLS" },
];

export function CountryList() {
    const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

    const handleButtonClick = (team: Team) => {
        setSelectedTeam(team);
    };

    const closePopup = () => {
        setSelectedTeam(null);
    };

    return (
        <div className="mx-8 lg:mx-60 text-center mt-3 font-body">
            <h1 className="text-4xl font-bold mb-6 mt-8 text-lime">Who will win Euro 2024?</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 justify-items-center">
                {teams.map((team, index) => (
                    <button
                        key={index}
                        onClick={() => handleButtonClick(team)}
                        className="relative flex items-center justify-center w-44 h-44 m-4 rounded-full overflow-hidden"
                    >
                        <img
                            src={`https://countryflagsapi.netlify.app/flag/${team.code}.svg`}
                            alt={`${team.name} flag`}
                            className="object-cover w-full h-full"
                        />
                    </button>
                ))}
            </div>
            {selectedTeam && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded shadow-lg text-center">
                        <h2 className="text-2xl font-bold mb-4">{selectedTeam.name}</h2>
                        <button
                            onClick={closePopup}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CountryList;
