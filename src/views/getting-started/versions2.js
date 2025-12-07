export const versions = {

  v4: {
    name: 'v4 (RC)',
    status: 'Release Candidate', 
    badgeClass: 'bg-info',
    description: 'Upcoming release, testing phase',
    icon: 'bi-rocket'
  },
  v3: {
    name: 'v3 (RC)',
    status: 'Release Candidate', 
    badgeClass: 'bg-info',
    description: 'Upcoming release, testing phase',
    icon: 'bi-rocket'
  },
  v2: {
    name: 'v2 (Beta)', 
    status: 'Beta',
    badgeClass: 'bg-warning text-dark',
    description: 'Latest features, under development',
    icon: 'bi-code-slash'
  },
  v1: {
    name: 'v1 (Alpha)',
    status: 'alpha',
    badgeClass: 'bg-warning',
    description: 'Early development, unstable',
    icon: 'bi-circle'
  },

}

export const availableVersions = Object.keys(versions)