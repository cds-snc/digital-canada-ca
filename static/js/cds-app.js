Object.defineProperty(HTMLMediaElement.prototype, "playing", {
  get: function () {
    return !!(
      this.currentTime > 0 &&
      !this.paused &&
      !this.ended &&
      this.readyState > 2
    );
  },
});

/**
 * Email validation (allows unicode addresses)
 * @param $email
 * @returns {boolean}
 */
function validateEmail($email) {
  var emailReg =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailReg.test($email);
}

$(document).ready(function () {
  const focusedElementMobileModal = "button:not([disabled]), [href], input, text, li, ul, span, a";
  const mobileNav = document.getElementById("js-mobileNav")
  const firstfocusedElement = mobileNav.querySelectorAll(focusedElementMobileModal)[0]
  const lastFocusedElement = mobileNav.querySelectorAll(focusedElementMobileModal)[mobileNav.querySelectorAll(focusedElementMobileModal).length - 1]
  mobileNav.addEventListener("keydown", function(e) {
    let isTabPressed = e.key === "Tab" || e.keyCode === 9;
    if (!isTabPressed) {
      return;
    }
    if (mobileNav.classList == "active") {
      
      if (e.shiftKey) {
        if (document.activeElement === firstfocusedElement) {
          lastFocusedElement.focus();
          e.preventDefault();
        }

      } else if (document.activeElement == lastFocusedElement) {
        firstfocusedElement.focus();
        
        e.preventDefault();
      }

    }

  })
  
  document.addEventListener("keydown", function(e) {
    let isTabPressed = e.key === "Tab" || e.keyCode === 9;
    if (!isTabPressed) {
      return;
    }


    if (e.shiftKey) {
      if (document.activeElement == document.getElementById("careers-nav-tag")) {
        document.getElementById("dropdwn-cnt").style.display = "block"
      }
      else if (document.activeElement == document.getElementById("coaching-and-advice-nav-tag")) {
        if (mobileNav.classList == "active") {
          
          document.getElementById("langSwitch").focus();
          document.getElementById("dropdwn-cnt").style.display = "none"
        } else {
          document.getElementById("cds-logo").focus();
          document.getElementById("dropdwn-cnt").style.display = "none"
        }
        
        
        e.preventDefault()
      } 
    }
    else {
      if (document.activeElement == document.getElementById("guides-nav-tag")) {
        document.getElementById("dropdwn-cnt").style.display = "none"
        
      }
    }

  })
  document.getElementById("how-we-can").addEventListener('focus', function() {
    document.getElementById("dropdwn-cnt").style.display = "block"
    document.getElementById("coaching-and-advice-nav-tag").focus();
  })



  $("#js-mainNavButton").on("click touchup", function () {
    $("#js-mobileNav").addClass("active");
    $("#js-mobileNav--button").focus()


    
  });

  $("#js-mobileNav--button").on("click touchup", function () {
    $("#js-mobileNav").addClass("hiding");
    setTimeout(function () {
      $("#js-mobileNav").removeClass("active hiding").removeAttr("class");
    }, 305);
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

  $("#contactForm #body").keyup(function (event) {
    wordCount = 0;

    if ($("#contactForm #body").val()) {
      wordCount = $("#contactForm #body").val().split(/[\s]+/).length;
    }

    if (wordCount > maxWords) {
      $("#contactForm #word-count-message").addClass("error-message");
    } else {
      $("#contactForm #word-count-message").removeClass("error-message");
    }

    wordsLeft = maxWords - wordCount;

    $("#contactForm #word-count").html(wordsLeft);
  });

  /**
   * File upload
   */
  $("#contactForm #resume").on("change", function (event) {
    var file = $("#contactForm #resume")[0].files[0].name;
    if ($("#no-file-chosen-text").hide()) {
      $("#no-file-chosen-text").show()
      $("#resume-error").hide();
      $("#break-id").hide();
      $(this).removeClass("error");
      $(this).closest(".form-group").removeClass("error");
      
      $(this).attr("aria-invalid", "false");
    }
    $("#contactForm #no-file-chosen-text").html(file);
  });

  /**
   * Contact Form Submit
   */
  $("#contactForm").submit(function (event) {
    event.preventDefault();

    var formData = new FormData($("#contactForm")[0]);
    var fileLength = $("#contactForm #resume")[0].files.length;

    /**
     * Form Validation
     */
    var valid = true,
      errors = [];

    $("#contactForm .form-control").each(function () {
      var $this = $(this);

      /**
       * Email validation
       */
      if ($this.val() && $this.hasClass("validate-email")) {
        if (!validateEmail($this.val())) {
          errors.push($this);
          valid = false;
        }
      }

      /**
       * Max words validation
       */
      if ($this.val() && $this.hasClass("validate-maxwords")) {
        wordCount = $this.val().split(/[\s]+/).length;

        if (wordCount > maxWords) {
          errors.push($this);
          valid = false;
        }
      }

      /**
       * Required validation
       */
      if (!$this.val() && $this.hasClass("validate-required")) {
        errors.push($this);
        valid = false;
      }

      if (fileLength < 1 && $this.hasClass("validate-required")) {
        $("#resume-error").show();
        $("#break-id").show();
        $("#no-file-chosen-text").hide();
        valid = false;
      }
    });

    // $("#contactForm .radio-control").each(function() {
    //   var $this = $(this);
    //   // console.log($this)

    //   if ($this.attr("checked") != "checked" && $this.hasClass("validate-required")) {
        
    //     errors.push($this);
    //     valid = false;
    //   }

    // })
    var $preferred_language = $("input[name=preferred-language]")
    if ($('input[name=preferred-language]:checked').length < 1 && $preferred_language.hasClass("validate-required")) {
      errors.push($preferred_language)
      valid = false
    }

    var $where_did_you_hear = $("input[name=where-did-you-hear]")

    if ($('input[name=where-did-you-hear]:checked').length < 1 && $where_did_you_hear.hasClass("validate-required")) {
      errors.push($where_did_you_hear)
      valid = false
    }

    /**
     * Handle invalid items
     */
    if (!valid) {
      $.each(errors, function (index, item) {
        item.addClass("error");
        item.closest(".form-group").addClass("error");
        item.siblings(".error-message").show();
        item.attr("aria-invalid", "true");
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
    $("#submit-btn").toggleClass("loading");
    $("#submit-btn").toggleClass("inactive");
    $("#submit-btn").attr("disabled", true);

    /**
     * Collect data for submitting
     */
    var theForm = document.getElementById("contactForm");
    var formData = new FormData(theForm);
    var pageLanguage = $("html").attr("lang");

    var endpoint =
      "https://dowr6jfsw2.execute-api.ca-central-1.amazonaws.com/production/lever";

    $.ajax({
      type: "POST",
      url: endpoint,
      data: formData,
      contentType: false,
      processData: false,
      complete: function (r) {
        console.log(r.responseText);
      },
      success: function () {
        if (pageLanguage == "en") {
          window.location.href = "/thank-you/";
        } else {
          window.location.href = "/merci/";
        }
      },
      error: function (xhr, textStatus, errorThrown) {
        console.log("Error", textStatus);
        console.log("Error", errorThrown);
        if (pageLanguage == "en") {
          window.location.href = "/error/";
        } else {
          window.location.href = "/erreur/";
        }
      },
    });
    for (const [key, value] of formData) {
      console.log(key, value)
    }
  });

  /**
   * Check if there is a validation error to be cleared
   */

  $("#contactForm .radio-control").click(function (e){
    var $this = $(this);

    if ($this.hasClass("validate-required") && $this.is(':checked')) {
      $this.removeClass("error");
      $this.closest(".form-group").removeClass("error");
      $this.siblings(".error-message").hide();
      $this.attr("aria-invalid", "false");
    }
  })
  $("#contactForm .form-control").keyup(function (e) {
    var $this = $(this);

    if ($this.hasClass("validate-required") && $this.val()) {
      if ($this.hasClass("validate-maxwords")) {
        wordCount = $this.val().split(/[\s]+/).length;

        if (wordCount <= maxWords) {
          $this.removeClass("error");
          $this.closest(".form-group").removeClass("error");
          $this.siblings(".error-message").hide();
          $this.attr("aria-invalid", "false");
        }
      } else if ($this.hasClass("validate-email")) {
        if (validateEmail($this.val())) {
          $this.removeClass("error");
          $this.closest(".form-group").removeClass("error");
          $this.siblings(".error-message").hide();
          $this.attr("aria-invalid", "false");
        }
      } else {
        $this.removeClass("error");
        $this.closest(".form-group").removeClass("error");
        $this.siblings(".error-message").hide();
        $this.attr("aria-invalid", "false");
      }
    }
  });
});
