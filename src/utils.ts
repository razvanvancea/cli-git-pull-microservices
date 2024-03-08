import { RequiredDetails } from "./types";
const { exec } = require("child_process");

export function performGitPull(projectConfig: RequiredDetails) {
  const git: string = ` && git checkout ${projectConfig.branch} && git pull && git checkout -`;

  if (projectConfig.basePath.endsWith("/")) {
    projectConfig.repositories.forEach((repo) => {
      exec(
        `cd ${projectConfig.basePath}${repo}${git}`,
        (error: any, stdout: any, stderr: any) => {
          console.log(`===== ${repo} =====`);
          if (error) {
            console.log(`error: ${error.message}`);
            return;
          }
          if (stderr) {
            console.log(`stderr: ${stderr}`);
            // return;
          }
          console.log(`${stdout}`);
        },
      );
    });
  } else
    throw new Error(
      '!!!!! projectConfig.basePath should end with "/" sign !!!!!',
    );
}
