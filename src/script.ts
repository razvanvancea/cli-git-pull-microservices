import { performGitPull } from "./utils";
import { RequiredDetails } from "./types";

/**
 * @example const projectConfig: RequiredDetails = {
    basePath: "/Users/iamrv/Projects/qa-practice/",
    repositories: ["infra-service","user-service","other-service"],
    branch: "main"
};
 */
const projectConfig: RequiredDetails = {
  basePath: "/Users/iamrv/Projects/qa-practice/", // make sure it ends with "/"
  repositories: [
    "infra-service",
    "user-service",
    "admin-service",
    "backend-service",
    "frontend-service",
  ],
  branch: "main",
};

performGitPull(projectConfig);
