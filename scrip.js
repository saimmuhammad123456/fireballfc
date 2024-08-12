document.addEventListener('DOMContentLoaded', function() {
    const correctPassword = "1805";
    const loginScreen = document.getElementById('login-screen');
    const contentScreen = document.getElementById('content-screen');
    const usernameInput = document.getElementById('username-input');
    const passwordInput = document.getElementById('password-input');
    const submitButton = document.getElementById('submit-button');
    const errorMessage = document.getElementById('error-message');
    const acceptButton = document.getElementById('accept-button');
    const declineButton = document.getElementById('decline-button');
    const logoutButton = document.getElementById('logout-button');
    const responsesList = document.getElementById('responses');
    const dayDisplay = document.getElementById('day-display');

    // Function to get the current day name
    function getTodayDayName() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        return daysOfWeek[today.getDay()];
    }

    // Display today's day name
    dayDisplay.textContent = getTodayDayName();

    // Handle login
    submitButton.addEventListener('click', function() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (password === correctPassword) {
            loginScreen.style.display = 'none';
            contentScreen.style.display = 'block';
        } else {
            errorMessage.textContent = 'Incorrect password. Please try again.';
        }
    });

    // Handle Accept button click
    acceptButton.addEventListener('click', function() {
        const username = usernameInput.value;
        addResponse(`${username} accepted the invitation.`);
    });

    // Handle Decline button click
    declineButton.addEventListener('click', function() {
        const username = usernameInput.value;
        addResponse(`${username} declined the invitation.`);
    });

    // Handle Log Out button click
    logoutButton.addEventListener('click', function() {
        loginScreen.style.display = 'block';
        contentScreen.style.display = 'none';
        usernameInput.value = '';
        passwordInput.value = '';
        responsesList.innerHTML = ''; // Clear responses on logout
    });

    // Function to add a response to the list
    function addResponse(responseText) {
        const listItem = document.createElement('li');
        listItem.textContent = responseText;
        responsesList.appendChild(listItem);
    }
});
