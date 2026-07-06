import { defineThemeConfig } from '@utils/defineThemeConfig'
import logoImage from '@assets/img/logo.png'

export default defineThemeConfig({
  name: 'Flint Hills Tenants United',
  id: 'flint-hills-tenants-united',
  seo: {
    title: 'Flint Hills Tenants United',
    subtitle: 'Neighbors organizing for safe, affordable, dignified housing',
    description:
      'Flint Hills Tenants United is a tenant-led union in Manhattan and the Flint Hills of Kansas, organizing renters to win safe, affordable, and dignified housing.',
    image: logoImage,
  },
  logo: logoImage,
  colors: {
    primary: '#3a8069',
    secondary: '#33596f',
    neutral: '#ffffff',
    outline: '#33596f',
  },
  navigation: {
    // Single-page design with no navigation bar (see Header.astro)
    darkmode: false,
    items: [],
  },
  socials: [],
})
