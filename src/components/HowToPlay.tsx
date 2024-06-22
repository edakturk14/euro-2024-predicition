export function HowToPlay() {

    return (
        <div className="mx-8 lg:mx-60 text-left font-body text-lime text-center">
            <h2 className="text-4xl font-bold mt-10">How to Play</h2>
            <ul className="mt-4">
                <li className="mb-4">
                    <span className="font-bold text-xl">1. Connect Wallet</span>
                    <p className="text-sm text-gray-500 mt-1 text-electricBlue">Use your preferred wallet to connect to our platform securely.</p>
                </li>
                <li className="mb-4">
                    <span className="font-bold text-xl">2. Select Your Team</span>
                    <p className="text-sm text-gray-500 mt-1 text-electricBlue">Browse through the list of teams and pick the one you think will win.</p>
                </li>
                <li className="mb-4">
                    <span className="font-bold text-xl">3. Place Your Bet</span>
                    <p className="text-sm text-gray-500 mt-1 text-electricBlue">Enter the amount you wish to bet and confirm your transaction.</p>
                </li>
                <li className="mb-4">
                    <span className="font-bold text-xl">4. Watch the Tournament</span>
                    <p className="text-sm text-gray-500 mt-1 text-electricBlue">Follow the tournament live to see how your team performs.</p>
                </li>
                <li className="mb-4">
                    <span className="font-bold text-xl">5. Claim Your Rewards!</span>
                    <p className="text-sm text-gray-500 mt-1 text-electricBlue">If your team wins, claim your rewards directly to your wallet.</p>
                </li>
            </ul>
        </div>
    );
}

export default HowToPlay;
