## Simple script for microservices architecture projects, to make all the repositories up to date with the main/master branch



## Prerequisites

OS: MacOS or Linux


[NodeJS](https://nodejs.org/en/download/package-manager)

[Git](https://git-scm.com/downloads)
<br />

### Step 1 - Open up a Terminal and clone & install this project

```sh
cd $HOME && git clone https://github.com/razvanvancea/cli-git-pull-microservices && cd $HOME/cli-git-pull-microservices && npm install
```

### Step 2 - Edit the src/script.ts file - line number 11: replace the projectConfig object with your configuration

a. projectConfig.basePath should be the folder that includes all the git microservice repositories

b. projectConfig.repositories should be an array with the name of repositories that you want to pull

c. projectConfig.branch should be the default branch: main or master

### Step 3 - Create a script alias

use a text editor to open your ~/.bashrc / ~/.zshrc / ~/.bash_profile (depending on your setup)

```sh
vim ~/.bashrc
```

Add a new alias, as it follows (feel free to replace 'pullservices' with other project name, e.g. pullfacebook)

```
alias pullservices="cd $HOME/cli-git-pull-microservices && npm run pullservices && cd -"
```

### Step 4 - source the file

```
source ~/.bashrc
```

### Done. :100: Open up the terminal and type the alias that you set in the 3rd step

```
pullservices
```

<br />

<b> THANK YOU <b/> for using this project. Feel free to share/contribute to it.

