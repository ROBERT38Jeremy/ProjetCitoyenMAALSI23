import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

// Configuration de l'environnement Monaco pour sélectionner le worker correct
self.MonacoEnvironment = {
	getWorker(_, label) {
		if (label === 'json') {
			return new jsonWorker();
		}
		if (label === 'css' || label === 'scss' || label === 'less') {
			return new cssWorker();
		}
		if (label === 'html' || label === 'handlebars' || label === 'razor') {
			return new htmlWorker();
		}
		if (label === 'typescript' || label === 'javascript') {
			return new tsWorker();
		}
		return new editorWorker();
	}
};

// Initialisation de l'éditeur Monaco dans une div de votre HTML
function createEditor(targetElement, { language = 'html'}) {
    // Options de configuration de base pour Monaco Editor
    const monacoOptions = {
        language, // Langage par défaut (peut être changé dynamiquement)
        theme: 'vs-dark',
        automaticLayout: true,
        wordWrap: 'on',
        minimap: { enabled: true },
        fontSize: 14,
    };
    return monaco.editor.create(targetElement, monacoOptions);
};

	// model = un fichier dans la mémoire de monaco
	  function createModel(data, language) {
		return monaco.editor.createModel(data, language);
	  }

// Enregistrement d'un fournisseur de complétion pour le langage HTML
monaco.languages.registerCompletionItemProvider('html', {
	provideCompletionItems: function(model, position) {
	  // Définit des suggestions de balises HTML
	  const suggestions = [
		{
		  label: 'html',
		  kind: monaco.languages.CompletionItemKind.Keyword,
		  insertText: '<html>\n\t$0\n</html>',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Balise HTML principale'
		},
		{
		  label: 'head',
		  kind: monaco.languages.CompletionItemKind.Keyword,
		  insertText: '<head>\n\t$0\n</head>',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Contient les métadonnées du document'
		},
		{
		  label: 'body',
		  kind: monaco.languages.CompletionItemKind.Keyword,
		  insertText: '<body>\n\t$0\n</body>',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Contient le contenu principal du document'
		},
		{
		  label: 'div',
		  kind: monaco.languages.CompletionItemKind.Keyword,
		  insertText: '<div>$0</div>',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Conteneur de division'
		},
		{
		  label: 'h1',
		  kind: monaco.languages.CompletionItemKind.Keyword,
		  insertText: '<h1>$0</h1>',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Titre de niveau 1'
		},
		{
		  label: 'p',
		  kind: monaco.languages.CompletionItemKind.Keyword,
		  insertText: '<p>$0</p>',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Paragraphe'
		}
	  ];

	  return { suggestions: suggestions };
	}
  });

// Enregistrement d'un fournisseur de complétion pour le langage CSS
monaco.languages.registerCompletionItemProvider('css', {
	provideCompletionItems: function(model, position) {
	  // Suggestions pour les propriétés CSS et les valeurs communes
	  const suggestions = [
		{
		  label: 'color',
		  kind: monaco.languages.CompletionItemKind.Property,
		  insertText: 'color: ${1:#000000};',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Définit la couleur du texte',
		},
		{
		  label: 'background-color',
		  kind: monaco.languages.CompletionItemKind.Property,
		  insertText: 'background-color: ${1:#ffffff};',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Définit la couleur de fond d’un élément',
		},
		{
		  label: 'font-size',
		  kind: monaco.languages.CompletionItemKind.Property,
		  insertText: 'font-size: ${1:16px};',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Définit la taille de la police',
		},
		{
		  label: 'margin',
		  kind: monaco.languages.CompletionItemKind.Property,
		  insertText: 'margin: ${1:0px};',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Définit la marge extérieure autour d’un élément',
		},
		{
		  label: 'padding',
		  kind: monaco.languages.CompletionItemKind.Property,
		  insertText: 'padding: ${1:0px};',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Définit la marge intérieure (padding) d’un élément',
		},
		{
		  label: 'display',
		  kind: monaco.languages.CompletionItemKind.Property,
		  insertText: 'display: ${1:block};',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Définit le type de mise en page de l’élément',
		},
		{
		  label: 'flex',
		  kind: monaco.languages.CompletionItemKind.Property,
		  insertText: 'flex: ${1:1};',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Définit la flexibilité d’un élément dans un conteneur flex',
		},
		{
		  label: 'justify-content',
		  kind: monaco.languages.CompletionItemKind.Property,
		  insertText: 'justify-content: ${1:flex-start};',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Définit l’alignement des éléments enfants sur l’axe principal',
		},
		{
		  label: 'align-items',
		  kind: monaco.languages.CompletionItemKind.Property,
		  insertText: 'align-items: ${1:center};',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Définit l’alignement des éléments enfants sur l’axe transversal',
		},
		{
		  label: 'border',
		  kind: monaco.languages.CompletionItemKind.Property,
		  insertText: 'border: ${1:1px solid #000};',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Définit la bordure autour d’un élément',
		},
		{
		  label: 'position',
		  kind: monaco.languages.CompletionItemKind.Property,
		  insertText: 'position: ${1:absolute};',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Définit le type de positionnement de l’élément',
		},
		{
		  label: 'top',
		  kind: monaco.languages.CompletionItemKind.Property,
		  insertText: 'top: ${1:0px};',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Définit la position de l’élément depuis le haut du conteneur parent',
		},
		{
		  label: 'transition',
		  kind: monaco.languages.CompletionItemKind.Property,
		  insertText: 'transition: ${1:all 0.3s ease};',
		  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		  documentation: 'Définit les transitions d’animation sur les propriétés CSS',
		}
	  ];

	  return { suggestions: suggestions };
	}
  });

export {
    createEditor,
	createModel,
}
