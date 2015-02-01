/**
 * Created by Kadirroi on 1.2.2015.
 */
var fs = require('fs');
var file_name = "deneme.txt";

fs.exists(file_name, function (exist) {

    if (exist) {
        console.log(file_name + " is exist");
        fs.stat(file_name, function (err, stat) {
            if (err)
                throw err;
            if (stat.isFile()) {
                fs.readFile(file_name, "utf8", function (err, data) {
                        if (err)
                            throw  err;
                        else
                            console.log(data);

                    }
                );

            }
        });

    }
    else {
        console.log(file_name + " is not exist");


    }


});
