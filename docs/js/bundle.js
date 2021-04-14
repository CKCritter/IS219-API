/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDIvLi9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCLGFBQWEsa0JBQWtCO0FBQy9CLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTCxDQUFDLEciLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlYWR5XCIpXHJcbiAgICAkKCcjaHdfMTAwJykuRGF0YVRhYmxlKCB7XHJcbiAgICAgICAgXCJhamF4XCI6IFwiaHR0cDovL2xvY2FsaG9zdDo5MDgwL2FwaS92MS9od18xMDBcIixcclxuICAgICAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgICAgICB7IFwiZGF0YVwiOiBcImlkXCIgfSxcclxuICAgICAgICAgICAgeyBcImRhdGFcIjogXCJJbmRleFwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJkYXRhXCI6IFwiSGVpZ2h0X0luY2hlc1wiIH0sXHJcbiAgICAgICAgICAgIHsgXCJkYXRhXCI6IFwiV2VpZ2h0X1BvdW5kc1wiIH1cclxuICAgICAgICBdLFxyXG4gICAgfSApO1xyXG59ICk7Il0sInNvdXJjZVJvb3QiOiIifQ==