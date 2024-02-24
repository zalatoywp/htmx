/* empty css                                 */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, o as createTransitionScope } from '../astro_ObfTp1mm.mjs';
import { $ as $$Layout } from './estadisticas_02QlLLBi.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';
/* empty css                          */

const ErrorMsg = ({ error }) => {
  return /* @__PURE__ */ jsx("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(XCircleIcon, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }) }),
    /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-red-800", children: "Error" }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-red-700", children: error })
    ] })
  ] }) });
};

const RepoWalker = () => {
  const [error, setError] = useState("");
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(false);
  useState(false);
  const [candidate, setCandidate] = useState("");
  const [did, setDid] = useState("");
  const [handles, setHandles] = useState(/* @__PURE__ */ new Map());
  useEffect(() => {
    document.title = "ZalaDev";
  }, []);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const userFromParams = searchParams.get("");
    if (userFromParams !== null && did === "" && repo === null) {
      setCandidate(userFromParams);
      resolveHandleOrDid(userFromParams).then((repoDid) => {
        setDid(repoDid);
        getRepo(repoDid);
      });
    }
  }, []);
  const getRepo = async (repoDid) => {
    setLoading(true);
    setError("");
    try {
      const resp = await fetch(
        `https://bsky-search.jazco.io/repo/${repoDid}`
      );
      if (!resp.ok) {
        let errorMsg = "An error occurred while fetching the repository.";
        try {
          const errorData = await resp.json();
          if ("error" in errorData) {
            errorMsg = errorData.error;
          }
        } catch (parseError) {
        }
        throw new Error(errorMsg);
      }
      const repoData = await resp.json();
      if ("error" in repoData) {
        throw new Error(repoData.error);
      }
      const dids = /* @__PURE__ */ new Set();
      if (repoData.likes && repoData.likes.length > 0) {
        for (let i = 0; i < repoData.likes.length; i++) {
          const like = repoData.likes[i];
          dids.add(like.content.subject.uri.split("/")[2]);
        }
      }
      if (repoData.follows && repoData.follows.length > 0) {
        for (let i = 0; i < repoData.follows.length; i++) {
          const follow = repoData.follows[i];
          dids.add(follow.content.subject);
        }
      }
      if (repoData.blocks && repoData.blocks.length > 0) {
        for (let i = 0; i < repoData.blocks.length; i++) {
          const block = repoData.blocks[i];
          dids.add(block.content.subject);
        }
      }
      if (repoData.reposts && repoData.reposts.length > 0) {
        for (let i = 0; i < repoData.reposts.length; i++) {
          const repost = repoData.reposts[i];
          dids.add(repost.content.subject.uri.split("/")[2]);
        }
      }
      await resolveDidBatch(Array.from(dids));
      setRepo(repoData);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  const resolveHandleOrDid = async (handleOrDid) => {
    setError("");
    let repoDid = "";
    if (handleOrDid.startsWith("did:")) {
      repoDid = handleOrDid;
    } else {
      try {
        const resp = await fetch(
          `https://bsky.social/xrpc/com.atproto.repo.describeRepo?repo=${handleOrDid.toLowerCase()}`
        );
        if (!resp.ok) {
          let errorMsg = "An error occurred while resolving the handle.";
          try {
            const errorData = await resp.json();
            if ("error" in errorData) {
              errorMsg = errorData.error;
              if (errorMsg === "redis: nil") {
                errorMsg = "Handle not found.";
              }
            }
          } catch (parseError) {
          }
          throw new Error(errorMsg);
        }
        const didData = await resp.json();
        repoDid = didData.did;
      } catch (e) {
        setError(e.message);
        setLoading(false);
        return "";
      }
    }
    return repoDid;
  };
  const resolveDidBatch = async (dids) => {
    dids = dids.map((did2) => did2.toLowerCase());
    try {
      const resp = await fetch(`https://plc.jazco.io/batch/by_did`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dids)
      });
      if (!resp.ok) {
        let errorMsg = "An error occurred while resolving the handle.";
        try {
          const errorData = await resp.json();
          if ("error" in errorData) {
            errorMsg = errorData.error;
            if (errorMsg === "redis: nil") {
              errorMsg = "Handle not found.";
            }
          }
        } catch (parseError) {
        }
        throw new Error(errorMsg);
      }
      const didData = await resp.json();
      didData?.forEach((doc) => {
        handles.set(doc.did, doc.handle);
      });
      setHandles(handles);
    } catch (e) {
      throw new Error(e.message);
    }
  };
  const handleButtonClick = async (e) => {
    e.preventDefault();
    setError("");
    let repoDid = "";
    if (candidate.startsWith("did:")) {
      repoDid = candidate;
    } else {
      try {
        const resp = await fetch(
          `https://bsky.social/xrpc/com.atproto.repo.describeRepo?repo=${candidate.toLowerCase()}`
        );
        if (!resp.ok) {
          let errorMsg = "An error occurred while resolving the handle.";
          try {
            const errorData = await resp.json();
            if ("error" in errorData) {
              errorMsg = errorData.error;
              if (errorMsg === "redis: nil") {
                errorMsg = "Handle not found.";
              }
            }
          } catch (parseError) {
          }
          throw new Error(errorMsg);
        }
        const didData = await resp.json();
        repoDid = didData.did;
      } catch (e2) {
        setError(e2.message);
        setLoading(false);
        return "";
      }
    }
    return repoDid;
  };
  return /* @__PURE__ */ jsxs("div", { id: "inicio", className: "scroll-smooth", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl py-4 sm:py-4 sm:px-6 lg:px-8 ", children: /* @__PURE__ */ jsx("div", { className: "border-2 border-gray-500 shadow-md   shadow-cyan-500/50 rounded-2xl text-white lg:px-0 relative isolate overflow-hidden bg-gray-950 px-3 sm:px-6 py-8 sm:pb-24 sm:rounded-3xl", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      error && /* @__PURE__ */ jsx("div", { className: "text-left mb-2", children: /* @__PURE__ */ jsx(ErrorMsg, { error }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "pb-0 pt-0 text-right pr-5", children: /* @__PURE__ */ jsxs(
          "span",
          {
            className: "relative inline-block overflow-hidden rounded-full p-[1px]",
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: " inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl",
                  onClick: () => alert("Su IP no está autorizada para acceder a esta sección"),
                  children: "Acceso Usuarios"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-orange-800 sm:text-6xl text-center", children: "Zalabsky Dev Tools" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 pb-6 text-lg leading-6 text-gray-200 text-center", children: "Una herramienta para explorar los contenidos públicos de Bluesky" }),
        /* @__PURE__ */ jsxs(
          "form",
          {
            className: "mt-6 sm:flex sm:items-center max-w-lg mx-auto",
            action: "#",
            children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "threadURL", className: "sr-only", children: "Thread URL" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:flex-auto", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    name: "threadURL",
                    id: "threadURL",
                    className: "peer relative bg-gray-800 col-start-1 row-start-1 border-2 border-cyan-500 rounded-md shadow-md  shadow-cyan-500/50 py-1.5 text-gray-100 placeholder:text-gray-100 px-4 focus:ring-0 sm:text-sm sm:leading-6",
                    placeholder: "Introduzca el Handle o el DID de la cuenta",
                    value: candidate,
                    onChange: (e) => setCandidate(e.target.value)
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "col-start-1 col-end-3 row-start-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 peer-focus:ring-2 peer-focus:ring-indigo-600",
                    "aria-hidden": "true"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-3 sm:ml-4 sm:mt-0 sm:flex-shrink-0 flex", children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: async (e) => {
                    e.preventDefault();
                    setLoading(true);
                    const repoDid = await handleButtonClick(e);
                    new URLSearchParams();
                    setDid(repoDid);
                    getRepo(repoDid);
                  },
                  className: "block w-full rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                  children: loading ? /* @__PURE__ */ jsxs(
                    "svg",
                    {
                      className: "animate-spin h-5 w-5 text-white inline-block",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ jsx(
                          "circle",
                          {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          }
                        )
                      ]
                    }
                  ) : /* @__PURE__ */ jsx("span", { className: "whitespace-nowrap", children: "Solicitar Datos" })
                }
              ) })
            ]
          }
        ),
        repo && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "flex gap-2 justify-center ", children: /* @__PURE__ */ jsx("div", { className: "mt-6 w-auto flex", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-900 overflow-hidden shadow border border-blue-100 rounded-lg flex flex-wrap justify-center", children: [
            /* @__PURE__ */ jsx("div", { className: "py-2 pl-6 pr-4", children: /* @__PURE__ */ jsxs("div", { className: "mt-2 max-w-xl text-sm text-gray-900", children: [
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      className: "h-14 w-14 rounded-full",
                      src: `https://cdn.bsky.app/img/avatar/plain/${repo?.profile.uri.split("/")[2]}/${repo?.profile.content.avatar.ref.$link}@jpeg?v=1&size=90x90`,
                      alt: "avatar"
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-gray-300", children: [
                    repo?.profile.content.displayName,
                    " "
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-400", children: [
                    " @",
                    handles.get(did)
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "font-normal text-orange-500", children: [
                  " ",
                  repo?.profile.uri.split("/")[2]
                ] }),
                /* @__PURE__ */ jsx("br", {})
              ] }),
              /* @__PURE__ */ jsx("p", { className: "font-normal text-gray-300", children: repo?.profile.content.description.split("\n").map((line, idx) => /* @__PURE__ */ jsxs("span", { children: [
                line,
                /* @__PURE__ */ jsx("br", {})
              ] }, idx)) })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "py-2 pr-6 pl-4", children: /* @__PURE__ */ jsxs("div", { className: "mt-4 max-w-xl text-sm text-gray-300 text-left grid gap-3 grid-cols-2 p-5 mb-4 border border-white rounded-lg bg-gray-900", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "#posts", className: "hover:underline font-semibold", children: "Posts" }) }),
                /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "#reposts", className: "hover:underline font-semibold", children: "Reposts" }) }),
                /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "#likes", className: "hover:underline font-semibold", children: "Likes" }) }),
                /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "#follows", className: "hover:underline font-semibold", children: "Siguiendo" }) }),
                /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    onClick: () => alert("NO TIENE AUTORIZACIÓN, TIENE QUE SER UN USUARIO REGISTRADO PARA ACCEDER A ESTA INFORMACÍON"),
                    children: /* @__PURE__ */ jsx("a", { href: "#inicio", className: "hover:underline font-semibold", children: "Seguidores" })
                  }
                ) }),
                /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "#blocks", className: "hover:underline font-semibold", children: "Cuentas Bloqueadas" }) }),
                /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    onClick: () => alert("NO TIENE AUTORIZACIÓN, TIENE QUE SER UN USUARIO REGISTRADO PARA ACCEDER A ESTA INFORMACÍON"),
                    children: /* @__PURE__ */ jsx("a", { href: "#inicio", className: "hover:underline font-semibold", children: "Bloqueado Por" })
                  }
                ) }),
                /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    onClick: () => alert("NO TIENE AUTORIZACIÓN, TIENE QUE SER UN USUARIO REGISTRADO PARA ACCEDER A ESTA INFORMACÍON"),
                    children: /* @__PURE__ */ jsx("a", { href: "#inicio", className: "hover:underline font-semibold", children: "Cambios de Handle" })
                  }
                ) }),
                /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    onClick: () => alert("NO TIENE AUTORIZACIÓN, TIENE QUE SER UN USUARIO REGISTRADO PARA ACCEDER A ESTA INFORMACÍON"),
                    children: /* @__PURE__ */ jsx("a", { href: "#inicio", className: "hover:underline font-semibold", children: "Invitado por" })
                  }
                ) }),
                /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    onClick: () => alert("NO TIENE AUTORIZACIÓN, TIENE QUE SER UN USUARIO REGISTRADO PARA ACCEDER A ESTA INFORMACÍON"),
                    children: /* @__PURE__ */ jsx("a", { href: "#inicio", className: "hover:underline font-semibold", children: "Ha Invitado a" })
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-right text-yellow-500 font-semibold", children: [
                /* @__PURE__ */ jsx("p", { children: repo?.posts.length.toLocaleString() }),
                /* @__PURE__ */ jsx("p", { children: repo?.reposts.length.toLocaleString() }),
                /* @__PURE__ */ jsx("p", { children: repo?.likes.length.toLocaleString() }),
                /* @__PURE__ */ jsx("p", { children: repo?.follows.length.toLocaleString() }),
                /* @__PURE__ */ jsx("p", { className: "text-red-600", children: "Solo usuarios registrados" }),
                /* @__PURE__ */ jsx("p", { children: repo?.blocks.length.toLocaleString() }),
                /* @__PURE__ */ jsx("p", { className: "text-red-600", children: "Solo usuarios registrados" }),
                /* @__PURE__ */ jsx("p", { className: "text-red-600", children: "Solo usuarios registrados" }),
                /* @__PURE__ */ jsx("p", { className: "text-red-600", children: "Solo usuarios registrados" }),
                /* @__PURE__ */ jsx("p", { className: "text-red-600", children: "Solo usuarios registrados" })
              ] })
            ] }) })
          ] }) }) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2", children: /* @__PURE__ */ jsxs("div", { className: "mt-6 max-w-xl flex overflow-hidden flex-col ", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-5 mb-4 border border-blue-100 rounded-lg bg-gray-900", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  id: "blocks",
                  href: "#inicio",
                  className: "p-3 top-0 text-lg font-semibold text-blue-200 hover:no-underline",
                  children: /* @__PURE__ */ jsxs("div", { className: "mb-4 border border-blue-100 items-center block p-3 sm:flex hover:bg-gray-800 rounded-lg", children: [
                    "Ha bloqueado a ",
                    repo?.blocks.length.toLocaleString(),
                    " cuentas"
                  ] })
                }
              ),
              /* @__PURE__ */ jsx("ol", { className: "mt-3 divide-y divider-gray-200 max-h-[380px] overflow-y-scroll hover:scroll-mx-0", children: repo?.blocks.toReversed().map((block, idx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://bsky.app/profile/${block.content.subject}`,
                  target: "_blank",
                  className: "items-center block p-3 sm:flex hover:bg-gray-800 rounded-3xl",
                  children: /* @__PURE__ */ jsxs("div", { className: "text-orange-500", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-base font-normal", children: /* @__PURE__ */ jsxs("span", { className: "text-orange-500", children: [
                      "@",
                      handles.has(block.content.subject) ? handles.get(block.content.subject) : block.content.subject
                    ] }) }),
                    /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center text-xs font-normal text-gray-500 ", children: [
                      "Bloqueado el ",
                      new Date(block.content.createdAt).toLocaleDateString()
                    ] })
                  ] })
                }
              ) }, idx)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-5 mb-4 border border-blue-100 rounded-lg bg-gray-900  ", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  id: "posts",
                  href: "#inicio",
                  className: "p-3 top-0 text-lg font-semibold text-blue-200 hover:no-underline",
                  children: /* @__PURE__ */ jsxs("div", { className: "mb-4 border border-blue-100 items-center block p-3 sm:flex hover:bg-gray-800 rounded-lg", children: [
                    "Numero de posts ",
                    repo?.posts.length.toLocaleString()
                  ] })
                }
              ),
              /* @__PURE__ */ jsx("ol", { className: "mt-3 divide-y divider-gray-200 max-h-[380px] overflow-y-scroll hover:scroll-mx-0", children: repo?.posts.toReversed().map((post, idx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://bsky.app/profile/${did}/post/${post.uri.split("/")[4]}`,
                  target: "_blank",
                  className: "items-center block p-3 sm:flex hover:bg-gray-800 rounded-3xl",
                  children: /* @__PURE__ */ jsxs("div", { className: "text-gray-200", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-base font-normal", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-base font-normal", children: /* @__PURE__ */ jsx("span", { className: "font-medium text-yellow-500", children: repo?.profile.content.displayName }) }),
                      /* @__PURE__ */ jsxs("span", { className: "text-sm font-normal text-orange-500", children: [
                        "@",
                        handles.get(did)
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm font-normal", children: post.content.text }),
                    /* @__PURE__ */ jsx("span", { className: "inline-flex items-center text-xs font-normal text-gray-500 ", children: new Date(post.content.createdAt).toLocaleDateString() })
                  ] })
                }
              ) }, idx)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-5 mb-4 border border-blue-100 rounded-lg bg-gray-900  ", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  id: "follows",
                  href: "#inicio",
                  className: "p-3 top-0 text-lg font-semibold text-blue-200 hover:no-underline",
                  children: /* @__PURE__ */ jsxs("div", { className: "mb-4 border border-blue-100 items-center block p-3 sm:flex hover:bg-gray-800 rounded-lg", children: [
                    "Siguiendo a ",
                    repo?.follows.length.toLocaleString(),
                    " cuentas "
                  ] })
                }
              ),
              /* @__PURE__ */ jsx("ol", { className: "mt-3 divide-y divider-gray-200 max-h-[380px] overflow-y-scroll hover:scroll-mx-0", children: repo?.follows.toReversed().map((follow, idx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://bsky.app/profile/${follow.content.subject}`,
                  target: "_blank",
                  className: "items-center block p-3 sm:flex hover:bg-gray-800 rounded-3xl",
                  children: /* @__PURE__ */ jsxs("div", { className: "text-orange-500 ", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-base font-normal", children: /* @__PURE__ */ jsxs("span", { className: "text-orange-500", children: [
                      "@",
                      handles.has(follow.content.subject) ? handles.get(follow.content.subject) : follow.content.subject
                    ] }) }),
                    /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center text-xs font-normal text-gray-500 ", children: [
                      "Seguido el ",
                      new Date(follow.content.createdAt).toLocaleDateString()
                    ] })
                  ] })
                }
              ) }, idx)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-5 mb-4 border border-blue-100 rounded-lg bg-gray-900  ", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  id: "reposts",
                  href: "#inicio",
                  className: "p-3 top-0 text-lg font-semibold text-blue-200 hover:no-underline",
                  children: /* @__PURE__ */ jsxs("div", { className: "mb-4 border border-blue-100 items-center block p-3 sm:flex hover:bg-gray-800 rounded-lg", children: [
                    "Ha Reposteado ",
                    repo?.reposts.length.toLocaleString(),
                    " Post"
                  ] })
                }
              ),
              /* @__PURE__ */ jsx("ol", { className: "mt-3 divide-y divider-gray-200 max-h-[380px] overflow-y-scroll hover:scroll-mx-0 ", children: repo?.reposts.toReversed().map((repost, idx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://bsky.app/profile/${repost.content.subject.uri.split("/")[2]}/post/${repost.content.subject.uri.split("/")[4]}`,
                  target: "_blank",
                  className: "items-center block p-3 sm:flex hover:bg-gray-800 rounded-3xl ",
                  children: /* @__PURE__ */ jsxs("div", { className: "text-gray-100", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-base font-normal", children: [
                      /* @__PURE__ */ jsxs("span", { className: "font-medium text-yellow-500 ", children: [
                        "@",
                        handles.get(did)
                      ] }),
                      " ",
                      /* @__PURE__ */ jsx("a", { className: "text-xs", children: "Repost al post de" }),
                      " ",
                      /* @__PURE__ */ jsxs("span", { className: "font-medium text-orange-500 ", children: [
                        "@",
                        handles.has(
                          repost.content.subject.uri.split("/")[2]
                        ) ? handles.get(
                          repost.content.subject.uri.split(
                            "/"
                          )[2]
                        ) : repost.content.subject.uri.split(
                          "/"
                        )[2]
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center text-xs font-normal text-gray-500 ", children: [
                      "Reposteado el ",
                      new Date(repost.content.createdAt).toLocaleDateString()
                    ] })
                  ] })
                }
              ) }, idx)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-5 mb-4 border border-blue-100 rounded-lg bg-gray-900 ", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  id: "likes",
                  href: "#inicio",
                  className: "p-3 top-0 text-lg font-semibold text-blue-200 hover:no-underline",
                  children: /* @__PURE__ */ jsxs("div", { className: "mb-4 border border-blue-100 items-center block p-3 sm:flex hover:bg-gray-800 rounded-lg ", children: [
                    "Ha dado ",
                    repo?.likes.length.toLocaleString(),
                    " Likes"
                  ] })
                }
              ),
              /* @__PURE__ */ jsx("ol", { className: "mt-3 divide-y divider-gray-200 max-h-[380px] overflow-y-scroll hover:scroll-mx-0", children: repo?.likes.toReversed().map((like, idx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://bsky.app/profile/${like.content.subject.uri.split("/")[2]}/post/${like.content.subject.uri.split("/")[4]}`,
                  target: "_blank",
                  className: "items-center block p-3 sm:flex hover:bg-gray-800 rounded-3xl",
                  children: /* @__PURE__ */ jsxs("div", { className: "text-gray-100", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-base font-normal", children: [
                      /* @__PURE__ */ jsxs("span", { className: "font-medium text-yellow-500 ", children: [
                        "@",
                        handles.get(did)
                      ] }),
                      " ",
                      /* @__PURE__ */ jsx("a", { className: "text-xs", children: "Like al post de" }),
                      " ",
                      /* @__PURE__ */ jsxs("span", { className: "font-medium text-orange-500 ", children: [
                        "@",
                        handles.has(
                          like.content.subject.uri.split("/")[2]
                        ) ? handles.get(
                          like.content.subject.uri.split(
                            "/"
                          )[2]
                        ) : like.content.subject.uri.split(
                          "/"
                        )[2]
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center text-xs font-normal text-gray-500 ", children: [
                      "Like el ",
                      new Date(like.content.createdAt).toLocaleDateString()
                    ] })
                  ] })
                }
              ) }, idx)) })
            ] })
          ] }) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("footer", { className: "text-center h-64 w-full", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-2", children: /* @__PURE__ */ jsxs("span", { className: "footer-text text-gray-300 text-xs", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://bsky.app/profile/zalatoy.com",
          target: "_blank",
          className: "footer-text text-gray-300 text-xs",
          children: [
            "By Zalatoy ",
            (/* @__PURE__ */ new Date()).getFullYear()
          ]
        }
      ),
      " "
    ] }) }) })
  ] });
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ZalaDev", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="scroll-smooth" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "RepoWalker", RepoWalker, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Zalatoy/Dev/htmx/src/components/RepoWalker", "client:component-export": "default", "data-astro-cid-j7pv25f6": true, "data-astro-transition-persist": createTransitionScope($$result2, "benpfmuv") })} </main> ` })} `;
}, "C:/Users/Zalatoy/Dev/htmx/src/pages/index.astro", "self");

const $$file = "C:/Users/Zalatoy/Dev/htmx/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
