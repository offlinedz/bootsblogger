# [Bootsblogger](https://bootsblogger.github.io)

[![Build Status](https://travis-ci.org/bootsblogger/bootsblogger.svg)](https://travis-ci.org/bootsblogger/bootsblogger)
[![devDependency Status](https://david-dm.org/bootsblogger/bootsblogger/dev-status.svg)](https://david-dm.org/bootsblogger/bootsblogger/?type=dev)

[Blogger](https://blogger.com) + [Bootstrap](https://v4-alpha.getbootstrap.com) + \<3

To get started, check out <https://bootsblogger.github.io>!


## Tooling setup

To use our Gruntfile and run our documentation locally, you'll need a copy of Bootsblogger's source files, Node, and Grunt. Follow these steps and you should be ready to rock:

1. [Download and install Node](https://nodejs.org/download/), which we use to manage our dependencies.
2. Install the Grunt command line tools, `grunt-cli`, with `npm install -g grunt-cli`.
3. Navigate to the root `/bootsblogger` directory and run `npm install` to install our local dependencies listed in [package.json](https://github.com/bootsblogger/bootsblogger/blob/master/package.json).
4. [Install Ruby][install-ruby], install [Bundler][gembundler] with `gem install bundler`, and finally run `bundle install`. This will install all Ruby dependencies, such as Jekyll and plugins.
  - **Windows users:** Read [this unofficial guide](http://jekyll-windows.juthilo.com/) to get Jekyll up and running without problems.
  
When completed, you'll be able to run the various Grunt commands provided from the command line.
  
[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/
[gembundler]: https://bundler.io/


## Using Grunt

Our Gruntfile includes the following commands and tasks:

| Task | Description |
| --- | --- |
| `grunt` | Run `grunt` to run tests locally and compile the CSS and JavaScript into `/template-src/core/assets`; compile the template into `/dist`; compile the docs assets. **Uses [Sass (grunt-contrib-sass)](https://github.com/gruntjs/grunt-contrib-sass), [Autoprefixer](https://github.com/postcss/autoprefixer), [UglifyJS (grunt-contrib-uglify)](https://github.com/gruntjs/grunt-contrib-uglify), and [bake (grunt-bake)](https://github.com/MathiasPaumgarten/grunt-bake).** |
| `grunt dist` | `grunt dist` creates the `/dist` and `/template-src/core/assets/<bootstrap and bootsblogger>` directory with compiled files. **Uses [Sass (grunt-contrib-sass)](https://github.com/gruntjs/grunt-contrib-sass), [Autoprefixer](https://github.com/postcss/autoprefixer), [UglifyJS (grunt-contrib-uglify)](https://github.com/gruntjs/grunt-contrib-uglify), and [bake (grunt-bake)](https://github.com/MathiasPaumgarten/grunt-bake).** |
| `grunt test` | Runs [scss-lint (grunt-scss-lint)](https://github.com/ahmednuaman/grunt-scss-lint), [JSCS (grunt-jscs)](https://github.com/jscs-dev/grunt-jscs), [HTML validation (grunt-html)](https://github.com/jzaefferer/grunt-html), and [HTML validation (grunt-htmlhint)](https://github.com/yaniswang/grunt-htmlhint) (used for CI). |
| `grunt docs` | Builds and tests CSS, JavaScript, and other assets which are used when running the documentation locally via `jekyll serve`. |
| `grunt watch` | This is a convenience method for watching Sass, JavaScript, and template files and automatically building them whenever you save. |


## Documentation

Bootsblogger's documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com) and publicly hosted on GitHub Pages at <https://bootsblogger.github.io>. The docs may also be run locally.

### Running documentation locally

1. Run through the [tooling setup](#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. Run `grunt` (or a specific set of Grunt tasks) to rebuild distributed template, CSS, and JavaScript files, as well as our docs assets.
3. From the root `/bootsblogger` directory, run `bundle exec jekyll serve` in the command line.
4. Open <http://localhost:9001> in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/home/).


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/bootsblogger/bootsblogger/blob/master/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/bootsblogger/bootsblogger/issues/new).


## Contributing

Please read through our [contributing guidelines](https://github.com/bootsblogger/bootsblogger/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

Editor preferences are available in the [editor config](https://github.com/bootsblogger/bootsblogger/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.


## Copyright and license

Code and documentation copyright 2017 Igoy Nawamreh. Code released under the [MIT License](https://github.com/bootsblogger/bootsblogger/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/bootsblogger/bootsblogger/blob/master/docs/LICENSE).
