[![Netlify Status](https://api.netlify.com/api/v1/badges/9527e4dc-1bb2-40ef-b6eb-8515b91579bf/deploy-status)](https://upbeat-agnesi-aad3fb.netlify.com/)

# Table of Contents

1. [Requirements](#Requirements)
2. [Software Used](#Software-used)
3. [Installation](#Installation)
    1. [Local](#Local)
    2. [Docker](#Docker)
    3. [Netlify](#Netlify)

## Requirements

- [X] Create React web app
- [X] It should have fields for giving start date, end date and access token as arguments to the app.
- [X] App should make HTTP GET request to the API to fetch chat counts between those two given dates.
- [X] The dashboard should render three values from the API.
- [X] The dashboard should render a Paginated List.
- [X] Stores `start date`, `end date` and `token` in localStorage so they are already populated if user comes back to app later time.
- [X] Static type checking using Typescript.
- [X] Documentation on how to run and build/install if needed.
- [X] The application running and accessible somewhere (for example in AWS)
- [X] Docker image for running the dashboard in an existing Docker stack.
- [X] Virtualisation of existing data.

## Software used

\# | Software | Reason |
--- | --- | --- |
1 | React | Requirement. |
2 | React Router | To route between different components, a react router is used. |
3 | TypeScript | To make use of static types, I made use of TypeScript |
4 | Bootstrap | To structure the front-end, bootstrap is used. |
5 | Axios | To communicate with external API's, I added Axios. |
6 | FontAwesome | To communicate actions to the user, I have added some relatable icons for actions. |
7 | react-bootstrap-table2-* | To get a paginated table, React Bootstrap Table is used. |
8 | Yarn | To manage dependencies, yarn is used. |
9 | Docker | To run the software containerized in a bigger infrastructure, I have introduced a Dockerfile. <br> To deploy this, scroll down to [Docker](#Docker) and follow these steps.  |
10 | Netlify | To host the SPA, I made use of Netlify so people have easy access to the demo subject. <br> To host a copy of the SPA, I have included directions on how to under [Netlify](#Netlify) |
11 | Nivo | To virtualize data from the API, I have used Nivo. |
12 | MomentJS | To get a correct EEST DateTime for login purposes, I have used MomentJS. |


**NOTE**: The background used for this software is owned by www.univ-cotedazur.fr.
I take no right or ownership to this background, as this piece of software is for personal use only.

## Installation

### Local

#### Available Scripts

In the project directory, you can run:

##### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits, you will also see any lint errors in the console.

##### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed by copying the `/build` folder to a hosting!

### Docker

To deploy this app on a Docker enabled system, you can follow the following steps:

1. Make sure docker is enabled on your system. To install Docker on your machine, you can use the following guides: [Linux Machine (Ubuntu)](https://www.linux.com/tutorials/how-install-and-use-docker-linux/), [Windows 10](https://www.how2shout.com/how-to/how-to-install-docker-on-windows-10.html) or [Mac OSX](https://docs.docker.com/docker-for-mac/install/).
2. Clone this repository with `git clone git@github.com:BlackChaosNL/Demo-App.git`
3. Navigate to this folder, and open up a bash terminal, or windows powershell.
4. Build the image to use later: `docker build . -t jv_dashboard`
5. Start the image with the command: `docker run -p 80:80 -d jv_dashboard`
    1. To change the default port `:80` to a custom one, you can alter the `-p` command to the left side, this exposes your new port to the outside.
6. The application should now be hosted on `localhost:$PORT`. Where the `$PORT` is either `:80` or the custom port given by you.

### Netlify

1. Fork this project to your own GitHub account.
2. Create an account on [Netlify](netlify.com).
3. Click on `New site from Git`.
4. Click on `GitHub` under `Continuous Deploy`.
5. Give Netlify access to your account by accepting the prompt from GitHub.
6. You can now search the repositories you would like deployed. We would like to use `Demo-App`.
7. Set your build options now, and press finish.

You should now be redirected to the dashboard for the Demo-App, your app is now deploying. Here you can find the unique URL where the demo project is hosted, it has the following setup: `https://upbeat-agnesi-aad3fb.netlify.com`.

