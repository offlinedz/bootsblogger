/*!
 * Bootsblogger's Gruntfile
 * https://bootsblogger.github.io
 * Copyright 2017 Igoy Nawamreh
 * Licensed under MIT (https://github.com/bootsblogger/bootsblogger/blob/master/LICENSE)
 */

module.exports = function(grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  var isTravis = require('is-travis');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dist: 'dist',
      bootstrapCss: 'template-src/core/assets/css/bootstrap',
      bootsbloggerCss: 'template-src/core/assets/css/bootsblogger',
      docs: 'docs/assets/css/bootsblogger'
    },

    scsslint: {
      options: {
        bundleExec: true,
        config: 'scss/.scss-lint.yml',
        reporterOutput: null
      },
      bootstrap: {
        src: ['scss/bootstrap/*.scss', '!scss/bootstrap/_normalize.scss']
      },
      bootsblogger: {
        src: 'scss/bootsblogger/*.scss'
      }
    },

    sass: {
      options: {
        precision: 6,
        sourcemap: 'auto',
        style: 'expanded',
        trace: true,
        bundleExec: true
      },
      bootstrap: {
        files: {
          'template-src/core/assets/css/bootstrap/bootstrap.css': 'scss/bootstrap/bootstrap.scss'
        }
      },
      bootsblogger: {
        files: {
          'template-src/core/assets/css/bootsblogger/bootsblogger.css': 'scss/bootsblogger/bootsblogger.scss'
        }
      }
    },

    cssmin: {
      options: {
        compatibility: 'ie10,-properties.zeroUnits',
        keepSpecialComments: '*',
        sourceMap: true,
        advanced: false
      },
      bootstrap: {
        files: [{
          expand: true,
          cwd: 'template-src/core/assets/css/bootstrap',
          src: ['*.css', '!*.min.css'],
          dest: 'template-src/core/assets/css/bootstrap',
          ext: '.min.css'
        }]
      },
      bootsblogger: {
        files: [{
          expand: true,
          cwd: 'template-src/core/assets/css/bootsblogger',
          src: ['*.css', '!*.min.css'],
          dest: 'template-src/core/assets/css/bootsblogger',
          ext: '.min.css'
        }]
      }
    },

    postcss: {
      options: {
        map: {
          inline: false,
          annotation: true,
          sourcesContent: true
        },
        processors: [
          require('postcss-flexbugs-fixes')(),
          require('autoprefixer')({
            browsers: [
              //
              // Official browser support policy:
              // https://v4-alpha.getbootstrap.com/getting-started/browsers-devices/#supported-browsers
              //
              'Chrome >= 35', // Exact version number here is kinda arbitrary
              // Rather than using Autoprefixer's native "Firefox ESR" version specifier string,
              // we deliberately hardcode the number. This is to avoid unwittingly severely breaking the previous ESR in the event that:
              // (a) we happen to ship a new Bootstrap release soon after the release of a new ESR,
              //     such that folks haven't yet had a reasonable amount of time to upgrade; and
              // (b) the new ESR has unprefixed CSS properties/values whose absence would severely break webpages
              //     (e.g. `box-sizing`, as opposed to `background: linear-gradient(...)`).
              //     Since they've been unprefixed, Autoprefixer will stop prefixing them,
              //     thus causing them to not work in the previous ESR (where the prefixes were required).
              'Firefox >= 38', // Current Firefox Extended Support Release (ESR); https://www.mozilla.org/en-US/firefox/organizations/faq/
              // Note: Edge versions in Autoprefixer & Can I Use refer to the EdgeHTML rendering engine version,
              // NOT the Edge app version shown in Edge's "About" screen.
              // For example, at the time of writing, Edge 20 on an up-to-date system uses EdgeHTML 12.
              // See also https://github.com/Fyrd/caniuse/issues/1928
              'Edge >= 12',
              'Explorer >= 10',
              // Out of leniency, we prefix these 1 version further back than the official policy.
              'iOS >= 8',
              'Safari >= 8',
              // The following remain NOT officially supported, but we're lenient and include their prefixes to avoid severely breaking in them.
              'Android 2.3',
              'Android >= 4',
              'Opera >= 12'
            ]
          })
        ]
      },
      bootstrap: {
        src: 'template-src/core/assets/css/bootstrap/*.css'
      },
      bootsblogger: {
        src: 'template-src/core/assets/css/bootsblogger/*.css'
      }
    },

    bake: {
      template: {
        options: {
          basePath: 'template-src',
          content: 'template-src/config.json'
        },
        files: {
          'dist/template.xml': 'template-src/index.xml'
        }
      }
    },

    htmllint: {
      options: {
        ignore: [
          'Attribute “autocomplete” is only allowed when the input type is “color”, “date”, “datetime”, “datetime-local”, “email”, “hidden”, “month”, “number”, “password”, “range”, “search”, “tel”, “text”, “time”, “url”, or “week”.',
          'Attribute “autocomplete” not allowed on element “button” at this point.',
          'Consider using the “h1” element as a top-level heading only (all “h1” elements are treated as top-level headings by many screen readers and other tools).',
          'Element “div” not allowed as child of element “progress” in this context. (Suppressing further errors from this subtree.)',
          'Element “img” is missing required attribute “src”.',
          'The “color” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “date” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “datetime” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “datetime-local” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “month” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “time” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “week” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          /This document appears to be written in .* but the “html”./
        ]
      },
      docs: {
        src: '_gh_pages/**/*.html'
      }
    },

    htmlhint: {
      docs: {
        options: {
          htmlhintrc: 'docs/.htmlhintrc'
        },
        src: '_gh_pages/**/*.html'
      }
    },

    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml',
        incremental: false
      },
      docs: {},
      github: {
        options: {
          raw: 'github: true'
        }
      }
    },

    buildcontrol: {
      options: {
        dir: '_gh_pages',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:bootsblogger/bootsblogger.github.io.git',
          branch: 'master'
        }
      }
    },

    gitcheckout: {
      revertCompiledFiles: {
        options: {
          branch: [
            'dist/.',
            'template-src/core/assets/css/bootstrap/.',
            'template-src/core/assets/css/bootsblogger/.',
            'docs/assets/css/bootsblogger/.'
          ]
        }
      }
    },

    copy: {
      docs: {
        expand: true,
        cwd: 'template-src/core/assets/css',
        src: 'bootsblogger/*',
        dest: 'docs/assets/css'
      }
    },

    compress: {
      main: {
        options: {
          archive: 'bootsblogger-<%= pkg.version %>-dist.zip',
          mode: 'zip',
          level: 9,
          pretty: true
        },
        files: [
          {
            expand: true,
            cwd: 'dist/',
            src: ['**'],
            dest: 'bootsblogger-<%= pkg.version %>-dist'
          }
        ]
      }
    },

    watch: {
      bootstrapCss: {
        files: [
          'scss/bootstrap/**/*.scss',
          'scss/_custom.scss'
        ],
        tasks: [
          'lint-scss-bootstrap',
          'clean:bootstrapCss',
          'compile-sass-bootstrap',
          'clean:dist',
          'compile-template'
        ]
      },
      bootsbloggerCss: {
        files: [
          'scss/bootsblogger/**/*.scss',
          'scss/_custom.scss'
        ],
        tasks: [
          'lint-scss-bootsblogger',
          'clean:bootsbloggerCss',
          'compile-sass-bootsblogger',
          'clean:dist',
          'compile-template',
          'clean:docs',
          'copy:docs'
        ]
      },
      template: {
        files: [
          'template-src/**/*.xml',
          'template-src/**/*.css',
          'template-src/**/*.js',
          'template-src/config.json',
          '!template-src/core/assets/css/bootstrap/*',
          '!template-src/core/assets/css/bootsblogger/*'
        ],
        tasks: [
          'clean:dist',
          'compile-template'
        ]
      }
    }

  });

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  require('time-grunt')(grunt);

  var runSubset = function (subset) {
    return !process.env.BOOTSBLOGGER_TEST || process.env.BOOTSBLOGGER_TEST === subset;
  };
  var isUndefOrNonZero = function (val) {
    return val === undefined || val !== '0';
  };

  // CSS task.
  grunt.registerTask('lint-scss-bootstrap', ['scsslint:bootstrap']);
  grunt.registerTask('lint-scss-bootsblogger', ['scsslint:bootsblogger']);
  grunt.registerTask('compile-sass-bootstrap', ['sass:bootstrap', 'cssmin:bootstrap', 'postcss:bootstrap']);
  grunt.registerTask('compile-sass-bootsblogger', ['sass:bootsblogger', 'cssmin:bootsblogger', 'postcss:bootsblogger']);

  // Template task.
  grunt.registerTask('compile-template', ['bake:template']);

  // Docs task.
  grunt.registerTask('validate-html-docs', ['jekyll:docs', 'htmllint:docs', 'htmlhint:docs']);

  // Test task.
  var testSubtasks = [];
  // Skip core tests if running a different subset of the test suite
  if (runSubset('core')) {
    testSubtasks = testSubtasks.concat([
      'lint-scss-bootstrap',
      'lint-scss-bootsblogger',
      'compile-sass-bootstrap',
      'compile-sass-bootsblogger',
      'compile-template'
    ]);
  }
  if (runSubset('core') && !(isTravis)) {
    testSubtasks.push('gitcheckout:revertCompiledFiles');
  }
  // Skip HTML validation if running a different subset of the test suite
  if (runSubset('validate-html-docs') &&
      isTravis &&
      // Skip HTML5 validator when [skip validator] is in the commit message
      isUndefOrNonZero(process.env.BOOTSBLOGGER_DO_VALIDATOR)) {
    testSubtasks.push('validate-html-docs');
  }
  grunt.registerTask('test', testSubtasks);

  // Default task.
  grunt.registerTask('default', [
    'clean:dist',
    'clean:bootstrapCss',
    'clean:bootsbloggerCss',
    'lint-scss-bootstrap',
    'lint-scss-bootsblogger',
    'compile-sass-bootstrap',
    'compile-sass-bootsblogger',
    'compile-template',
    'clean:docs',
    'copy:docs'
  ]);

  grunt.registerTask('prep-release', ['test', 'jekyll:github', 'compress']);

  // Publish to GitHub
  grunt.registerTask('publish', ['buildcontrol:pages']);
};
