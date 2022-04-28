## About

Firebase Cloud Functions to handle super users. The functions in this repository will be pushed to firebase so they can be run in escalated privilidges.

## Project Setup

1. Download & Install [LTS NodeJS](https://nodejs.org/en/download/)
2. Download this repository and open a terminal in its directory.
3. Change directory into the functions folder: `cd functions`
4. Install all the dependencies: `npm ci`
5. Use the following commands to deploy the functions to firebase: `npm deploy`

## IDE Setup

Visual Studio Code is required to contribute to this project for maintainability reasons.

1. Download & Install [Visual Studio Code](https://code.visualstudio.com/download)
2. You will need to install some extensions.
#### Recommnded
```bash
Auto Rename Tag     # Rename closing html tags when the opening tag is changed
Better Comments     # Highlight important code comments
Color Highlight     # Highlight hex color values
GitLens             # Git information
indent-rainbow      # Indentation visualized
TabOut              # Tab out of code blocks
Todo Tree           # Creates a todo tree structure from code comments
```

## Git
1. This repository merges all code to the main branch so no special instructions are required.
2. Anytime you start work on a new feature, create a feature branch with **main** as the base.
3. Similarly, any fixes to the production version should be done after creating a hotfix branch with **main** as the base.
  
## Additional Documentation
This repository uses NodeJS with typescript.

1. [Cloud Functions Tutorial](https://www.youtube.com/watch?v=udHm7I_OvJs&list=PL4cUxeGkcC9i_aLkr62adUTJi53y7OjOf&ab_channel=TheNetNinja)
3. [Typescript basics](https://www.youtube.com/watch?v=ahCwqrYpIuM&ab_channel=Fireship)
4. [Cloud Functions Docs](https://firebase.google.com/docs/functions)
