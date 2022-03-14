1. Download compiled JS/CSS

- Include boostrap.css & bootstrap.js (or choose to load smaller components like bootstrap.bundle.js)
- Then it will already include full functionality (e.g. the font will be changed)

2. CDN

- include these in the HTML <head>:
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

- And in <body>:
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

3. npm
   > npm install bootstrap

- For Popper:

  > npm install @popperjs/core --save

- link the css and js in the HTML file manually:
<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css"/>
<script src="node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
