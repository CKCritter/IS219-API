$(document).ready(function() {
    console.log("ready")
    $('#hw_100').DataTable( {
        "ajax": "http://localhost:9080/api/v1/hw_100",
        "columns": [
            { "data": "id" },
            { "data": "Index" },
            { "data": "Height_Inches" },
            { "data": "Weight_Pounds" }
        ],
    } );
} );