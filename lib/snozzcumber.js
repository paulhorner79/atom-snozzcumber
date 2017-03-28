'use babel';

import { CompositeDisposable } from 'atom';
var path = require ('path');
require ('snozzcumber');

export default {
  modalPanel: null,
  subscriptions: null,
  config: {
      paragraphs: {
          type: 'integer',
          title: 'Number of paragraphs',
          description: "Number of paragraphs to generate when running the 'paragraphs' command",
          default: 4
      },
      htmlExtensions: {
          type: 'array',
          title: 'HTML Extensions',
          description: "List any extensions that should be wrapped in HTML when generating the text. This simply puts <p></p> tags around the paragraphs.",
          default: [".html", ".htm", ".php", ".twig", ".tpl"],
          items: {
              type: 'string'
          }
      }
  },
  activate(state) {
    this.snozz = new Snozzcumber;

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'snozzcumber:paragraph': () => this.paragraph(),
      'snozzcumber:paragraphs': () => this.paragraphs(),
      'snozzcumber:phrase': () => this.phrase(),
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  outputText(output) {
    var text = "";
    if (editor = atom.workspace.getActiveTextEditor()) {
        var ext = path.extname(editor.getPath()).toLowerCase(),
            extensions = atom.config.get('snozzcumber.htmlExtensions');
        // force it to be an array
        if (!Array.isArray(output)) {
            output = [output];
        }
        output.forEach(function(o) {
            // if it's HTML, encase in <p> tags
            if (extensions.indexOf(ext) !== -1) {
                text += "<p>" + o + "</p>\n";
            } else {
                text += o + "\n";
            }
        });
        editor.insertText(text, {autoIndent: true});
    }
},

  paragraph() {
    this.outputText(this.snozz.paragraph());
  },

  paragraphs() {
    this.outputText(this.snozz.paragraphs(atom.config.get('snozzcumber.paragraphs')));
  },

  phrase() {
    this.outputText(this.snozz.phrase());
  }

};
