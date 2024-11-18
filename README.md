# Welcome to the Devoteam Employee Management System (DEMS)

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)

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
- **Loading and Error Handling**: Displays loading overlays and error messages for a smooth user experience.
- **Admin Controls**: Admin users can edit employee information and manage employee records.

---

## Technologies Used

- **Ant Design**: A React UI framework.
- **Styled Components**: For styling the app components with CSS-in-JS.
- **Context API**: For managing global state (authentication, user info).
- **JSON Server**: A simple way to set up a mock API based on a JSON file.
- **React Query**: A state management system with built-in caching and automatic loading and error states.
- **Styled Components**: To implement CSS-in-JS with styled-components.
- **i18n**: An internationalization-framework for easy localization.
- **SheetDB**: A simple sheet database to manage translations.

---

## Installation

### What do I need to do in order to see the EMS? ✏️

Glad you asked!
First you have to clone the project and then follow the instructions below

1. Clone the repository

```bash
git clone git@github.com:Minnia/devoteam-ems.git
```

2. Run `npm i` or `npm install` in your terminal
3. Make sure you have the latest translations by running the script `npm run fetchTranslations`
4. Open a second terminal and run the script `npm run server` (or if you'd rather run the whole script,
   `json-server --watch employees.json`)
5. In the first terminal, run `npm run start` to get the EMS up and going

### ❗️ Running JSON server❗️

JSON server defaults to port 3000. If you want to run the server on a different port you need to specify this by adding it

```
json-server --watch employees.json --port 5000
```

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
