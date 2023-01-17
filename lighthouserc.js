module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'categories:performance': [
          'warn',
          { aggregationMethod: 'optimistic', minScore: 0.93 },
        ],
        'categories:accessibility': [
          'error',
          { aggregationMethod: 'optimistic', minScore: 0.95 },
        ],
      },
    },
  },
};
