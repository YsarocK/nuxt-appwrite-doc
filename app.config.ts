export default defineAppConfig({
  docus: {
    title: 'Nuxt Appwrite',
    description: 'A seamless Appwrite integration for Nuxt 3. (unofficial)',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'MouretonEtienne',
      github: 'YsarocK/nuxt-appwrite',
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: true,
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
    }
  }
})
