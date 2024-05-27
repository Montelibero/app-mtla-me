const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "";

if (false && isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix,
  basePath,
  ...(isGithubActions && { output: "export" }),
  babel: {
    plugins: [
      [
        "effector/babel-plugin",
        {
          factories: [
            "effector-forms"
          ]
        }
      ]
    ]
  }
};

module.exports = nextConfig;
