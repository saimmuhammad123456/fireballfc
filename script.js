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

    const responses = JSON.parse(localStorage.getItem('responses')) || [];

    function getTodayDayName() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        return daysOfWeek[today.getDay()];
    }

    dayDisplay.textContent = getTodayDayName();

    function updateResponsesList() {
        responsesList.innerHTML = '';
        responses.forEach(response => {
            const listItem = document.createElement('li');
            listItem.textContent = response;
            responsesList.appendChild(listItem);
        });
    }

    function disableButtons() {
        acceptButton.disabled = true;
        declineButton.disabled = true;
    }

    function enableButtons() {
        acceptButton.disabled = false;
        declineButton.disabled = false;
    }

    submitButton.addEventListener('click', function() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (password === correctPassword) {
            loginScreen.style.display = 'none';
            contentScreen.style.display = 'block';
            updateResponsesList();

            // Check if user has already responded
            if (responses.some(response => response.includes(username))) {
                disableButtons();
            } else {
                enableButtons();
            }
        } else {
            errorMessage.textContent = 'Incorrect password. Please try again.';
        }
    });

    acceptButton.addEventListener('click', function() {
        const username = usernameInput.value;
        responses.push(`${username} accepted the invitation.`);
        localStorage.setItem('responses', JSON.stringify(responses));
        updateResponsesList();
        disableButtons();
    });

    declineButton.addEventListener('click', function() {
        const username = usernameInput.value;
        responses.push(`${username} declined the invitation.`);
        localStorage.setItem('responses', JSON.stringify(responses));
        updateResponsesList();
        disableButtons();
    });

    logoutButton.addEventListener('click', function() {
        loginScreen.style.display = 'block';
        contentScreen.style.display = 'none';
        usernameInput.value = '';
        passwordInput.value = '';
        errorMessage.textContent = '';
    });
});
