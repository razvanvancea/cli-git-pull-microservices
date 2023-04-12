## Simple script for microservices architecture projects, to make all the repositories up to date with main branch

<span align="center">

## Prerequisites

OS: MacOS or Linux

Python preinstalled

<br />

### Step 1 - Open up a Terminal and clone this repository
```sh
cd $HOME && git clone https://github.com/razvanvancea/cli-git-pull-microservices && cd $HOME/cli-git-pull-microservices
```

### Step 2 - Edit git_pull.py file according to your needs: 

a. Project root name (the folder that includes all the git repositories)

b. repositories list 

c. default branch: main or master

### Step 3 - Create a script alias
use a text editor to open your ~/.bashrc / ~/.zshrc / ~/.bash_profile (depending on your setup)

```sh
vim ~/.bashrc
```

Add a new alias, as it follows (feel free to replace 'pullqa' with other name)
```
alias pullqa="python3 $HOME/cli-git-pull-microservices/git_pull.py"
```

### Step 4 - source the file
```
source ~/.bashrc
```

### Done. :100: Simply open up the terminal and type the alias that you set in the 3rd step
```
pullqa
```

<br />



<b> THANK YOU <b/> for using this project. Feel free to share/contribute to it.
</span>
