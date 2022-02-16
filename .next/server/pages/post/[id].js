"use strict";
(() => {
var exports = {};
exports.id = 687;
exports.ids = [687];
exports.modules = {

/***/ 9969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ loading)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-bootstrap/Modal"
const Modal_namespaceObject = require("react-bootstrap/Modal");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Spinner"
const Spinner_namespaceObject = require("react-bootstrap/Spinner");
var Spinner_default = /*#__PURE__*/__webpack_require__.n(Spinner_namespaceObject);
;// CONCATENATED MODULE: ./components/loading.js




const Loading = ({ show  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
        show: show,
        animation: false,
        centered: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "center-lock",
            children: /*#__PURE__*/ jsx_runtime_.jsx((Spinner_default()), {
                animation: "border",
                role: "status",
                style: {
                    color: "white",
                    textAlign: "center"
                }
            })
        })
    }));
};
/* harmony default export */ const loading = (Loading);


/***/ }),

/***/ 6820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./redux/actions/types.js
var types = __webpack_require__(975);
;// CONCATENATED MODULE: ./redux/actions/commentAction.js


const getComment = (data)=>async (dispatch)=>{
        try {
            const res = await external_axios_default().get(`https://jsonplaceholder.typicode.com/posts/${data}/comments`);
            let resOb = {
                res: res.data,
                number: 1 - 1
            };
            dispatch({
                type: types/* TYPES.GETCOMMENT */.v.GETCOMMENT,
                payload: resOb
            });
        } catch (err) {
            console.log(err);
        }
    }
;

// EXTERNAL MODULE: ./components/navBarMain.js
var navBarMain = __webpack_require__(7155);
// EXTERNAL MODULE: ./components/loading.js + 2 modules
var loading = __webpack_require__(9969);
;// CONCATENATED MODULE: ./components/comments.js


const Comments = ({ item , index , adminAuth , edit , handleOpenEdit , editText , handleEditText , editComment , deleteComment  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: "list-group-item",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-flex w-100 justify-content-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                        className: "mb-1",
                        children: [
                            " ",
                            item.name
                        ]
                    }),
                    adminAuth ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>{
                            handleOpenEdit(index, item);
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                            className: "text-muted cursor-pointer",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                fill: "currentColor",
                                className: "bi bi-pencil-square",
                                viewBox: "0 0 16 16",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                    })
                                ]
                            })
                        })
                    }) : null
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mb-1 comment-body-font",
                children: item.body
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                className: "text-muted",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: "By :"
                    }),
                    " ",
                    item.email,
                    " ( ",
                    item.id,
                    " )"
                ]
            }),
            adminAuth ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: edit == index ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-control mt-2 mb-2",
                            value: editText,
                            onChange: handleEditText
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: editComment,
                                    className: "btn btn-primary mr-3",
                                    children: "Edit"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: deleteComment,
                                    className: "btn btn-danger",
                                    children: "Delete"
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                })
            }) : null
        ]
    }, index));
};
/* harmony default export */ const comments = (Comments);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/postPage.js










