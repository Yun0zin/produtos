$(document).ready(function() {
    // Inicializa o carrossel
    $("#carousel").carousel();
  });

  $.fn.carousel = function() {
    var $this = this;
    var $ul = $this.find("ul");
    var $li = $ul.find("li");
    var $nav = $("#nav");
    var currentIndex = 0;

    // Adiciona os botões de navegação
    var $prevButton = $("<button>").text("<").appendTo($nav);
    $prevButton.click(function() {
      if (currentIndex === 0) {
        move($li.length - 1);
      } else {
        move(currentIndex - 1);
      }
    });

    $(document).on('click', '#prev', function() {
        $(this).siblings("ul").children("li:last-child").prependTo($(this).siblings("ul"));
        $(this).siblings("ul").css("left","-20%");
        $(this).siblings("ul").animate({left: "0%"}, 500);
    });

    $(document).on('click', '#prev', function() {
      if (currentIndex === 0) {
      move($li.length - 1);
      } else {
  move(currentIndex - 1);
    }
    });

    $li.each(function(i) {
      var $a = $("<a>").text(i + 1).appendTo($nav);
      $a.click(function() {
        move(i);
      });
    });

    var $nextButton = $("<button>").text(">").appendTo($nav);
    $nextButton.click(function() {
      if (currentIndex === $li.length - 1) {
        move(0);
      } else {
        move(currentIndex + 1);
      }
    });

    $(document).on('click', '#next', function() {
        $(this).siblings("ul").animate({left: "-20%"}, 500, function() {
          $(this).css("left","0");
          $(this).children("li:first-child").appendTo($(this));
        });
    });

    $nextButton.click(function() {
if (currentIndex === $li.length - 1) {
  move(0);
} else {
  move(currentIndex + 1);
}
});

$(document).on('click', '#next', function() {
if (currentIndex === $li.length - 1) {
  move(0);
} else {
  move(currentIndex + 1);
}
});

    // Define a largura do carrossel
    $ul.width(100 * $li.length + "%");

    // Move o carrossel para a posição inicial
    move(0);

    // Função para mover o carrossel
    function move(index) {
      currentIndex = index;
      $nav.find("a").removeClass("active");
      $nav.find("a").eq(index).addClass("active");

      var left = -100 * index + "%";
      $ul.animate({left: left}, 500);
    }
  };