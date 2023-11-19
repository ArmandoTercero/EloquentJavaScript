let size = 8;

for (i = 0; i < size; i++) {
    let row = "";
    if (i % 2 === 0) {
        for (j = 0; j < size; j++)
            row += " #";
    } else {
        for (j = 0; j < size; j++)
            row += "# ";
    }
    console.log(row);
}