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
function createTree(structure) {
  let main = document.createElement('ul');

  for (let el of structure) {
    let li = document.createElement('li'),
    icon = document.createElement('i'),
    span = document.createElement('span');
    icon.classList.add('material-icons');
    span.innerHTML = el.title;
    main.appendChild(li);
    li.appendChild(icon);
    li.appendChild(span);

    if (el.folder) {
      let ul = document.createElement('ul');
      ul.classList.add('close');
      icon.innerHTML = 'folder';
      main.appendChild(ul);

      icon.addEventListener('click', function() {
        ul.classList.toggle('close');
        icon.innerHTML === 'folder' ? icon.innerHTML = 'folder_open' : icon.innerHTML = 'folder';
      });

      if (el.children) {
        ul.appendChild(createTree(el.children));
      } else {
        let empty = document.createElement('span');
        empty.classList.add('empty');
        empty.innerHTML = 'Folder is empty';
        ul.appendChild(empty);
      }
    } else {
      icon.classList.add('insert_drive_file');
      icon.innerHTML = 'insert_drive_file';
    }
  }
  return main;
}
rootNode.appendChild(createTree(structure));