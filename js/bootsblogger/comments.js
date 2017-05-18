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


    // Toggle `.active` for `.comment-form-original-wrapper` and `.comment-form-reply-wrapper`

    $('.comment-form-original-wrapper').addClass('active')

    $('.js-comment-action').on('click', function () {
      $('.comment-form-original-wrapper, .comment-form-reply-wrapper').each(function () {
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

      $('.comment-form-original-wrapper').each(function () {
        if ($(this).find('.comment-form').length) {
          $('body').find('.comment-add-wrapper').removeClass('show')
        } else {
          $('body').find('.comment-add-wrapper').addClass('show')
        }
      })
      $('.comment-form-reply-wrapper').each(function () {
        if ($(this).find('.comment-form').length) {
          $('body').find('.comment-cancel-wrapper').addClass('show')
        } else {
          $('body').find('.comment-cancel-wrapper:not(.show)').removeClass('show')
        }
      })
    })


    // Loading animation

    $('.comment-form').addClass('comment-form-loading-wrapper')

    $('#comment-editor').on('load', function () {
      $('.comment-form').removeClass('comment-form-loading-wrapper')
    })

    $('.js-comment-action').click(function () {
      $('.comment-form').addClass('comment-form-loading-wrapper')

      $('#comment-editor').on('load', function () {
        $('.comment-form').removeClass('comment-form-loading-wrapper')
      })
    })

  })

}(jQuery));
