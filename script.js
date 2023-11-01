let mainContainer = document.getElementById('mainContainer');

//loop for 16 rows
for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.id = 'gridRow';

    //create 16 boxes
    for (let i = 0; i < 16; i++) {
        let box = document.createElement('div');
        box.id = 'gridBox'
        row.append(box);

        console.log(`Box ${i} was created`);
    }

    mainContainer.append(row);
}
  