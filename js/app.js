function addItem () { 
	var newItem = $(".new-item").val();
	var newEl = '<li class="new"><input type="checkbox" class="done">'+newItem+' <button class="delete">x</button></li>';
	$(".items ul").append(newEl);
	$(".new-item").val("");
}

function deleteItem () { 
	$(this).parent().remove();
}

function doneItem () { 
	if ($(this).parent().css('textDecoration') == 'line-through') { 
		$(this).parent().css('textDecoration', 'none').css('color', 'white').css('font-style', 'normal');
	} else {

	$(this).parent().css('textDecoration', 'line-through').css('color', 'gray').css('font-style', 'italic');
	}
}

$(document).on("ready", function() {
	$("#add").on("click", addItem); 
	//$(".delete").on("click", deleteItem);
	//$(".done").on("click", doneItem);
	$(document).on("click", ".done", doneItem);
	$(document).on("click", ".delete", deleteItem);
});
