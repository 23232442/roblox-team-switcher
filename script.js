document.getElementById('teamSwitchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const teamName = document.getElementById('teamName').value.trim();
    const gameId = document.getElementById('gameId').value.trim();
    const messageDiv = document.getElementById('message');

    messageDiv.style.display = 'none';
    messageDiv.className = 'message';

    if (!username || !teamName || !gameId) {
        showMessage('Please fill in all fields.', 'error');
        return;
    }

    simulateTeamSwitch(username, teamName, gameId)
        .then(response => {
            showMessage(response.message, 'success');
        })
        .catch(error => {
            showMessage(error.message, 'error');
        });
});

function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
}

function simulateTeamSwitch(username, teamName, gameId) {
    return new Promise((resolve, reject) => {
        const validUsernames = ['testuser1', 'testuser2'];
        const validTeams = ['Red', 'Blue', 'Green'];
        const validGames = ['123456', 'TestGame'];

        if (!validUsernames.includes(username.toLowerCase())) {
            reject(new Error('Player not found'));
        } else if (!validTeams.includes(teamName)) {
            reject(new Error('Team not found'));
        } else if (!validGames.includes(gameId)) {
            reject(new Error('Game not found'));
        } else {
            const isInGame = Math.random() > 0.3; // 70% chance player is in-game
            if (!isInGame) {
                reject(new Error('Player not in-game'));
            } else {
                resolve({ message: `Successfully switched ${username} to team ${teamName} in game ${gameId}` });
            }
        }
    });
}
