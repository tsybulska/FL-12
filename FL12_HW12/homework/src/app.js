const rootNode = document.getElementById('root');

function createSet() {
    let newItem = document.createElement('div'),
    name = document.createElement('input'),
    add = document.createElement('button'),
    save = document.createElement('button'),
    cancel = document.createElement('button');
    name.classList.add('input');
    add.classList.add('button');
    save.classList.add('button');
    cancel.classList.add('button');
    name.placeholder = 'Name';
    add.innerHTML = 'Add terms';
    save.innerHTML = 'Save changes';
    cancel.innerHTML = 'Cancel';
    newItem.appendChild(name);
    newItem.appendChild(add);
    newItem.appendChild(save);
    newItem.appendChild(cancel);
    rootNode.appendChild(newItem);

    let newSet = document.createElement('div'),
    term = document.createElement('input'),
    def = document.createElement('input'),
    remove = document.createElement('button');
    term.classList.add('input');
    def.classList.add('input');
    remove.classList.add('button');
    add.classList.add('button');
    term.placeholder = 'Enter term';
    def.placeholder = 'Enter definition';
    remove.innerHTML = 'Remove';
    newSet.appendChild(term);
    newSet.appendChild(def);
    newSet.appendChild(remove);
    rootNode.appendChild(newSet);
}

function mainPage() {
    window.location.hash = '';
}

function addPage() {
    window.location.hash = '#add';
}

function modifyPage() {
    window.location.hash = '#modify';
}

createSet();