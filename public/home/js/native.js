$.ajaxSetup({
  headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
});
$(document).ready(function () {
  $("#registerForm").submit(function (e) {
    e.preventDefault();
    $("#regBtn")
      .prop("disabled", true)
      .html("Creating Account <i class='fa fa-spinner fa-spin'></i>");
    var url = $(this).attr("action");
    var callback = $(this).attr("data-callback");
    var method = $(this).attr("method");
    var formData = $(this).serialize();
    $.ajax({
      type: method,
      url: url,
      data: formData,
      dataType: "JSON",
      success: function (data) {
        console.log(data);
        if (data.status == 1) {
          $("#regBtn").prop("disabled", false).html("Submit & Register");
          swal(data.post, "", "warning");
        } else {
          swal("YOUR ACCOUNT IS CREATED", "Redirecting to Login", "success");
          window.location.href = callback;
        }
      },
      failure: function (e) {
        swal("OOPS! SOMETHING IS BROKEN", "Reloading Page", "danger");
        location.reload();
      },
    });
  });
  $("#resetForm").submit(function (e) {
    e.preventDefault();
    $("#resetBtn")
      .prop("disabled", true)
      .html("Validating Email <i class='fa fa-spinner fa-spin'></i>");
    $("#resetError").html("");
    var url = $(this).attr("action");
    var method = $(this).attr("method");
    var formData = $(this).serialize();
    $.ajax({
      type: method,
      url: url,
      data: formData,
      dataType: "JSON",
      success: function (data) {
        if (data.status == 1) {
          $("#resetBtn").prop("disabled", false).html("Reset Password");
          $("#resetError").html(
            "<div class='alert alert-dismissible alert-danger'><p><span>Error!</span> " +
              data.post +
              "</p></div>"
          );
        } else {
          swal(
            "RESET LINK SENT",
            "Check Your Email Inbox to Proceed",
            "success"
          );
          $("#resetBtn").html(
            "RESET LINK SENT <i class='fa fa-check-circle'></i>"
          );
        }
      },
      failure: function (e) {
        swal("OOPS! SOMETHING IS BROKEN", "Reloading Page", "danger");
        location.reload();
      },
    });
  });
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    $("#contactBtn")
      .prop("disabled", true)
      .html("SENDING MESSAGE <i class='fa fa-spinner fa-spin'></i>");
    var url = $(this).attr("action");
    var method = $(this).attr("method");
    var formData = $(this).serialize();
    $.ajax({
      type: method,
      url: url,
      data: formData,
      dataType: "JSON",
      success: function (data) {
        if (data.status == 1) {
          $("#contactBtn")
            .prop("disabled", false)
            .html("Send Message <i class='fa fa-arrow-circle-right'></i>");
          swal(data.post, "", "warning");
        } else {
          swal("YOUR MESSAGE HAVE BEEN SENT!", "", "success");
          $("#contactBtn").html(
            "WE WILL REPLY SOON! <i class='fa fa-check-circle-o'></i>"
          );
        }
      },
      failure: function (e) {
        swal("OOPS! SOMETHING IS BROKEN", "Reloading Page", "danger");
        location.reload();
      },
    });
  });
  $("#updateProfile").submit(function (e) {
    e.preventDefault();
    $("#updateBtn")
      .prop("disabled", true)
      .html("Saving Updates <i class='fa fa-spinner fa-spin'></i>");
    var url = $(this).attr("action");
    var method = $(this).attr("method");
    var formData = new FormData($(this)[0]);
    $.ajax({
      type: method,
      url: url,
      data: formData,
      processData: false,
      contentType: false,
      async: true,
      dataType: "JSON",
      success: function (data) {
        if (data.status == 1) {
          $("#updateBtn")
            .prop("disabled", false)
            .html("Save Updates <i class='fa fa-arrow-circle-right'></i>");
          swal(data.post, "", "warning");
        } else {
          swal("PROFILE UPDATED SUCCESSFULLY", "", "success");
          $("#updateBtn")
            .prop("disabled", false)
            .html("Save Updates <i class='fa fa-arrow-circle-right'></i>");
        }
      },
      failure: function (e) {
        swal("OOPS! SOMETHING IS BROKEN", "Reloading Page", "danger");
        location.reload();
      },
    });
  });
});
