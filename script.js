document.getElementById('teamSwitchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form inputs
    const username = document.getElementById('username').value.trim();
    const teamName = document.getElementById('teamName').value.trim();
    const gameId = document.getElementById('gameId').value.trim();
    const messageDiv = document.getElementById('message');

    // Reset message
    messageDiv.style.display = 'none';
    messageDiv.className = 'message';

    // Basic client-side validation
    if (!username || !teamName || !gameId) {
        showMessage('Please fill in all fields.', 'error');
        return;
    }

    // Simulate team-switching logic (replace with actual API call)
    simulateTeamSwitch(username, teamName, gameId)
        .then(response => {
            showMessage(response.message, 'success');
        })
        .catch(error => {
            showMessage(error.message, 'error');
        });
});

// Function to display messages
function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
}

// Simulate team-switching logic (for testing purposes)
function simulateTeamSwitch(username, teamName, gameId) {
    return new Promise((resolve, reject) => {
        // Simulated checks (replace with actual Roblox API calls)
        const validUsernames = ['testuser1', 'testuser2']; // Mock valid usernames
        const validTeams = ['Red', 'Blue', 'Green']; // Mock valid teams
        const validGames = ['123456', 'TestGame']; // Mock valid PlaceIds or game names

        if (!validUsernames.includes(username.toLowerCase())) {
            reject(new Error('Player not found'));
        } else if (!validTeams.includes(teamName)) {
            reject(new Error('Team not found'));
        } else if (!validGames.includes(gameId)) {
            reject(new Error('Game not found'));
        } else {
            // Simulate checking if player is in-game
            const isInGame = Math.random() > 0.3; // 70% chance player is "in-game"
            if (!isInGame) {
                reject(new Error('Player not in-game'));
            } else {
                // Placeholder for actual team-switching logic
                // In a real implementation, send a request to your backend or Roblox Open Cloud API
                resolve({ message: `Successfully switched ${username} to team ${teamName} in game ${gameId}` });
            }
        }
    });
}

// Placeholder for actual backend integration
function switchTeamInGame(username, teamName, gameId) {
    // Example: Send a POST request to your backend or Roblox Open Cloud API
    /*
    return fetch('https://your-backend-api.com/switch-team', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({ username, teamName, gameId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            return { message: `Successfully switched ${username} to team ${teamName} in game ${gameId}` };
        } else {
            throw new Error(data.error || 'Failed to switch team');
        }
    })
    .catch(error => {
        throw new Error('Server error: ' + error.message);
    });
    */
}
