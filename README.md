# React-Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)

## Description

```md
Kevin Rhode's development portfolio.
```

## Technology Stack

![javaScript](https://img.shields.io/badge/-javascript-61DAFB?color=green&style=flat)
![react](https://img.shields.io/badge/-react-61DAFB?color=darkblue&style=flat)
![gh-pages](https://img.shields.io/badge/-gh_pages-61DAFB?color=purple&style=flat)

## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

## Installation

Clone Repo - git clone git@github.com:KevinRhode/react-portfolio.git

````
In Git Terminal - navigate to the file location of package.json
```md
run : npm install
````

## Usage

To start the App Locally

```md
npm run start
```

To build the App

```md
npm run build
```

To deploy by gh-pages, script has been modified to build before deploy

```md
npm run deploy
```

[Application Deployed](https://kevinrhode.github.io/react-portfolio/)  
[Application Repo](https://github.com/KevinRhode/react-portfolio)

## Preview

![About Me](./src/images/kevinrhode.github.io_react-portfolio_.png)
![Projects](./src/images/kevinrhode.github.io_react-portfolio_projects.png)
![Contact](./src/images/kevinrhode.github.io_react-portfolio_aboutme.png)
![Resume](./src/images/kevinrhode.github.io_react-portfolio_resume.png)
