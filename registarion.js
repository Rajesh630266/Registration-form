<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <style>
        /* Basic styling */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        form {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            width: 300px;
        }
        input[type="text"],
        input[type="email"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin: 5px 0 15px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        input[type="submit"] {
            background-color: #4caf50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            transition: background-color 0.3s ease;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
        .error {
            color: red;
        }
    </style>
</head>
<body>

<form id="registrationForm" action="#" method="post">
    <h2>Registration Form</h2>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    <span id="usernameError" class="error"></span>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <span id="emailError" class="error"></span>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <span id="passwordError" class="error"></span>

    <input type="submit" value="Register">
</form>

<script>
    const form = document.getElementById('registrationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        let isValid = true;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!username.value.trim()) {
            document.getElementById('usernameError').innerText = 'Username is required';
            isValid = false;
        } else {
            document.getElementById('usernameError').innerText = '';
        }

        if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
            document.getElementById('emailError').innerText = 'Valid email is required';
            isValid = false;
        } else {
            document.getElementById('emailError').innerText = '';
        }

        if (!password.value.trim()) {
            document.getElementById('passwordError').innerText = 'Password is required';
            isValid = false;
        } else {
            document.getElementById('passwordError').innerText = '';
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if there are errors
        }
    });
</script>

</body>
</html>
