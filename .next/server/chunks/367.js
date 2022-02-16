"use strict";
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 2367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/navBarMain.js
var navBarMain = __webpack_require__(7155);
// EXTERNAL MODULE: external "next/Link"
var Link_ = __webpack_require__(514);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
;// CONCATENATED MODULE: ./components/postCard.js



const PostCard = ({ content , index  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        index: index,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
            href: `post/${content.id}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card postcard cursor-pointer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "card-header title-font2",
                        children: content.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "card-body",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("blockquote", {
                            className: "blockquote mb-0",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "body-font2",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "Topic"
                                        }),
                                        " : ",
                                        content.body
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                                    className: "blockquote-footer",
                                    children: content.id
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const postCard = (PostCard);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./pages/App.js





const App = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { postReducer  } = (0,external_react_redux_.useSelector)((state)=>state
    );
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navBarMain/* default */.Z, {
                class: "navbar navbar-dark bg-dark"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "post-logo-text",
                children: "Posts:"
            }),
            postReducer.posts.length > 0 ? postReducer.posts.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(postCard, {
                        content: item,
                        index: index
                    })
                }, index)
            ) : null
        ]
    }));
};
/* harmony default export */ const pages_App = (App);


/***/ })

};
;