1. Download compiled JS/CSS

- Include boostrap.css & bootstrap.js (or choose to load smaller components like bootstrap.bundle.js)
- Then it will already include full functionality (e.g. the font will be changed)

2. Source files

- Includes SASS ability

3. CDN (Preferred)

- include these in the HTML <head>:
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

- And in <body>:
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

4. npm (Preferred)
   > npm install bootstrap

- For Popper:

  > npm install @popperjs/core --save

- link the css and js in the HTML file manually:
<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css"/>
<script src="node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
