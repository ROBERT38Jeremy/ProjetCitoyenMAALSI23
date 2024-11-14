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

export {
    createEditor,
}
