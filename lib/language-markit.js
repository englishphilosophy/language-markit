'use babel'
/* globals atom */
import { CompositeDisposable } from 'atom'

export default {

  subscriptions: null,

  activate (state) {
    this.subscriptions = new CompositeDisposable()
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'language-markit:bold': () => this.wrap('*'),
      'language-markit:italics': () => this.wrap('_'),
      'language-markit:smallcaps': () => this.wrap('^'),
      'language-markit:foreign': () => this.wrap('$'),
      'language-markit:name': () => this.wrap('='),
      'language-markit:comment': () => this.wrap('#')
    }))
  },

  deactivate () {
    this.subscriptions.dispose()
  },

  wrap (tag) {
    const editor = atom.workspace.getActiveTextEditor()
    editor.insertText(`${tag}${editor.getSelectedText()}${tag}`)
  }

}
