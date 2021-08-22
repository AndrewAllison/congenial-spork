module.exports = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    'next',
    'next-major',
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true }
  ],
  plugins: [
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        "assets": ["package.json", "package-lock.json", "CHANGELOG.md"],
        "message": "release(version): Release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    "@semantic-release/github",
    "@semantic-release/commit-analyzer",
    {
      "releaseRules": [
        {
          "type": "build",
          "release": "patch"
        },
        {
          "type": "ci",
          "release": "patch"
        },
        {
          "type": "chore",
          "release": "patch"
        },
        {
          "type": "docs",
          "release": "patch"
        },
        {
          "type": "refactor",
          "release": "patch"
        },
        {
          "type": "style",
          "release": "patch"
        },
        {
          "type": "test",
          "release": "patch"
        }
      ]
    }
  ],
  ]
};
