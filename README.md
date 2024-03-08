## Simple script for microservices architecture projects, to make all the repositories up to date with main branch

<span align="center">

## Prerequisites

OS: MacOS or Linux

NodeJS + NPM pre-installed
Git pre-installed
<br />

### Step 1 - Open up a Terminal and clone & install this project

```sh
cd $HOME && git clone https://github.com/razvanvancea/cli-git-pull-microservices && cd $HOME/cli-git-pull-microservices && npm install
```

### Step 2 - Edit the src/script.ts file - line number 11: replace the projectConfig object with your own configuration

a. projectConfig.basePath should be the folder that includes all the git microservice repositories

b. projectConfig.repositories should be an array with the name of repositories that you want to pull

c. projectConfig.branch should be the default branch: main or master

### Step 3 - Create a script alias

use a text editor to open your ~/.bashrc / ~/.zshrc / ~/.bash_profile (depending on your setup)

```sh
vim ~/.bashrc
```

Add a new alias, as it follows (feel free to replace 'pullqa' with other name)

```
alias pullqa="cd $HOME/cli-git-pull-microservices && npm run pullqa && cd -"
```

### Step 4 - source the file

```
source ~/.bashrc
```

### Done. :100: Open up the terminal and type the alias that you set in the 3rd step

```
pullqa
```

<br />

<b> THANK YOU <b/> for using this project. Feel free to share/contribute to it.
</span>
