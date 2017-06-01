# [Bootsblogger](https://bootsblogger.github.io)

[![Build Status](https://travis-ci.org/bootsblogger/bootsblogger.svg)](https://travis-ci.org/bootsblogger/bootsblogger)
[![devDependency Status](https://david-dm.org/bootsblogger/bootsblogger/dev-status.svg)](https://david-dm.org/bootsblogger/bootsblogger/?type=dev)

[Blogger](https://blogger.com) + [Bootstrap](https://v4-alpha.getbootstrap.com) + &lt;3

To get started, check out <https://bootsblogger.github.io>!


## Tooling setup

To use our Gruntfile and run our documentation locally, you'll need a copy of Bootsblogger's source files, Node, and Grunt. Follow these steps and you should be ready to rock:

1. [Download and install Node](https://nodejs.org/download/), which we use to manage our dependencies.
2. Install the Grunt command line tools, `grunt-cli`, with `npm install -g grunt-cli`.
3. Navigate to the root `/bootsblogger` directory and run `npm install` to install our local dependencies listed in `package.json`.
4. [Install Ruby][install-ruby], install [Bundler][gembundler] with `gem install bundler`, and finally run `bundle install`. This will install all Ruby dependencies, such as Jekyll and plugins.
  - **Windows users:** Read [this unofficial guide](http://jekyll-windows.juthilo.com/) to get Jekyll up and running without problems.

When completed, you'll be able to run the various Grunt commands provided from the command line.

[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/
[gembundler]: https://bundler.io/


## Using Grunt

Our [Gruntfile](Gruntfile.js) includes the following commands and tasks:

| Task | Description |
| --- | --- |
| `grunt` | Run `grunt` to run tests and compile the CSS and template. |
| `grunt test` | Run `grunt test` if you just want to run tests. |
| `grunt watch` | This is a convenience method for watching Sass and template files, and automatically building them whenever you save. |


## Documentation

Bootsblogger's documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com) and publicly hosted on GitHub Pages at <https://bootsblogger.github.io>. The docs may also be run locally.

### Running documentation locally

1. Run through the [tooling setup](#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. From the root `/bootsblogger` directory, run `bundle exec jekyll serve` in the command line.
3. Open <http://localhost:9001> in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/home/).


## Contributing

Please read through our [contributing guidelines](.github/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.


## Copyright and license

Code and documentation copyright 2017 Igoy Nawamreh. Code released under the [MIT License](LICENSE). Docs released under [Creative Commons](docs/LICENSE).
