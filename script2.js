function newItem() {
    // Adding a new item to the list
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.text(inputValue);

    if (inputValue === '') {
      alert("You must write something!");
    } 
    else {
        $('#list').append(li);

        // Styling for crossOutButton element
        let crossOutButton = $('<button></button>');
        crossOutButton.text('X');
        crossOutButton.css({
            'background': 'none',
            'border': 'none',
            'float': 'right',
            'color': '#025f70',
            'font-weight': 800
        });

        li.append(crossOutButton);

        crossOutButton.on("click", function() {
          li.addClass("delete");
        });
    }

    // Crossing an item out
    function crossOut() {
      li.toggleClass("strike");
    }

    li.on("dblclick", crossOut);

    // Reordering the items
    $('#list').sortable();
}

// Ensure you have included jQuery in your HTML file before running this code.