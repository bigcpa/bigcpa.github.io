$(document).ready(function() {

	// Modal controls
	var $overlay = $(".modal-wrap"),
	$modal   = $(".modal"),
	$video   = $("#video"),
	$lk      = $("#down").find("a"),
	$CAT     = $("#download").find("a");
	$video.on("click", function() {
		$overlay.fadeIn(50,function() {
			$modal.fadeIn(250);
		});
		return false;
	});
	$lk.on("click", function() {
		$overlay.fadeIn(50,function() {
			$modal.fadeIn(250);
		});
		return false;
	});
	$CAT.on("click", function() {
		$overlay.fadeIn(50,function() {
			$modal.fadeIn(250);
		});
		return false;
	});
	$(document).click(function(event) {
		if(!$(event.target).closest(".modal").length) {
			if($modal.is(":visible")) {
				$overlay.fadeOut(100, function() {
					$modal.hide();
				});
			}
		}
	});

});