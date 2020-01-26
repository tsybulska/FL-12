const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here

function createTree(node, structure) {
  let ul = document.createElement('ul');
  for (let el of structure){
    let li = document.createElement('li'),
    div = document.createElement('div'),
    icon = document.createElement('i'),
    span = document.createElement('span');
    icon.classList.add('material-icons');
    span.innerHTML = el.title;
    ul.appendChild(li);
    li.appendChild(div);
    div.appendChild(icon);
    div.appendChild(span);
    if (el.folder) {
      icon.innerHTML = 'folder';
    } else {
      icon.classList.add('insert_drive_file');
      icon.innerHTML = 'insert_drive_file';
    }
    if (el.children) {
      createTree(ul, el.children);
    } else if (el.children === false || el.children === null) {
      let empty = document.createElement('span');
      empty.classList.add('empty');
      empty.innerHTML = 'Folder is empty';
      li.appendChild(empty);
    }
  }
  node.appendChild(ul);
}
createTree(rootNode, structure);