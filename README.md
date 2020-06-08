# Gatsby build and template for [https://www.wollschlegel.com](https://www.wollschlegel.com).

## Based on

* The ghost gatsby starter: [https://gatsby.ghost.org](https://gatsby.ghost.org)
* London theme: [https://github.com/TryGhost/London](https://github.com/TryGhost/London) 

# Installing

Install dependencies

```bash
npm install
```

&nbsp;

# Running

To run the installation you have to setup a `.ghost.json` file containing the following information or the information from your installation:

```
{
  "development": {
    "apiUrl": "https://gatsby.ghost.io",
    "contentApiKey": "9cc5c67c358edfdd81455149d0"
  },
  "production": {
    "apiUrl": "https://gatsby.ghost.io",
    "contentApiKey": "9cc5c67c358edfdd81455149d0"
  }
}
```

Then start the development server.

```bash
gatsby develop
```

# Copyright & License

Copyright (c) 2013-2019 Ghost Foundation - Released under the [MIT license](LICENSE).
