const { exec } = require("child_process");
type RequiredDetails = {
  basePath: string;
  repositories: string[];
  branch: "main" | "master";
};

/**
 * @example const projectConfig: RequiredDetails = {
    basePath: "/Users/iamrv/Projects/qa-practice/",
    repositories: ["infra-service","user-service","admin-service"],
    branch: "main"
};
 */
const projectConfig: RequiredDetails = {
  basePath: "/Users/iamrv/Projects/qa-practice/",
  repositories: [
    "infra-service",
    "user-service",
    "admin-service",
    "backend-service",
    "frontend-service"
  ],
  branch: "main",
};

const git: string = ` && git checkout ${projectConfig.branch} && git pull && git checkout -`;

projectConfig.repositories.forEach((repo) => {
  exec(
    `cd ${projectConfig.basePath}${repo}${git}`,
    (error: any, stdout: any, stderr: any) => {
      console.log(`===== ${repo} =====`);
      // if (error) {
      //     console.log(`error: ${error.message}`);
      //     return;
      // }
      // if (stderr) {
      //     console.log(`stderr: ${stderr}`);
      //     return;
      // }
      console.log(`${stdout}`);
    }
  );
});
