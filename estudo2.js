const searchInput = document.getElementById('search');

// console.log(searchInput)

searchInput.addEventListener('input', (event) => {

    // console.log(event.target.value)
    const value = formatString(event.target.value)

    // console.log(value)
    // console.log(formatString(value))
    const items = document.querySelectorAll('.items .item');
    // console.log(items)

    const noResults = document.getElementById('no-results');

    let hasResults = false;




    //-> use an if -> to make sure there's something
    //if the value('input') is dif than 'nothing'
    //'ll exec normally..
    //if not-> 'll still show the list of items
    //the else in the end
    //'ll make sure still works properly
    //but with this 'if'
    //I'll gain some performance

    if (value != '') {
            
        items.forEach(item => {
            const itemTitle = item.querySelector('.item-title').textContent;
            
            // console.log(item.textContent)

            // console.log(item.textContent.indexOf(value))

            // console.log(formatString(item.textContent))
            // console.log(formatString(item.textContent).indexOf(value))

            const itemDescription = item.querySelector('.item-description').textContent;

            if(formatString(itemTitle).indexOf(value) !== -1 || formatString(itemDescription).indexOf(value) !== -1) {

                item.style.display = 'flex';

                hasResults = true;

            } else{
                item.style.display = 'none';

            }
        })

        if (hasResults) {
            
            noResults.style.display = 'none';
        } else{
           
            noResults.style.display =  'block';
            
        }

    } else{
        items.forEach(item => item.style.display = 'flex');

        noResults.style.display = 'none';
    }
});

function formatString(value) {
   
    return value
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}