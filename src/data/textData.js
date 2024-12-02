export const data = [
  {
    title: 'Structure d’un fichier HTML',
    text: 'Un fichier HTML commence toujours avec une déclaration {0}, suivie des balises {1} qui contiennent tout le contenu de la page.',
    words: ['<!DOCTYPE html>', '<html>', '<head>', '<body>'],
    correctWords: ['<!DOCTYPE html>', '<html>'],
    exampleCode: `
<!DOCTYPE html>
<html>
  <head>
    <title>Page HTML</title>
  </head>
  <body>
    <h1>Bienvenue !</h1>
  </body>
</html>`,
  },
  {
    title: 'Structure HTML',
    text: 'Le code HTML commence toujours par une déclaration appelée {0}, qui indique au navigateur quel type de document lire.',
    words: ['doctype', 'html', 'head', 'body'],
    correctWords: ['doctype'],
    exampleCode: `
<!DOCTYPE html>
<html>
  <head>
    <title>Exemple</title>
  </head>
  <body>
    <p>Ceci est un exemple.</p>
  </body>
</html>`,
  },
  {
    title: 'Type de conteneur',
    text: "L'élément HTML <code class='text-red-500'>&lt;p&gt;</code> sert à créer un {0}. Un paragraphe commence toujours sur une nouvelle ligne, et les navigateurs ajoutent automatiquement un espace (un {1}) avant et après.",
    words: ['paragraphe', 'marge', 'bloc', 'conteneur'],
    correctWords: ['paragraphe', 'marge'],
    exampleCode: `<p>Ceci est un paragraphe avec des marges par défaut.</p>`,
  },
  {
    title: 'Éléments conteneurs',
    text: "L'élément HTML <code class='text-red-500'>&lt;div&gt;</code> est utilisé comme un {0} pour regrouper d'autres éléments.",
    words: ['conteneur', 'paragraphe', 'titre', 'lien'],
    correctWords: ['conteneur'],
    exampleCode: `
<div>
  <h1>Un titre</h1>
  <p>Un paragraphe dans un conteneur.</p>
</div>`,
  },
  {
    title: 'Balises importantes',
    text: "Pour faire un lien vers une autre page, on utilise l'élément {0}.",
    words: ['<a>', '<div>', '<p>', '<h1>'],
    correctWords: ['<a>'],
    exampleCode: `<a href="https://example.com">Visitez notre site</a>`,
  },
  {
    title: 'Lien hypertexte',
    text: "La propriété HTML {0} dans une balise <code class='text-red-500'>&lt;a&gt;</code> sert à définir l'adresse du lien.",
    words: ['href', 'src', 'alt', 'id'],
    correctWords: ['href'],
    exampleCode: `<a href="https://example.com">Cliquez ici</a>`,
  },
  {
    title: 'Images en HTML',
    text: "Pour afficher une image dans une page HTML, on utilise l'élément {0}.",
    words: ['<img>', '<a>', '<div>', '<p>'],
    correctWords: ['<img>'],
    exampleCode: `<img src="image.jpg" alt="Description de l'image">`,
  },
  {
    title: 'Listes HTML',
    text: 'En HTML, pour créer une liste ordonnée (avec des numéros), on utilise la balise {0}.',
    words: ['<ol>', '<ul>', '<li>', '<div>'],
    correctWords: ['<ol>'],
    exampleCode: `
<ol>
  <li>Élément 1</li>
  <li>Élément 2</li>
</ol>`,
  },
  {
    title: 'Tableaux en HTML',
    text: 'Pour créer un tableau en HTML, on utilise la balise {0}.',
    words: ['<table>', '<div>', '<ul>', '<tr>'],
    correctWords: ['<table>'],
    exampleCode: `
<table>
  <tr>
    <th>Colonne 1</th>
    <th>Colonne 2</th>
  </tr>
  <tr>
    <td>Valeur 1</td>
    <td>Valeur 2</td>
  </tr>
</table>`,
  },
  {
    title: 'Texte en gras',
    text: 'Pour mettre un texte en gras en HTML, on utilise la balise {0}.',
    words: ['<b>', '<i>', '<p>', '<u>'],
    correctWords: ['<b>'],
    exampleCode: `<b>Texte en gras</b>`,
  },
  {
    title: 'Espaces CSS',
    text: 'En CSS, on peut ajouter des {0} pour contrôler les espaces autour des éléments.',
    words: ['marges', 'remplissages', 'couleurs', 'polices'],
    correctWords: ['marges'],
    exampleCode: `
div {
  margin: 10px;
}`,
  },
  {
    title: 'Alignement des textes',
    text: "En CSS, la propriété {0} permet d'aligner le texte à gauche, au centre ou à droite.",
    words: ['text-align', 'margin', 'padding', 'font-style'],
    correctWords: ['text-align'],
    exampleCode: `
p {
  text-align: center;
}`,
  },
  {
    title: 'Taille des blocs',
    text: "En CSS, les propriétés {0} et {1} permettent de contrôler respectivement la largeur et la hauteur d'un élément.",
    words: ['width', 'height', 'padding', 'margin'],
    correctWords: ['width', 'height'],
    exampleCode: `
div {
  width: 100px;
  height: 50px;
}`,
  },
  {
    title: 'Taille des polices',
    text: "En CSS, la propriété {0} sert à modifier la taille d'un texte.",
    words: ['font-size', 'padding', 'margin', 'width'],
    correctWords: ['font-size'],
    exampleCode: `
p {
  font-size: 16px;
}`,
  },
  {
    title: 'Couleur de fond',
    text: "En CSS, pour changer la couleur de fond d'un élément, on utilise la propriété {0}.",
    words: ['background-color', 'color', 'border', 'font-size'],
    correctWords: ['background-color'],
    exampleCode: `
div {
  background-color: lightblue;
}`,
  },
  {
    title: 'Style des textes',
    text: 'En CSS, la propriété {0} permet de changer la couleur du texte.',
    words: ['color', 'background-color', 'font-size', 'margin'],
    correctWords: ['color'],
    exampleCode: `
p {
  color: red;
}`,
  },
];
