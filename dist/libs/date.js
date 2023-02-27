libs.date_getCurrentDate = function () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today.toString();
};
libs.date_getCurrentHour = function () {
    var today = new Date();
    return String(today.getHours());
};
