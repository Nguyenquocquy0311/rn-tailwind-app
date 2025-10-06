export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feature', // New feature
        'fix', // Bug fixes
        'hotfix', // Hotfix for production
        'docs', // Documentation changes
        'style', // Style changes
        'refactor', // Code refactoring
        'perf', // Performance improvements
        'test', // Test changes
        'chore', // Chore changes
        'revert', // Revert to previous commit
        'build', // Build changes
        'ci', // CI/CD changes
      ],
    ],
    'subject-case': [0],
  },
};
