const contentMap = document.querySelectorAll(".pj-des .content *:not(p)");
const tableOfContent = document.querySelector(".pj-des .table-of-content .toc ul");

// Making a table of content

let newListItem;
let newAcnhorItem;
let newUListItem;

contentMap.forEach((item)=>{
    //set the id for the element because i forgot to
    item.setAttribute('id', item.textContent)

    //Create a li if ele is an H2
    if (item.tagName == 'H2') {
        newListItem = document.createElement('li')
        newAcnhorItem = document.createElement('a')
        newUListItem = document.createElement('ul')

        newAcnhorItem.href = '#' + item.textContent;
        newAcnhorItem.classList.add('li-header');
        newAcnhorItem.textContent = item.textContent;

        newUListItem.classList.add('nested-li');

        newListItem.appendChild(newAcnhorItem);
        newListItem.appendChild(newUListItem)
        tableOfContent.appendChild(newListItem);
    } else if (item.tagName == 'H3') {
        newListItem = document.createElement('li');
        newAcnhorItem = document.createElement('a');

        newAcnhorItem.href = '#' + item.textContent;
        newAcnhorItem.textContent = item.textContent;

        newListItem.appendChild(newAcnhorItem);
        newUListItem.appendChild(newListItem);
    }
})