const PostPage = ({ post  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const { loginReducer , postReducer , commentReducer , loadingReducer  } = (0,external_react_redux_.useSelector)((state)=>state
    );
    (0,external_react_.useEffect)(()=>{
        dispatch(getComment(post.id));
    }, []);
    const { 0: editTitle , 1: setEditTitle  } = (0,external_react_.useState)(false);
    const { 0: editTitleText , 1: setEditTitleText  } = (0,external_react_.useState)("");
    const { 0: edit , 1: setEdit  } = (0,external_react_.useState)(null);
    const { 0: editCommentID , 1: setEditCommentID  } = (0,external_react_.useState)(null);
    const { 0: editText , 1: setEditText  } = (0,external_react_.useState)("");
    let adminAuth;
    loginReducer.authority === "admin" ? adminAuth = true : adminAuth = false;
    let wait = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms)
        )
    ;
    const handleOpenEditTitle = ()=>{
        if (editTitle === false) {
            setEditTitle(true);
            setEditTitleText(post.title);
        } else {
            setEditTitle(false);
            setEditTitleText("");
        }
    };
    const handleOpenEdit = (input, item)=>{
        if (input == edit) {
            setEdit(null);
            setEditText("");
        } else {
            setEdit(input);
            setEditCommentID(item.id);
            setEditText(item.body);
        }
    };
    const handleEditTitleText = (e)=>{
        e.preventDefault();
        setEditTitleText(e.target.value);
    };
    const handleEditText = (e)=>{
        e.preventDefault();
        setEditText(e.target.value);
    };
    const textPayload = {
        number: editCommentID,
        res: editText
    };
    const titleTextPayload = {
        number: post.id,
        res: editTitleText
    };
    const deleteComment = async ()=>{
        dispatch({
            type: types/* TYPES.LOADING */.v.LOADING
        });
        await wait(1000);
        dispatch({
            type: types/* TYPES.DELETECOMMENT */.v.DELETECOMMENT,
            payload: edit
        });
        setEdit(null);
        dispatch({
            type: types/* TYPES.STOPLOADING */.v.STOPLOADING
        });
    };
    const editComment = async ()=>{
        dispatch({
            type: types/* TYPES.LOADING */.v.LOADING
        });
        await wait(1000);
        dispatch({
            type: types/* TYPES.EDITCOMMENT */.v.EDITCOMMENT,
            payload: textPayload
        });
        setEdit(null);
        dispatch({
            type: types/* TYPES.STOPLOADING */.v.STOPLOADING
        });
    };
    const deletePost = async ()=>{
        dispatch({
            type: types/* TYPES.LOADING */.v.LOADING
        });
        await wait(1000);
        dispatch({
            type: types/* TYPES.DELETEPOST */.v.DELETEPOST,
            payload: titleTextPayload
        });
        showTitle = post.title;
        router.push("/");
        dispatch({
            type: types/* TYPES.STOPLOADING */.v.STOPLOADING
        });
    };
    const editPost = async ()=>{
        dispatch({
            type: types/* TYPES.LOADING */.v.LOADING
        });
        await wait(1000);
        dispatch({
            type: types/* TYPES.EDITPOST */.v.EDITPOST,
            payload: titleTextPayload
        });
        setEditTitle(null);
        dispatch({
            type: types/* TYPES.STOPLOADING */.v.STOPLOADING
        });
    };
    let showTitle;
    if (postReducer.posts.find((x)=>x.id == post.id
    )) {
        showTitle = postReducer.posts.find((x)=>x.id == post.id
        ).title;
    } else {
        showTitle = post.title;
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "FaceGram"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(loading/* default */.Z, {
                show: loadingReducer.loading
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navBarMain/* default */.Z, {
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card postcard",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "card-header",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex w-100 justify-content-between",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "title-font",
                                        children: [
                                            "Title: ",
                                            showTitle
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: adminAuth ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "mr-10",
                                                    onClick: ()=>{
                                                        handleOpenEditTitle();
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: "text-muted cursor-pointer",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "currentColor",
                                                            className: "bi bi-pencil-square",
                                                            viewBox: "0 0 16 16",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    onClick: deletePost,
                                                    className: "btn btn-danger",
                                                    children: "Delete"
                                                })
                                            ]
                                        }) : null
                                    })
                                ]
                            }),
                            editTitle ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: "form-control mt-2 mb-2",
                                        value: editTitleText,
                                        onChange: handleEditTitleText
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: ()=>{
                                            editPost();
                                        },
                                        className: "btn btn-primary mr-3",
                                        children: "Edit"
                                    })
                                ]
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "card-body mb-20",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("blockquote", {
                            className: "blockquote mb-0",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "body-font",
                                    children: [
                                        "Body: ",
                                        post.body
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                                    className: "blockquote-footer",
                                    children: [
                                        "ID: ",
                                        post.id
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "comment-title-font",
                        children: "Comments:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "list-group list-group-flush",
                        children: commentReducer.comments.map((item, index)=>{
                            return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(comments, {
                                    item: item,
                                    index: index,
                                    adminAuth: adminAuth,
                                    edit: edit,
                                    handleOpenEdit: handleOpenEdit,
                                    editText: editText,
                                    handleEditText: handleEditText,
                                    editComment: editComment,
                                    deleteComment: deleteComment
                                })
                            }, index));
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const postPage = (PostPage);

;// CONCATENATED MODULE: ./pages/post/[id].js





const getStaticPaths = async ()=>{
    const res = await external_axios_default().get(`https://jsonplaceholder.typicode.com/posts`);
    const posts = res.data;
    const paths = posts.map((item)=>({
            params: {
                id: item.id.toString()
            }
        })
    );
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const id = params.id;
    const res = await external_axios_default().get('https://jsonplaceholder.typicode.com/posts/' + id);
    const post = res.data;
    // Pass post data to the page via props
    return {
        props: {
            post: post
        }
    };
};
const Profile = ({ post  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(postPage, {
        post: post
    }));
};
/* harmony default export */ const _id_ = (Profile);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 4678:
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 5226:
/***/ ((module) => {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ 2540:
/***/ ((module) => {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ 4934:
/***/ ((module) => {

module.exports = require("react-bootstrap/Navbar");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,551,155], () => (__webpack_exec__(6820)));
module.exports = __webpack_exports__;

})();