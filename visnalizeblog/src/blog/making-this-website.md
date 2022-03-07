# How this website is made

## Epilogue

To sum up, all the steps I did to get this site up and running:

- Download and install [Visual Studio Code](https://code.visualstudio.com/)
- Install [VuePress](https://vuepress.vuejs.org) and initiate a project with the following commands:

  ```sh
  npx create-vuepress-site [projectName]
  cd docs
  npm install
  npm run dev
  ```
  
- Customize the project with available configuration options as documented in [VuePress docs](https://vuepress.vuejs.org/theme/default-theme-config.html#homepage).
- Build the source code into static HTML with the command:

  ```sh
  npm run build
  ```

- Finally, deploy the site to a host using [Github Pages](https://pages.github.com)

The source code I made public in [this branch](https://github.com/Visnalize/visnalize.github.io/tree/dev) of the repository, you can explore or dissect however you like.

