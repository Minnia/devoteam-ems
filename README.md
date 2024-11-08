# Welcome to the Devoteam Employee Management System (DEMS)

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Folder Structure](#folder-structure)
7. [Contributing](#contributing)
8. [License](#license)
9. [Acknowledgements](#acknowledgements)

---

### Introduction

#### What is this? 🤔

This is a simple and straight forward EMS, where you can keep track of your employees, or your own information

### Cool, what can I do here? 🤓

That depends on your role in the company. If you're one of our employees, you can see how many people that are hired in the company, as well as your own personal information. You can't change any information, that is the role of an admin.

If you're a manager you can see a list of all employees in the company, but you can't change any information.

If you're an admin you have all the power! Kind of, you are allowed to see all employees and edit (some) of their information.

---

## Features

- **Employee Details**: View detailed information about employees.
- **Edit Employee Details**: Admin users can edit employee information.
- **Responsive Design**: The UI adapts for various screen sizes, including mobile, tablet, and desktop.
- **User Authentication**: Supports user login and logout functionality.
- **Navigation Bar**: Easy-to-use navigation with toggleable menus.
- **Loading and Error Handling**: Displays loading overlays and error messages for a smooth user experience.
- **Admin Controls**: Admin users can edit employee information and manage employee records.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For navigation and handling different views.
- **Ant Design**: A React UI framework for building rich, interactive UIs.
- **Styled Components**: For styling the app components with CSS-in-JS.
- **Context API**: For managing global state (authentication, user info).
- **Axios**: For making API requests (used in data fetching).
- **TypeScript**: For statically typed JavaScript and better tooling support.
- **Styled Components**: To implement CSS-in-JS with styled-components for scoped styling.

---

## Installation

### What do I need to do in order to see the EMS? ✏️

Glad you asked!
First you have to clone the project and then follow the instructions below

1. Clone the repository

```bash
git clone https://github.com/yourusername/employee-management-system.git
```

2. Run `npm i` or `npm install` in your terminal
3. Open a second terminal and run the script `server` (or if you'd rather run the whole script,
   `json-server --watch employees.json`)
4. In the first terminal, run `npm run start` to get the EMS up and going

### Admin login 👩‍💼🧑‍💼

```
admin@gmail.com
password123
```

### Manager login 🦹🦸‍♀️

```
manager@gmail.com
password123
```

### Employee login 🙋‍♀️🙋‍♂️

```
employee@gmail.com
password123
```

### Is there anyone I can talk to at the company if I have any questions?

You can always talk to our trusted company robot in the chat! Quick warning, they are new on the job and are still learning..
