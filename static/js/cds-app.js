Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
});

/**
 * Email validation (allows unicode addresses)
 * @param $email
 * @returns {boolean}
 */
function validateEmail($email) {
    var emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailReg.test($email);
}

$(document).ready(function () {
    $('#js-mainNavButton').on('click touchup', function () {
        $('#js-mobileNav').addClass('active');

    });

    $('#js-mobileNav--button').on('click touchup', function () {
        $('#js-mobileNav').addClass('hiding');
        setTimeout(function () {
            $('#js-mobileNav').removeClass('active hiding').removeAttr('class');
        }, 305)
    });

    // Add target=_blank to external links
    // Thanks to http://css-tricks.com/snippets/jquery/open-external-links-in-new-window/
    $("#wb-cont a[href^='http://']").attr("target", "_blank");
    $("#wb-cont a[href^='https://']").attr("target", "_blank");

    /**
     * Word counter
     */
    var maxWords = 300,
        wordCount;

    $('#contactForm #body').keyup(function (event) {
        wordCount = 0;

        if ($('#contactForm #body').val()) {
            wordCount = $('#contactForm #body').val().split(/[\s]+/).length;
        }

        if (wordCount > maxWords) {
            $('#contactForm #word-count-message').addClass('error-message');
        } else {
            $('#contactForm #word-count-message').removeClass('error-message');
        }

        wordsLeft = maxWords - wordCount;

        $('#contactForm #word-count').html(wordsLeft);
    });

    /**
     * Contact Form Submit
     */
    $('#contactForm').submit(function (event) {
        event.preventDefault();

        /**
         * Form Validation
         */
        var valid = true,
            errors = [];

        $('#contactForm .form-control').each(function () {
            var $this = $(this);

            /**
             * Email validation
             */
            if ($this.val() && $this.hasClass('validate-email')) {
                if (!validateEmail($this.val())) {
                    errors.push($this);
                    valid = false;
                }
            }

            /**
             * Max words validation
             */
            if ($this.val() && $this.hasClass('validate-maxwords')) {
                wordCount = $this.val().split(/[\s]+/).length;

                if (wordCount > maxWords) {
                    errors.push($this);
                    valid = false;
                }
            }

            /**
             * Required validation
             */
            if (!$this.val() && $this.hasClass('validate-required')) {
                errors.push($this);
                valid = false;
            }
        });

        /**
         * Handle invalid items
         */
        if (!valid) {
            $.each(errors, function (index, item) {
                item.addClass('error');
                item.closest('.form-group').addClass('error');
                item.siblings('.error-message').show();
                item.attr('aria-invalid', 'true');
            });

            /**
             * Set focus to the first invalid element and get out
             */
            errors[0].focus();
            return false;
        }

        /**
         * Disable button to prevent double-submitting
         */
        $('#submitButton').attr("disabled", true);
        $('#buttonSpinner').toggleClass('active');

        /**
         * Collect data for submitting
         */
        var data = {
            name: $('#name').val(),
            email: $('#email').val(),
            jobId: $('#jobId').val(),
            body: $('#body').val(),
            work_link: $('#work_link').val(),
            work_link_2: $('#work_link_2').val()
        }

        var pageLanguage = $('html').attr('lang');
        var endpoint = "https://cjumjswiil.execute-api.ca-central-1.amazonaws.com/production/lever";
        $.ajax({
            type: 'POST',
            url: endpoint,
            data: JSON.stringify(data),
            complete: function (r) {
                console.log(r.responseText);
            },
            success: function () {
                if (pageLanguage == 'en') {
                    window.location.href = "/success/";
                }
                else {
                    window.location.href = "/reussi/";
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                if (pageLanguage == 'en') {
                    window.location.href = "/error/";
                }
                else {
                    window.location.href = "/erreur/";
                }
            }
        });
    });

    /**
     * Check if there is a validation error to be cleared
     */
    $('#contactForm .form-control').keyup(function (e) {
        var $this = $(this);

        if ($this.hasClass('validate-required') && $this.val()) {
            if ($this.hasClass('validate-maxwords')) {
                wordCount = $this.val().split(/[\s]+/).length;

                if (wordCount <= maxWords) {
                    $this.removeClass('error');
                    $this.closest('.form-group').removeClass('error');
                    $this.siblings('.error-message').hide();
                    $this.attr('aria-invalid', 'false');
                }
            } else if ($this.hasClass('validate-email')) {
                if (validateEmail($this.val())) {
                    $this.removeClass('error');
                    $this.closest('.form-group').removeClass('error');
                    $this.siblings('.error-message').hide();
                    $this.attr('aria-invalid', 'false');
                }
            } else {
                $this.removeClass('error');
                $this.closest('.form-group').removeClass('error');
                $this.siblings('.error-message').hide();
                $this.attr('aria-invalid', 'false');
            }
        }
    });
}); 