import os
#update 'base_path' with project root folder that contains all the git repositories
base_path= "/Users/razvan_vancea/Projects/QAPractice/"

#update 'repositories' with each repository's folder name
repositories=["automation","users","webapp"]

#update 'branch' with your default branch name: 'main' or 'master'?
branch="main"

git = " && git checkout "+branch+" && git pull && git checkout -"
for repo in repositories:
    print("========== "+repo+" ==========")
    os.system("cd "+base_path+repo+git)
    
