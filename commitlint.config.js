/** Conventional Commits, enforced by the commit-msg hook. */
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Commit messages are written in English; Spanish is for what the user reads.
    "subject-case": [2, "never", ["upper-case", "pascal-case", "start-case"]],
    "body-max-line-length": [1, "always", 100],
  },
};
