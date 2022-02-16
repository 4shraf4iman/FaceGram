"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
// EXTERNAL MODULE: ./redux/actions/types.js
var types = __webpack_require__(975);
;// CONCATENATED MODULE: ./redux/reducers/post.js

const initialState = {
    posts: [],
    test: false
};
const postReducer = (state = initialState, action)=>{
    switch(action.type){
        case types/* TYPES.GETPOST */.v.GETPOST:
            return {
                ...state,
                posts: action.payload
            };
        case types/* TYPES.GETCOMMENT */.v.GETCOMMENT:
            return {
                ...state,
                posts: state.posts.map((item, index)=>{
                    // Find the item with the matching id
                    if (item.id === 1) {
                        // Return a new object
                        return {
                            ...item,
                            comments: action.payload.res // replace the email addr
                        };
                    }
                    // Leave every other item unchanged
                    return item;
                })
            };
        case types/* TYPES.EDITPOST */.v.EDITPOST:
            console.log(action.payload.number);
            return {
                ...state,
                posts: state.posts.map((item, index)=>{
                    // Find the item with the matching id
                    if (item.id == action.payload.number) {
                        // Return a new object
                        return {
                            ...item,
                            title: action.payload.res // replace the email addr
                        };
                    }
                    // Leave every other item unchanged
                    return item;
                })
            };
        case types/* TYPES.DELETEPOST */.v.DELETEPOST:
            return {
                ...state,
                posts: state.posts.filter((a)=>a.id !== action.payload.number
                )
            };
        default:
            return state;
    }
};
/* harmony default export */ const post = (postReducer);

;// CONCATENATED MODULE: ./redux/reducers/login.js

const login_initialState = {
    login: false,
    wrongCred: false,
    authority: ""
};
const loginReducer = (state = login_initialState, action)=>{
    switch(action.type){
        case types/* TYPES.USERLOGIN */.v.USERLOGIN:
            return {
                ...state,
                login: true,
                wrongCred: false,
                authority: action.payload.username
            };
        case types/* TYPES.ADMINLOGIN */.v.ADMINLOGIN:
            return {
                ...state,
                login: true,
                wrongCred: false,
                authority: action.payload.username
            };
        case types/* TYPES.LOGOUT */.v.LOGOUT:
            return {
                ...state,
                login: false,
                authority: ""
            };
        case types/* TYPES.WRONGCRED */.v.WRONGCRED:
            return {
                ...state,
                wrongCred: true
            };
        default:
            return state;
    }
};
/* harmony default export */ const login = (loginReducer);

;// CONCATENATED MODULE: ./redux/reducers/loading.js

const loading_initialState = {
    loading: false
};
const loading_loginReducer = (state = loading_initialState, action)=>{
    switch(action.type){
        case types/* TYPES.LOADING */.v.LOADING:
            return {
                ...state,
                loading: true
            };
        case types/* TYPES.STOPLOADING */.v.STOPLOADING:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};
/* harmony default export */ const loading = (loading_loginReducer);

;// CONCATENATED MODULE: ./redux/reducers/comment.js

const comment_initialState = {
    comments: []
};
const commentReducer = (state = comment_initialState, action)=>{
    switch(action.type){
        case types/* TYPES.GETCOMMENT */.v.GETCOMMENT:
            return {
                ...state,
                comments: action.payload.res
            };
        case types/* TYPES.EDITCOMMENT */.v.EDITCOMMENT:
            console.log(action.payload.number);
            return {
                ...state,
                comments: state.comments.map((item, index)=>{
                    // Find the item with the matching id
                    if (item.id == action.payload.number) {
                        // Return a new object
                        return {
                            ...item,
                            body: action.payload.res // replace the email addr
                        };
                    }
                    // Leave every other item unchanged
                    return item;
                })
            };
        case types/* TYPES.DELETECOMMENT */.v.DELETECOMMENT:
            return {
                ...state,
                comments: [
                    ...state.comments.slice(0, action.payload),
                    ...state.comments.slice(action.payload + 1)
                ]
            };
        default:
            return state;
    }
};
/* harmony default export */ const comment = (commentReducer);

;// CONCATENATED MODULE: ./redux/reducers/index.js





/* harmony default export */ const reducers = ((0,external_redux_namespaceObject.combineReducers)({
    postReducer: post,
    loginReducer: login,
    loadingReducer: loading,
    commentReducer: comment
}));

;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: ./redux/store.js





const middleware = [
    (external_redux_thunk_default())
];
const makeStore = ()=>(0,external_redux_namespaceObject.createStore)(reducers, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.compose)((0,external_redux_namespaceObject.applyMiddleware)(...middleware))))
;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./redux/actions/postAction.js


const getPost = (data)=>async (dispatch)=>{
        try {
            const res = await external_axios_default().get(`https://jsonplaceholder.typicode.com/posts`);
            dispatch({
                type: types/* TYPES.GETPOST */.v.GETPOST,
                payload: res.data
            });
        } catch (err) {
            console.log(err);
        }
    }
;

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./redux/actions/loginAction.js
var loginAction = __webpack_require__(551);
;// CONCATENATED MODULE: ./pages/_app.js








function MyApp({ Component , pageProps  }) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { loginReducer , loadingReducer , postReducer  } = (0,external_react_redux_.useSelector)((state)=>state
    );
    (0,external_react_.useEffect)(()=>{
        dispatch(getPost());
    }, [
        postReducer.test
    ]);
    (0,external_react_.useEffect)(()=>{
        const loginLs = JSON.parse(localStorage.getItem('login'));
        if (loginLs) {
            const log = {
                username: loginLs.authority,
                password: loginLs.authority
            };
            dispatch((0,loginAction/* loginAuth */.i)(log));
        }
    }, [
        loginReducer.login
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    }));
}
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [551], () => (__webpack_exec__(8373)));
module.exports = __webpack_exports__;

})();