/// BareSpecifier=@webcomponents/webcomponentsjs/bundles/webcomponents-sd
/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function () {
  /*
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  var n;function ba(a) {
    var b = 0;return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }function ca(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];return b ? b.call(a) : { next: ba(a) };
  }function da(a) {
    if (!(a instanceof Array)) {
      a = ca(a);for (var b, c = []; !(b = a.next()).done;) c.push(b.value);a = c;
    }return a;
  }var ea = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;function fa() {}fa.prototype.toJSON = function () {
    return {};
  };
  function p(a) {
    a.__shady || (a.__shady = new fa());return a.__shady;
  }function r(a) {
    return a && a.__shady;
  };var t = window.ShadyDOM || {};t.oa = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);var ha = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");t.i = !!(ha && ha.configurable && ha.get);t.R = t.force || !t.oa;t.u = t.noPatch || !1;t.Z = t.preferPerformance;t.ca = navigator.userAgent.match("Trident");function u(a) {
    return (a = r(a)) && void 0 !== a.firstChild;
  }function w(a) {
    return "ShadyRoot" === a.ha;
  }function ia(a) {
    return (a = (a = r(a)) && a.root) && ja(a);
  }
  var x = Element.prototype,
      ka = x.matches || x.matchesSelector || x.mozMatchesSelector || x.msMatchesSelector || x.oMatchesSelector || x.webkitMatchesSelector,
      la = document.createTextNode(""),
      ma = 0,
      na = [];new MutationObserver(function () {
    for (; na.length;) try {
      na.shift()();
    } catch (a) {
      throw la.textContent = ma++, a;
    }
  }).observe(la, { characterData: !0 });function oa(a) {
    na.push(a);la.textContent = ma++;
  }var pa = !!document.contains;function qa(a, b) {
    for (; b;) {
      if (b == a) return !0;b = b.__shady_parentNode;
    }return !1;
  }
  function ra(a) {
    for (var b = a.length - 1; 0 <= b; b--) {
      var c = a[b],
          d = c.getAttribute("id") || c.getAttribute("name");d && "length" !== d && isNaN(d) && (a[d] = c);
    }a.item = function (e) {
      return a[e];
    };a.namedItem = function (e) {
      if ("length" !== e && isNaN(e) && a[e]) return a[e];for (var f = ca(a), g = f.next(); !g.done; g = f.next()) if (g = g.value, (g.getAttribute("id") || g.getAttribute("name")) == e) return g;return null;
    };return a;
  }function sa(a) {
    var b = [];for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) b.push(a);return b;
  }
  function ta(a) {
    var b = [];for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b.push(a);return b;
  }function y(a, b, c, d) {
    c = void 0 === c ? "" : c;for (var e in b) {
      var f = b[e];if (!(d && 0 <= d.indexOf(e))) {
        f.configurable = !0;var g = c + e;if (f.value) a[g] = f.value;else try {
          Object.defineProperty(a, g, f);
        } catch (h) {}
      }
    }
  }function z(a) {
    var b = {};Object.getOwnPropertyNames(a).forEach(function (c) {
      b[c] = Object.getOwnPropertyDescriptor(a, c);
    });return b;
  };var A = [],
      ua;function va(a) {
    ua || (ua = !0, oa(wa));A.push(a);
  }function wa() {
    ua = !1;for (var a = !!A.length; A.length;) A.shift()();return a;
  }wa.list = A;function xa() {
    this.a = !1;this.addedNodes = [];this.removedNodes = [];this.J = new Set();
  }function ya(a) {
    a.a || (a.a = !0, oa(function () {
      a.flush();
    }));
  }xa.prototype.flush = function () {
    if (this.a) {
      this.a = !1;var a = this.takeRecords();a.length && this.J.forEach(function (b) {
        b(a);
      });
    }
  };xa.prototype.takeRecords = function () {
    if (this.addedNodes.length || this.removedNodes.length) {
      var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];this.addedNodes = [];this.removedNodes = [];return a;
    }return [];
  };
  function za(a, b) {
    var c = p(a);c.C || (c.C = new xa());c.C.J.add(b);var d = c.C;return { ga: b, ja: d, ia: a, takeRecords: function () {
        return d.takeRecords();
      } };
  }function Aa(a) {
    var b = a && a.ja;b && (b.J.delete(a.ga), b.J.size || (p(a.ia).C = null));
  }
  function Ba(a, b) {
    var c = b.getRootNode();return a.map(function (d) {
      var e = c === d.target.getRootNode();if (e && d.addedNodes) {
        if (e = Array.from(d.addedNodes).filter(function (f) {
          return c === f.getRootNode();
        }), e.length) return d = Object.create(d), Object.defineProperty(d, "addedNodes", { value: e, configurable: !0 }), d;
      } else if (e) return d;
    }).filter(function (d) {
      return d;
    });
  };var Ca = /[&\u00A0"]/g,
      Da = /[&\u00A0<>]/g;function Fa(a) {
    switch (a) {case "&":
        return "&amp;";case "<":
        return "&lt;";case ">":
        return "&gt;";case '"':
        return "&quot;";case "\u00a0":
        return "&nbsp;";}
  }function Ga(a) {
    for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;return b;
  }var Ha = Ga("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
      Ia = Ga("style script xmp iframe noembed noframes plaintext noscript".split(" "));
  function Ja(a, b) {
    "template" === a.localName && (a = a.content);for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
      a: {
        var h = g;var l = a,
            k = b;switch (h.nodeType) {case Node.ELEMENT_NODE:
            l = h.localName;for (var m = "<" + l, q = h.attributes, v = 0, aa; aa = q[v]; v++) m += " " + aa.name + '="' + aa.value.replace(Ca, Fa) + '"';m += ">";h = Ha[l] ? m : m + Ja(h, k) + "</" + l + ">";break a;case Node.TEXT_NODE:
            h = h.data;h = l && Ia[l.localName] ? h : h.replace(Da, Fa);break a;case Node.COMMENT_NODE:
            h = "\x3c!--" + h.data + "--\x3e";break a;default:
            throw window.console.error(h), Error("not implemented");}
      }c += h;
    }return c;
  };var Ka = t.i,
      La = { querySelector: function (a) {
      return this.__shady_native_querySelector(a);
    }, querySelectorAll: function (a) {
      return this.__shady_native_querySelectorAll(a);
    } },
      Ma = {};function Na(a) {
    Ma[a] = function (b) {
      return b["__shady_native_" + a];
    };
  }function Oa(a, b) {
    y(a, b, "__shady_native_");for (var c in b) Na(c);
  }function B(a, b) {
    b = void 0 === b ? [] : b;for (var c = 0; c < b.length; c++) {
      var d = b[c],
          e = Object.getOwnPropertyDescriptor(a, d);e && (Object.defineProperty(a, "__shady_native_" + d, e), e.value ? La[d] || (La[d] = e.value) : Na(d));
    }
  }
  var C = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
      D = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
      Pa = document.implementation.createHTMLDocument("inert");function Qa(a) {
    for (var b; b = a.__shady_native_firstChild;) a.__shady_native_removeChild(b);
  }var Ra = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
      Sa = ["querySelector", "querySelectorAll"];
  function Ta() {
    var a = ["dispatchEvent", "addEventListener", "removeEventListener"];window.EventTarget ? B(window.EventTarget.prototype, a) : (B(Node.prototype, a), B(Window.prototype, a));Ka ? B(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : Oa(Node.prototype, { parentNode: { get: function () {
          C.currentNode = this;return C.parentNode();
        } }, firstChild: { get: function () {
          C.currentNode = this;return C.firstChild();
        } }, lastChild: { get: function () {
          C.currentNode = this;return C.lastChild();
        } }, previousSibling: { get: function () {
          C.currentNode = this;return C.previousSibling();
        } }, nextSibling: { get: function () {
          C.currentNode = this;return C.nextSibling();
        } }, childNodes: { get: function () {
          var b = [];C.currentNode = this;for (var c = C.firstChild(); c;) b.push(c), c = C.nextSibling();return b;
        } }, parentElement: { get: function () {
          D.currentNode = this;return D.parentNode();
        } }, textContent: { get: function () {
          switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
              for (var b = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), c = "", d; d = b.nextNode();) c += d.nodeValue;return c;default:
              return this.nodeValue;}
        }, set: function (b) {
          if ("undefined" === typeof b || null === b) b = "";switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
              Qa(this);(0 < b.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(b), void 0);break;default:
              this.nodeValue = b;}
        } } });B(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
    B(HTMLElement.prototype, ["parentElement", "contains"]);a = { firstElementChild: { get: function () {
          D.currentNode = this;return D.firstChild();
        } }, lastElementChild: { get: function () {
          D.currentNode = this;return D.lastChild();
        } }, children: { get: function () {
          var b = [];D.currentNode = this;for (var c = D.firstChild(); c;) b.push(c), c = D.nextSibling();return ra(b);
        } }, childElementCount: { get: function () {
          return this.children ? this.children.length : 0;
        } } };Ka ? (B(Element.prototype, Ra), B(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]), B(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (Oa(Element.prototype, a), Oa(Element.prototype, { previousElementSibling: { get: function () {
          D.currentNode = this;return D.previousSibling();
        } }, nextElementSibling: { get: function () {
          D.currentNode = this;return D.nextSibling();
        } }, innerHTML: { get: function () {
          return Ja(this, sa);
        }, set: function (b) {
          var c = "template" === this.localName ? this.content : this;Qa(c);var d = this.localName || "div";d = this.namespaceURI && this.namespaceURI !== Pa.namespaceURI ? Pa.createElementNS(this.namespaceURI, d) : Pa.createElement(d);d.innerHTML = b;for (b = "template" === this.localName ? d.content : d; d = b.__shady_native_firstChild;) c.__shady_native_insertBefore(d, void 0);
        } }, className: { get: function () {
          return this.getAttribute("class") || "";
        }, set: function (b) {
          this.setAttribute("class", b);
        } } }));B(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));B(Element.prototype, Sa);B(HTMLElement.prototype, ["focus", "blur"]);window.HTMLTemplateElement && B(window.HTMLTemplateElement.prototype, ["innerHTML"]);Ka ? B(DocumentFragment.prototype, Ra) : Oa(DocumentFragment.prototype, a);B(DocumentFragment.prototype, Sa);Ka ? (B(Document.prototype, Ra), B(Document.prototype, ["activeElement"])) : Oa(Document.prototype, a);B(Document.prototype, ["importNode", "getElementById"]);B(Document.prototype, Sa);
  };var Ua = z({ get childNodes() {
      return this.__shady_childNodes;
    }, get firstChild() {
      return this.__shady_firstChild;
    }, get lastChild() {
      return this.__shady_lastChild;
    }, get childElementCount() {
      return this.__shady_childElementCount;
    }, get children() {
      return this.__shady_children;
    }, get firstElementChild() {
      return this.__shady_firstElementChild;
    }, get lastElementChild() {
      return this.__shady_lastElementChild;
    }, get shadowRoot() {
      return this.__shady_shadowRoot;
    } }),
      Va = z({ get textContent() {
      return this.__shady_textContent;
    }, set textContent(a) {
      this.__shady_textContent = a;
    }, get innerHTML() {
      return this.__shady_innerHTML;
    }, set innerHTML(a) {
      return this.__shady_innerHTML = a;
    } }),
      Wa = z({ get parentElement() {
      return this.__shady_parentElement;
    }, get parentNode() {
      return this.__shady_parentNode;
    }, get nextSibling() {
      return this.__shady_nextSibling;
    }, get previousSibling() {
      return this.__shady_previousSibling;
    }, get nextElementSibling() {
      return this.__shady_nextElementSibling;
    }, get previousElementSibling() {
      return this.__shady_previousElementSibling;
    }, get className() {
      return this.__shady_className;
    },
    set className(a) {
      return this.__shady_className = a;
    } });function Xa(a) {
    for (var b in a) {
      var c = a[b];c && (c.enumerable = !1);
    }
  }Xa(Ua);Xa(Va);Xa(Wa);var Ya = t.i || t.u,
      Za = Ya ? function () {} : function (a) {
    var b = p(a);b.ea || (b.ea = !0, y(a, Wa));
  },
      $a = Ya ? function () {} : function (a) {
    var b = p(a);b.da || (b.da = !0, y(a, Ua), window.customElements && !t.u || y(a, Va));
  };var ab = "__eventWrappers" + Date.now(),
      bb = function () {
    var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");return a ? function (b) {
      return a.get.call(b);
    } : null;
  }(),
      cb = function () {
    function a() {}var b = !1,
        c = { get capture() {
        b = !0;return !1;
      } };window.addEventListener("test", a, c);window.removeEventListener("test", a, c);return b;
  }();function db(a) {
    if (a && "object" === typeof a) {
      var b = !!a.capture;var c = !!a.once;var d = !!a.passive;var e = a.w;
    } else b = !!a, d = c = !1;return { aa: e, capture: b, once: c, passive: d, Y: cb ? a : b };
  }
  var eb = { blur: !0, focus: !0, focusin: !0, focusout: !0, click: !0, dblclick: !0, mousedown: !0, mouseenter: !0, mouseleave: !0, mousemove: !0, mouseout: !0, mouseover: !0, mouseup: !0, wheel: !0, beforeinput: !0, input: !0, keydown: !0, keyup: !0, compositionstart: !0, compositionupdate: !0, compositionend: !0, touchstart: !0, touchend: !0, touchmove: !0, touchcancel: !0, pointerover: !0, pointerenter: !0, pointerdown: !0, pointermove: !0, pointerup: !0, pointercancel: !0, pointerout: !0, pointerleave: !0, gotpointercapture: !0, lostpointercapture: !0, dragstart: !0,
    drag: !0, dragenter: !0, dragleave: !0, dragover: !0, drop: !0, dragend: !0, DOMActivate: !0, DOMFocusIn: !0, DOMFocusOut: !0, keypress: !0 },
      fb = { DOMAttrModified: !0, DOMAttributeNameChanged: !0, DOMCharacterDataModified: !0, DOMElementNameChanged: !0, DOMNodeInserted: !0, DOMNodeInsertedIntoDocument: !0, DOMNodeRemoved: !0, DOMNodeRemovedFromDocument: !0, DOMSubtreeModified: !0 };function gb(a) {
    return a instanceof Node ? a.__shady_getRootNode() : a;
  }
  function hb(a, b) {
    var c = [],
        d = a;for (a = gb(a); d;) c.push(d), d.__shady_assignedSlot ? d = d.__shady_assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d = d.host : d = d.__shady_parentNode;c[c.length - 1] === document && c.push(window);return c;
  }function ib(a) {
    a.__composedPath || (a.__composedPath = hb(a.target, !0));return a.__composedPath;
  }function jb(a, b) {
    if (!w) return a;a = hb(a, !0);for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++) if (d = b[c], f = gb(d), f !== e && (g = a.indexOf(f), e = f), !w(f) || -1 < g) return d;
  }
  function kb(a) {
    function b(c, d) {
      c = new a(c, d);c.__composed = d && !!d.composed;return c;
    }b.__proto__ = a;b.prototype = a.prototype;return b;
  }var lb = { focus: !0, blur: !0 };function mb(a) {
    return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget;
  }function nb(a, b, c) {
    if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && (!mb(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.__immediatePropagationStopped); d++);
  }
  function ob(a) {
    var b = a.composedPath();Object.defineProperty(a, "currentTarget", { get: function () {
        return d;
      }, configurable: !0 });for (var c = b.length - 1; 0 <= c; c--) {
      var d = b[c];nb(a, d, "capture");if (a.N) return;
    }Object.defineProperty(a, "eventPhase", { get: function () {
        return Event.AT_TARGET;
      } });var e;for (c = 0; c < b.length; c++) {
      d = b[c];var f = r(d);f = f && f.root;if (0 === c || f && f === e) if (nb(a, d, "bubble"), d !== window && (e = d.__shady_getRootNode()), a.N) break;
    }
  }
  function pb(a, b, c, d, e, f) {
    for (var g = 0; g < a.length; g++) {
      var h = a[g],
          l = h.type,
          k = h.capture,
          m = h.once,
          q = h.passive;if (b === h.node && c === l && d === k && e === m && f === q) return g;
    }return -1;
  }function qb(a) {
    wa();return this.__shady_native_dispatchEvent(a);
  }
  function rb(a, b, c) {
    var d = db(c),
        e = d.capture,
        f = d.once,
        g = d.passive,
        h = d.aa;d = d.Y;if (b) {
      var l = typeof b;if ("function" === l || "object" === l) if ("object" !== l || b.handleEvent && "function" === typeof b.handleEvent) {
        if (fb[a]) return this.__shady_native_addEventListener(a, b, d);var k = h || this;if (h = b[ab]) {
          if (-1 < pb(h, k, a, e, f, g)) return;
        } else b[ab] = [];h = function (m) {
          f && this.__shady_removeEventListener(a, b, c);m.__target || sb(m);if (k !== this) {
            var q = Object.getOwnPropertyDescriptor(m, "currentTarget");Object.defineProperty(m, "currentTarget", { get: function () {
                return k;
              }, configurable: !0 });
          }m.__previousCurrentTarget = m.currentTarget;if (!w(k) && "slot" !== k.localName || -1 != m.composedPath().indexOf(k)) if (m.composed || -1 < m.composedPath().indexOf(k)) if (mb(m) && m.target === m.relatedTarget) m.eventPhase === Event.BUBBLING_PHASE && m.stopImmediatePropagation();else if (m.eventPhase === Event.CAPTURING_PHASE || m.bubbles || m.target === k || k instanceof Window) {
            var v = "function" === l ? b.call(k, m) : b.handleEvent && b.handleEvent(m);k !== this && (q ? (Object.defineProperty(m, "currentTarget", q), q = null) : delete m.currentTarget);return v;
          }
        };b[ab].push({ node: k, type: a, capture: e, once: f, passive: g, za: h });lb[a] ? (this.__handlers = this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || { capture: [], bubble: [] }, this.__handlers[a][e ? "capture" : "bubble"].push(h)) : this.__shady_native_addEventListener(a, h, d);
      }
    }
  }
  function tb(a, b, c) {
    if (b) {
      var d = db(c);c = d.capture;var e = d.once,
          f = d.passive,
          g = d.aa;d = d.Y;if (fb[a]) return this.__shady_native_removeEventListener(a, b, d);var h = g || this;g = void 0;var l = null;try {
        l = b[ab];
      } catch (k) {}l && (e = pb(l, h, a, c, e, f), -1 < e && (g = l.splice(e, 1)[0].za, l.length || (b[ab] = void 0)));this.__shady_native_removeEventListener(a, g || b, d);g && lb[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][c ? "capture" : "bubble"], b = a.indexOf(g), -1 < b && a.splice(b, 1));
    }
  }
  function ub() {
    for (var a in lb) window.__shady_native_addEventListener(a, function (b) {
      b.__target || (sb(b), ob(b));
    }, !0);
  }
  var vb = z({ get composed() {
      void 0 === this.__composed && (bb ? this.__composed = "focusin" === this.type || "focusout" === this.type || bb(this) : !1 !== this.isTrusted && (this.__composed = eb[this.type]));return this.__composed || !1;
    }, composedPath: function () {
      this.__composedPath || (this.__composedPath = hb(this.__target, this.composed));return this.__composedPath;
    }, get target() {
      return jb(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
    }, get relatedTarget() {
      if (!this.__relatedTarget) return null;this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = hb(this.__relatedTarget, !0));return jb(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath);
    }, stopPropagation: function () {
      Event.prototype.stopPropagation.call(this);this.N = !0;
    }, stopImmediatePropagation: function () {
      Event.prototype.stopImmediatePropagation.call(this);this.N = this.__immediatePropagationStopped = !0;
    } });
  function sb(a) {
    a.__target = a.target;a.__relatedTarget = a.relatedTarget;if (t.i) {
      var b = Object.getPrototypeOf(a);if (!Object.hasOwnProperty(b, "__shady_patchedProto")) {
        var c = Object.create(b);c.__shady_sourceProto = b;y(c, vb);b.__shady_patchedProto = c;
      }a.__proto__ = b.__shady_patchedProto;
    } else y(a, vb);
  }var wb = kb(Event),
      xb = kb(CustomEvent),
      yb = kb(MouseEvent);
  function zb() {
    if (!bb && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
      var a = function () {
        var b = new MouseEvent("click", { bubbles: !0, cancelable: !0, composed: !0 });this.__shady_dispatchEvent(b);
      };Element.prototype.click ? Element.prototype.click = a : HTMLElement.prototype.click && (HTMLElement.prototype.click = a);
    }
  }var Ab = Object.getOwnPropertyNames(Document.prototype).filter(function (a) {
    return "on" === a.substring(0, 2);
  });function Bb(a, b) {
    return { index: a, D: [], I: b };
  }
  function Cb(a, b, c, d) {
    var e = 0,
        f = 0,
        g = 0,
        h = 0,
        l = Math.min(b - e, d - f);if (0 == e && 0 == f) a: {
      for (g = 0; g < l; g++) if (a[g] !== c[g]) break a;g = l;
    }if (b == a.length && d == c.length) {
      h = a.length;for (var k = c.length, m = 0; m < l - g && Db(a[--h], c[--k]);) m++;h = m;
    }e += g;f += g;b -= h;d -= h;if (0 == b - e && 0 == d - f) return [];if (e == b) {
      for (b = Bb(e, 0); f < d;) b.D.push(c[f++]);return [b];
    }if (f == d) return [Bb(e, b - e)];l = e;g = f;d = d - g + 1;h = b - l + 1;b = Array(d);for (k = 0; k < d; k++) b[k] = Array(h), b[k][0] = k;for (k = 0; k < h; k++) b[0][k] = k;for (k = 1; k < d; k++) for (m = 1; m < h; m++) if (a[l + m - 1] === c[g + k - 1]) b[k][m] = b[k - 1][m - 1];else {
      var q = b[k - 1][m] + 1,
          v = b[k][m - 1] + 1;b[k][m] = q < v ? q : v;
    }l = b.length - 1;g = b[0].length - 1;d = b[l][g];for (a = []; 0 < l || 0 < g;) 0 == l ? (a.push(2), g--) : 0 == g ? (a.push(3), l--) : (h = b[l - 1][g - 1], k = b[l - 1][g], m = b[l][g - 1], q = k < m ? k < h ? k : h : m < h ? m : h, q == h ? (h == d ? a.push(0) : (a.push(1), d = h), l--, g--) : q == k ? (a.push(3), l--, d = k) : (a.push(2), g--, d = m));a.reverse();b = void 0;l = [];for (g = 0; g < a.length; g++) switch (a[g]) {case 0:
        b && (l.push(b), b = void 0);e++;f++;break;case 1:
        b || (b = Bb(e, 0));b.I++;e++;b.D.push(c[f]);f++;break;case 2:
        b || (b = Bb(e, 0));
        b.I++;e++;break;case 3:
        b || (b = Bb(e, 0)), b.D.push(c[f]), f++;}b && l.push(b);return l;
  }function Db(a, b) {
    return a === b;
  };function Eb(a, b, c, d) {
    Za(a);d = d || null;var e = p(a),
        f = d ? p(d) : null;e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;if (f = r(e.previousSibling)) f.nextSibling = a;if (f = r(e.nextSibling = d)) f.previousSibling = a;e.parentNode = b;d ? d === c.firstChild && (c.firstChild = a) : (c.lastChild = a, c.firstChild || (c.firstChild = a));c.childNodes = null;
  }
  function Fb(a, b, c) {
    $a(b);var d = p(b);void 0 !== d.firstChild && (d.childNodes = null);if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) Eb(a, b, d, c);else Eb(a, b, d, c);
  }
  function Gb(a, b) {
    var c = p(a);b = p(b);a === b.firstChild && (b.firstChild = c.nextSibling);a === b.lastChild && (b.lastChild = c.previousSibling);a = c.previousSibling;var d = c.nextSibling;a && (p(a).nextSibling = d);d && (p(d).previousSibling = a);c.parentNode = c.previousSibling = c.nextSibling = void 0;void 0 !== b.childNodes && (b.childNodes = null);
  }
  function Hb(a, b) {
    var c = p(a);if (b || void 0 === c.firstChild) {
      c.childNodes = null;var d = c.firstChild = a.__shady_native_firstChild;c.lastChild = a.__shady_native_lastChild;$a(a);c = d;for (d = void 0; c; c = c.__shady_native_nextSibling) {
        var e = p(c);e.parentNode = b || a;e.nextSibling = c.__shady_native_nextSibling;e.previousSibling = d || null;d = c;Za(c);
      }
    }
  };var Ib = null;function E() {
    Ib || (Ib = window.ShadyCSS && window.ShadyCSS.ScopingShim);return Ib || null;
  }function Jb(a, b, c) {
    var d = E();return d && "class" === b ? (d.setElementClass(a, c), !0) : !1;
  }function Kb(a, b) {
    var c = E();c && c.unscopeNode(a, b);
  }function Lb(a, b) {
    var c = E();if (!c) return !0;if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      c = !0;for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) c = c && Lb(a, b);return c;
    }return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b;
  }
  function Mb(a) {
    if (a.nodeType !== Node.ELEMENT_NODE) return "";var b = E();return b ? b.currentScopeForNode(a) : "";
  }function Nb(a, b) {
    if (a) for (a.nodeType === Node.ELEMENT_NODE && b(a), a = a.__shady_firstChild; a; a = a.__shady_nextSibling) a.nodeType === Node.ELEMENT_NODE && Nb(a, b);
  };var Ob = window.document,
      Pb = t.Z,
      Qb = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
      Rb = Qb && Qb.get;function Sb(a) {
    for (var b; b = a.__shady_firstChild;) a.__shady_removeChild(b);
  }function Tb(a) {
    var b = r(a);if (b && void 0 !== b.M) for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling) Tb(b);if (a = r(a)) a.M = void 0;
  }function Ub(a) {
    var b = a;a && "slot" === a.localName && (b = (b = (b = r(a)) && b.B) && b.length ? b[0] : Ub(a.__shady_nextSibling));return b;
  }
  function Vb(a, b, c) {
    if (a = (a = r(a)) && a.C) b && (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? a.addedNodes.push.apply(a.addedNodes, da(b.childNodes)) : a.addedNodes.push(b)), c && a.removedNodes.push(c), ya(a);
  }
  var Yb = z({ get parentNode() {
      var a = r(this);a = a && a.parentNode;return void 0 !== a ? a : this.__shady_native_parentNode;
    }, get firstChild() {
      var a = r(this);a = a && a.firstChild;return void 0 !== a ? a : this.__shady_native_firstChild;
    }, get lastChild() {
      var a = r(this);a = a && a.lastChild;return void 0 !== a ? a : this.__shady_native_lastChild;
    }, get nextSibling() {
      var a = r(this);a = a && a.nextSibling;return void 0 !== a ? a : this.__shady_native_nextSibling;
    }, get previousSibling() {
      var a = r(this);a = a && a.previousSibling;return void 0 !== a ? a : this.__shady_native_previousSibling;
    },
    get childNodes() {
      if (u(this)) {
        var a = r(this);if (!a.childNodes) {
          a.childNodes = [];for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) a.childNodes.push(b);
        }var c = a.childNodes;
      } else c = this.__shady_native_childNodes;c.item = function (d) {
        return c[d];
      };return c;
    }, get parentElement() {
      var a = r(this);(a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);return void 0 !== a ? a : this.__shady_native_parentElement;
    }, get isConnected() {
      if (Rb && Rb.call(this)) return !0;if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
      var a = this.ownerDocument;if (pa) {
        if (a.__shady_native_contains(this)) return !0;
      } else if (a.documentElement && a.documentElement.__shady_native_contains(this)) return !0;for (a = this; a && !(a instanceof Document);) a = a.__shady_parentNode || (w(a) ? a.host : void 0);return !!(a && a instanceof Document);
    }, get textContent() {
      if (u(this)) {
        for (var a = [], b = this.__shady_firstChild; b; b = b.__shady_nextSibling) b.nodeType !== Node.COMMENT_NODE && a.push(b.__shady_textContent);return a.join("");
      }return this.__shady_native_textContent;
    }, set textContent(a) {
      if ("undefined" === typeof a || null === a) a = "";switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
          if (!u(this) && t.i) {
            var b = this.__shady_firstChild;(b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) && Sb(this);this.__shady_native_textContent = a;
          } else Sb(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));break;default:
          this.nodeValue = a;}
    }, insertBefore: function (a, b) {
      if (this.ownerDocument !== Ob && a.ownerDocument !== Ob) return this.__shady_native_insertBefore(a, b), a;if (a === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if (b) {
        var c = r(b);c = c && c.parentNode;if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
      }if (b === a) return a;Vb(this, a);var d = [],
          e = (c = F(this)) ? c.host.localName : Mb(this),
          f = a.__shady_parentNode;if (f) {
        var g = Mb(a);var h = !!c || !F(a) || Pb && void 0 !== this.__noInsertionPoint;f.__shady_removeChild(a, h);
      }f = !0;var l = (!Pb || void 0 === a.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !Lb(a, e),
          k = c && !a.__noInsertionPoint && (!Pb || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);if (k || l) l && (g = g || Mb(a)), Nb(a, function (m) {
        k && "slot" === m.localName && d.push(m);if (l) {
          var q = g;E() && (q && Kb(m, q), (q = E()) && q.scopeNode(m, e));
        }
      });d.length && (Wb(c), c.c.push.apply(c.c, da(d)), G(c));u(this) && (Fb(a, this, b), c = r(this), ia(this) ? (G(c.root), f = !1) : c.root && (f = !1));f ? (c = w(this) ? this.host : this, b ? (b = Ub(b), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a)) : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);return a;
    }, appendChild: function (a) {
      if (this != a || !w(a)) return this.__shady_insertBefore(a);
    }, removeChild: function (a, b) {
      b = void 0 === b ? !1 : b;if (this.ownerDocument !== Ob) return this.__shady_native_removeChild(a);if (a.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);Vb(this, null, a);var c = F(a),
          d = c && Xb(c, a),
          e = r(this);if (u(this) && (Gb(a, this), ia(this))) {
        G(e.root);var f = !0;
      }if (E() && !b && c && a.nodeType !== Node.TEXT_NODE) {
        var g = Mb(a);Nb(a, function (h) {
          Kb(h, g);
        });
      }Tb(a);c && ((b = this && "slot" === this.localName) && (f = !0), (d || b) && G(c));f || (f = w(this) ? this.host : this, (!e.root && "slot" !== a.localName || f === a.__shady_native_parentNode) && f.__shady_native_removeChild(a));return a;
    }, replaceChild: function (a, b) {
      this.__shady_insertBefore(a, b);this.__shady_removeChild(b);return a;
    }, cloneNode: function (a) {
      if ("template" == this.localName) return this.__shady_native_cloneNode(a);
      var b = this.__shady_native_cloneNode(!1);if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
        a = this.__shady_firstChild;for (var c; a; a = a.__shady_nextSibling) c = a.__shady_cloneNode(!0), b.__shady_appendChild(c);
      }return b;
    }, getRootNode: function (a) {
      if (this && this.nodeType) {
        var b = p(this),
            c = b.M;void 0 === c && (w(this) ? (c = this, b.M = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this, document.documentElement.__shady_native_contains(this) && (b.M = c)));return c;
      }
    }, contains: function (a) {
      return qa(this, a);
    } });function Zb(a, b, c) {
    var d = [];$b(a, b, c, d);return d;
  }function $b(a, b, c, d) {
    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
      var e;if (e = a.nodeType === Node.ELEMENT_NODE) {
        e = a;var f = b,
            g = c,
            h = d,
            l = f(e);l && h.push(e);g && g(l) ? e = l : ($b(e, f, g, h), e = void 0);
      }if (e) break;
    }
  }
  var H = z({ get firstElementChild() {
      var a = r(this);if (a && void 0 !== a.firstChild) {
        for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;return a;
      }return this.__shady_native_firstElementChild;
    }, get lastElementChild() {
      var a = r(this);if (a && void 0 !== a.lastChild) {
        for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;return a;
      }return this.__shady_native_lastElementChild;
    }, get children() {
      return u(this) ? ra(Array.prototype.filter.call(ta(this), function (a) {
        return a.nodeType === Node.ELEMENT_NODE;
      })) : this.__shady_native_children;
    }, get childElementCount() {
      var a = this.__shady_children;return a ? a.length : 0;
    } }),
      ac = z({ querySelector: function (a) {
      return Zb(this, function (b) {
        return ka.call(b, a);
      }, function (b) {
        return !!b;
      })[0] || null;
    }, querySelectorAll: function (a, b) {
      if (b) {
        b = Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));var c = this.__shady_getRootNode();return ra(b.filter(function (d) {
          return d.__shady_getRootNode() == c;
        }));
      }return ra(Zb(this, function (d) {
        return ka.call(d, a);
      }));
    } }),
      bc = t.Z && !t.u ? Object.assign({}, H) : H;Object.assign(H, ac);var cc = z({ getElementById: function (a) {
      return "" === a ? null : Zb(this, function (b) {
        return b.id == a;
      }, function (b) {
        return !!b;
      })[0] || null;
    } });var dc = z({ get activeElement() {
      var a = t.i ? document.__shady_native_activeElement : document.activeElement;if (!a || !a.nodeType) return null;var b = !!w(this);if (!(this === document || b && this.host !== a && this.host.__shady_native_contains(a))) return null;for (b = F(a); b && b !== this;) a = b.host, b = F(a);return this === document ? b ? null : a : b === this ? a : null;
    } });var ec = document.implementation.createHTMLDocument("inert"),
      fc = z({ get innerHTML() {
      return u(this) ? Ja("template" === this.localName ? this.content : this, ta) : this.__shady_native_innerHTML;
    }, set innerHTML(a) {
      if ("template" === this.localName) this.__shady_native_innerHTML = a;else {
        Sb(this);var b = this.localName || "div";b = this.namespaceURI && this.namespaceURI !== ec.namespaceURI ? ec.createElementNS(this.namespaceURI, b) : ec.createElement(b);for (t.i ? b.__shady_native_innerHTML = a : b.innerHTML = a; a = b.__shady_firstChild;) this.__shady_insertBefore(a);
      }
    } });var gc = z({ addEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.w = c.w || this;this.host.__shady_addEventListener(a, b, c);
    }, removeEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.w = c.w || this;this.host.__shady_removeEventListener(a, b, c);
    } });function hc(a, b) {
    y(a, gc, b);y(a, dc, b);y(a, fc, b);y(a, H, b);t.u && !b ? (y(a, Yb, b), y(a, cc, b)) : t.i || (y(a, Wa), y(a, Ua), y(a, Va));
  };var ic = {},
      I = t.deferConnectionCallbacks && "loading" === document.readyState,
      jc;function kc(a) {
    var b = [];do b.unshift(a); while (a = a.__shady_parentNode);return b;
  }function lc(a, b, c) {
    if (a !== ic) throw new TypeError("Illegal constructor");this.a = null;mc(this, b, c);
  }
  function mc(a, b, c) {
    a.ha = "ShadyRoot";a.host = b;a.mode = c && c.mode;Hb(a.host);b = p(a.host);b.root = a;b.sa = "closed" !== a.mode ? a : null;b = p(a);b.firstChild = b.lastChild = b.parentNode = b.nextSibling = b.previousSibling = null;if (t.preferPerformance) for (; b = a.host.__shady_native_firstChild;) a.host.__shady_native_removeChild(b);else G(a);
  }function G(a) {
    a.A || (a.A = !0, va(function () {
      return nc(a);
    }));
  }
  function nc(a) {
    var b;if (b = a.A) {
      for (var c; a;) a: {
        a.A && (c = a), b = a;a = b.host.__shady_getRootNode();if (w(a) && (b = r(b.host)) && 0 < b.H) break a;a = void 0;
      }b = c;
    }(c = b) && c._renderSelf();
  }
  lc.prototype._renderSelf = function () {
    var a = I;I = !0;this.A = !1;if (this.a) {
      oc(this);for (var b = 0, c; b < this.a.length; b++) {
        c = this.a[b];var d = r(c),
            e = d.assignedNodes;d.assignedNodes = [];d.B = [];if (d.V = e) for (d = 0; d < e.length; d++) {
          var f = r(e[d]);f.O = f.assignedSlot;f.assignedSlot === c && (f.assignedSlot = null);
        }
      }for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) pc(this, b);for (b = 0; b < this.a.length; b++) {
        c = this.a[b];e = r(c);if (!e.assignedNodes.length) for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling) pc(this, d, c);
        (d = (d = r(c.__shady_parentNode)) && d.root) && (ja(d) || d.A) && d._renderSelf();qc(this, e.B, e.assignedNodes);if (d = e.V) {
          for (f = 0; f < d.length; f++) r(d[f]).O = null;e.V = null;d.length > e.assignedNodes.length && (e.P = !0);
        }e.P && (e.P = !1, rc(this, c));
      }c = this.a;b = [];for (e = 0; e < c.length; e++) d = c[e].__shady_parentNode, (f = r(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);for (c = 0; c < b.length; c++) {
        f = b[c];e = f === this ? this.host : f;d = [];for (f = f.__shady_firstChild; f; f = f.__shady_nextSibling) if ("slot" == f.localName) for (var g = r(f).B, h = 0; h < g.length; h++) d.push(g[h]);else d.push(f);f = sa(e);g = Cb(d, d.length, f, f.length);for (var l = h = 0, k = void 0; h < g.length && (k = g[h]); h++) {
          for (var m = 0, q = void 0; m < k.D.length && (q = k.D[m]); m++) q.__shady_native_parentNode === e && e.__shady_native_removeChild(q), f.splice(k.index + l, 1);l -= k.I;
        }l = 0;for (k = void 0; l < g.length && (k = g[l]); l++) for (h = f[k.index], m = k.index; m < k.index + k.I; m++) q = d[m], e.__shady_native_insertBefore(q, h), f.splice(m, 0, q);
      }
    }if (!t.preferPerformance && !this.U) for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) c = r(b), b.__shady_native_parentNode !== this.host || "slot" !== b.localName && c.assignedSlot || this.host.__shady_native_removeChild(b);this.U = !0;I = a;jc && jc();
  };function pc(a, b, c) {
    var d = p(b),
        e = d.O;d.O = null;c || (c = (a = a.b[b.__shady_slot || "__catchall"]) && a[0]);c ? (p(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;e !== d.assignedSlot && d.assignedSlot && (p(d.assignedSlot).P = !0);
  }function qc(a, b, c) {
    for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++) if ("slot" == e.localName) {
      var f = r(e).assignedNodes;f && f.length && qc(a, b, f);
    } else b.push(c[d]);
  }
  function rc(a, b) {
    b.__shady_native_dispatchEvent(new Event("slotchange"));b = r(b);b.assignedSlot && rc(a, b.assignedSlot);
  }function Wb(a) {
    a.c = a.c || [];a.a = a.a || [];a.b = a.b || {};
  }function oc(a) {
    if (a.c && a.c.length) {
      for (var b = a.c, c, d = 0; d < b.length; d++) {
        var e = b[d];Hb(e);var f = e.__shady_parentNode;Hb(f);f = r(f);f.H = (f.H || 0) + 1;f = sc(e);a.b[f] ? (c = c || {}, c[f] = !0, a.b[f].push(e)) : a.b[f] = [e];a.a.push(e);
      }if (c) for (var g in c) a.b[g] = tc(a.b[g]);a.c = [];
    }
  }
  function sc(a) {
    var b = a.name || a.getAttribute("name") || "__catchall";return a.fa = b;
  }function tc(a) {
    return a.sort(function (b, c) {
      b = kc(b);for (var d = kc(c), e = 0; e < b.length; e++) {
        c = b[e];var f = d[e];if (c !== f) return b = ta(c.__shady_parentNode), b.indexOf(c) - b.indexOf(f);
      }
    });
  }
  function Xb(a, b) {
    if (a.a) {
      oc(a);var c = a.b,
          d;for (d in c) for (var e = c[d], f = 0; f < e.length; f++) {
        var g = e[f];if (qa(b, g)) {
          e.splice(f, 1);var h = a.a.indexOf(g);0 <= h && (a.a.splice(h, 1), (h = r(g.__shady_parentNode)) && h.H && h.H--);f--;g = r(g);if (h = g.B) for (var l = 0; l < h.length; l++) {
            var k = h[l],
                m = k.__shady_native_parentNode;m && m.__shady_native_removeChild(k);
          }g.B = [];g.assignedNodes = [];h = !0;
        }
      }return h;
    }
  }function ja(a) {
    oc(a);return !(!a.a || !a.a.length);
  }
  (function (a) {
    a.__proto__ = DocumentFragment.prototype;hc(a, "__shady_");hc(a);Object.defineProperties(a, { nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0 }, nodeName: { value: "#document-fragment", configurable: !0 }, nodeValue: { value: null, configurable: !0 } });["localName", "namespaceURI", "prefix"].forEach(function (b) {
      Object.defineProperty(a, b, { value: void 0, configurable: !0 });
    });["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
      Object.defineProperty(a, b, { get: function () {
          return this.host[b];
        },
        configurable: !0 });
    });
  })(lc.prototype);
  if (window.customElements && t.R && !t.preferPerformance) {
    var uc = new Map();jc = function () {
      var a = [];uc.forEach(function (d, e) {
        a.push([e, d]);
      });uc.clear();for (var b = 0; b < a.length; b++) {
        var c = a[b][0];a[b][1] ? c.__shadydom_connectedCallback() : c.__shadydom_disconnectedCallback();
      }
    };I && document.addEventListener("readystatechange", function () {
      I = !1;jc();
    }, { once: !0 });var vc = function (a, b, c) {
      var d = 0,
          e = "__isConnected" + d++;if (b || c) a.prototype.connectedCallback = a.prototype.__shadydom_connectedCallback = function () {
        I ? uc.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this));
      }, a.prototype.disconnectedCallback = a.prototype.__shadydom_disconnectedCallback = function () {
        I ? this.isConnected || uc.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this));
      };return a;
    },
        wc = window.customElements.define,
        define = function (a, b) {
      var c = b.prototype.connectedCallback,
          d = b.prototype.disconnectedCallback;wc.call(window.customElements, a, vc(b, c, d));b.prototype.connectedCallback = c;b.prototype.disconnectedCallback = d;
    };window.customElements.define = define;Object.defineProperty(window.CustomElementRegistry.prototype, "define", { value: define, configurable: !0 });
  }function F(a) {
    a = a.__shady_getRootNode();if (w(a)) return a;
  };function J(a) {
    this.node = a;
  }n = J.prototype;n.addEventListener = function (a, b, c) {
    return this.node.__shady_addEventListener(a, b, c);
  };n.removeEventListener = function (a, b, c) {
    return this.node.__shady_removeEventListener(a, b, c);
  };n.appendChild = function (a) {
    return this.node.__shady_appendChild(a);
  };n.insertBefore = function (a, b) {
    return this.node.__shady_insertBefore(a, b);
  };n.removeChild = function (a) {
    return this.node.__shady_removeChild(a);
  };n.replaceChild = function (a, b) {
    return this.node.__shady_replaceChild(a, b);
  };
  n.cloneNode = function (a) {
    return this.node.__shady_cloneNode(a);
  };n.getRootNode = function (a) {
    return this.node.__shady_getRootNode(a);
  };n.contains = function (a) {
    return this.node.__shady_contains(a);
  };n.dispatchEvent = function (a) {
    return this.node.__shady_dispatchEvent(a);
  };n.setAttribute = function (a, b) {
    this.node.__shady_setAttribute(a, b);
  };n.getAttribute = function (a) {
    return this.node.__shady_native_getAttribute(a);
  };n.removeAttribute = function (a) {
    this.node.__shady_removeAttribute(a);
  };n.attachShadow = function (a) {
    return this.node.__shady_attachShadow(a);
  };
  n.focus = function () {
    this.node.__shady_native_focus();
  };n.blur = function () {
    this.node.__shady_blur();
  };n.importNode = function (a, b) {
    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(a, b);
  };n.getElementById = function (a) {
    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(a);
  };n.querySelector = function (a) {
    return this.node.__shady_querySelector(a);
  };n.querySelectorAll = function (a, b) {
    return this.node.__shady_querySelectorAll(a, b);
  };
  n.assignedNodes = function (a) {
    if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(a);
  };
  ea.Object.defineProperties(J.prototype, { activeElement: { configurable: !0, enumerable: !0, get: function () {
        if (w(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement;
      } }, _activeElement: { configurable: !0, enumerable: !0, get: function () {
        return this.activeElement;
      } }, host: { configurable: !0, enumerable: !0, get: function () {
        if (w(this.node)) return this.node.host;
      } }, parentNode: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_parentNode;
      } }, firstChild: { configurable: !0,
      enumerable: !0, get: function () {
        return this.node.__shady_firstChild;
      } }, lastChild: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_lastChild;
      } }, nextSibling: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_nextSibling;
      } }, previousSibling: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_previousSibling;
      } }, childNodes: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_childNodes;
      } }, parentElement: { configurable: !0, enumerable: !0,
      get: function () {
        return this.node.__shady_parentElement;
      } }, firstElementChild: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_firstElementChild;
      } }, lastElementChild: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_lastElementChild;
      } }, nextElementSibling: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_nextElementSibling;
      } }, previousElementSibling: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_previousElementSibling;
      } },
    children: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_children;
      } }, childElementCount: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_childElementCount;
      } }, shadowRoot: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_shadowRoot;
      } }, assignedSlot: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_assignedSlot;
      } }, isConnected: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_isConnected;
      } }, innerHTML: { configurable: !0,
      enumerable: !0, get: function () {
        return this.node.__shady_innerHTML;
      }, set: function (a) {
        this.node.__shady_innerHTML = a;
      } }, textContent: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_textContent;
      }, set: function (a) {
        this.node.__shady_textContent = a;
      } }, slot: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_slot;
      }, set: function (a) {
        this.node.__shady_slot = a;
      } }, className: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_className;
      }, set: function (a) {
        return this.node.__shady_className = a;
      } } });Ab.forEach(function (a) {
    Object.defineProperty(J.prototype, a, { get: function () {
        return this.node["__shady_" + a];
      }, set: function (b) {
        this.node["__shady_" + a] = b;
      }, configurable: !0 });
  });var xc = new WeakMap();function yc(a) {
    if (w(a) || a instanceof J) return a;var b = xc.get(a);b || (b = new J(a), xc.set(a, b));return b;
  };var zc = z({ dispatchEvent: qb, addEventListener: rb, removeEventListener: tb });var Ac = z({ get assignedSlot() {
      var a = this.__shady_parentNode;(a = a && a.__shady_shadowRoot) && nc(a);return (a = r(this)) && a.assignedSlot || null;
    } });var Bc = window.document;function Cc(a, b) {
    if ("slot" === b) a = a.__shady_parentNode, ia(a) && G(r(a).root);else if ("slot" === a.localName && "name" === b && (b = F(a))) {
      if (b.a) {
        oc(b);var c = a.fa,
            d = sc(a);if (d !== c) {
          c = b.b[c];var e = c.indexOf(a);0 <= e && c.splice(e, 1);c = b.b[d] || (b.b[d] = []);c.push(a);1 < c.length && (b.b[d] = tc(c));
        }
      }G(b);
    }
  }
  var Dc = z({ get previousElementSibling() {
      var a = r(this);if (a && void 0 !== a.previousSibling) {
        for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;return a;
      }return this.__shady_native_previousElementSibling;
    }, get nextElementSibling() {
      var a = r(this);if (a && void 0 !== a.nextSibling) {
        for (a = this.__shady_nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;return a;
      }return this.__shady_native_nextElementSibling;
    }, get slot() {
      return this.getAttribute("slot");
    },
    set slot(a) {
      this.__shady_setAttribute("slot", a);
    }, get shadowRoot() {
      var a = r(this);return a && a.sa || null;
    }, get className() {
      return this.getAttribute("class") || "";
    }, set className(a) {
      this.__shady_setAttribute("class", a);
    }, setAttribute: function (a, b) {
      this.ownerDocument !== Bc ? this.__shady_native_setAttribute(a, b) : Jb(this, a, b) || (this.__shady_native_setAttribute(a, b), Cc(this, a));
    }, removeAttribute: function (a) {
      this.ownerDocument !== Bc ? this.__shady_native_removeAttribute(a) : Jb(this, a, "") ? "" === this.getAttribute(a) && this.__shady_native_removeAttribute(a) : (this.__shady_native_removeAttribute(a), Cc(this, a));
    }, attachShadow: function (a) {
      if (!this) throw Error("Must provide a host.");if (!a) throw Error("Not enough arguments.");if (a.shadyUpgradeFragment && !t.ca) {
        var b = a.shadyUpgradeFragment;b.__proto__ = ShadowRoot.prototype;mc(b, this, a);Hb(b, b);a = b.__noInsertionPoint ? null : b.querySelectorAll("slot");b.__noInsertionPoint = void 0;if (a && a.length) {
          var c = b;Wb(c);c.c.push.apply(c.c, da(a));G(b);
        }b.host.__shady_native_appendChild(b);
      } else b = new lc(ic, this, a);return b;
    } });var Ec = z({ blur: function () {
      var a = r(this);(a = (a = a && a.root) && a.activeElement) ? a.__shady_blur() : this.__shady_native_blur();
    } });Ab.forEach(function (a) {
    Ec[a] = { set: function (b) {
        var c = p(this),
            d = a.substring(2);c.v || (c.v = {});c.v[a] && this.removeEventListener(d, c.v[a]);this.__shady_addEventListener(d, b);c.v[a] = b;
      }, get: function () {
        var b = r(this);return b && b.v && b.v[a];
      }, configurable: !0 };
  });var Fc = z({ assignedNodes: function (a) {
      if ("slot" === this.localName) {
        var b = this.__shady_getRootNode();b && w(b) && nc(b);return (b = r(this)) ? (a && a.flatten ? b.B : b.assignedNodes) || [] : [];
      }
    }, addEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) rb.call(this, a, b, c);else {
        "object" !== typeof c && (c = { capture: !!c });var d = this.__shady_parentNode;if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.w = this;d.__shady_addEventListener(a, b, c);
      }
    }, removeEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) tb.call(this, a, b, c);else {
        "object" !== typeof c && (c = { capture: !!c });var d = this.__shady_parentNode;if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.w = this;d.__shady_removeEventListener(a, b, c);
      }
    } });var Gc = window.document,
      Hc = z({ importNode: function (a, b) {
      if (a.ownerDocument !== Gc || "template" === a.localName) return this.__shady_native_importNode(a, b);var c = this.__shady_native_importNode(a, !1);if (b) for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b = this.__shady_importNode(a, !0), c.__shady_appendChild(b);return c;
    } });var Ic = z({ dispatchEvent: qb, addEventListener: rb.bind(window), removeEventListener: tb.bind(window) });var K = {};Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (K.parentElement = Yb.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (K.contains = Yb.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (K.children = H.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (K.innerHTML = fc.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (K.className = Dc.className);
  var Jc = { EventTarget: [zc], Node: [Yb, window.EventTarget ? null : zc], Text: [Ac], Element: [Dc, H, Ac, !t.i || "innerHTML" in Element.prototype ? fc : null, window.HTMLSlotElement ? null : Fc], HTMLElement: [Ec, K], HTMLSlotElement: [Fc], DocumentFragment: [bc, cc], Document: [Hc, bc, cc, dc], Window: [Ic] },
      Kc = t.i ? null : ["innerHTML", "textContent"];function Lc(a) {
    var b = a ? null : Kc,
        c = {},
        d;for (d in Jc) c.G = window[d] && window[d].prototype, Jc[d].forEach(function (e) {
      return function (f) {
        return e.G && f && y(e.G, f, a, b);
      };
    }(c)), c = { G: c.G };
  };if (t.R) {
    var ShadyDOM = { inUse: t.R, patch: function (a) {
        $a(a);Za(a);return a;
      }, isShadyRoot: w, enqueue: va, flush: wa, flushInitial: function (a) {
        !a.U && a.A && nc(a);
      }, settings: t, filterMutations: Ba, observeChildren: za, unobserveChildren: Aa, deferConnectionCallbacks: t.deferConnectionCallbacks, preferPerformance: t.preferPerformance, handlesDynamicScoping: !0, wrap: t.u ? yc : function (a) {
        return a;
      }, Wrapper: J, composedPath: ib, noPatch: t.u, nativeMethods: La, nativeTree: Ma };window.ShadyDOM = ShadyDOM;Ta();Lc("__shady_");Object.defineProperty(document, "_activeElement", dc.activeElement);y(Window.prototype, Ic, "__shady_");t.u || (Lc(), zb());ub();window.Event = wb;window.CustomEvent = xb;window.MouseEvent = yb;window.ShadowRoot = lc;
  }; /*
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
  function Mc() {
    this.end = this.start = 0;this.rules = this.parent = this.previous = null;this.cssText = this.parsedCssText = "";this.atRule = !1;this.type = 0;this.parsedSelector = this.selector = this.keyframesName = "";
  }
  function Nc(a) {
    var b = a = a.replace(Oc, "").replace(Pc, ""),
        c = new Mc();c.start = 0;c.end = b.length;for (var d = c, e = 0, f = b.length; e < f; e++) if ("{" === b[e]) {
      d.rules || (d.rules = []);var g = d,
          h = g.rules[g.rules.length - 1] || null;d = new Mc();d.start = e + 1;d.parent = g;d.previous = h;g.rules.push(d);
    } else "}" === b[e] && (d.end = e + 1, d = d.parent || c);return Qc(c, a);
  }
  function Qc(a, b) {
    var c = b.substring(a.start, a.end - 1);a.parsedCssText = a.cssText = c.trim();a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = Rc(c), c = c.replace(Sc, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = Tc : c.match(Uc) && (a.type = Vc, a.keyframesName = a.selector.split(Sc).pop()) : a.type = 0 === c.indexOf("--") ? Wc : Xc);if (c = a.rules) for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) Qc(f, b);return a;
  }function Rc(a) {
    return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (b, c) {
      b = c;for (c = 6 - b.length; c--;) b = "0" + b;return "\\" + b;
    });
  }
  function Yc(a, b, c) {
    c = void 0 === c ? "" : c;var d = "";if (a.cssText || a.rules) {
      var e = a.rules,
          f;if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));if (f) {
        f = 0;for (var g = e.length, h = void 0; f < g && (h = e[f]); f++) d = Yc(h, b, d);
      } else b ? b = a.cssText : (b = a.cssText, b = b.replace(Zc, "").replace($c, ""), b = b.replace(ad, "").replace(bd, "")), (d = b.trim()) && (d = "  " + d + "\n");
    }d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));return c;
  }
  var Xc = 1,
      Vc = 7,
      Tc = 4,
      Wc = 1E3,
      Oc = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      Pc = /@import[^;]*;/gim,
      Zc = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      $c = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      ad = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      bd = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      Uc = /^@[^\s]*keyframes/,
      Sc = /\s+/g;var L = !(window.ShadyDOM && window.ShadyDOM.inUse),
      cd;function dd(a) {
    cd = a && a.shimcssproperties ? !1 : L || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
  }var ed;window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (ed = window.ShadyCSS.cssBuild);var M = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
  window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? cd = window.ShadyCSS.nativeCss : window.ShadyCSS ? (dd(window.ShadyCSS), window.ShadyCSS = void 0) : dd(window.WebComponents && window.WebComponents.flags);var N = cd;var fd = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      gd = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      hd = /(--[\w-]+)\s*([:,;)]|$)/gi,
      id = /(animation\s*:)|(animation-name\s*:)/,
      jd = /@media\s(.*)/,
      kd = /\{[^}]*\}/g;var ld = new Set();function O(a, b) {
    if (!a) return "";"string" === typeof a && (a = Nc(a));b && P(a, b);return Yc(a, N);
  }function md(a) {
    !a.__cssRules && a.textContent && (a.__cssRules = Nc(a.textContent));return a.__cssRules || null;
  }function nd(a) {
    return !!a.parent && a.parent.type === Vc;
  }function P(a, b, c, d) {
    if (a) {
      var e = !1,
          f = a.type;if (d && f === Tc) {
        var g = a.selector.match(jd);g && (window.matchMedia(g[1]).matches || (e = !0));
      }f === Xc ? b(a) : c && f === Vc ? c(a) : f === Wc && (e = !0);if ((a = a.rules) && !e) for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) P(g, b, c, d);
    }
  }
  function od(a, b, c, d) {
    var e = document.createElement("style");b && e.setAttribute("scope", b);e.textContent = a;pd(e, c, d);return e;
  }var Q = null;function qd(a) {
    a = document.createComment(" Shady DOM styles for " + a + " ");var b = document.head;b.insertBefore(a, (Q ? Q.nextSibling : null) || b.firstChild);return Q = a;
  }function pd(a, b, c) {
    b = b || document.head;b.insertBefore(a, c && c.nextSibling || b.firstChild);Q ? a.compareDocumentPosition(Q) === Node.DOCUMENT_POSITION_PRECEDING && (Q = a) : Q = a;
  }
  function rd(a, b) {
    for (var c = 0, d = a.length; b < d; b++) if ("(" === a[b]) c++;else if (")" === a[b] && 0 === --c) return b;return -1;
  }function sd(a, b) {
    var c = a.indexOf("var(");if (-1 === c) return b(a, "", "", "");var d = rd(a, c + 3),
        e = a.substring(c + 4, d);c = a.substring(0, c);a = sd(a.substring(d + 1), b);d = e.indexOf(",");return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
  }function td(a, b) {
    L ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
  }
  var ud = window.ShadyDOM && window.ShadyDOM.wrap || function (a) {
    return a;
  };function R(a) {
    var b = a.localName,
        c = "";b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);return { is: b, F: c };
  }function vd(a) {
    for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++) if ("(" === a[d]) {
      var e = rd(a, d);c += a.slice(d, e + 1);d = e;
    } else "," === a[d] ? (b.push(c), c = "") : c += a[d];c && b.push(c);return b;
  }
  function S(a) {
    if (void 0 !== ed) return ed;if (void 0 === a.__cssBuild) {
      var b = a.getAttribute("css-build");if (b) a.__cssBuild = b;else {
        a: {
          b = "template" === a.localName ? a.content.firstChild : a.firstChild;if (b instanceof Comment && (b = b.textContent.trim().split(":"), "css-build" === b[0])) {
            b = b[1];break a;
          }b = "";
        }if ("" !== b) {
          var c = "template" === a.localName ? a.content.firstChild : a.firstChild;c.parentNode.removeChild(c);
        }a.__cssBuild = b;
      }
    }return a.__cssBuild || "";
  }
  function wd(a) {
    a = void 0 === a ? "" : a;return "" !== a && N ? L ? "shadow" === a : "shady" === a : !1;
  };function xd() {}function yd(a, b) {
    zd(T, a, function (c) {
      U(c, b || "");
    });
  }function zd(a, b, c) {
    b.nodeType === Node.ELEMENT_NODE && c(b);var d;"template" === b.localName ? d = (b.content || b._content || b).childNodes : d = b.children || b.childNodes;if (d) for (b = 0; b < d.length; b++) zd(a, d[b], c);
  }
  function U(a, b, c) {
    if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));else if (a.getAttribute) {
      var d = a.getAttribute("class");c ? d && (b = d.replace("style-scope", "").replace(b, ""), td(a, b)) : td(a, (d ? d + " " : "") + "style-scope " + b);
    }
  }function Ad(a, b, c) {
    zd(T, a, function (d) {
      U(d, b, !0);U(d, c);
    });
  }function Bd(a, b) {
    zd(T, a, function (c) {
      U(c, b || "", !0);
    });
  }
  function Cd(a, b, c, d, e) {
    var f = T;e = void 0 === e ? "" : e;"" === e && (L || "shady" === (void 0 === d ? "" : d) ? e = O(b, c) : (a = R(a), e = Dd(f, b, a.is, a.F, c) + "\n\n"));return e.trim();
  }function Dd(a, b, c, d, e) {
    var f = Ed(c, d);c = c ? "." + c : "";return O(b, function (g) {
      g.c || (g.selector = g.g = Fd(a, g, a.b, c, f), g.c = !0);e && e(g, c, f);
    });
  }function Ed(a, b) {
    return b ? "[is=" + a + "]" : a;
  }
  function Fd(a, b, c, d, e) {
    var f = vd(b.selector);if (!nd(b)) {
      b = 0;for (var g = f.length, h = void 0; b < g && (h = f[b]); b++) f[b] = c.call(a, h, d, e);
    }return f.filter(function (l) {
      return !!l;
    }).join(",");
  }function Gd(a) {
    return a.replace(Hd, function (b, c, d) {
      -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));return ":" + c + "(" + d + ")";
    });
  }
  function Id(a) {
    for (var b = [], c; c = a.match(Jd);) {
      var d = c.index,
          e = rd(a, d);if (-1 === e) throw Error(c.input + " selector missing ')'");c = a.slice(d, e + 1);a = a.replace(c, "\ue000");b.push(c);
    }return { T: a, matches: b };
  }function Kd(a, b) {
    var c = a.split("\ue000");return b.reduce(function (d, e, f) {
      return d + e + c[f + 1];
    }, c[0]);
  }
  xd.prototype.b = function (a, b, c) {
    var d = !1;a = a.trim();var e = Hd.test(a);e && (a = a.replace(Hd, function (h, l, k) {
      return ":" + l + "(" + k.replace(/\s/g, "") + ")";
    }), a = Gd(a));var f = Jd.test(a);if (f) {
      var g = Id(a);a = g.T;g = g.matches;
    }a = a.replace(Ld, ":host $1");a = a.replace(Md, function (h, l, k) {
      d || (h = Nd(k, l, b, c), d = d || h.stop, l = h.la, k = h.value);return l + k;
    });f && (a = Kd(a, g));e && (a = Gd(a));return a = a.replace(Od, function (h, l, k, m) {
      return '[dir="' + k + '"] ' + l + m + ", " + l + '[dir="' + k + '"]' + m;
    });
  };
  function Nd(a, b, c, d) {
    var e = a.indexOf("::slotted");0 <= a.indexOf(":host") ? a = Pd(a, d) : 0 !== e && (a = c ? Qd(a, c) : a);c = !1;0 <= e && (b = "", c = !0);if (c) {
      var f = !0;c && (a = a.replace(Rd, function (g, h) {
        return " > " + h;
      }));
    }return { value: a, la: b, stop: f };
  }function Qd(a, b) {
    a = a.split(/(\[.+?\])/);for (var c = [], d = 0; d < a.length; d++) if (1 === d % 2) c.push(a[d]);else {
      var e = a[d];if ("" !== e || d !== a.length - 1) e = e.split(":"), e[0] += b, c.push(e.join(":"));
    }return c.join("");
  }
  function Pd(a, b) {
    var c = a.match(Sd);return (c = c && c[2].trim() || "") ? c[0].match(Td) ? a.replace(Sd, function (d, e, f) {
      return b + f;
    }) : c.split(Td)[0] === b ? c : "should_not_match" : a.replace(":host", b);
  }function Ud(a) {
    ":root" === a.selector && (a.selector = "html");
  }xd.prototype.c = function (a) {
    return a.match(":host") ? "" : a.match("::slotted") ? this.b(a, ":not(.style-scope)") : Qd(a.trim(), ":not(.style-scope)");
  };ea.Object.defineProperties(xd.prototype, { a: { configurable: !0, enumerable: !0, get: function () {
        return "style-scope";
      } } });
  var Hd = /:(nth[-\w]+)\(([^)]+)\)/,
      Md = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
      Td = /[[.:#*]/,
      Ld = /^(::slotted)/,
      Sd = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      Rd = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      Od = /(.*):dir\((?:(ltr|rtl))\)(.*)/,
      Jd = /:(?:matches|any|-(?:webkit|moz)-any)/,
      T = new xd();function V(a, b, c, d, e) {
    this.m = a || null;this.b = b || null;this.S = c || [];this.j = null;this.cssBuild = e || "";this.F = d || "";this.a = this.l = this.s = null;
  }function W(a) {
    return a ? a.__styleInfo : null;
  }function Vd(a, b) {
    return a.__styleInfo = b;
  }V.prototype.c = function () {
    return this.m;
  };V.prototype._getStyleRules = V.prototype.c;function Wd(a) {
    var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;return b && b.call(this, a);
  }var Xd = /:host\s*>\s*/,
      Yd = navigator.userAgent.match("Trident");function Zd() {}function $d(a) {
    var b = {},
        c = [],
        d = 0;P(a, function (f) {
      ae(f);f.index = d++;f = f.f.cssText;for (var g; g = hd.exec(f);) {
        var h = g[1];":" !== g[2] && (b[h] = !0);
      }
    }, function (f) {
      c.push(f);
    });a.b = c;a = [];for (var e in b) a.push(e);return a;
  }
  function ae(a) {
    if (!a.f) {
      var b = {},
          c = {};be(a, c) && (b.o = c, a.rules = null);b.cssText = a.parsedCssText.replace(kd, "").replace(fd, "");a.f = b;
    }
  }function be(a, b) {
    var c = a.f;if (c) {
      if (c.o) return Object.assign(b, c.o), !0;
    } else {
      c = a.parsedCssText;for (var d; a = fd.exec(c);) {
        d = (a[2] || a[3]).trim();if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;d = !0;
      }return d;
    }
  }
  function ce(a, b, c) {
    b && (b = 0 <= b.indexOf(";") ? de(a, b, c) : sd(b, function (d, e, f, g) {
      if (!e) return d + g;(e = ce(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = ce(a, c[f] || f, c) || f;return d + (e || "") + g;
    }));return b && b.trim() || "";
  }
  function de(a, b, c) {
    b = b.split(";");for (var d = 0, e, f; d < b.length; d++) if (e = b[d]) {
      gd.lastIndex = 0;if (f = gd.exec(e)) e = ce(a, c[f[1]], c);else if (f = e.indexOf(":"), -1 !== f) {
        var g = e.substring(f);g = g.trim();g = ce(a, g, c) || g;e = e.substring(0, f) + g;
      }b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
    }return b.join(";");
  }
  function ee(a, b) {
    var c = {},
        d = [];P(a, function (e) {
      e.f || ae(e);var f = e.g || e.parsedSelector;b && e.f.o && f && Wd.call(b, f) && (be(e, c), e = e.index, f = parseInt(e / 32, 10), d[f] = (d[f] || 0) | 1 << e % 32);
    }, null, !0);return { o: c, key: d };
  }
  function fe(a, b, c, d) {
    b.f || ae(b);if (b.f.o) {
      var e = R(a);a = e.is;e = e.F;e = a ? Ed(a, e) : "html";var f = b.parsedSelector;var g = !!f.match(Xd) || "html" === e && -1 < f.indexOf("html");var h = 0 === f.indexOf(":host") && !g;"shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));if (g || h) c = e, h && (b.g || (b.g = Fd(T, b, T.b, a ? "." + a : "", e)), c = b.g || e), g && "html" === e && (c = b.g || b.K), d({ T: c, qa: h, Aa: g });
    }
  }
  function ge(a, b, c) {
    var d = {},
        e = {};P(b, function (f) {
      fe(a, f, c, function (g) {
        Wd.call(a._element || a, g.T) && (g.qa ? be(f, d) : be(f, e));
      });
    }, null, !0);return { ta: e, pa: d };
  }
  function he(a, b, c, d) {
    var e = R(b),
        f = Ed(e.is, e.F),
        g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
        h = W(b);e = h.m;h = h.cssBuild;var l = ie(e, d);return Cd(b, e, function (k) {
      var m = "";k.f || ae(k);k.f.cssText && (m = de(a, k.f.cssText, c));k.cssText = m;if (!L && !nd(k) && k.cssText) {
        var q = m = k.cssText;null == k.X && (k.X = id.test(m));if (k.X) if (null == k.L) {
          k.L = [];for (var v in l) q = l[v], q = q(m), m !== q && (m = q, k.L.push(v));
        } else {
          for (v = 0; v < k.L.length; ++v) q = l[k.L[v]], m = q(m);q = m;
        }k.cssText = q;k.g = k.g || k.selector;
        m = "." + d;v = vd(k.g);q = 0;for (var aa = v.length, Ea = void 0; q < aa && (Ea = v[q]); q++) v[q] = Ea.match(g) ? Ea.replace(f, m) : m + " " + Ea;k.selector = v.join(",");
      }
    }, h);
  }function ie(a, b) {
    a = a.b;var c = {};if (!L && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
      var f = e,
          g = b;f.h = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");f.a = f.keyframesName + "-" + g;f.g = f.g || f.selector;f.selector = f.g.replace(f.keyframesName, f.a);c[e.keyframesName] = je(e);
    }return c;
  }function je(a) {
    return function (b) {
      return b.replace(a.h, a.a);
    };
  }
  function ke(a, b) {
    var c = le,
        d = md(a);a.textContent = O(d, function (e) {
      var f = e.cssText = e.parsedCssText;e.f && e.f.cssText && (f = f.replace(Zc, "").replace($c, ""), e.cssText = de(c, f, b));
    });
  }ea.Object.defineProperties(Zd.prototype, { a: { configurable: !0, enumerable: !0, get: function () {
        return "x-scope";
      } } });var le = new Zd();var X = {},
      me = window.customElements;if (me && !L && !M) {
    var ne = me.define;me.define = function (a, b, c) {
      X[a] || (X[a] = qd(a));ne.call(me, a, b, c);
    };
  };function oe() {
    this.cache = {};
  }oe.prototype.store = function (a, b, c, d) {
    var e = this.cache[a] || [];e.push({ o: b, styleElement: c, l: d });100 < e.length && e.shift();this.cache[a] = e;
  };function pe() {}var qe = new RegExp(T.a + "\\s*([^\\s]*)");function re(a) {
    return (a = (a.classList && a.classList.value ? a.classList.value : a.getAttribute("class") || "").match(qe)) ? a[1] : "";
  }function se(a) {
    var b = ud(a).getRootNode();return b === a || b === a.ownerDocument ? "" : (a = b.host) ? R(a).is : "";
  }
  function te(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
        var e = c.addedNodes[d];if (e.nodeType === Node.ELEMENT_NODE) {
          var f = e.getRootNode(),
              g = re(e);if (g && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === S(e))) Bd(e, g);else if (f instanceof ShadowRoot) for (f = se(e), f !== g && Ad(e, g, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + T.a + ")"), g = 0; g < e.length; g++) {
            f = e[g];
            var h = se(f);h && U(f, h);
          }
        }
      }
    }
  }
  if (!(L || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
    var ue = new MutationObserver(te),
        ve = function (a) {
      ue.observe(a, { childList: !0, subtree: !0 });
    };if (window.customElements && !window.customElements.polyfillWrapFlushCallback) ve(document);else {
      var we = function () {
        ve(document.body);
      };window.HTMLImports ? window.HTMLImports.whenReady(we) : requestAnimationFrame(function () {
        if ("loading" === document.readyState) {
          var a = function () {
            we();document.removeEventListener("readystatechange", a);
          };document.addEventListener("readystatechange", a);
        } else we();
      });
    }pe = function () {
      te(ue.takeRecords());
    };
  };var xe = {};var ye = Promise.resolve();function ze(a) {
    if (a = xe[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
  }function Ae(a) {
    return a._applyShimCurrentVersion === a._applyShimNextVersion;
  }function Be(a) {
    a._applyShimValidatingVersion = a._applyShimNextVersion;a._validating || (a._validating = !0, ye.then(function () {
      a._applyShimCurrentVersion = a._applyShimNextVersion;a._validating = !1;
    }));
  };var Ce = {},
      De = new oe();function Y() {
    this.W = {};this.c = document.documentElement;var a = new Mc();a.rules = [];this.h = Vd(this.c, new V(a));this.K = !1;this.a = this.b = null;
  }n = Y.prototype;n.flush = function () {
    pe();
  };n.na = function (a) {
    return md(a);
  };n.xa = function (a) {
    return O(a);
  };n.prepareTemplate = function (a, b, c) {
    this.prepareTemplateDom(a, b);this.prepareTemplateStyles(a, b, c);
  };
  n.prepareTemplateStyles = function (a, b, c) {
    if (!a._prepared && !M) {
      L || X[b] || (X[b] = qd(b));a._prepared = !0;a.name = b;a.extends = c;xe[b] = a;var d = S(a),
          e = wd(d);c = { is: b, extends: c };for (var f = [], g = a.content.querySelectorAll("style"), h = 0; h < g.length; h++) {
        var l = g[h];if (l.hasAttribute("shady-unscoped")) {
          if (!L) {
            var k = l.textContent;ld.has(k) || (ld.add(k), k = l.cloneNode(!0), document.head.appendChild(k));l.parentNode.removeChild(l);
          }
        } else f.push(l.textContent), l.parentNode.removeChild(l);
      }f = f.join("").trim() + (Ce[b] || "");Ee(this);
      if (!e) {
        if (g = !d) g = gd.test(f) || fd.test(f), gd.lastIndex = 0, fd.lastIndex = 0;h = Nc(f);g && N && this.b && this.b.transformRules(h, b);a._styleAst = h;
      }g = [];N || (g = $d(a._styleAst));if (!g.length || N) h = L ? a.content : null, b = X[b] || null, d = Cd(c, a._styleAst, null, d, e ? f : ""), d = d.length ? od(d, c.is, h, b) : null, a._style = d;a.a = g;
    }
  };n.ra = function (a, b) {
    Ce[b] = a.join(" ");
  };n.prepareTemplateDom = function (a, b) {
    if (!M) {
      var c = S(a);L || "shady" === c || a._domPrepared || (a._domPrepared = !0, yd(a.content, b));
    }
  };
  function Fe(a) {
    var b = R(a),
        c = b.is;b = b.F;var d = X[c] || null,
        e = xe[c];if (e) {
      c = e._styleAst;var f = e.a;e = S(e);b = new V(c, d, f, b, e);Vd(a, b);return b;
    }
  }function Ge(a) {
    !a.a && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.a = window.ShadyCSS.CustomStyleInterface, a.a.transformCallback = function (b) {
      a.ba(b);
    }, a.a.validateCallback = function () {
      requestAnimationFrame(function () {
        (a.a.enqueued || a.K) && a.flushCustomStyles();
      });
    });
  }
  function Ee(a) {
    !a.b && window.ShadyCSS && window.ShadyCSS.ApplyShim && (a.b = window.ShadyCSS.ApplyShim, a.b.invalidCallback = ze);Ge(a);
  }
  n.flushCustomStyles = function () {
    if (!M && (Ee(this), this.a)) {
      var a = this.a.processStyles();if (this.a.enqueued && !wd(this.h.cssBuild)) {
        if (N) {
          if (!this.h.cssBuild) for (var b = 0; b < a.length; b++) {
            var c = this.a.getStyleForCustomStyle(a[b]);if (c && N && this.b) {
              var d = md(c);Ee(this);this.b.transformRules(d);c.textContent = O(d);
            }
          }
        } else {
          He(this, a);Ie(this, this.c, this.h);for (b = 0; b < a.length; b++) (c = this.a.getStyleForCustomStyle(a[b])) && ke(c, this.h.s);this.K && this.styleDocument();
        }this.a.enqueued = !1;
      }
    }
  };
  function He(a, b) {
    b = b.map(function (c) {
      return a.a.getStyleForCustomStyle(c);
    }).filter(function (c) {
      return !!c;
    });b.sort(function (c, d) {
      c = d.compareDocumentPosition(c);return c & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : c & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
    });a.h.m.rules = b.map(function (c) {
      return md(c);
    });
  }
  n.styleElement = function (a, b) {
    if (M) {
      if (b) {
        W(a) || Vd(a, new V(null));var c = W(a);c.j = c.j || {};Object.assign(c.j, b);Je(this, a, c);
      }
    } else if (c = W(a) || Fe(a)) if (a !== this.c && (this.K = !0), b && (c.j = c.j || {}, Object.assign(c.j, b)), N) Je(this, a, c);else if (this.flush(), Ie(this, a, c), c.S && c.S.length) {
      b = R(a).is;var d;a: {
        if (d = De.cache[b]) for (var e = d.length - 1; 0 <= e; e--) {
          var f = d[e];b: {
            var g = c.S;for (var h = 0; h < g.length; h++) {
              var l = g[h];if (f.o[l] !== c.s[l]) {
                g = !1;break b;
              }
            }g = !0;
          }if (g) {
            d = f;break a;
          }
        }d = void 0;
      }g = d ? d.styleElement : null;e = c.l;
      (f = d && d.l) || (f = this.W[b] = (this.W[b] || 0) + 1, f = b + "-" + f);c.l = f;f = c.l;h = le;h = g ? g.textContent || "" : he(h, a, c.s, f);l = W(a);var k = l.a;k && !L && k !== g && (k._useCount--, 0 >= k._useCount && k.parentNode && k.parentNode.removeChild(k));L ? l.a ? (l.a.textContent = h, g = l.a) : h && (g = od(h, f, a.shadowRoot, l.b)) : g ? g.parentNode || (Yd && -1 < h.indexOf("@media") && (g.textContent = h), pd(g, null, l.b)) : h && (g = od(h, f, null, l.b));g && (g._useCount = g._useCount || 0, l.a != g && g._useCount++, l.a = g);f = g;L || (g = c.l, l = h = a.getAttribute("class") || "", e && (l = h.replace(new RegExp("\\s*x-scope\\s*" + e + "\\s*", "g"), " ")), l += (l ? " " : "") + "x-scope " + g, h !== l && td(a, l));d || De.store(b, c.s, f, c.l);
    }
  };
  function Je(a, b, c) {
    var d = R(b).is;if (c.j) {
      var e = c.j,
          f;for (f in e) null === f ? b.style.removeProperty(f) : b.style.setProperty(f, e[f]);
    }e = xe[d];if (!(!e && b !== a.c || e && "" !== S(e)) && e && e._style && !Ae(e)) {
      if (Ae(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) Ee(a), a.b && a.b.transformRules(e._styleAst, d), e._style.textContent = Cd(b, c.m), Be(e);L && (a = b.shadowRoot) && (a = a.querySelector("style")) && (a.textContent = Cd(b, c.m));c.m = e._styleAst;
    }
  }
  function Ke(a, b) {
    return (b = ud(b).getRootNode().host) ? W(b) || Fe(b) ? b : Ke(a, b) : a.c;
  }function Ie(a, b, c) {
    var d = Ke(a, b),
        e = W(d),
        f = e.s;d === a.c || f || (Ie(a, d, e), f = e.s);a = Object.create(f || null);d = ge(b, c.m, c.cssBuild);b = ee(e.m, b).o;Object.assign(a, d.pa, b, d.ta);b = c.j;for (var g in b) if ((e = b[g]) || 0 === e) a[g] = e;g = le;b = Object.getOwnPropertyNames(a);for (e = 0; e < b.length; e++) d = b[e], a[d] = ce(g, a[d], a);c.s = a;
  }n.styleDocument = function (a) {
    this.styleSubtree(this.c, a);
  };
  n.styleSubtree = function (a, b) {
    var c = ud(a),
        d = c.shadowRoot,
        e = a === this.c;(d || e) && this.styleElement(a, b);if (a = e ? c : d) for (a = Array.from(a.querySelectorAll("*")).filter(function (f) {
      return ud(f).shadowRoot;
    }), b = 0; b < a.length; b++) this.styleSubtree(a[b]);
  };
  n.ba = function (a) {
    var b = this,
        c = S(a);c !== this.h.cssBuild && (this.h.cssBuild = c);if (!wd(c)) {
      var d = md(a);P(d, function (e) {
        if (L) Ud(e);else {
          var f = T;e.selector = e.parsedSelector;Ud(e);e.selector = e.g = Fd(f, e, f.c, void 0, void 0);
        }N && "" === c && (Ee(b), b.b && b.b.transformRule(e));
      });N ? a.textContent = O(d) : this.h.m.rules.push(d);
    }
  };n.getComputedStyleValue = function (a, b) {
    var c;N || (c = (W(a) || W(Ke(this, a))).s[b]);return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "";
  };
  n.wa = function (a, b) {
    var c = ud(a).getRootNode(),
        d;b ? d = ("string" === typeof b ? b : String(b)).split(/\s/) : d = [];b = c.host && c.host.localName;if (!b && (c = a.getAttribute("class"))) {
      c = c.split(/\s/);for (var e = 0; e < c.length; e++) if (c[e] === T.a) {
        b = c[e + 1];break;
      }
    }b && d.push(T.a, b);N || (b = W(a)) && b.l && d.push(le.a, b.l);td(a, d.join(" "));
  };n.ka = function (a) {
    return W(a);
  };n.va = function (a, b) {
    U(a, b);
  };n.ya = function (a, b) {
    U(a, b, !0);
  };n.ua = function (a) {
    return se(a);
  };n.ma = function (a) {
    return re(a);
  };Y.prototype.flush = Y.prototype.flush;
  Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;Y.prototype.styleElement = Y.prototype.styleElement;Y.prototype.styleDocument = Y.prototype.styleDocument;Y.prototype.styleSubtree = Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;Y.prototype.setElementClass = Y.prototype.wa;Y.prototype._styleInfoForNode = Y.prototype.ka;Y.prototype.transformCustomStyleForDocument = Y.prototype.ba;Y.prototype.getStyleAst = Y.prototype.na;Y.prototype.styleAstToString = Y.prototype.xa;
  Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;Y.prototype.scopeNode = Y.prototype.va;Y.prototype.unscopeNode = Y.prototype.ya;Y.prototype.scopeForNode = Y.prototype.ua;Y.prototype.currentScopeForNode = Y.prototype.ma;Y.prototype.prepareAdoptedCssText = Y.prototype.ra;Object.defineProperties(Y.prototype, { nativeShadow: { get: function () {
        return L;
      } }, nativeCss: { get: function () {
        return N;
      } } });var Z = new Y(),
      Le,
      Me;window.ShadyCSS && (Le = window.ShadyCSS.ApplyShim, Me = window.ShadyCSS.CustomStyleInterface);
  window.ShadyCSS = { ScopingShim: Z, prepareTemplate: function (a, b, c) {
      Z.flushCustomStyles();Z.prepareTemplate(a, b, c);
    }, prepareTemplateDom: function (a, b) {
      Z.prepareTemplateDom(a, b);
    }, prepareTemplateStyles: function (a, b, c) {
      Z.flushCustomStyles();Z.prepareTemplateStyles(a, b, c);
    }, styleSubtree: function (a, b) {
      Z.flushCustomStyles();Z.styleSubtree(a, b);
    }, styleElement: function (a) {
      Z.flushCustomStyles();Z.styleElement(a);
    }, styleDocument: function (a) {
      Z.flushCustomStyles();Z.styleDocument(a);
    }, flushCustomStyles: function () {
      Z.flushCustomStyles();
    },
    getComputedStyleValue: function (a, b) {
      return Z.getComputedStyleValue(a, b);
    }, nativeCss: N, nativeShadow: L, cssBuild: ed, disableRuntime: M };Le && (window.ShadyCSS.ApplyShim = Le);Me && (window.ShadyCSS.CustomStyleInterface = Me);
}).call(this);

//# sourceMappingURL=webcomponents-sd.js.map