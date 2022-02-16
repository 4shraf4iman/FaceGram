"use strict";
exports.id = 551;
exports.ids = [551];
exports.modules = {

/***/ 551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ loginAuth),
/* harmony export */   "k": () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(975);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const loginAuth = (data)=>async (dispatch)=>{
        try {
            if (data.username === 'admin' && data.password === 'admin') {
                dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .TYPES.ADMINLOGIN */ .v.ADMINLOGIN,
                    payload: data
                });
            } else if (data.username === 'user' && data.password === 'user') {
                dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .TYPES.USERLOGIN */ .v.USERLOGIN,
                    payload: data
                });
            } else {
                dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .TYPES.WRONGCRED */ .v.WRONGCRED
                });
            }
        } catch (err) {
            console.log(err);
        }
    }
;
const logout = (data)=>async (dispatch)=>{
        try {
            dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_0__/* .TYPES.LOGOUT */ .v.LOGOUT
            });
        } catch (err) {
            console.log(err);
        }
    }
;


/***/ }),

/***/ 975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ TYPES)
/* harmony export */ });
const TYPES = {
    GETPOST: "GETPOST",
    USERLOGIN: "USERLOGIN",
    ADMINLOGIN: "ADMINLOGIN",
    LOGOUT: "LOGOUT",
    WRONGCRED: "WRONGCRED",
    GETCOMMENT: "GETCOMMENT",
    DELETECOMMENT: "DELETECOMMENT",
    EDITCOMMENT: "EDITCOMMENT",
    DELETEPOST: "DELETEPOST",
    EDITPOST: "EDITPOST",
    LOADING: "LOADING",
    STOPLOADING: "STOPLOADING"
};


/***/ })

};
;