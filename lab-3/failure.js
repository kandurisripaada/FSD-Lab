function fetch(success, callback) {
    setTimeout(function() {
        if (success) {
        const data = { message: "Data fetched successfully!" };
        callback(null, data);
        } else {
        const error = "Failed to fetch data.";
        callback(error, null);
        }
    }, 2000);
}

fetch(true, function(error, data) {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Success:", data.message);
    }
});

fetch(false, function(error, data) {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Success:", data.message);
    }
});
