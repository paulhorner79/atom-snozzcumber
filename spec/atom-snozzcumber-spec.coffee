Snozzcumber = require '../lib/atom-snozzcumber'

# Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
#
# To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
# or `fdescribe`). Remove the `f` to unfocus the block.

describe "Snozzcumber", ->
    [workspaceElement, activationPromise] = []

    beforeEach ->
        workspaceElement = atom.views.getView(atom.workspace)
        activationPromise = atom.packages.activatePackage('atom-snozzcumber')

        waitsForPromise ->
            atom.workspace.open('blankfile.txt').then (editor) ->
                expect(editor.getText()).toEqual ""

    describe "when the snozzcumber:phrase event is triggered", ->
        it "adds a single phrase", ->
            atom.commands.dispatch workspaceElement, 'snozzcumber:phrase'

            waitsForPromise ->
                activationPromise

            runs ->
                editor = atom.workspace.getActiveTextEditor()
                text = editor.getText()
                expect(text).not.toEqual ""
                expect(text.split(' ').length).toBeGreaterThan 1

    describe "when the snozzcumber:paragraph event is triggered", ->
        it "adds a single paragraph", ->

            atom.commands.dispatch workspaceElement, 'snozzcumber:paragraph'

            waitsForPromise ->
                activationPromise

            runs ->
                editor = atom.workspace.getActiveTextEditor()
                text = editor.getText()
                expect(text).not.toEqual ""
                expect(text.split("\n").length).toEqual 2

    describe "when the snozzcumber:paragraphs event is triggered", ->
        it "adds multiple paragraph", ->

            atom.commands.dispatch workspaceElement, 'snozzcumber:paragraphs'

            waitsForPromise ->
                activationPromise

            runs ->
                editor = atom.workspace.getActiveTextEditor()
                text = editor.getText()
                expect(text).not.toEqual ""
                expect(text.indexOf("\n")).toBeGreaterThan 0
                expect(text.split("\n").length).toBeGreaterThan 2
                expect(text.split('.').length).toBeGreaterThan 1
