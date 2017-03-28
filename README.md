# Snozzcumber!

Lorem Ipsum for Atom, with a Roald Dahl twist.  It's yet another dummy text
generator.  But this one uses phrases from Roald Dahl stories.

> Try it yourself this foulsome snozzcumber!

It's based on the [Snozzcumber Javascript library](https://paulhorner79.github.io/snozzcumber/)

![The BFG](https://raw.githubusercontent.com/paulhorner79/atom-snozzcumber/master/bfg.jpg "The BFG")

## From the library

If like me you use a lot of dummy text when building your projects, but hate
seeing "Lorem Ipsum" all over your pages, this might be for you.  It generates
real-looking, fun text drawn from an array of Roald Dahl books.

> I realise that this means that there might be some copyright issues here.
This was developed as a bit of fun, and certainly not for commercial gain. If
you are the copyright holder and want this removing from circulation please
contact me and I'll remove it as soon as possible.

The phrases were taken from the following webpages:

- https://www.google.co.uk/amp/m.huffpost.com/us/entry/us_57d74c2de4b09d7a687f6b35/amp
- http://www.stylist.co.uk/books/the-greatest-roald-dahl-book-quotes-for-all-moments-in-adult-life

Any inaccuracies are theirs and not mine!

## Usage

To use this, load the command panel, type "Snozzcumber" and choose the relevant
option.  You probably only actually need to type "snoz" to see the options -
there aren't a lot of other packages with a similar name.

Alternatively you can right click and choose "Snozzcumber", or choose
"Snozzcumber" from the Packages menu.  The available options are:

- **Phrase** - Chooses a random Roald Dahl phrase.
- **Paragraph** - Generates a paragraph based on a random number of phrases.
- **Paragraphs** - Prints out n paragraphs, where n is set in the config.

## Config options

There are a number of configuration options:

### Number of Paragraphs

The number of paragraphs to generate when running the 'paragraphs' command".

The default value is 4.

### HTML Extensions
You can also specify a list of file extensions where any paragraphs generated
will be wrapped in HTML `<p> </p>` tags.  This option is a list of file
extensions for HTML file types.

The default values are:
- .html
- .htm (does anyone still use this?)
- .php (I'm not sure whether this should be included here or not, but you can
override it if you want to)
- .twig (Twig templates)
- .tpl (Smarty templates)

When adding others, these should be added in lowercase, and remember to include
the opening '.'
