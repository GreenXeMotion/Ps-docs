export default {
  editLink: {
    text: "Edit this page on GitHub →"
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - The PS Documentation'
    }
  },
  project: {
    link: 'https://github.com/mangorifo/ps-docs/tree/main'
  },
  docsRepositoryBase: 'https://github.com/mangorifo/ps-docs/tree/main',
  titleSuffix: ': The PS Documentation',
  logo: (
    <>
      <span className="text-gray-600 font-normal hidden md:inline">
        Documentation on how to connect to PS
      </span>
    </>
  ),
  head: (
    <>
      <meta property="description" content="anime game company ps stuff and other stuff 🥺🥺🥺🥺" />
      <meta property="theme-color" content="#c7a09d" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </>
  ),
  darkMode: true,
  navigation: {
    prev: true,
    next: true,
  },
  footer: {
    text: <>built with Nextra | made by rrryfoo#8618</>
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'tl', text: 'Filipino/Tagalog' }
  ],
}
