[![Netlify Status](https://api.netlify.com/api/v1/badges/9527e4dc-1bb2-40ef-b6eb-8515b91579bf/deploy-status)](https://upbeat-agnesi-aad3fb.netlify.com/)

## Requirement list

- [X] Create React web app
- [X] It should have fields for giving start date, end date and access token as arguments to the app.
- [X] App should make HTTP GET request to the API to fetch chat counts between those two given dates.
- [X] The dashboard should render three values from the API.
- [X] The dashboard should render a Paginated List.
- [X] Stores start date, end date and token in localStorage so they are already populated if user comes back to app later time.
- [X] Static type checking using Typescript.
- [X] Documentation on how to run and build/install if needed.
- [X] The application running and accessible somewhere (for example in AWS)

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
10 | Netlify | To host the SPA, I made use of Netlify so people have easy access to the demo subject. |


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

The build is minified and the filenames include the hashes. Your app is ready to be deployed by copying these files to a hosting!

### Docker

To deploy this app on a Docker enabled system, you can follow the following steps:

1. Make sure docker is enabled on your system. To install Docker on a few different machines, you can click on: [Linux Machine (Ubuntu)](https://www.linux.com/tutorials/how-install-and-use-docker-linux/), [Windows 10](https://www.how2shout.com/how-to/how-to-install-docker-on-windows-10.html) or [Mac OSX](https://docs.docker.com/docker-for-mac/install/).
2. Clone this repository with `git clone git@github.com:BlackChaosNL/Demo-App.git`
3. Build the image to use later: `docker build . -t _jv_dashboard`
4. Start the image with the command: `docker run _jv_dashboard`
    1. To change the default port `:80`, to a custom one, you can add `-p 3000:80` after the previous command.
5. The application should now be hosted on `localhost:$PORT`. Where the `$PORT` is either `:80` or the custom port given by you.

### Netlify

1. Fork this project to your own GitHub account.
2. Create an account on [Netlify](netlify.com).
3. Click on `New site from Git`.
4. Click on `GitHub` under `Continuous Deploy`.
5. Give Netlify access to your account by accepting the prompt from GitHub.
6. 