/*!
 * Bootsblogger v1.0.0-alpha.1 (https://bootsblogger.github.io)
 * Copyright 2017 Igoy Nawamreh
 * Licensed under MIT (https://github.com/bootsblogger/bootsblogger/blob/master/LICENSE)
 */

(function ($) {
  'use strict';

  $(function () {

    // HTML converter

    $('.js-comment-convert-btn').on('click', function () {
      var original = $('.js-comment-convert-textarea').val()
      var converted = original
      converted = converted.replace(/</g, '&lt;')
      converted = converted.replace(/>/g, '&gt;')

      $('.js-comment-convert-textarea').val(converted).focus().select().prop('readonly', true)
      $(this).hide()
      $('.js-comment-convert-btn-clear').show()
    })

    $('.js-comment-convert-btn-clear').on('click', function () {
      $('.js-comment-convert-textarea').val('').focus().select().prop('readonly', false)
      $(this).hide()
      $('.js-comment-convert-btn').show()
    })


    // Toogle `.active` for `.comment-form-container-original` and `.comment-form-container-reply`

    $('.comment-form-container-original').addClass('active')

    $('.js-comment-action').on('click', function () {
      $('.comment-form-container-original, .comment-form-container-reply').each(function () {
        if ($(this).find('.comment-form').length) {
          $(this).addClass('active')
        } else {
          $(this).removeClass('active')
        }
      })
    })


    // Toggle `.show` for `.comment-add-wrapper` and `.comment-cancel-wrapper`

    $('.js-comment-action').on('click', function () {
      $('.js-comment-action').removeClass('active')
      $(this).addClass('active')

      $('.comment-form-container-original').each(function () {
        if ($(this).find('.comment-form').length) {
          $('body').find('.comment-add-wrapper').removeClass('show')
        } else {
          $('body').find('.comment-add-wrapper').addClass('show')
        }
      })
      $('.comment-form-container-reply').each(function () {
        if ($(this).find('.comment-form').length) {
          $('body').find('.comment-cancel-wrapper').addClass('show')
        } else {
          $('body').find('.comment-cancel-wrapper:not(.show)').removeClass('show')
        }
      })
    })


    // Loading animation

    $('.comment-form').addClass('js-comment-form-loading')

    $('#comment-editor').on('load', function () {
      $('.comment-form').removeClass('js-comment-form-loading')
    })

    $('.js-comment-action').click(function () {
      $('.comment-form').addClass('js-comment-form-loading')

      $('#comment-editor').on('load', function () {
        $('.comment-form').removeClass('js-comment-form-loading')
      })
    })

  })

}(jQuery));
