import React, { useState } from 'react';

const Journal = () => {
    const [entries, setEntries] = useState([]);
    const [currentEntry, setCurrentEntry] = useState('');

    const saveCurrentEntry = () => {
        setEntries([...entries, currentEntry]);
        setCurrentEntry('');
    };

    return (
        <div>
            <h1>Your Journal</h1>
            <textarea
            rows={10}
            cols={50}
            value={currentEntry}
            onChange={(e) => setCurrentEntry(e.target.value)}
            placeholder="Write your thoughts here...">
            </textarea>

            <br />
            <button onClick={saveCurrentEntry}>Save Entry</button>

            <div>
                <h2>Past Entries</h2>
                <ul>
                    {entries.map((entry, index) => (
                        <li key={index}>{entry}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Journal;
