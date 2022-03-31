
$(document).ready(function(){
  $("#buttonstart").click(function(){
    $(".s2").addClass("blocker");
    $('.s31').css("display", "none");
      $('.s32').css("display", "none");
      // $(".s4").css("display", "none");
      $(".s41").css("display", "none");
      $(".s42").css("display", "none");
      $('.energy').css("height", "perc_screen");
});
  });

  $('#buttonreplay').click(function() {
     location.reload();
  });

  $('#buttonreplay2').click(function() {
     location.reload();
  });

  $('#buttonreplay3').click(function() {
     location.reload();
  });

  $("#buttonnext1").click(function(){
    $(".s3").addClass("blocker");
    $('.s31').css("display", "block");
    $(".win").css("display", "none");
});

$("#buttonnext2").click(function(){
  $(".s3").addClass("blocker");
  $('.s31').css("display", "none");
  $(".win2").css("display", "none");
  $('.s32').css("display", "block");
});

$("#buttonnext3, #buttonnext43, #buttonend").click(function(){
  location.reload();
});


$("#buttonnext41").click(function(){
  $(".s4").css("display", "none");
  $('.s42').css("display", "none");
  $('.s31').css("display", "none");
  $('.s32').css("display", "none");
  $(".win2").css("display", "none");
  $(".win3").css("display", "none");
  $(".win4").css("display", "none");
  $('.s41').css("display", "block");
});

$("#buttonnext42").click(function(){
  $('.s41').css("display", "none");
  $(".win4").css("display", "none");
  $('.s42').css("display", "block");
});


$("#buttonnext51").click(function(){
  $(".s4").css("display", "none");
  $('.s41').css("display", "none");
  $('.s42').css("display", "none");
  $('.s31').css("display", "none");
  $('.s32').css("display", "none");
  $(".s5").css("display", "none");
  $(".win2").css("display", "none");
  $(".win3").css("display", "none");
  $(".win4").css("display", "none");
  $('.s51').css("display", "block");
});

