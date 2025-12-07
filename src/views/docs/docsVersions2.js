export const versions = {
  
  v2: {
    name: 'v2 (Beta)', 
    status: 'Beta',
    badgeClass: 'bg-warning text-dark',
    description: 'Latest features, under development',
    icon: 'bi-code-slash'
  },
  v1: {
    name: 'v1 / v-0.1.0.alpha1',
    status: 'alpha',
    badgeClass: 'bg-warning',
    description: 'Early development, unstable',
    icon: 'bi-circle'
  },

}

export const availableVersions = Object.keys(versions)