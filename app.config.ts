export default defineAppConfig({
  docus: {
    title: 'Nuxt Appwrite',
    description: 'A seamless Appwrite integration for Nuxt 3. (unofficial)',
    image: '/appwrite-cover.png',
    socials: {
      twitter: 'MouretonEtienne',
      github: 'YsarocK/nuxt-appwrite',
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: []
    },
    footer: {
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'IconNuxtLabs'
        }
      ]
    },
    github: {
      owner: 'YsarocK',
      repo: 'nuxt-appwrite-doc',
      branch: 'main',
      edit: true
    },
  }
})