$("#buttonnext52").click(function(){
  $('.s51').css("display", "none");
  $(".win7").css("display", "none");
  $('.s52').css("display", "block");
});

  $(function () {
    let count = 6;
    $('.score1').html('попыток: ' + count);
    $(' #f1, #f2, #f3, #f4, #f13, #f14, #f15, #f16, #f17, #f18, #f19, #f20').click(function () {
      count -= 1;
      $('.score1').html('попыток: ' + count);
      if (count == 0) {
        $('.error3').css("display", "block");
        setTimeout(function(){
          $(".error3").css("display", "block");
        },1000);
      }
       });
     });

     $(function () {
       let count = 6;
       $('.score2').html('попыток: ' + count);
       $(' #f5, #f6, #f7, #f8, #f21, #f22, #f23, #f24, #f25, #f26, #f27, #f28').click(function () {
         count -= 1;
         $('.score2').html('попыток: ' + count);
         if (count == 0) {
           $('.error3').css("display", "block");
           setTimeout(function(){
             $(".error3").css("display", "block");
           },1000);
         }
          });
        });

        $(function () {
          let count = 6;
          $('.score3').html('попыток: ' + count);
          $(' #f9, #f10, #f11, #f12, #f29, #f30, #f31, #f32, #f33, #f34, #f35, #f36').click(function () {
            count -= 1;
            $('.score3').html('попыток: ' + count);
            if (count == 0) {
              $('.error3').css("display", "block");
              setTimeout(function(){
                $(".error3").css("display", "block");
              },1000);
            }
             });
           });




     // $("#buttonnext").click(function(){
     //   $(".s1").addClass("blocker");
     //   $(".s2").removeClass("blocker");
     // });


    $(".level1").click(function(){
      $(".s1").addClass("blocker");
      $(".s2").removeClass("blocker");
  });



      $(".teapot").click(function(){
        $(".s4").addClass("blocker");
        $(".s5").addClass("blocker");
        $(".s5").css("display", "none");
        $('.s51').css("display", "none");
        $('.s52').css("display", "none");
        // $(".s2").removeClass("blocker");
        $(".s3").removeClass("blocker");
    });



        $(".netflix").click(function(){
          $(".s4").removeClass("blocker");
          $(".s5").addClass("blocker");
          // $(".s2").removeClass("blocker");
          $(".s3").addClass("blocker");
          $('.s41').css("display", "none");
          $('.s42').css("display", "none");
          $(".s5").css("display", "none");
          $('.s51').css("display", "none");
          $('.s52').css("display", "none");
      });

      $(".dolin").click(function(){
        $(".s4").addClass("blocker");
        $('.s51').css("display", "none");
        $('.s52').css("display", "none");
        // $(".s2").removeClass("blocker");
        $(".s3").addClass("blocker");
    });

      $("#ftrue").click(function(){
        $("#ftrue").css("background-color" , "#45FF54");
        $("#ftrue").css("border" , "#45FF54");
        $("#buttext1").css("color" , "black");
        $(".win").css("display", "block");
          setTimeout( function() {  $(".error").remove(); }, 4000);
    });


    $("#ftrue2").click(function(){
      $("#ftrue2").css("background-color" , "#45FF54");
      $("#ftrue2").css("border" , "#45FF54");
      $("#buttext2").css("color" , "black");
      $(".win4").css("display", "block");
      setTimeout( function() {  $(".error").remove(); }, 4000);
    });

    $("#ftrue3").click(function(){
      $("#ftrue3").css("background-color" , "#45FF54");
      $("#ftrue3").css("border" , "#45FF54");
      $("#buttext3").css("color" , "black");
      $(".win6").css("display", "block");
      setTimeout( function() {  $(".error").remove(); }, 4000);
    });

    $("#ftrue31").click(function(){
      $("#ftrue31").css("background-color" , "#45FF54");
      $("#ftrue31").css("border" , "#45FF54");
      $("#buttext31").css("color" , "black");
        $(".win2").css("display", "block");
        setTimeout( function() {  $(".error2").remove(); }, 4000);
    });

    $("#ftrue32").click(function(){
      $("#ftrue32").css("background-color" , "#45FF54");
      $("#ftrue32").css("border" , "#45FF54");
      $("#buttext32").css("color" , "black");
        $(".win3").css("display", "block");
            setTimeout( function() {  $(".error3").remove(); }, 4000);
    });

    $("#ftrue41").click(function(){
      $("#ftrue41").css("background-color" , "#45FF54");
      $("#ftrue41").css("border" , "#45FF54");
      $("#buttext41").css("color" , "black");
        $(".win4").css("display", "block");
        setTimeout( function() {  $(".error2").remove(); }, 4000);
    });

    $("#ftrue42").click(function(){
      $("#ftrue42").css("background-color" , "#45FF54");
      $("#ftrue42").css("border" , "#45FF54");
      $("#buttext42").css("color" , "black");
        $(".win5").css("display", "block");
    });

    $("#ftrue51").click(function(){
      $("#ftrue51").css("background-color" , "#45FF54");
      $("#ftrue51").css("border" , "#45FF54");
      $("#buttext51").css("color" , "black");
        $(".win7").css("display", "block");
          setTimeout( function() {  $(".error2").remove(); }, 4000);
    });

    $("#ftrue52").click(function(){
      $("#ftrue52").css("background-color" , "#45FF54");
      $("#ftrue52").css("border" , "#45FF54");
      $("#buttext52").css("color" , "black");
        $(".win8").css("display", "block");
          setTimeout( function() {  $(".error3").remove(); }, 4000);
    });


  //   $("#f1").click(function(){
  //     $("#f1").css("background-color" , "red");
  //     $("#f1").css("border" , "red");
  //     $("#f1").css("border-width" , "3px");
  //     $("#buttextf1").css("color" , "black");
  //
  // });

  $("#f1").click(function(){
    $("#f1").css("background-color" , "red");
    $("#f1").css("border-color" , "red");
    $("#buttextf1").css("color" , "black");

});
  $("#f1").click(function(){
      setTimeout( function() {
      $("#f1").css("background-color" , "black");
      $("#f1").css("border-color" , "#FFFFFF");
      $("#buttextf1").css("color" , "#FFFFFF");
    }, 200);
  });



  $("#f2").click(function(){
    $("#f2").css("background-color" , "red");
    $("#f2").css("border-color" , "red");
    $("#buttextf2").css("color" , "black");

});
$("#f2").click(function(){
      setTimeout( function() {
      $("#f2").css("background-color" , "black");
      $("#f2").css("border-color" , "#FFFFFF");
      $("#buttextf2").css("color" , "#FFFFFF");
    }, 200);
  });



  $("#f3").click(function(){
    $("#f3").css("background-color" , "red");
    $("#f3").css("border-color" , "red");
    $("#buttextf3").css("color" , "black");

});
$("#f3").click(function(){
      setTimeout( function() {
      $("#f3").css("background-color" , "black");
      $("#f3").css("border-color" , "#FFFFFF");
      $("#buttextf3").css("color" , "#FFFFFF");
    }, 200);
  });


  $("#f4").click(function(){
    $("#f4").css("background-color" , "red");
    $("#f4").css("border-color" , "red");
    $("#buttextf4").css("color" , "black");

  });
  $("#f4").click(function(){
      setTimeout( function() {
      $("#f4").css("background-color" , "black");
      $("#f4").css("border-color" , "#FFFFFF");
      $("#buttextf4").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f5").click(function(){
    $("#f5").css("background-color" , "red");
    $("#f5").css("border-color" , "red");
    $("#buttextf5").css("color" , "black");

  });
  $("#f5").click(function(){
      setTimeout( function() {
      $("#f5").css("background-color" , "black");
      $("#f5").css("border-color" , "#FFFFFF");
      $("#buttextf5").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f6").click(function(){
    $("#f6").css("background-color" , "red");
    $("#f6").css("border-color" , "red");
    $("#buttextf6").css("color" , "black");

  });
  $("#f6").click(function(){
      setTimeout( function() {
      $("#f6").css("background-color" , "black");
      $("#f6").css("border-color" , "#FFFFFF");
      $("#buttextf6").css("color" , "#FFFFFF");
    }, 200);
  });


  $("#f7").click(function(){
    $("#f7").css("background-color" , "red");
    $("#f7").css("border-color" , "red");
    $("#buttextf7").css("color" , "black");

  });
  $("#f7").click(function(){
      setTimeout( function() {
      $("#f7").css("background-color" , "black");
      $("#f7").css("border-color" , "#FFFFFF");
      $("#buttextf7").css("color" , "#FFFFFF");
    }, 200);
  });


  $("#f8").click(function(){
    $("#f8").css("background-color" , "red");
    $("#f8").css("border-color" , "red");
    $("#buttextf8").css("color" , "black");

  });
  $("#f8").click(function(){
      setTimeout( function() {
      $("#f8").css("background-color" , "black");
      $("#f8").css("border-color" , "#FFFFFF");
      $("#buttextf8").css("color" , "#FFFFFF");
    }, 200);
  });


  $("#f9").click(function(){
    $("#f9").css("background-color" , "red");
    $("#f9").css("border-color" , "red");
    $("#buttextf9").css("color" , "black");

});
$("#f9").click(function(){
      setTimeout( function() {
      $("#f9").css("background-color" , "black");
      $("#f9").css("border-color" , "#FFFFFF");
      $("#buttextf9").css("color" , "#FFFFFF");
    }, 200);
  });


  $("#f10").click(function(){
    $("#f10").css("background-color" , "red");
    $("#f10").css("border-color" , "red");
    $("#buttextf10").css("color" , "black");

});
$("#f10").click(function(){
      setTimeout( function() {
      $("#f10").css("background-color" , "black");
      $("#f10").css("border-color" , "#FFFFFF");
      $("#buttextf10").css("color" , "#FFFFFF");
    }, 200);
  });


  $("#f11").click(function(){
    $("#f11").css("background-color" , "red");
    $("#f11").css("border-color" , "red");
    $("#buttextf11").css("color" , "black");
});
$("#f11").click(function(){
      setTimeout( function() {
      $("#f11").css("background-color" , "black");
      $("#f11").css("border-color" , "#FFFFFF");
      $("#buttextf11").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f12").click(function(){
    $("#f12").css("background-color" , "red");
    $("#f12").css("border-color" , "red");
    $("#buttextf12").css("color" , "black");
});
$("#f12").click(function(){
      setTimeout( function() {
      $("#f12").css("background-color" , "black");
      $("#f12").css("border-color" , "#FFFFFF");
      $("#buttextf12").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f13").click(function(){
    $("#f13").css("background-color" , "red");
    $("#f13").css("border-color" , "red");
    $("#buttextf13").css("color" , "black");
});
$("#f13").click(function(){
      setTimeout( function() {
      $("#f13").css("background-color" , "black");
      $("#f13").css("border-color" , "#FFFFFF");
      $("#buttextf13").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f14").click(function(){
    $("#f14").css("background-color" , "red");
    $("#f14").css("border-color" , "red");
    $("#buttextf14").css("color" , "black");
});
$("#f14").click(function(){
      setTimeout( function() {
      $("#f14").css("background-color" , "black");
      $("#f14").css("border-color" , "#FFFFFF");
      $("#buttextf14").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f15").click(function(){
    $("#f15").css("background-color" , "red");
    $("#f15").css("border-color" , "red");
    $("#buttextf15").css("color" , "black");
});
$("#f15").click(function(){
      setTimeout( function() {
      $("#f15").css("background-color" , "black");
      $("#f15").css("border-color" , "#FFFFFF");
      $("#buttextf15").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f16").click(function(){
    $("#f16").css("background-color" , "red");
    $("#f16").css("border-color" , "red");
    $("#buttextf16").css("color" , "black");
});
$("#f16").click(function(){
      setTimeout( function() {
      $("#f16").css("background-color" , "black");
      $("#f16").css("border-color" , "#FFFFFF");
      $("#buttextf16").css("color" , "#FFFFFF");
    }, 200);
  });


  $("#f17").click(function(){
    $("#f17").css("background-color" , "red");
    $("#f17").css("border-color" , "red");
    $("#buttextf17").css("color" , "black");
});

$("#f17").click(function(){
      setTimeout( function() {
      $("#f17").css("background-color" , "black");
      $("#f17").css("border-color" , "#FFFFFF");
      $("#buttextf17").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f18").click(function(){
    $("#f18").css("background-color" , "red");
    $("#f18").css("border-color" , "red");
    $("#buttextf18").css("color" , "black");
});
$("#f18").click(function(){
      setTimeout( function() {
      $("#f18").css("background-color" , "black");
      $("#f18").css("border-color" , "#FFFFFF");
      $("#buttextf18").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f19").click(function(){
    $("#f19").css("background-color" , "red");
    $("#f19").css("border-color" , "red");
    $("#buttextf19").css("color" , "black");
});
$("#f19").click(function(){
      setTimeout( function() {
      $("#f19").css("background-color" , "black");
      $("#f19").css("border-color" , "#FFFFFF");
      $("#buttextf19").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f20").click(function(){
    $("#f20").css("background-color" , "red");
    $("#f20").css("border-color" , "red");
    $("#buttextf20").css("color" , "black");
});
$("#f20").click(function(){
      setTimeout( function() {
      $("#f20").css("background-color" , "black");
      $("#f20").css("border-color" , "#FFFFFF");
      $("#buttextf20").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f21").click(function(){
    $("#f21").css("background-color" , "red");
    $("#f21").css("border-color" , "red");
    $("#buttextf21").css("color" , "black");
});
$("#f21").click(function(){
      setTimeout( function() {
      $("#f21").css("background-color" , "black");
      $("#f21").css("border-color" , "#FFFFFF");
      $("#buttextf21").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f22").click(function(){
    $("#f22").css("background-color" , "red");
    $("#f22").css("border-color" , "red");
    $("#buttextf22").css("color" , "black");
});
$("#f22").click(function(){
      setTimeout( function() {
      $("#f22").css("background-color" , "black");
      $("#f22").css("border-color" , "#FFFFFF");
      $("#buttextf22").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f23").click(function(){
    $("#f23").css("background-color" , "red");
    $("#f23").css("border-color" , "red");
    $("#buttextf23").css("color" , "black");
});
$("#f23").click(function(){
      setTimeout( function() {
      $("#f23").css("background-color" , "black");
      $("#f23").css("border-color" , "#FFFFFF");
      $("#buttextf23").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f24").click(function(){
    $("#f24").css("background-color" , "red");
    $("#f24").css("border-color" , "red");
    $("#buttextf24").css("color" , "black");
});
$("#f24").click(function(){
      setTimeout( function() {
      $("#f24").css("background-color" , "black");
      $("#f24").css("border-color" , "#FFFFFF");
      $("#buttextf24").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f25").click(function(){
    $("#f25").css("background-color" , "red");
    $("#f25").css("border-color" , "red");
    $("#buttextf25").css("color" , "black");
});
$("#f25").click(function(){
      setTimeout( function() {
      $("#f25").css("background-color" , "black");
      $("#f25").css("border-color" , "#FFFFFF");
      $("#buttextf25").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f26").click(function(){
    $("#f26").css("background-color" , "red");
    $("#f26").css("border-color" , "red");
    $("#buttextf26").css("color" , "black");
});
$("#f26").click(function(){
      setTimeout( function() {
      $("#f26").css("background-color" , "black");
      $("#f26").css("border-color" , "#FFFFFF");
      $("#buttextf26").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f27").click(function(){
    $("#f27").css("background-color" , "red");
    $("#f27").css("border-color" , "red");
    $("#buttextf27").css("color" , "black");
});
$("#f27").click(function(){
      setTimeout( function() {
      $("#f27").css("background-color" , "black");
      $("#f27").css("border-color" , "#FFFFFF");
      $("#buttextf27").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f28").click(function(){
    $("#f28").css("background-color" , "red");
    $("#f28").css("border-color" , "red");
    $("#buttextf28").css("color" , "black");
});
$("#f28").click(function(){
      setTimeout( function() {
      $("#f28").css("background-color" , "black");
      $("#f28").css("border-color" , "#FFFFFF");
      $("#buttextf28").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f29").click(function(){
    $("#f29").css("background-color" , "red");
    $("#f29").css("border-color" , "red");
    $("#buttextf29").css("color" , "black");
});
$("#f29").click(function(){
      setTimeout( function() {
      $("#f29").css("background-color" , "black");
      $("#f29").css("border-color" , "#FFFFFF");
      $("#buttextf29").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f30").click(function(){
    $("#f30").css("background-color" , "red");
    $("#f30").css("border-color" , "red");
    $("#buttextf30").css("color" , "black");
});
$("#f30").click(function(){
      setTimeout( function() {
      $("#f30").css("background-color" , "black");
      $("#f30").css("border-color" , "#FFFFFF");
      $("#buttextf30").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f31").click(function(){
    $("#f31").css("background-color" , "red");
    $("#f31").css("border-color" , "red");
    $("#buttextf31").css("color" , "black");
});
$("#f31").click(function(){
      setTimeout( function() {
      $("#f31").css("background-color" , "black");
      $("#f31").css("border-color" , "#FFFFFF");
      $("#buttextf31").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f32").click(function(){
    $("#f32").css("background-color" , "red");
    $("#f32").css("border-color" , "red");
    $("#buttextf32").css("color" , "black");
});
$("#f32").click(function(){
      setTimeout( function() {
      $("#f32").css("background-color" , "black");
      $("#f32").css("border-color" , "#FFFFFF");
      $("#buttextf32").css("color" , "#FFFFFF");
    }, 200);
  });


  $("#f33").click(function(){
    $("#f33").css("background-color" , "red");
    $("#f33").css("border-color" , "red");
    $("#buttextf33").css("color" , "black");
});
$("#f33").click(function(){
      setTimeout( function() {
      $("#f33").css("background-color" , "black");
      $("#f33").css("border-color" , "#FFFFFF");
      $("#buttextf33").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f34").click(function(){
    $("#f34").css("background-color" , "red");
    $("#f34").css("border-color" , "red");
    $("#buttextf34").css("color" , "black");
});
$("#f34").click(function(){
      setTimeout( function() {
      $("#f34").css("background-color" , "black");
      $("#f34").css("border-color" , "#FFFFFF");
      $("#buttextf34").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f35").click(function(){
    $("#f35").css("background-color" , "red");
    $("#f35").css("border-color" , "red");
    $("#buttextf35").css("color" , "black");
});
$("#f35").click(function(){
      setTimeout( function() {
      $("#f35").css("background-color" , "black");
      $("#f35").css("border-color" , "#FFFFFF");
      $("#buttextf35").css("color" , "#FFFFFF");
    }, 200);
  });

  $("#f36").click(function(){
    $("#f36").css("background-color" , "red");
    $("#f36").css("border-color" , "red");
    $("#buttextf36").css("color" , "black");
});
$("#f36").click(function(){
      setTimeout( function() {
      $("#f36").css("background-color" , "black");
      $("#f36").css("border-color" , "#FFFFFF");
      $("#buttextf36").css("color" , "#FFFFFF");
    }, 200);
  });
//   $("#exit").click(function(){
//       $(".s1").removeClass("blocker");
// });
//
//     $("#exit1").click(function(){
//         $(".s1").removeClass("blocker");
//   });

$('#exit').click(function() {
   location.reload();
});




  $(document).ready(function() {
      setTimeout( function() {  $("#st0").remove(); }, 4000);
  });
  // $(document).ready(function() {
  //     setTimeout( function() {  $(document).addclass("s1"); }, 6000);
  // });



  $(function () {
  $({ n: 4 }).animate({n: 1 }, {
  duration: 4E3,
  easing: "linear",
  step: function (a) {
  $(".ptut").html(a | 0)
  }
  })
  });


  // $(function () {
  // $({ n: 59 }).animate({n: 0 }, {
  // duration: 60E3,
  // easing: "linear",
  // step: function (a) {
  // $("#time2").html(a | 0)
  // }
  // })
  // });
  //
  //
  // $(function () {
  // $({ n: 59 }).animate({n: 0 }, {
  // duration: 60E3,
  // easing: "linear",
  // step: function (a) {
  // $("#time3").html(a | 0)
  // }
  // })
  // });


var seconds1 = 1*60+1;
function countDown1() {
  if (seconds1 > 0) {
          seconds1 --;
              let h1 = seconds1/3600 ^ 0,
              m1 = (seconds1-h1*3600)/60 ^ 0,
              s1 = seconds1-h1*3600-m1*60,
              time1 = (m1<10?"0"+m1:m1)+":"+(s1<10?"0"+s1:s1);
          $("#time1").text(time1);
  }
  else {
    $('.error').css("display", "block");
    setTimeout(function(){
      $(".error").css("display", "block");
    },1000);
  }
  setTimeout(function() {
      countDown1();
  }, 1000);
}
// $(function() {
// countDown1()
// });




var seconds2 = 1*60+1;
function countDown2() {
  if (seconds2 > 0) {
          seconds2 --;
              let h = seconds2/3600 ^ 0,
              m = (seconds2-h*3600)/60 ^ 0,
              s = seconds2-h*3600-m*60,
              time2 = (m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
          $("#time2").text(time2);
  }
  setTimeout(function() {
      countDown2();
  }, 1000);
}
// $(function() {
// countDown2()
// });




var seconds5 = 1*60+1;
function countDown5() {
  if (seconds5 > 0) {
          seconds5 --;
              let h = seconds5/3600 ^ 0,
              m = (seconds5-h*3600)/60 ^ 0,
              s = seconds5-h*3600-m*60,
              time5 = (m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
          $("#time5").text(time5);
  }
  setTimeout(function() {
      countDown5();
  }, 1000);
}



var seconds31 = 1*60+1;
function countDown31() {
  if (seconds31 > 0) {
          seconds31 --;
              let h = seconds31/3600 ^ 0,
              m = (seconds31-h*3600)/60 ^ 0,
              s = seconds31-h*3600-m*60,
              time31 = (m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
          $("#time31").text(time31);
  }
  else {
    $('.error2').css("display", "block");
    setTimeout(function(){
      $(".error2").css("display", "block");
    },1000);
  }
  setTimeout(function() {
      countDown31();
  }, 1000);
}


var seconds32 = 1*60+1;
function countDown32() {
  if (seconds32 > 0) {
          seconds32 --;
              let h = seconds32/3600 ^ 0,
              m = (seconds32-h*3600)/60 ^ 0,
              s = seconds32-h*3600-m*60,
              time32 = (m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
          $("#time32").text(time32);
  }
  else {
    $('.error3').css("display", "block");
    setTimeout(function(){
      $(".error3").css("display", "block");
    },1000);
  }
  setTimeout(function() {
      countDown32();
  }, 1000);
}

var seconds41 = 1*60+1;
function countDown41() {
  if (seconds41 > 0) {
          seconds41 --;
              let h = seconds41/3600 ^ 0,
              m = (seconds41-h*3600)/60 ^ 0,
              s = seconds41-h*3600-m*60,
              time41 = (m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
          $("#time41").text(time41);
  }
  else {
    $('.error2').css("display", "block");
    setTimeout(function(){
      $(".error2").css("display", "block");
    },1000);
  }
  setTimeout(function() {
      countDown41();
  }, 1000);
}

var seconds42 = 1*60+1;
function countDown42() {
  if (seconds42 > 0) {
          seconds42 --;
              let h = seconds42/3600 ^ 0,
              m = (seconds42-h*3600)/60 ^ 0,
              s = seconds42-h*3600-m*60,
              time42 = (m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
          $("#time42").text(time42);
  }
  else {
    $('.error3').css("display", "block");
    setTimeout(function(){
      $(".error3").css("display", "block");
    },1000);
  }
  setTimeout(function() {
      countDown42();
  }, 1000);
}

var seconds51 = 1*60+1;
function countDown51() {
  if (seconds51 > 0) {
          seconds51 --;
              let h = seconds51/3600 ^ 0,
              m = (seconds51-h*3600)/60 ^ 0,
              s = seconds51-h*3600-m*60,
              time51 = (m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
          $("#time51").text(time51);
  }
  else {
    $('.error2').css("display", "block");
    setTimeout(function(){
      $(".error2").css("display", "block");
    },1000);
  }
  setTimeout(function() {
      countDown51();
  }, 1000);
}


var seconds52 = 1*60+1;
function countDown52() {
  if (seconds52 > 0) {
          seconds52 --;
              let h = seconds52/3600 ^ 0,
              m = (seconds52-h*3600)/60 ^ 0,
              s = seconds52-h*3600-m*60,
              time52 = (m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
          $("#time52").text(time52);
  }
  else {
    $('.error3').css("display", "block");
    setTimeout(function(){
      $(".error3").css("display", "block");
    },1000);
  }
  setTimeout(function() {
      countDown52();
  }, 1000);
}

// function () {
//   if (seconds2 = 0) {
//     $('.error').css("display", "block");
//   }
//   });
