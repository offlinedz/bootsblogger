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
      'dist': 'dist',
      'css': [
        'template-src/core/assets/css/bootstrap',
        'template-src/core/assets/css/bootsblogger',
        'docs/assets/css/bootsblogger'
      ]
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

    bake: {
      core: {
        options: {
          basePath: 'template-src',
          content: 'template-src/config.json'
        },
        files: {
          'dist/template.xml': 'template-src/index.xml'
        }
      }
    },

    exec: {
      'docs-lint': {
        command: 'npm run docs-lint'
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

    watch: {
      css: {
        files: ['scss/**/*.scss'],
        tasks: [
          'clean:dist',
          'clean:css',
          'css-lint',
          'css-compile',
          'css-prefix',
          'css-minify',
          'template-compile',
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
          'template-compile'
        ]
      }
    },

    gitcheckout: {
      compiled: {
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
        dir: './_gh_pages',
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

    compress: {
      main: {
        options: {
          archive: 'bootsblogger-<%= pkg.version %>-dist.zip',
          mode: 'zip',
          level: 9,
          pretty: true
        },
        files: [{
          expand: true,
          cwd: 'dist/',
          src: ['**'],
          dest: 'bootsblogger-<%= pkg.version %>-dist'
        }]
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
  grunt.registerTask('css-lint', ['scsslint:bootstrap', 'scsslint:bootsblogger']);
  grunt.registerTask('css-compile', ['sass:bootstrap', 'sass:bootsblogger']);
  grunt.registerTask('css-prefix', ['postcss:bootstrap', 'postcss:bootsblogger']);
  grunt.registerTask('css-minify', ['cssmin:bootstrap', 'cssmin:bootsblogger']);

  // Template task.
  grunt.registerTask('template-compile', ['bake:core']);

  // Docs task.
  grunt.registerTask('docs-lint', ['jekyll:docs', 'exec:docs-lint']);

  // Test task.
  var testSubtasks = [];
  // Skip core tests if running a different subset of the test suite
  if (runSubset('core')) {
    testSubtasks = testSubtasks.concat([
      'css-lint',
      'css-compile',
      'css-prefix',
      'css-minify',
      'template-compile'
    ]);
  }
  if (runSubset('core') && !(isTravis)) {
    testSubtasks.push('gitcheckout:compiled');
  }
  // Skip HTML validation if running a different subset of the test suite
  if (runSubset('browser') &&
      isTravis &&
      // Skip HTML5 validator when [skip validator] is in the commit message
      isUndefOrNonZero(process.env.BOOTSBLOGGER_DO_VALIDATOR)) {
    testSubtasks.push('docs-lint');
  }
  grunt.registerTask('test', testSubtasks);

  // Default task.
  grunt.registerTask('default', [
    'clean:dist',
    'clean:css',
    'css-lint',
    'css-compile',
    'css-prefix',
    'css-minify',
    'template-compile',
    'copy:docs'
  ]);

  grunt.registerTask('prep-release', ['default', 'jekyll:github', 'compress']);

  // Publish to GitHub
  grunt.registerTask('publish', ['buildcontrol:pages']);
};
