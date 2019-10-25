/// BareSpecifier=@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce
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
  var n;function aa(a) {
    var b = 0;return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }function ba(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];return b ? b.call(a) : { next: aa(a) };
  }function ca(a) {
    if (!(a instanceof Array)) {
      a = ba(a);for (var b, c = []; !(b = a.next()).done;) c.push(b.value);a = c;
    }return a;
  }var da = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;function ea() {}ea.prototype.toJSON = function () {
    return {};
  };
  function q(a) {
    a.__shady || (a.__shady = new ea());return a.__shady;
  }function r(a) {
    return a && a.__shady;
  };var t = window.ShadyDOM || {};t.sa = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);var fa = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");t.j = !!(fa && fa.configurable && fa.get);t.U = t.force || !t.sa;t.w = t.noPatch || !1;t.ea = t.preferPerformance;t.ha = navigator.userAgent.match("Trident");function u(a) {
    return (a = r(a)) && void 0 !== a.firstChild;
  }function v(a) {
    return "ShadyRoot" === a.ma;
  }function ha(a) {
    return (a = (a = r(a)) && a.root) && ia(a);
  }
  var w = Element.prototype,
      ja = w.matches || w.matchesSelector || w.mozMatchesSelector || w.msMatchesSelector || w.oMatchesSelector || w.webkitMatchesSelector,
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
      if ("length" !== e && isNaN(e) && a[e]) return a[e];for (var f = ba(a), g = f.next(); !g.done; g = f.next()) if (g = g.value, (g.getAttribute("id") || g.getAttribute("name")) == e) return g;return null;
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
  };var ua = [],
      va;function wa(a) {
    va || (va = !0, oa(xa));ua.push(a);
  }function xa() {
    va = !1;for (var a = !!ua.length; ua.length;) ua.shift()();return a;
  }xa.list = ua;function ya() {
    this.a = !1;this.addedNodes = [];this.removedNodes = [];this.M = new Set();
  }function za(a) {
    a.a || (a.a = !0, oa(function () {
      a.flush();
    }));
  }ya.prototype.flush = function () {
    if (this.a) {
      this.a = !1;var a = this.takeRecords();a.length && this.M.forEach(function (b) {
        b(a);
      });
    }
  };ya.prototype.takeRecords = function () {
    if (this.addedNodes.length || this.removedNodes.length) {
      var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];this.addedNodes = [];this.removedNodes = [];return a;
    }return [];
  };
  function Aa(a, b) {
    var c = q(a);c.G || (c.G = new ya());c.G.M.add(b);var d = c.G;return { la: b, C: d, na: a, takeRecords: function () {
        return d.takeRecords();
      } };
  }function Ba(a) {
    var b = a && a.C;b && (b.M.delete(a.la), b.M.size || (q(a.na).G = null));
  }
  function Ca(a, b) {
    var c = b.getRootNode();return a.map(function (d) {
      var e = c === d.target.getRootNode();if (e && d.addedNodes) {
        if (e = Array.from(d.addedNodes).filter(function (f) {
          return c === f.getRootNode();
        }), e.length) return d = Object.create(d), Object.defineProperty(d, "addedNodes", { value: e, configurable: !0 }), d;
      } else if (e) return d;
    }).filter(function (d) {
      return d;
    });
  };var Da = /[&\u00A0"]/g,
      Ea = /[&\u00A0<>]/g;function Fa(a) {
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
        var h = g;var k = a,
            l = b;switch (h.nodeType) {case Node.ELEMENT_NODE:
            k = h.localName;for (var m = "<" + k, p = h.attributes, x = 0, ka; ka = p[x]; x++) m += " " + ka.name + '="' + ka.value.replace(Da, Fa) + '"';m += ">";h = Ha[k] ? m : m + Ja(h, l) + "</" + k + ">";break a;case Node.TEXT_NODE:
            h = h.data;h = k && Ia[k.localName] ? h : h.replace(Ea, Fa);break a;case Node.COMMENT_NODE:
            h = "\x3c!--" + h.data + "--\x3e";break a;default:
            throw window.console.error(h), Error("not implemented");}
      }c += h;
    }return c;
  };var Ka = t.j,
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
  }function A(a, b) {
    b = void 0 === b ? [] : b;for (var c = 0; c < b.length; c++) {
      var d = b[c],
          e = Object.getOwnPropertyDescriptor(a, d);e && (Object.defineProperty(a, "__shady_native_" + d, e), e.value ? La[d] || (La[d] = e.value) : Na(d));
    }
  }
  var B = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
      C = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
      Pa = document.implementation.createHTMLDocument("inert");function Qa(a) {
    for (var b; b = a.__shady_native_firstChild;) a.__shady_native_removeChild(b);
  }var Ra = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
      Sa = ["querySelector", "querySelectorAll"];
  function Ua() {
    var a = ["dispatchEvent", "addEventListener", "removeEventListener"];window.EventTarget ? A(window.EventTarget.prototype, a) : (A(Node.prototype, a), A(Window.prototype, a));Ka ? A(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : Oa(Node.prototype, { parentNode: { get: function () {
          B.currentNode = this;return B.parentNode();
        } }, firstChild: { get: function () {
          B.currentNode = this;return B.firstChild();
        } }, lastChild: { get: function () {
          B.currentNode = this;return B.lastChild();
        } }, previousSibling: { get: function () {
          B.currentNode = this;return B.previousSibling();
        } }, nextSibling: { get: function () {
          B.currentNode = this;return B.nextSibling();
        } }, childNodes: { get: function () {
          var b = [];B.currentNode = this;for (var c = B.firstChild(); c;) b.push(c), c = B.nextSibling();return b;
        } }, parentElement: { get: function () {
          C.currentNode = this;return C.parentNode();
        } }, textContent: { get: function () {
          switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
              for (var b = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), c = "", d; d = b.nextNode();) c += d.nodeValue;return c;default:
              return this.nodeValue;}
        }, set: function (b) {
          if ("undefined" === typeof b || null === b) b = "";switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
              Qa(this);(0 < b.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(b), void 0);break;default:
              this.nodeValue = b;}
        } } });A(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
    A(HTMLElement.prototype, ["parentElement", "contains"]);a = { firstElementChild: { get: function () {
          C.currentNode = this;return C.firstChild();
        } }, lastElementChild: { get: function () {
          C.currentNode = this;return C.lastChild();
        } }, children: { get: function () {
          var b = [];C.currentNode = this;for (var c = C.firstChild(); c;) b.push(c), c = C.nextSibling();return ra(b);
        } }, childElementCount: { get: function () {
          return this.children ? this.children.length : 0;
        } } };Ka ? (A(Element.prototype, Ra), A(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]), A(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (Oa(Element.prototype, a), Oa(Element.prototype, { previousElementSibling: { get: function () {
          C.currentNode = this;return C.previousSibling();
        } }, nextElementSibling: { get: function () {
          C.currentNode = this;return C.nextSibling();
        } }, innerHTML: { get: function () {
          return Ja(this, sa);
        }, set: function (b) {
          var c = "template" === this.localName ? this.content : this;Qa(c);var d = this.localName || "div";d = this.namespaceURI && this.namespaceURI !== Pa.namespaceURI ? Pa.createElementNS(this.namespaceURI, d) : Pa.createElement(d);d.innerHTML = b;for (b = "template" === this.localName ? d.content : d; d = b.__shady_native_firstChild;) c.__shady_native_insertBefore(d, void 0);
        } }, className: { get: function () {
          return this.getAttribute("class") || "";
        }, set: function (b) {
          this.setAttribute("class", b);
        } } }));A(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));A(Element.prototype, Sa);A(HTMLElement.prototype, ["focus", "blur"]);window.HTMLTemplateElement && A(window.HTMLTemplateElement.prototype, ["innerHTML"]);Ka ? A(DocumentFragment.prototype, Ra) : Oa(DocumentFragment.prototype, a);A(DocumentFragment.prototype, Sa);Ka ? (A(Document.prototype, Ra), A(Document.prototype, ["activeElement"])) : Oa(Document.prototype, a);A(Document.prototype, ["importNode", "getElementById"]);A(Document.prototype, Sa);
  };var Va = z({ get childNodes() {
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
      Wa = z({ get textContent() {
      return this.__shady_textContent;
    }, set textContent(a) {
      this.__shady_textContent = a;
    }, get innerHTML() {
      return this.__shady_innerHTML;
    }, set innerHTML(a) {
      return this.__shady_innerHTML = a;
    } }),
      Xa = z({ get parentElement() {
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
    } });function Ya(a) {
    for (var b in a) {
      var c = a[b];c && (c.enumerable = !1);
    }
  }Ya(Va);Ya(Wa);Ya(Xa);var Za = t.j || t.w,
      $a = Za ? function () {} : function (a) {
    var b = q(a);b.ja || (b.ja = !0, y(a, Xa));
  },
      ab = Za ? function () {} : function (a) {
    var b = q(a);b.ia || (b.ia = !0, y(a, Va), window.customElements && !t.w || y(a, Wa));
  };var bb = "__eventWrappers" + Date.now(),
      cb = function () {
    var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");return a ? function (b) {
      return a.get.call(b);
    } : null;
  }(),
      db = function () {
    function a() {}var b = !1,
        c = { get capture() {
        b = !0;return !1;
      } };window.addEventListener("test", a, c);window.removeEventListener("test", a, c);return b;
  }();function eb(a) {
    if (a && "object" === typeof a) {
      var b = !!a.capture;var c = !!a.once;var d = !!a.passive;var e = a.B;
    } else b = !!a, d = c = !1;return { fa: e, capture: b, once: c, passive: d, da: db ? a : b };
  }
  var fb = { blur: !0, focus: !0, focusin: !0, focusout: !0, click: !0, dblclick: !0, mousedown: !0, mouseenter: !0, mouseleave: !0, mousemove: !0, mouseout: !0, mouseover: !0, mouseup: !0, wheel: !0, beforeinput: !0, input: !0, keydown: !0, keyup: !0, compositionstart: !0, compositionupdate: !0, compositionend: !0, touchstart: !0, touchend: !0, touchmove: !0, touchcancel: !0, pointerover: !0, pointerenter: !0, pointerdown: !0, pointermove: !0, pointerup: !0, pointercancel: !0, pointerout: !0, pointerleave: !0, gotpointercapture: !0, lostpointercapture: !0, dragstart: !0,
    drag: !0, dragenter: !0, dragleave: !0, dragover: !0, drop: !0, dragend: !0, DOMActivate: !0, DOMFocusIn: !0, DOMFocusOut: !0, keypress: !0 },
      gb = { DOMAttrModified: !0, DOMAttributeNameChanged: !0, DOMCharacterDataModified: !0, DOMElementNameChanged: !0, DOMNodeInserted: !0, DOMNodeInsertedIntoDocument: !0, DOMNodeRemoved: !0, DOMNodeRemovedFromDocument: !0, DOMSubtreeModified: !0 };function hb(a) {
    return a instanceof Node ? a.__shady_getRootNode() : a;
  }
  function ib(a, b) {
    var c = [],
        d = a;for (a = hb(a); d;) c.push(d), d.__shady_assignedSlot ? d = d.__shady_assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d = d.host : d = d.__shady_parentNode;c[c.length - 1] === document && c.push(window);return c;
  }function jb(a) {
    a.__composedPath || (a.__composedPath = ib(a.target, !0));return a.__composedPath;
  }function kb(a, b) {
    if (!v) return a;a = ib(a, !0);for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++) if (d = b[c], f = hb(d), f !== e && (g = a.indexOf(f), e = f), !v(f) || -1 < g) return d;
  }
  function lb(a) {
    function b(c, d) {
      c = new a(c, d);c.__composed = d && !!d.composed;return c;
    }b.__proto__ = a;b.prototype = a.prototype;return b;
  }var mb = { focus: !0, blur: !0 };function nb(a) {
    return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget;
  }function ob(a, b, c) {
    if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && (!nb(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.__immediatePropagationStopped); d++);
  }
  function pb(a) {
    var b = a.composedPath();Object.defineProperty(a, "currentTarget", { get: function () {
        return d;
      }, configurable: !0 });for (var c = b.length - 1; 0 <= c; c--) {
      var d = b[c];ob(a, d, "capture");if (a.P) return;
    }Object.defineProperty(a, "eventPhase", { get: function () {
        return Event.AT_TARGET;
      } });var e;for (c = 0; c < b.length; c++) {
      d = b[c];var f = r(d);f = f && f.root;if (0 === c || f && f === e) if (ob(a, d, "bubble"), d !== window && (e = d.__shady_getRootNode()), a.P) break;
    }
  }
  function qb(a, b, c, d, e, f) {
    for (var g = 0; g < a.length; g++) {
      var h = a[g],
          k = h.type,
          l = h.capture,
          m = h.once,
          p = h.passive;if (b === h.node && c === k && d === l && e === m && f === p) return g;
    }return -1;
  }function rb(a) {
    xa();return this.__shady_native_dispatchEvent(a);
  }
  function sb(a, b, c) {
    var d = eb(c),
        e = d.capture,
        f = d.once,
        g = d.passive,
        h = d.fa;d = d.da;if (b) {
      var k = typeof b;if ("function" === k || "object" === k) if ("object" !== k || b.handleEvent && "function" === typeof b.handleEvent) {
        if (gb[a]) return this.__shady_native_addEventListener(a, b, d);var l = h || this;if (h = b[bb]) {
          if (-1 < qb(h, l, a, e, f, g)) return;
        } else b[bb] = [];h = function (m) {
          f && this.__shady_removeEventListener(a, b, c);m.__target || tb(m);if (l !== this) {
            var p = Object.getOwnPropertyDescriptor(m, "currentTarget");Object.defineProperty(m, "currentTarget", { get: function () {
                return l;
              }, configurable: !0 });
          }m.__previousCurrentTarget = m.currentTarget;if (!v(l) && "slot" !== l.localName || -1 != m.composedPath().indexOf(l)) if (m.composed || -1 < m.composedPath().indexOf(l)) if (nb(m) && m.target === m.relatedTarget) m.eventPhase === Event.BUBBLING_PHASE && m.stopImmediatePropagation();else if (m.eventPhase === Event.CAPTURING_PHASE || m.bubbles || m.target === l || l instanceof Window) {
            var x = "function" === k ? b.call(l, m) : b.handleEvent && b.handleEvent(m);l !== this && (p ? (Object.defineProperty(m, "currentTarget", p), p = null) : delete m.currentTarget);return x;
          }
        };b[bb].push({ node: l, type: a, capture: e, once: f, passive: g, Fa: h });mb[a] ? (this.__handlers = this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || { capture: [], bubble: [] }, this.__handlers[a][e ? "capture" : "bubble"].push(h)) : this.__shady_native_addEventListener(a, h, d);
      }
    }
  }
  function ub(a, b, c) {
    if (b) {
      var d = eb(c);c = d.capture;var e = d.once,
          f = d.passive,
          g = d.fa;d = d.da;if (gb[a]) return this.__shady_native_removeEventListener(a, b, d);var h = g || this;g = void 0;var k = null;try {
        k = b[bb];
      } catch (l) {}k && (e = qb(k, h, a, c, e, f), -1 < e && (g = k.splice(e, 1)[0].Fa, k.length || (b[bb] = void 0)));this.__shady_native_removeEventListener(a, g || b, d);g && mb[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][c ? "capture" : "bubble"], b = a.indexOf(g), -1 < b && a.splice(b, 1));
    }
  }
  function vb() {
    for (var a in mb) window.__shady_native_addEventListener(a, function (b) {
      b.__target || (tb(b), pb(b));
    }, !0);
  }
  var wb = z({ get composed() {
      void 0 === this.__composed && (cb ? this.__composed = "focusin" === this.type || "focusout" === this.type || cb(this) : !1 !== this.isTrusted && (this.__composed = fb[this.type]));return this.__composed || !1;
    }, composedPath: function () {
      this.__composedPath || (this.__composedPath = ib(this.__target, this.composed));return this.__composedPath;
    }, get target() {
      return kb(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
    }, get relatedTarget() {
      if (!this.__relatedTarget) return null;this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = ib(this.__relatedTarget, !0));return kb(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath);
    }, stopPropagation: function () {
      Event.prototype.stopPropagation.call(this);this.P = !0;
    }, stopImmediatePropagation: function () {
      Event.prototype.stopImmediatePropagation.call(this);this.P = this.__immediatePropagationStopped = !0;
    } });
  function tb(a) {
    a.__target = a.target;a.__relatedTarget = a.relatedTarget;if (t.j) {
      var b = Object.getPrototypeOf(a);if (!Object.hasOwnProperty(b, "__shady_patchedProto")) {
        var c = Object.create(b);c.__shady_sourceProto = b;y(c, wb);b.__shady_patchedProto = c;
      }a.__proto__ = b.__shady_patchedProto;
    } else y(a, wb);
  }var xb = lb(Event),
      yb = lb(CustomEvent),
      zb = lb(MouseEvent);
  function Ab() {
    if (!cb && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
      var a = function () {
        var b = new MouseEvent("click", { bubbles: !0, cancelable: !0, composed: !0 });this.__shady_dispatchEvent(b);
      };Element.prototype.click ? Element.prototype.click = a : HTMLElement.prototype.click && (HTMLElement.prototype.click = a);
    }
  }var Bb = Object.getOwnPropertyNames(Document.prototype).filter(function (a) {
    return "on" === a.substring(0, 2);
  });function Cb(a, b) {
    return { index: a, H: [], L: b };
  }
  function Db(a, b, c, d) {
    var e = 0,
        f = 0,
        g = 0,
        h = 0,
        k = Math.min(b - e, d - f);if (0 == e && 0 == f) a: {
      for (g = 0; g < k; g++) if (a[g] !== c[g]) break a;g = k;
    }if (b == a.length && d == c.length) {
      h = a.length;for (var l = c.length, m = 0; m < k - g && Eb(a[--h], c[--l]);) m++;h = m;
    }e += g;f += g;b -= h;d -= h;if (0 == b - e && 0 == d - f) return [];if (e == b) {
      for (b = Cb(e, 0); f < d;) b.H.push(c[f++]);return [b];
    }if (f == d) return [Cb(e, b - e)];k = e;g = f;d = d - g + 1;h = b - k + 1;b = Array(d);for (l = 0; l < d; l++) b[l] = Array(h), b[l][0] = l;for (l = 0; l < h; l++) b[0][l] = l;for (l = 1; l < d; l++) for (m = 1; m < h; m++) if (a[k + m - 1] === c[g + l - 1]) b[l][m] = b[l - 1][m - 1];else {
      var p = b[l - 1][m] + 1,
          x = b[l][m - 1] + 1;b[l][m] = p < x ? p : x;
    }k = b.length - 1;g = b[0].length - 1;d = b[k][g];for (a = []; 0 < k || 0 < g;) 0 == k ? (a.push(2), g--) : 0 == g ? (a.push(3), k--) : (h = b[k - 1][g - 1], l = b[k - 1][g], m = b[k][g - 1], p = l < m ? l < h ? l : h : m < h ? m : h, p == h ? (h == d ? a.push(0) : (a.push(1), d = h), k--, g--) : p == l ? (a.push(3), k--, d = l) : (a.push(2), g--, d = m));a.reverse();b = void 0;k = [];for (g = 0; g < a.length; g++) switch (a[g]) {case 0:
        b && (k.push(b), b = void 0);e++;f++;break;case 1:
        b || (b = Cb(e, 0));b.L++;e++;b.H.push(c[f]);f++;break;case 2:
        b || (b = Cb(e, 0));
        b.L++;e++;break;case 3:
        b || (b = Cb(e, 0)), b.H.push(c[f]), f++;}b && k.push(b);return k;
  }function Eb(a, b) {
    return a === b;
  };function Fb(a, b, c, d) {
    $a(a);d = d || null;var e = q(a),
        f = d ? q(d) : null;e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;if (f = r(e.previousSibling)) f.nextSibling = a;if (f = r(e.nextSibling = d)) f.previousSibling = a;e.parentNode = b;d ? d === c.firstChild && (c.firstChild = a) : (c.lastChild = a, c.firstChild || (c.firstChild = a));c.childNodes = null;
  }
  function Gb(a, b, c) {
    ab(b);var d = q(b);void 0 !== d.firstChild && (d.childNodes = null);if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) Fb(a, b, d, c);else Fb(a, b, d, c);
  }
  function Hb(a, b) {
    var c = q(a);b = q(b);a === b.firstChild && (b.firstChild = c.nextSibling);a === b.lastChild && (b.lastChild = c.previousSibling);a = c.previousSibling;var d = c.nextSibling;a && (q(a).nextSibling = d);d && (q(d).previousSibling = a);c.parentNode = c.previousSibling = c.nextSibling = void 0;void 0 !== b.childNodes && (b.childNodes = null);
  }
  function Ib(a, b) {
    var c = q(a);if (b || void 0 === c.firstChild) {
      c.childNodes = null;var d = c.firstChild = a.__shady_native_firstChild;c.lastChild = a.__shady_native_lastChild;ab(a);c = d;for (d = void 0; c; c = c.__shady_native_nextSibling) {
        var e = q(c);e.parentNode = b || a;e.nextSibling = c.__shady_native_nextSibling;e.previousSibling = d || null;d = c;$a(c);
      }
    }
  };var Jb = null;function D() {
    Jb || (Jb = window.ShadyCSS && window.ShadyCSS.ScopingShim);return Jb || null;
  }function Kb(a, b, c) {
    var d = D();return d && "class" === b ? (d.setElementClass(a, c), !0) : !1;
  }function Lb(a, b) {
    var c = D();c && c.unscopeNode(a, b);
  }function Mb(a, b) {
    var c = D();if (!c) return !0;if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      c = !0;for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) c = c && Mb(a, b);return c;
    }return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b;
  }
  function Nb(a) {
    if (a.nodeType !== Node.ELEMENT_NODE) return "";var b = D();return b ? b.currentScopeForNode(a) : "";
  }function Ob(a, b) {
    if (a) for (a.nodeType === Node.ELEMENT_NODE && b(a), a = a.__shady_firstChild; a; a = a.__shady_nextSibling) a.nodeType === Node.ELEMENT_NODE && Ob(a, b);
  };var Pb = window.document,
      Qb = t.ea,
      Rb = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
      Sb = Rb && Rb.get;function Tb(a) {
    for (var b; b = a.__shady_firstChild;) a.__shady_removeChild(b);
  }function Ub(a) {
    var b = r(a);if (b && void 0 !== b.O) for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling) Ub(b);if (a = r(a)) a.O = void 0;
  }function Vb(a) {
    var b = a;a && "slot" === a.localName && (b = (b = (b = r(a)) && b.F) && b.length ? b[0] : Vb(a.__shady_nextSibling));return b;
  }
  function Wb(a, b, c) {
    if (a = (a = r(a)) && a.G) b && (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? a.addedNodes.push.apply(a.addedNodes, ca(b.childNodes)) : a.addedNodes.push(b)), c && a.removedNodes.push(c), za(a);
  }
  var Zb = z({ get parentNode() {
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
      if (Sb && Sb.call(this)) return !0;if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
      var a = this.ownerDocument;if (pa) {
        if (a.__shady_native_contains(this)) return !0;
      } else if (a.documentElement && a.documentElement.__shady_native_contains(this)) return !0;for (a = this; a && !(a instanceof Document);) a = a.__shady_parentNode || (v(a) ? a.host : void 0);return !!(a && a instanceof Document);
    }, get textContent() {
      if (u(this)) {
        for (var a = [], b = this.__shady_firstChild; b; b = b.__shady_nextSibling) b.nodeType !== Node.COMMENT_NODE && a.push(b.__shady_textContent);return a.join("");
      }return this.__shady_native_textContent;
    }, set textContent(a) {
      if ("undefined" === typeof a || null === a) a = "";switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
          if (!u(this) && t.j) {
            var b = this.__shady_firstChild;(b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) && Tb(this);this.__shady_native_textContent = a;
          } else Tb(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));break;default:
          this.nodeValue = a;}
    }, insertBefore: function (a, b) {
      if (this.ownerDocument !== Pb && a.ownerDocument !== Pb) return this.__shady_native_insertBefore(a, b), a;if (a === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if (b) {
        var c = r(b);c = c && c.parentNode;if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
      }if (b === a) return a;Wb(this, a);var d = [],
          e = (c = E(this)) ? c.host.localName : Nb(this),
          f = a.__shady_parentNode;if (f) {
        var g = Nb(a);var h = !!c || !E(a) || Qb && void 0 !== this.__noInsertionPoint;f.__shady_removeChild(a, h);
      }f = !0;var k = (!Qb || void 0 === a.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !Mb(a, e),
          l = c && !a.__noInsertionPoint && (!Qb || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);if (l || k) k && (g = g || Nb(a)), Ob(a, function (m) {
        l && "slot" === m.localName && d.push(m);if (k) {
          var p = g;D() && (p && Lb(m, p), (p = D()) && p.scopeNode(m, e));
        }
      });d.length && (Xb(c), c.c.push.apply(c.c, ca(d)), F(c));u(this) && (Gb(a, this, b), c = r(this), ha(this) ? (F(c.root), f = !1) : c.root && (f = !1));f ? (c = v(this) ? this.host : this, b ? (b = Vb(b), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a)) : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);return a;
    }, appendChild: function (a) {
      if (this != a || !v(a)) return this.__shady_insertBefore(a);
    }, removeChild: function (a, b) {
      b = void 0 === b ? !1 : b;if (this.ownerDocument !== Pb) return this.__shady_native_removeChild(a);if (a.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);Wb(this, null, a);var c = E(a),
          d = c && Yb(c, a),
          e = r(this);if (u(this) && (Hb(a, this), ha(this))) {
        F(e.root);var f = !0;
      }if (D() && !b && c && a.nodeType !== Node.TEXT_NODE) {
        var g = Nb(a);Ob(a, function (h) {
          Lb(h, g);
        });
      }Ub(a);c && ((b = this && "slot" === this.localName) && (f = !0), (d || b) && F(c));f || (f = v(this) ? this.host : this, (!e.root && "slot" !== a.localName || f === a.__shady_native_parentNode) && f.__shady_native_removeChild(a));return a;
    }, replaceChild: function (a, b) {
      this.__shady_insertBefore(a, b);this.__shady_removeChild(b);return a;
    }, cloneNode: function (a) {
      if ("template" == this.localName) return this.__shady_native_cloneNode(a);
      var b = this.__shady_native_cloneNode(!1);if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
        a = this.__shady_firstChild;for (var c; a; a = a.__shady_nextSibling) c = a.__shady_cloneNode(!0), b.__shady_appendChild(c);
      }return b;
    }, getRootNode: function (a) {
      if (this && this.nodeType) {
        var b = q(this),
            c = b.O;void 0 === c && (v(this) ? (c = this, b.O = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this, document.documentElement.__shady_native_contains(this) && (b.O = c)));return c;
      }
    }, contains: function (a) {
      return qa(this, a);
    } });function $b(a, b, c) {
    var d = [];ac(a, b, c, d);return d;
  }function ac(a, b, c, d) {
    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
      var e;if (e = a.nodeType === Node.ELEMENT_NODE) {
        e = a;var f = b,
            g = c,
            h = d,
            k = f(e);k && h.push(e);g && g(k) ? e = k : (ac(e, f, g, h), e = void 0);
      }if (e) break;
    }
  }
  var G = z({ get firstElementChild() {
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
      bc = z({ querySelector: function (a) {
      return $b(this, function (b) {
        return ja.call(b, a);
      }, function (b) {
        return !!b;
      })[0] || null;
    }, querySelectorAll: function (a, b) {
      if (b) {
        b = Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));var c = this.__shady_getRootNode();return ra(b.filter(function (d) {
          return d.__shady_getRootNode() == c;
        }));
      }return ra($b(this, function (d) {
        return ja.call(d, a);
      }));
    } }),
      cc = t.ea && !t.w ? Object.assign({}, G) : G;Object.assign(G, bc);var dc = z({ getElementById: function (a) {
      return "" === a ? null : $b(this, function (b) {
        return b.id == a;
      }, function (b) {
        return !!b;
      })[0] || null;
    } });var ec = z({ get activeElement() {
      var a = t.j ? document.__shady_native_activeElement : document.activeElement;if (!a || !a.nodeType) return null;var b = !!v(this);if (!(this === document || b && this.host !== a && this.host.__shady_native_contains(a))) return null;for (b = E(a); b && b !== this;) a = b.host, b = E(a);return this === document ? b ? null : a : b === this ? a : null;
    } });var fc = document.implementation.createHTMLDocument("inert"),
      gc = z({ get innerHTML() {
      return u(this) ? Ja("template" === this.localName ? this.content : this, ta) : this.__shady_native_innerHTML;
    }, set innerHTML(a) {
      if ("template" === this.localName) this.__shady_native_innerHTML = a;else {
        Tb(this);var b = this.localName || "div";b = this.namespaceURI && this.namespaceURI !== fc.namespaceURI ? fc.createElementNS(this.namespaceURI, b) : fc.createElement(b);for (t.j ? b.__shady_native_innerHTML = a : b.innerHTML = a; a = b.__shady_firstChild;) this.__shady_insertBefore(a);
      }
    } });var hc = z({ addEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.B = c.B || this;this.host.__shady_addEventListener(a, b, c);
    }, removeEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.B = c.B || this;this.host.__shady_removeEventListener(a, b, c);
    } });function ic(a, b) {
    y(a, hc, b);y(a, ec, b);y(a, gc, b);y(a, G, b);t.w && !b ? (y(a, Zb, b), y(a, dc, b)) : t.j || (y(a, Xa), y(a, Va), y(a, Wa));
  };var jc = {},
      H = t.deferConnectionCallbacks && "loading" === document.readyState,
      kc;function lc(a) {
    var b = [];do b.unshift(a); while (a = a.__shady_parentNode);return b;
  }function mc(a, b, c) {
    if (a !== jc) throw new TypeError("Illegal constructor");this.a = null;nc(this, b, c);
  }
  function nc(a, b, c) {
    a.ma = "ShadyRoot";a.host = b;a.mode = c && c.mode;Ib(a.host);b = q(a.host);b.root = a;b.xa = "closed" !== a.mode ? a : null;b = q(a);b.firstChild = b.lastChild = b.parentNode = b.nextSibling = b.previousSibling = null;if (t.preferPerformance) for (; b = a.host.__shady_native_firstChild;) a.host.__shady_native_removeChild(b);else F(a);
  }function F(a) {
    a.D || (a.D = !0, wa(function () {
      return oc(a);
    }));
  }
  function oc(a) {
    var b;if (b = a.D) {
      for (var c; a;) a: {
        a.D && (c = a), b = a;a = b.host.__shady_getRootNode();if (v(a) && (b = r(b.host)) && 0 < b.K) break a;a = void 0;
      }b = c;
    }(c = b) && c._renderSelf();
  }
  mc.prototype._renderSelf = function () {
    var a = H;H = !0;this.D = !1;if (this.a) {
      pc(this);for (var b = 0, c; b < this.a.length; b++) {
        c = this.a[b];var d = r(c),
            e = d.assignedNodes;d.assignedNodes = [];d.F = [];if (d.Z = e) for (d = 0; d < e.length; d++) {
          var f = r(e[d]);f.R = f.assignedSlot;f.assignedSlot === c && (f.assignedSlot = null);
        }
      }for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) qc(this, b);for (b = 0; b < this.a.length; b++) {
        c = this.a[b];e = r(c);if (!e.assignedNodes.length) for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling) qc(this, d, c);
        (d = (d = r(c.__shady_parentNode)) && d.root) && (ia(d) || d.D) && d._renderSelf();rc(this, e.F, e.assignedNodes);if (d = e.Z) {
          for (f = 0; f < d.length; f++) r(d[f]).R = null;e.Z = null;d.length > e.assignedNodes.length && (e.S = !0);
        }e.S && (e.S = !1, sc(this, c));
      }c = this.a;b = [];for (e = 0; e < c.length; e++) d = c[e].__shady_parentNode, (f = r(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);for (c = 0; c < b.length; c++) {
        f = b[c];e = f === this ? this.host : f;d = [];for (f = f.__shady_firstChild; f; f = f.__shady_nextSibling) if ("slot" == f.localName) for (var g = r(f).F, h = 0; h < g.length; h++) d.push(g[h]);else d.push(f);f = sa(e);g = Db(d, d.length, f, f.length);for (var k = h = 0, l = void 0; h < g.length && (l = g[h]); h++) {
          for (var m = 0, p = void 0; m < l.H.length && (p = l.H[m]); m++) p.__shady_native_parentNode === e && e.__shady_native_removeChild(p), f.splice(l.index + k, 1);k -= l.L;
        }k = 0;for (l = void 0; k < g.length && (l = g[k]); k++) for (h = f[l.index], m = l.index; m < l.index + l.L; m++) p = d[m], e.__shady_native_insertBefore(p, h), f.splice(m, 0, p);
      }
    }if (!t.preferPerformance && !this.Y) for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) c = r(b), b.__shady_native_parentNode !== this.host || "slot" !== b.localName && c.assignedSlot || this.host.__shady_native_removeChild(b);this.Y = !0;H = a;kc && kc();
  };function qc(a, b, c) {
    var d = q(b),
        e = d.R;d.R = null;c || (c = (a = a.b[b.__shady_slot || "__catchall"]) && a[0]);c ? (q(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;e !== d.assignedSlot && d.assignedSlot && (q(d.assignedSlot).S = !0);
  }function rc(a, b, c) {
    for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++) if ("slot" == e.localName) {
      var f = r(e).assignedNodes;f && f.length && rc(a, b, f);
    } else b.push(c[d]);
  }
  function sc(a, b) {
    b.__shady_native_dispatchEvent(new Event("slotchange"));b = r(b);b.assignedSlot && sc(a, b.assignedSlot);
  }function Xb(a) {
    a.c = a.c || [];a.a = a.a || [];a.b = a.b || {};
  }function pc(a) {
    if (a.c && a.c.length) {
      for (var b = a.c, c, d = 0; d < b.length; d++) {
        var e = b[d];Ib(e);var f = e.__shady_parentNode;Ib(f);f = r(f);f.K = (f.K || 0) + 1;f = tc(e);a.b[f] ? (c = c || {}, c[f] = !0, a.b[f].push(e)) : a.b[f] = [e];a.a.push(e);
      }if (c) for (var g in c) a.b[g] = uc(a.b[g]);a.c = [];
    }
  }
  function tc(a) {
    var b = a.name || a.getAttribute("name") || "__catchall";return a.ka = b;
  }function uc(a) {
    return a.sort(function (b, c) {
      b = lc(b);for (var d = lc(c), e = 0; e < b.length; e++) {
        c = b[e];var f = d[e];if (c !== f) return b = ta(c.__shady_parentNode), b.indexOf(c) - b.indexOf(f);
      }
    });
  }
  function Yb(a, b) {
    if (a.a) {
      pc(a);var c = a.b,
          d;for (d in c) for (var e = c[d], f = 0; f < e.length; f++) {
        var g = e[f];if (qa(b, g)) {
          e.splice(f, 1);var h = a.a.indexOf(g);0 <= h && (a.a.splice(h, 1), (h = r(g.__shady_parentNode)) && h.K && h.K--);f--;g = r(g);if (h = g.F) for (var k = 0; k < h.length; k++) {
            var l = h[k],
                m = l.__shady_native_parentNode;m && m.__shady_native_removeChild(l);
          }g.F = [];g.assignedNodes = [];h = !0;
        }
      }return h;
    }
  }function ia(a) {
    pc(a);return !(!a.a || !a.a.length);
  }
  (function (a) {
    a.__proto__ = DocumentFragment.prototype;ic(a, "__shady_");ic(a);Object.defineProperties(a, { nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0 }, nodeName: { value: "#document-fragment", configurable: !0 }, nodeValue: { value: null, configurable: !0 } });["localName", "namespaceURI", "prefix"].forEach(function (b) {
      Object.defineProperty(a, b, { value: void 0, configurable: !0 });
    });["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
      Object.defineProperty(a, b, { get: function () {
          return this.host[b];
        },
        configurable: !0 });
    });
  })(mc.prototype);
  if (window.customElements && t.U && !t.preferPerformance) {
    var vc = new Map();kc = function () {
      var a = [];vc.forEach(function (d, e) {
        a.push([e, d]);
      });vc.clear();for (var b = 0; b < a.length; b++) {
        var c = a[b][0];a[b][1] ? c.__shadydom_connectedCallback() : c.__shadydom_disconnectedCallback();
      }
    };H && document.addEventListener("readystatechange", function () {
      H = !1;kc();
    }, { once: !0 });var wc = function (a, b, c) {
      var d = 0,
          e = "__isConnected" + d++;if (b || c) a.prototype.connectedCallback = a.prototype.__shadydom_connectedCallback = function () {
        H ? vc.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this));
      }, a.prototype.disconnectedCallback = a.prototype.__shadydom_disconnectedCallback = function () {
        H ? this.isConnected || vc.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this));
      };return a;
    },
        xc = window.customElements.define,
        define = function (a, b) {
      var c = b.prototype.connectedCallback,
          d = b.prototype.disconnectedCallback;xc.call(window.customElements, a, wc(b, c, d));b.prototype.connectedCallback = c;b.prototype.disconnectedCallback = d;
    };window.customElements.define = define;Object.defineProperty(window.CustomElementRegistry.prototype, "define", { value: define, configurable: !0 });
  }function E(a) {
    a = a.__shady_getRootNode();if (v(a)) return a;
  };function I(a) {
    this.node = a;
  }n = I.prototype;n.addEventListener = function (a, b, c) {
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
  da.Object.defineProperties(I.prototype, { activeElement: { configurable: !0, enumerable: !0, get: function () {
        if (v(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement;
      } }, _activeElement: { configurable: !0, enumerable: !0, get: function () {
        return this.activeElement;
      } }, host: { configurable: !0, enumerable: !0, get: function () {
        if (v(this.node)) return this.node.host;
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
      } } });Bb.forEach(function (a) {
    Object.defineProperty(I.prototype, a, { get: function () {
        return this.node["__shady_" + a];
      }, set: function (b) {
        this.node["__shady_" + a] = b;
      }, configurable: !0 });
  });var yc = new WeakMap();function zc(a) {
    if (v(a) || a instanceof I) return a;var b = yc.get(a);b || (b = new I(a), yc.set(a, b));return b;
  };var Ac = z({ dispatchEvent: rb, addEventListener: sb, removeEventListener: ub });var Bc = z({ get assignedSlot() {
      var a = this.__shady_parentNode;(a = a && a.__shady_shadowRoot) && oc(a);return (a = r(this)) && a.assignedSlot || null;
    } });var Cc = window.document;function Dc(a, b) {
    if ("slot" === b) a = a.__shady_parentNode, ha(a) && F(r(a).root);else if ("slot" === a.localName && "name" === b && (b = E(a))) {
      if (b.a) {
        pc(b);var c = a.ka,
            d = tc(a);if (d !== c) {
          c = b.b[c];var e = c.indexOf(a);0 <= e && c.splice(e, 1);c = b.b[d] || (b.b[d] = []);c.push(a);1 < c.length && (b.b[d] = uc(c));
        }
      }F(b);
    }
  }
  var Ec = z({ get previousElementSibling() {
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
      var a = r(this);return a && a.xa || null;
    }, get className() {
      return this.getAttribute("class") || "";
    }, set className(a) {
      this.__shady_setAttribute("class", a);
    }, setAttribute: function (a, b) {
      this.ownerDocument !== Cc ? this.__shady_native_setAttribute(a, b) : Kb(this, a, b) || (this.__shady_native_setAttribute(a, b), Dc(this, a));
    }, removeAttribute: function (a) {
      this.ownerDocument !== Cc ? this.__shady_native_removeAttribute(a) : Kb(this, a, "") ? "" === this.getAttribute(a) && this.__shady_native_removeAttribute(a) : (this.__shady_native_removeAttribute(a), Dc(this, a));
    }, attachShadow: function (a) {
      if (!this) throw Error("Must provide a host.");if (!a) throw Error("Not enough arguments.");if (a.shadyUpgradeFragment && !t.ha) {
        var b = a.shadyUpgradeFragment;b.__proto__ = ShadowRoot.prototype;nc(b, this, a);Ib(b, b);a = b.__noInsertionPoint ? null : b.querySelectorAll("slot");b.__noInsertionPoint = void 0;if (a && a.length) {
          var c = b;Xb(c);c.c.push.apply(c.c, ca(a));F(b);
        }b.host.__shady_native_appendChild(b);
      } else b = new mc(jc, this, a);return b;
    } });var Fc = z({ blur: function () {
      var a = r(this);(a = (a = a && a.root) && a.activeElement) ? a.__shady_blur() : this.__shady_native_blur();
    } });Bb.forEach(function (a) {
    Fc[a] = { set: function (b) {
        var c = q(this),
            d = a.substring(2);c.A || (c.A = {});c.A[a] && this.removeEventListener(d, c.A[a]);this.__shady_addEventListener(d, b);c.A[a] = b;
      }, get: function () {
        var b = r(this);return b && b.A && b.A[a];
      }, configurable: !0 };
  });var Gc = z({ assignedNodes: function (a) {
      if ("slot" === this.localName) {
        var b = this.__shady_getRootNode();b && v(b) && oc(b);return (b = r(this)) ? (a && a.flatten ? b.F : b.assignedNodes) || [] : [];
      }
    }, addEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) sb.call(this, a, b, c);else {
        "object" !== typeof c && (c = { capture: !!c });var d = this.__shady_parentNode;if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.B = this;d.__shady_addEventListener(a, b, c);
      }
    }, removeEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) ub.call(this, a, b, c);else {
        "object" !== typeof c && (c = { capture: !!c });var d = this.__shady_parentNode;if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.B = this;d.__shady_removeEventListener(a, b, c);
      }
    } });var Hc = window.document,
      Ic = z({ importNode: function (a, b) {
      if (a.ownerDocument !== Hc || "template" === a.localName) return this.__shady_native_importNode(a, b);var c = this.__shady_native_importNode(a, !1);if (b) for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b = this.__shady_importNode(a, !0), c.__shady_appendChild(b);return c;
    } });var Jc = z({ dispatchEvent: rb, addEventListener: sb.bind(window), removeEventListener: ub.bind(window) });var J = {};Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (J.parentElement = Zb.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (J.contains = Zb.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (J.children = G.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (J.innerHTML = gc.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (J.className = Ec.className);
  var Kc = { EventTarget: [Ac], Node: [Zb, window.EventTarget ? null : Ac], Text: [Bc], Element: [Ec, G, Bc, !t.j || "innerHTML" in Element.prototype ? gc : null, window.HTMLSlotElement ? null : Gc], HTMLElement: [Fc, J], HTMLSlotElement: [Gc], DocumentFragment: [cc, dc], Document: [Ic, cc, dc, ec], Window: [Jc] },
      Lc = t.j ? null : ["innerHTML", "textContent"];function Mc(a) {
    var b = a ? null : Lc,
        c = {},
        d;for (d in Kc) c.J = window[d] && window[d].prototype, Kc[d].forEach(function (e) {
      return function (f) {
        return e.J && f && y(e.J, f, a, b);
      };
    }(c)), c = { J: c.J };
  };if (t.U) {
    var ShadyDOM = { inUse: t.U, patch: function (a) {
        ab(a);$a(a);return a;
      }, isShadyRoot: v, enqueue: wa, flush: xa, flushInitial: function (a) {
        !a.Y && a.D && oc(a);
      }, settings: t, filterMutations: Ca, observeChildren: Aa, unobserveChildren: Ba, deferConnectionCallbacks: t.deferConnectionCallbacks, preferPerformance: t.preferPerformance, handlesDynamicScoping: !0, wrap: t.w ? zc : function (a) {
        return a;
      }, Wrapper: I, composedPath: jb, noPatch: t.w, nativeMethods: La, nativeTree: Ma };window.ShadyDOM = ShadyDOM;Ua();Mc("__shady_");Object.defineProperty(document, "_activeElement", ec.activeElement);y(Window.prototype, Jc, "__shady_");t.w || (Mc(), Ab());vb();window.Event = xb;window.CustomEvent = yb;window.MouseEvent = zb;window.ShadowRoot = mc;
  }; /*
     Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
  var Nc = window.Document.prototype.createElement,
      Oc = window.Document.prototype.createElementNS,
      Pc = window.Document.prototype.importNode,
      Qc = window.Document.prototype.prepend,
      Rc = window.Document.prototype.append,
      Sc = window.DocumentFragment.prototype.prepend,
      Tc = window.DocumentFragment.prototype.append,
      Uc = window.Node.prototype.cloneNode,
      Vc = window.Node.prototype.appendChild,
      Wc = window.Node.prototype.insertBefore,
      Xc = window.Node.prototype.removeChild,
      Yc = window.Node.prototype.replaceChild,
      Zc = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
      $c = window.Element.prototype.attachShadow,
      ad = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
      bd = window.Element.prototype.getAttribute,
      cd = window.Element.prototype.setAttribute,
      dd = window.Element.prototype.removeAttribute,
      ed = window.Element.prototype.getAttributeNS,
      fd = window.Element.prototype.setAttributeNS,
      gd = window.Element.prototype.removeAttributeNS,
      hd = window.Element.prototype.insertAdjacentElement,
      id = window.Element.prototype.insertAdjacentHTML,
      jd = window.Element.prototype.prepend,
      kd = window.Element.prototype.append,
      ld = window.Element.prototype.before,
      md = window.Element.prototype.after,
      nd = window.Element.prototype.replaceWith,
      od = window.Element.prototype.remove,
      pd = window.HTMLElement,
      qd = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
      rd = window.HTMLElement.prototype.insertAdjacentElement,
      sd = window.HTMLElement.prototype.insertAdjacentHTML;var td = new Set();"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function (a) {
    return td.add(a);
  });function ud(a) {
    var b = td.has(a);a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return !b && a;
  }var vd = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
  function K(a) {
    var b = a.isConnected;if (void 0 !== b) return b;if (vd(a)) return !0;for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
  }function wd(a) {
    var b = a.children;if (b) return Array.prototype.slice.call(b);b = [];for (a = a.firstChild; a; a = a.nextSibling) a.nodeType === Node.ELEMENT_NODE && b.push(a);return b;
  }
  function xd(a, b) {
    for (; b && b !== a && !b.nextSibling;) b = b.parentNode;return b && b !== a ? b.nextSibling : null;
  }
  function yd(a, b, c) {
    for (var d = a; d;) {
      if (d.nodeType === Node.ELEMENT_NODE) {
        var e = d;b(e);var f = e.localName;if ("link" === f && "import" === e.getAttribute("rel")) {
          d = e.import;void 0 === c && (c = new Set());if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) yd(d, b, c);d = xd(a, e);continue;
        } else if ("template" === f) {
          d = xd(a, e);continue;
        }if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) yd(e, b, c);
      }d = d.firstChild ? d.firstChild : xd(a, d);
    }
  }function L(a, b, c) {
    a[b] = c;
  };function zd(a) {
    var b = document;this.b = a;this.a = b;this.C = void 0;M(this.b, this.a);"loading" === this.a.readyState && (this.C = new MutationObserver(this.c.bind(this)), this.C.observe(this.a, { childList: !0, subtree: !0 }));
  }function Ad(a) {
    a.C && a.C.disconnect();
  }zd.prototype.c = function (a) {
    var b = this.a.readyState;"interactive" !== b && "complete" !== b || Ad(this);for (b = 0; b < a.length; b++) for (var c = a[b].addedNodes, d = 0; d < c.length; d++) M(this.b, c[d]);
  };function Bd() {
    var a = this;this.b = this.a = void 0;this.c = new Promise(function (b) {
      a.b = b;a.a && b(a.a);
    });
  }function Cd(a) {
    if (a.a) throw Error("Already resolved.");a.a = void 0;a.b && a.b(void 0);
  };function N(a) {
    this.f = new Map();this.i = new Map();this.ba = new Map();this.T = !1;this.b = a;this.V = new Map();this.c = function (b) {
      return b();
    };this.a = !1;this.v = [];this.ca = a.f ? new zd(a) : void 0;
  }n = N.prototype;n.va = function (a, b) {
    var c = this;if (!(b instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");Dd(this, a);this.f.set(a, b);this.v.push(a);this.a || (this.a = !0, this.c(function () {
      return Ed(c);
    }));
  };
  n.define = function (a, b) {
    var c = this;if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");Dd(this, a);Fd(this, a, b);this.v.push(a);this.a || (this.a = !0, this.c(function () {
      return Ed(c);
    }));
  };function Dd(a, b) {
    if (!ud(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");if (Gd(a, b)) throw Error("A custom element with name '" + b + "' has already been defined.");if (a.T) throw Error("A custom element is already being defined.");
  }
  function Fd(a, b, c) {
    a.T = !0;var d;try {
      var e = function (m) {
        var p = f[m];if (void 0 !== p && !(p instanceof Function)) throw Error("The '" + m + "' callback must be a function.");return p;
      },
          f = c.prototype;if (!(f instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");var g = e("connectedCallback");var h = e("disconnectedCallback");var k = e("adoptedCallback");var l = (d = e("attributeChangedCallback")) && c.observedAttributes || [];
    } catch (m) {
      throw m;
    } finally {
      a.T = !1;
    }c = { localName: b, constructorFunction: c,
      connectedCallback: g, disconnectedCallback: h, adoptedCallback: k, attributeChangedCallback: d, observedAttributes: l, constructionStack: [] };a.i.set(b, c);a.ba.set(c.constructorFunction, c);return c;
  }n.upgrade = function (a) {
    M(this.b, a);
  };
  function Ed(a) {
    if (!1 !== a.a) {
      a.a = !1;for (var b = [], c = a.v, d = new Map(), e = 0; e < c.length; e++) d.set(c[e], []);M(a.b, document, { upgrade: function (k) {
          if (void 0 === k.__CE_state) {
            var l = k.localName,
                m = d.get(l);m ? m.push(k) : a.i.has(l) && b.push(k);
          }
        } });for (e = 0; e < b.length; e++) Hd(a.b, b[e]);for (e = 0; e < c.length; e++) {
        for (var f = c[e], g = d.get(f), h = 0; h < g.length; h++) Hd(a.b, g[h]);(f = a.V.get(f)) && Cd(f);
      }c.length = 0;
    }
  }n.get = function (a) {
    if (a = Gd(this, a)) return a.constructorFunction;
  };
  n.whenDefined = function (a) {
    if (!ud(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));var b = this.V.get(a);if (b) return b.c;b = new Bd();this.V.set(a, b);var c = this.i.has(a) || this.f.has(a);a = -1 === this.v.indexOf(a);c && a && Cd(b);return b.c;
  };n.polyfillWrapFlushCallback = function (a) {
    this.ca && Ad(this.ca);var b = this.c;this.c = function (c) {
      return a(function () {
        return b(c);
      });
    };
  };
  function Gd(a, b) {
    var c = a.i.get(b);if (c) return c;if (c = a.f.get(b)) {
      a.f.delete(b);try {
        return Fd(a, b, c());
      } catch (d) {
        Id(d);
      }
    }
  }window.CustomElementRegistry = N;N.prototype.define = N.prototype.define;N.prototype.upgrade = N.prototype.upgrade;N.prototype.get = N.prototype.get;N.prototype.whenDefined = N.prototype.whenDefined;N.prototype.polyfillDefineLazy = N.prototype.va;N.prototype.polyfillWrapFlushCallback = N.prototype.polyfillWrapFlushCallback;function Jd() {
    var a = O && O.noDocumentConstructionObserver,
        b = O && O.shadyDomFastWalk;this.b = [];this.c = [];this.a = !1;this.shadyDomFastWalk = b;this.f = !a;
  }function Kd(a, b, c, d) {
    var e = window.ShadyDOM;if (a.shadyDomFastWalk && e && e.inUse) {
      if (b.nodeType === Node.ELEMENT_NODE && c(b), b.querySelectorAll) for (a = e.nativeMethods.querySelectorAll.call(b, "*"), b = 0; b < a.length; b++) c(a[b]);
    } else yd(b, c, d);
  }function Ld(a, b) {
    a.a = !0;a.b.push(b);
  }function Md(a, b) {
    a.a = !0;a.c.push(b);
  }
  function Nd(a, b) {
    a.a && Kd(a, b, function (c) {
      return Od(a, c);
    });
  }function Od(a, b) {
    if (a.a && !b.__CE_patched) {
      b.__CE_patched = !0;for (var c = 0; c < a.b.length; c++) a.b[c](b);for (c = 0; c < a.c.length; c++) a.c[c](b);
    }
  }function P(a, b) {
    var c = [];Kd(a, b, function (e) {
      return c.push(e);
    });for (b = 0; b < c.length; b++) {
      var d = c[b];1 === d.__CE_state ? a.connectedCallback(d) : Hd(a, d);
    }
  }function Q(a, b) {
    var c = [];Kd(a, b, function (e) {
      return c.push(e);
    });for (b = 0; b < c.length; b++) {
      var d = c[b];1 === d.__CE_state && a.disconnectedCallback(d);
    }
  }
  function M(a, b, c) {
    c = void 0 === c ? {} : c;var d = c.Ea,
        e = c.upgrade || function (g) {
      return Hd(a, g);
    },
        f = [];Kd(a, b, function (g) {
      a.a && Od(a, g);if ("link" === g.localName && "import" === g.getAttribute("rel")) {
        var h = g.import;h instanceof Node && (h.__CE_isImportDocument = !0, h.__CE_registry = document.__CE_registry);h && "complete" === h.readyState ? h.__CE_documentLoadHandled = !0 : g.addEventListener("load", function () {
          var k = g.import;if (!k.__CE_documentLoadHandled) {
            k.__CE_documentLoadHandled = !0;var l = new Set();d && (d.forEach(function (m) {
              return l.add(m);
            }), l.delete(k));M(a, k, { Ea: l, upgrade: e });
          }
        });
      } else f.push(g);
    }, d);for (b = 0; b < f.length; b++) e(f[b]);
  }
  function Hd(a, b) {
    try {
      var c = b.ownerDocument,
          d = c.__CE_registry;var e = d && (c.defaultView || c.__CE_isImportDocument) ? Gd(d, b.localName) : void 0;if (e && void 0 === b.__CE_state) {
        e.constructionStack.push(b);try {
          try {
            if (new e.constructorFunction() !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
          } finally {
            e.constructionStack.pop();
          }
        } catch (k) {
          throw b.__CE_state = 2, k;
        }b.__CE_state = 1;b.__CE_definition = e;if (e.attributeChangedCallback && b.hasAttributes()) {
          var f = e.observedAttributes;
          for (e = 0; e < f.length; e++) {
            var g = f[e],
                h = b.getAttribute(g);null !== h && a.attributeChangedCallback(b, g, null, h, null);
          }
        }K(b) && a.connectedCallback(b);
      }
    } catch (k) {
      Id(k);
    }
  }Jd.prototype.connectedCallback = function (a) {
    var b = a.__CE_definition;if (b.connectedCallback) try {
      b.connectedCallback.call(a);
    } catch (c) {
      Id(c);
    }
  };Jd.prototype.disconnectedCallback = function (a) {
    var b = a.__CE_definition;if (b.disconnectedCallback) try {
      b.disconnectedCallback.call(a);
    } catch (c) {
      Id(c);
    }
  };
  Jd.prototype.attributeChangedCallback = function (a, b, c, d, e) {
    var f = a.__CE_definition;if (f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b)) try {
      f.attributeChangedCallback.call(a, b, c, d, e);
    } catch (g) {
      Id(g);
    }
  };
  function Pd(a, b, c, d) {
    var e = b.__CE_registry;if (e && (null === d || "http://www.w3.org/1999/xhtml" === d) && (e = Gd(e, c))) try {
      var f = new e.constructorFunction();if (void 0 === f.__CE_state || void 0 === f.__CE_definition) throw Error("Failed to construct '" + c + "': The returned value was not constructed with the HTMLElement constructor.");if ("http://www.w3.org/1999/xhtml" !== f.namespaceURI) throw Error("Failed to construct '" + c + "': The constructed element's namespace must be the HTML namespace.");if (f.hasAttributes()) throw Error("Failed to construct '" + c + "': The constructed element must not have any attributes.");if (null !== f.firstChild) throw Error("Failed to construct '" + c + "': The constructed element must not have any children.");if (null !== f.parentNode) throw Error("Failed to construct '" + c + "': The constructed element must not have a parent node.");if (f.ownerDocument !== b) throw Error("Failed to construct '" + c + "': The constructed element's owner document is incorrect.");if (f.localName !== c) throw Error("Failed to construct '" + c + "': The constructed element's local name is incorrect.");
      return f;
    } catch (g) {
      return Id(g), b = null === d ? Nc.call(b, c) : Oc.call(b, d, c), Object.setPrototypeOf(b, HTMLUnknownElement.prototype), b.__CE_state = 2, b.__CE_definition = void 0, Od(a, b), b;
    }b = null === d ? Nc.call(b, c) : Oc.call(b, d, c);Od(a, b);return b;
  }
  function Id(a) {
    var b = a.message,
        c = a.sourceURL || a.fileName || "",
        d = a.line || a.lineNumber || 0,
        e = a.column || a.columnNumber || 0,
        f = void 0;void 0 === ErrorEvent.prototype.initErrorEvent ? f = new ErrorEvent("error", { cancelable: !0, message: b, filename: c, lineno: d, colno: e, error: a }) : (f = document.createEvent("ErrorEvent"), f.initErrorEvent("error", !1, !0, b, c, d), f.preventDefault = function () {
      Object.defineProperty(this, "defaultPrevented", { configurable: !0, get: function () {
          return !0;
        } });
    });void 0 === f.error && Object.defineProperty(f, "error", { configurable: !0, enumerable: !0, get: function () {
        return a;
      } });window.dispatchEvent(f);f.defaultPrevented || console.error(a);
  };var Qd = new function () {}();function Rd(a) {
    window.HTMLElement = function () {
      function b() {
        var c = this.constructor;var d = document.__CE_registry.ba.get(c);if (!d) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var e = d.constructionStack;if (0 === e.length) return e = Nc.call(document, d.localName), Object.setPrototypeOf(e, c.prototype), e.__CE_state = 1, e.__CE_definition = d, Od(a, e), e;var f = e.length - 1,
            g = e[f];if (g === Qd) throw Error("Failed to construct '" + d.localName + "': This element was already constructed.");
        e[f] = Qd;Object.setPrototypeOf(g, c.prototype);Od(a, g);return g;
      }b.prototype = pd.prototype;Object.defineProperty(b.prototype, "constructor", { writable: !0, configurable: !0, enumerable: !1, value: b });return b;
    }();
  };function Sd(a, b, c) {
    function d(e) {
      return function (f) {
        for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];h = [];for (var k = [], l = 0; l < g.length; l++) {
          var m = g[l];m instanceof Element && K(m) && k.push(m);if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) h.push(m);else h.push(m);
        }e.apply(this, g);for (g = 0; g < k.length; g++) Q(a, k[g]);if (K(this)) for (g = 0; g < h.length; g++) k = h[g], k instanceof Element && P(a, k);
      };
    }void 0 !== c.prepend && L(b, "prepend", d(c.prepend));void 0 !== c.append && L(b, "append", d(c.append));
  }
  ;function Td(a) {
    L(Document.prototype, "createElement", function (b) {
      return Pd(a, this, b, null);
    });L(Document.prototype, "importNode", function (b, c) {
      b = Pc.call(this, b, !!c);this.__CE_registry ? M(a, b) : Nd(a, b);return b;
    });L(Document.prototype, "createElementNS", function (b, c) {
      return Pd(a, this, c, b);
    });Sd(a, Document.prototype, { prepend: Qc, append: Rc });
  };function Ud(a) {
    function b(c, d) {
      Object.defineProperty(c, "textContent", { enumerable: d.enumerable, configurable: !0, get: d.get, set: function (e) {
          if (this.nodeType === Node.TEXT_NODE) d.set.call(this, e);else {
            var f = void 0;if (this.firstChild) {
              var g = this.childNodes,
                  h = g.length;if (0 < h && K(this)) {
                f = Array(h);for (var k = 0; k < h; k++) f[k] = g[k];
              }
            }d.set.call(this, e);if (f) for (e = 0; e < f.length; e++) Q(a, f[e]);
          }
        } });
    }L(Node.prototype, "insertBefore", function (c, d) {
      if (c instanceof DocumentFragment) {
        var e = wd(c);c = Wc.call(this, c, d);if (K(this)) for (d = 0; d < e.length; d++) P(a, e[d]);return c;
      }e = c instanceof Element && K(c);d = Wc.call(this, c, d);e && Q(a, c);K(this) && P(a, c);return d;
    });L(Node.prototype, "appendChild", function (c) {
      if (c instanceof DocumentFragment) {
        var d = wd(c);c = Vc.call(this, c);if (K(this)) for (var e = 0; e < d.length; e++) P(a, d[e]);return c;
      }d = c instanceof Element && K(c);e = Vc.call(this, c);d && Q(a, c);K(this) && P(a, c);return e;
    });L(Node.prototype, "cloneNode", function (c) {
      c = Uc.call(this, !!c);this.ownerDocument.__CE_registry ? M(a, c) : Nd(a, c);return c;
    });L(Node.prototype, "removeChild", function (c) {
      var d = c instanceof Element && K(c),
          e = Xc.call(this, c);d && Q(a, c);return e;
    });L(Node.prototype, "replaceChild", function (c, d) {
      if (c instanceof DocumentFragment) {
        var e = wd(c);c = Yc.call(this, c, d);if (K(this)) for (Q(a, d), d = 0; d < e.length; d++) P(a, e[d]);return c;
      }e = c instanceof Element && K(c);var f = Yc.call(this, c, d),
          g = K(this);g && Q(a, d);e && Q(a, c);g && P(a, c);return f;
    });Zc && Zc.get ? b(Node.prototype, Zc) : Ld(a, function (c) {
      b(c, { enumerable: !0, configurable: !0, get: function () {
          for (var d = [], e = this.firstChild; e; e = e.nextSibling) e.nodeType !== Node.COMMENT_NODE && d.push(e.textContent);return d.join("");
        }, set: function (d) {
          for (; this.firstChild;) Xc.call(this, this.firstChild);null != d && "" !== d && Vc.call(this, document.createTextNode(d));
        } });
    });
  };function Vd(a) {
    function b(d) {
      return function (e) {
        for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];g = [];for (var h = [], k = 0; k < f.length; k++) {
          var l = f[k];l instanceof Element && K(l) && h.push(l);if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) g.push(l);else g.push(l);
        }d.apply(this, f);for (f = 0; f < h.length; f++) Q(a, h[f]);if (K(this)) for (f = 0; f < g.length; f++) h = g[f], h instanceof Element && P(a, h);
      };
    }var c = Element.prototype;void 0 !== ld && L(c, "before", b(ld));void 0 !== md && L(c, "after", b(md));void 0 !== nd && L(c, "replaceWith", function (d) {
      for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];f = [];for (var g = [], h = 0; h < e.length; h++) {
        var k = e[h];k instanceof Element && K(k) && g.push(k);if (k instanceof DocumentFragment) for (k = k.firstChild; k; k = k.nextSibling) f.push(k);else f.push(k);
      }h = K(this);nd.apply(this, e);for (e = 0; e < g.length; e++) Q(a, g[e]);if (h) for (Q(a, this), e = 0; e < f.length; e++) g = f[e], g instanceof Element && P(a, g);
    });void 0 !== od && L(c, "remove", function () {
      var d = K(this);od.call(this);d && Q(a, this);
    });
  };function Wd(a) {
    function b(e, f) {
      Object.defineProperty(e, "innerHTML", { enumerable: f.enumerable, configurable: !0, get: f.get, set: function (g) {
          var h = this,
              k = void 0;K(this) && (k = [], Kd(a, this, function (p) {
            p !== h && k.push(p);
          }));f.set.call(this, g);if (k) for (var l = 0; l < k.length; l++) {
            var m = k[l];1 === m.__CE_state && a.disconnectedCallback(m);
          }this.ownerDocument.__CE_registry ? M(a, this) : Nd(a, this);return g;
        } });
    }function c(e, f) {
      L(e, "insertAdjacentElement", function (g, h) {
        var k = K(h);g = f.call(this, g, h);k && Q(a, h);K(g) && P(a, h);return g;
      });
    }
    function d(e, f) {
      function g(h, k) {
        for (var l = []; h !== k; h = h.nextSibling) l.push(h);for (k = 0; k < l.length; k++) M(a, l[k]);
      }L(e, "insertAdjacentHTML", function (h, k) {
        h = h.toLowerCase();if ("beforebegin" === h) {
          var l = this.previousSibling;f.call(this, h, k);g(l || this.parentNode.firstChild, this);
        } else if ("afterbegin" === h) l = this.firstChild, f.call(this, h, k), g(this.firstChild, l);else if ("beforeend" === h) l = this.lastChild, f.call(this, h, k), g(l || this.firstChild, null);else if ("afterend" === h) l = this.nextSibling, f.call(this, h, k), g(this.nextSibling, l);else throw new SyntaxError("The value provided (" + String(h) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
      });
    }$c && L(Element.prototype, "attachShadow", function (e) {
      e = $c.call(this, e);if (a.a && !e.__CE_patched) {
        e.__CE_patched = !0;for (var f = 0; f < a.b.length; f++) a.b[f](e);
      }return this.__CE_shadowRoot = e;
    });ad && ad.get ? b(Element.prototype, ad) : qd && qd.get ? b(HTMLElement.prototype, qd) : Md(a, function (e) {
      b(e, { enumerable: !0, configurable: !0, get: function () {
          return Uc.call(this, !0).innerHTML;
        },
        set: function (f) {
          var g = "template" === this.localName,
              h = g ? this.content : this,
              k = Oc.call(document, this.namespaceURI, this.localName);for (k.innerHTML = f; 0 < h.childNodes.length;) Xc.call(h, h.childNodes[0]);for (f = g ? k.content : k; 0 < f.childNodes.length;) Vc.call(h, f.childNodes[0]);
        } });
    });L(Element.prototype, "setAttribute", function (e, f) {
      if (1 !== this.__CE_state) return cd.call(this, e, f);var g = bd.call(this, e);cd.call(this, e, f);f = bd.call(this, e);a.attributeChangedCallback(this, e, g, f, null);
    });L(Element.prototype, "setAttributeNS", function (e, f, g) {
      if (1 !== this.__CE_state) return fd.call(this, e, f, g);var h = ed.call(this, e, f);fd.call(this, e, f, g);g = ed.call(this, e, f);a.attributeChangedCallback(this, f, h, g, e);
    });L(Element.prototype, "removeAttribute", function (e) {
      if (1 !== this.__CE_state) return dd.call(this, e);var f = bd.call(this, e);dd.call(this, e);null !== f && a.attributeChangedCallback(this, e, f, null, null);
    });L(Element.prototype, "removeAttributeNS", function (e, f) {
      if (1 !== this.__CE_state) return gd.call(this, e, f);var g = ed.call(this, e, f);gd.call(this, e, f);var h = ed.call(this, e, f);g !== h && a.attributeChangedCallback(this, f, g, h, e);
    });rd ? c(HTMLElement.prototype, rd) : hd ? c(Element.prototype, hd) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");sd ? d(HTMLElement.prototype, sd) : id ? d(Element.prototype, id) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");Sd(a, Element.prototype, { prepend: jd, append: kd });Vd(a);
  };var O = window.customElements;function Xd() {
    var a = new Jd();Rd(a);Td(a);Sd(a, DocumentFragment.prototype, { prepend: Sc, append: Tc });Ud(a);Wd(a);a = new N(a);document.__CE_registry = a;Object.defineProperty(window, "customElements", { configurable: !0, enumerable: !0, value: a });
  }O && !O.forcePolyfill && "function" == typeof O.define && "function" == typeof O.get || Xd();window.__CE_installPolyfill = Xd; /*
                                                                                                                                  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                                                                                                                  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                                                                                                  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                                                                                                  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                  Code distributed by Google as part of the polymer project is also
                                                                                                                                  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                                                                                                  */
  function Yd() {
    this.end = this.start = 0;this.rules = this.parent = this.previous = null;this.cssText = this.parsedCssText = "";this.atRule = !1;this.type = 0;this.parsedSelector = this.selector = this.keyframesName = "";
  }
  function Zd(a) {
    var b = a = a.replace($d, "").replace(ae, ""),
        c = new Yd();c.start = 0;c.end = b.length;for (var d = c, e = 0, f = b.length; e < f; e++) if ("{" === b[e]) {
      d.rules || (d.rules = []);var g = d,
          h = g.rules[g.rules.length - 1] || null;d = new Yd();d.start = e + 1;d.parent = g;d.previous = h;g.rules.push(d);
    } else "}" === b[e] && (d.end = e + 1, d = d.parent || c);return be(c, a);
  }
  function be(a, b) {
    var c = b.substring(a.start, a.end - 1);a.parsedCssText = a.cssText = c.trim();a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = ce(c), c = c.replace(de, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = ee : c.match(fe) && (a.type = ge, a.keyframesName = a.selector.split(de).pop()) : a.type = 0 === c.indexOf("--") ? he : ie);if (c = a.rules) for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) be(f, b);return a;
  }function ce(a) {
    return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (b, c) {
      b = c;for (c = 6 - b.length; c--;) b = "0" + b;return "\\" + b;
    });
  }
  function je(a, b, c) {
    c = void 0 === c ? "" : c;var d = "";if (a.cssText || a.rules) {
      var e = a.rules,
          f;if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));if (f) {
        f = 0;for (var g = e.length, h = void 0; f < g && (h = e[f]); f++) d = je(h, b, d);
      } else b ? b = a.cssText : (b = a.cssText, b = b.replace(ke, "").replace(le, ""), b = b.replace(me, "").replace(ne, "")), (d = b.trim()) && (d = "  " + d + "\n");
    }d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));return c;
  }
  var ie = 1,
      ge = 7,
      ee = 4,
      he = 1E3,
      $d = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      ae = /@import[^;]*;/gim,
      ke = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      le = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      me = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      ne = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      fe = /^@[^\s]*keyframes/,
      de = /\s+/g;var R = !(window.ShadyDOM && window.ShadyDOM.inUse),
      oe;function pe(a) {
    oe = a && a.shimcssproperties ? !1 : R || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
  }var qe;window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (qe = window.ShadyCSS.cssBuild);var re = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
  window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? oe = window.ShadyCSS.nativeCss : window.ShadyCSS ? (pe(window.ShadyCSS), window.ShadyCSS = void 0) : pe(window.WebComponents && window.WebComponents.flags);var S = oe;var se = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      te = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      ue = /(--[\w-]+)\s*([:,;)]|$)/gi,
      ve = /(animation\s*:)|(animation-name\s*:)/,
      we = /@media\s(.*)/,
      xe = /\{[^}]*\}/g;var ye = new Set();function ze(a, b) {
    if (!a) return "";"string" === typeof a && (a = Zd(a));b && Ae(a, b);return je(a, S);
  }function Be(a) {
    !a.__cssRules && a.textContent && (a.__cssRules = Zd(a.textContent));return a.__cssRules || null;
  }function Ce(a) {
    return !!a.parent && a.parent.type === ge;
  }function Ae(a, b, c, d) {
    if (a) {
      var e = !1,
          f = a.type;if (d && f === ee) {
        var g = a.selector.match(we);g && (window.matchMedia(g[1]).matches || (e = !0));
      }f === ie ? b(a) : c && f === ge ? c(a) : f === he && (e = !0);if ((a = a.rules) && !e) for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) Ae(g, b, c, d);
    }
  }
  function De(a, b, c, d) {
    var e = document.createElement("style");b && e.setAttribute("scope", b);e.textContent = a;Ee(e, c, d);return e;
  }var T = null;function Fe(a) {
    a = document.createComment(" Shady DOM styles for " + a + " ");var b = document.head;b.insertBefore(a, (T ? T.nextSibling : null) || b.firstChild);return T = a;
  }function Ee(a, b, c) {
    b = b || document.head;b.insertBefore(a, c && c.nextSibling || b.firstChild);T ? a.compareDocumentPosition(T) === Node.DOCUMENT_POSITION_PRECEDING && (T = a) : T = a;
  }
  function Ge(a, b) {
    for (var c = 0, d = a.length; b < d; b++) if ("(" === a[b]) c++;else if (")" === a[b] && 0 === --c) return b;return -1;
  }function He(a, b) {
    var c = a.indexOf("var(");if (-1 === c) return b(a, "", "", "");var d = Ge(a, c + 3),
        e = a.substring(c + 4, d);c = a.substring(0, c);a = He(a.substring(d + 1), b);d = e.indexOf(",");return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
  }function Ie(a, b) {
    R ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
  }
  var Je = window.ShadyDOM && window.ShadyDOM.wrap || function (a) {
    return a;
  };function U(a) {
    var b = a.localName,
        c = "";b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);return { is: b, I: c };
  }function Ke(a) {
    for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++) if ("(" === a[d]) {
      var e = Ge(a, d);c += a.slice(d, e + 1);d = e;
    } else "," === a[d] ? (b.push(c), c = "") : c += a[d];c && b.push(c);return b;
  }
  function Le(a) {
    if (void 0 !== qe) return qe;if (void 0 === a.__cssBuild) {
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
  function Me(a) {
    a = void 0 === a ? "" : a;return "" !== a && S ? R ? "shadow" === a : "shady" === a : !1;
  };function Ne() {}function Oe(a, b) {
    Pe(V, a, function (c) {
      W(c, b || "");
    });
  }function Pe(a, b, c) {
    b.nodeType === Node.ELEMENT_NODE && c(b);var d;"template" === b.localName ? d = (b.content || b._content || b).childNodes : d = b.children || b.childNodes;if (d) for (b = 0; b < d.length; b++) Pe(a, d[b], c);
  }
  function W(a, b, c) {
    if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));else if (a.getAttribute) {
      var d = a.getAttribute("class");c ? d && (b = d.replace("style-scope", "").replace(b, ""), Ie(a, b)) : Ie(a, (d ? d + " " : "") + "style-scope " + b);
    }
  }function Qe(a, b, c) {
    Pe(V, a, function (d) {
      W(d, b, !0);W(d, c);
    });
  }function Re(a, b) {
    Pe(V, a, function (c) {
      W(c, b || "", !0);
    });
  }
  function Se(a, b, c, d, e) {
    var f = V;e = void 0 === e ? "" : e;"" === e && (R || "shady" === (void 0 === d ? "" : d) ? e = ze(b, c) : (a = U(a), e = Te(f, b, a.is, a.I, c) + "\n\n"));return e.trim();
  }function Te(a, b, c, d, e) {
    var f = Ue(c, d);c = c ? "." + c : "";return ze(b, function (g) {
      g.c || (g.selector = g.h = Ve(a, g, a.b, c, f), g.c = !0);e && e(g, c, f);
    });
  }function Ue(a, b) {
    return b ? "[is=" + a + "]" : a;
  }
  function Ve(a, b, c, d, e) {
    var f = Ke(b.selector);if (!Ce(b)) {
      b = 0;for (var g = f.length, h = void 0; b < g && (h = f[b]); b++) f[b] = c.call(a, h, d, e);
    }return f.filter(function (k) {
      return !!k;
    }).join(",");
  }function We(a) {
    return a.replace(Xe, function (b, c, d) {
      -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));return ":" + c + "(" + d + ")";
    });
  }
  function Ye(a) {
    for (var b = [], c; c = a.match(Ze);) {
      var d = c.index,
          e = Ge(a, d);if (-1 === e) throw Error(c.input + " selector missing ')'");c = a.slice(d, e + 1);a = a.replace(c, "\ue000");b.push(c);
    }return { X: a, matches: b };
  }function $e(a, b) {
    var c = a.split("\ue000");return b.reduce(function (d, e, f) {
      return d + e + c[f + 1];
    }, c[0]);
  }
  Ne.prototype.b = function (a, b, c) {
    var d = !1;a = a.trim();var e = Xe.test(a);e && (a = a.replace(Xe, function (h, k, l) {
      return ":" + k + "(" + l.replace(/\s/g, "") + ")";
    }), a = We(a));var f = Ze.test(a);if (f) {
      var g = Ye(a);a = g.X;g = g.matches;
    }a = a.replace(af, ":host $1");a = a.replace(bf, function (h, k, l) {
      d || (h = cf(l, k, b, c), d = d || h.stop, k = h.pa, l = h.value);return k + l;
    });f && (a = $e(a, g));e && (a = We(a));return a = a.replace(df, function (h, k, l, m) {
      return '[dir="' + l + '"] ' + k + m + ", " + k + '[dir="' + l + '"]' + m;
    });
  };
  function cf(a, b, c, d) {
    var e = a.indexOf("::slotted");0 <= a.indexOf(":host") ? a = ef(a, d) : 0 !== e && (a = c ? ff(a, c) : a);c = !1;0 <= e && (b = "", c = !0);if (c) {
      var f = !0;c && (a = a.replace(gf, function (g, h) {
        return " > " + h;
      }));
    }return { value: a, pa: b, stop: f };
  }function ff(a, b) {
    a = a.split(/(\[.+?\])/);for (var c = [], d = 0; d < a.length; d++) if (1 === d % 2) c.push(a[d]);else {
      var e = a[d];if ("" !== e || d !== a.length - 1) e = e.split(":"), e[0] += b, c.push(e.join(":"));
    }return c.join("");
  }
  function ef(a, b) {
    var c = a.match(hf);return (c = c && c[2].trim() || "") ? c[0].match(jf) ? a.replace(hf, function (d, e, f) {
      return b + f;
    }) : c.split(jf)[0] === b ? c : "should_not_match" : a.replace(":host", b);
  }function kf(a) {
    ":root" === a.selector && (a.selector = "html");
  }Ne.prototype.c = function (a) {
    return a.match(":host") ? "" : a.match("::slotted") ? this.b(a, ":not(.style-scope)") : ff(a.trim(), ":not(.style-scope)");
  };da.Object.defineProperties(Ne.prototype, { a: { configurable: !0, enumerable: !0, get: function () {
        return "style-scope";
      } } });
  var Xe = /:(nth[-\w]+)\(([^)]+)\)/,
      bf = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
      jf = /[[.:#*]/,
      af = /^(::slotted)/,
      hf = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      gf = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      df = /(.*):dir\((?:(ltr|rtl))\)(.*)/,
      Ze = /:(?:matches|any|-(?:webkit|moz)-any)/,
      V = new Ne();function lf(a, b, c, d, e) {
    this.o = a || null;this.b = b || null;this.W = c || [];this.l = null;this.cssBuild = e || "";this.I = d || "";this.a = this.m = this.u = null;
  }function X(a) {
    return a ? a.__styleInfo : null;
  }function mf(a, b) {
    return a.__styleInfo = b;
  }lf.prototype.c = function () {
    return this.o;
  };lf.prototype._getStyleRules = lf.prototype.c;function nf(a) {
    var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;return b && b.call(this, a);
  }var of = /:host\s*>\s*/,
      pf = navigator.userAgent.match("Trident");function qf() {}function rf(a) {
    var b = {},
        c = [],
        d = 0;Ae(a, function (f) {
      sf(f);f.index = d++;f = f.g.cssText;for (var g; g = ue.exec(f);) {
        var h = g[1];":" !== g[2] && (b[h] = !0);
      }
    }, function (f) {
      c.push(f);
    });a.b = c;a = [];for (var e in b) a.push(e);return a;
  }
  function sf(a) {
    if (!a.g) {
      var b = {},
          c = {};tf(a, c) && (b.s = c, a.rules = null);b.cssText = a.parsedCssText.replace(xe, "").replace(se, "");a.g = b;
    }
  }function tf(a, b) {
    var c = a.g;if (c) {
      if (c.s) return Object.assign(b, c.s), !0;
    } else {
      c = a.parsedCssText;for (var d; a = se.exec(c);) {
        d = (a[2] || a[3]).trim();if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;d = !0;
      }return d;
    }
  }
  function uf(a, b, c) {
    b && (b = 0 <= b.indexOf(";") ? vf(a, b, c) : He(b, function (d, e, f, g) {
      if (!e) return d + g;(e = uf(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = uf(a, c[f] || f, c) || f;return d + (e || "") + g;
    }));return b && b.trim() || "";
  }
  function vf(a, b, c) {
    b = b.split(";");for (var d = 0, e, f; d < b.length; d++) if (e = b[d]) {
      te.lastIndex = 0;if (f = te.exec(e)) e = uf(a, c[f[1]], c);else if (f = e.indexOf(":"), -1 !== f) {
        var g = e.substring(f);g = g.trim();g = uf(a, g, c) || g;e = e.substring(0, f) + g;
      }b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
    }return b.join(";");
  }
  function wf(a, b) {
    var c = {},
        d = [];Ae(a, function (e) {
      e.g || sf(e);var f = e.h || e.parsedSelector;b && e.g.s && f && nf.call(b, f) && (tf(e, c), e = e.index, f = parseInt(e / 32, 10), d[f] = (d[f] || 0) | 1 << e % 32);
    }, null, !0);return { s: c, key: d };
  }
  function xf(a, b, c, d) {
    b.g || sf(b);if (b.g.s) {
      var e = U(a);a = e.is;e = e.I;e = a ? Ue(a, e) : "html";var f = b.parsedSelector;var g = !!f.match(of) || "html" === e && -1 < f.indexOf("html");var h = 0 === f.indexOf(":host") && !g;"shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));if (g || h) c = e, h && (b.h || (b.h = Ve(V, b, V.b, a ? "." + a : "", e)), c = b.h || e), g && "html" === e && (c = b.h || b.i), d({ X: c, ua: h, Ga: g });
    }
  }
  function yf(a, b, c) {
    var d = {},
        e = {};Ae(b, function (f) {
      xf(a, f, c, function (g) {
        nf.call(a._element || a, g.X) && (g.ua ? tf(f, d) : tf(f, e));
      });
    }, null, !0);return { ya: e, ta: d };
  }
  function zf(a, b, c, d) {
    var e = U(b),
        f = Ue(e.is, e.I),
        g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
        h = X(b);e = h.o;h = h.cssBuild;var k = Af(e, d);return Se(b, e, function (l) {
      var m = "";l.g || sf(l);l.g.cssText && (m = vf(a, l.g.cssText, c));l.cssText = m;if (!R && !Ce(l) && l.cssText) {
        var p = m = l.cssText;null == l.aa && (l.aa = ve.test(m));if (l.aa) if (null == l.N) {
          l.N = [];for (var x in k) p = k[x], p = p(m), m !== p && (m = p, l.N.push(x));
        } else {
          for (x = 0; x < l.N.length; ++x) p = k[l.N[x]], m = p(m);p = m;
        }l.cssText = p;l.h = l.h || l.selector;
        m = "." + d;x = Ke(l.h);p = 0;for (var ka = x.length, Ta = void 0; p < ka && (Ta = x[p]); p++) x[p] = Ta.match(g) ? Ta.replace(f, m) : m + " " + Ta;l.selector = x.join(",");
      }
    }, h);
  }function Af(a, b) {
    a = a.b;var c = {};if (!R && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
      var f = e,
          g = b;f.f = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");f.a = f.keyframesName + "-" + g;f.h = f.h || f.selector;f.selector = f.h.replace(f.keyframesName, f.a);c[e.keyframesName] = Bf(e);
    }return c;
  }function Bf(a) {
    return function (b) {
      return b.replace(a.f, a.a);
    };
  }
  function Cf(a, b) {
    var c = Df,
        d = Be(a);a.textContent = ze(d, function (e) {
      var f = e.cssText = e.parsedCssText;e.g && e.g.cssText && (f = f.replace(ke, "").replace(le, ""), e.cssText = vf(c, f, b));
    });
  }da.Object.defineProperties(qf.prototype, { a: { configurable: !0, enumerable: !0, get: function () {
        return "x-scope";
      } } });var Df = new qf();var Ef = {},
      Ff = window.customElements;if (Ff && !R && !re) {
    var Gf = Ff.define;Ff.define = function (a, b, c) {
      Ef[a] || (Ef[a] = Fe(a));Gf.call(Ff, a, b, c);
    };
  };function Hf() {
    this.cache = {};
  }Hf.prototype.store = function (a, b, c, d) {
    var e = this.cache[a] || [];e.push({ s: b, styleElement: c, m: d });100 < e.length && e.shift();this.cache[a] = e;
  };function If() {}var Jf = new RegExp(V.a + "\\s*([^\\s]*)");function Kf(a) {
    return (a = (a.classList && a.classList.value ? a.classList.value : a.getAttribute("class") || "").match(Jf)) ? a[1] : "";
  }function Lf(a) {
    var b = Je(a).getRootNode();return b === a || b === a.ownerDocument ? "" : (a = b.host) ? U(a).is : "";
  }
  function Mf(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
        var e = c.addedNodes[d];if (e.nodeType === Node.ELEMENT_NODE) {
          var f = e.getRootNode(),
              g = Kf(e);if (g && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === Le(e))) Re(e, g);else if (f instanceof ShadowRoot) for (f = Lf(e), f !== g && Qe(e, g, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + V.a + ")"), g = 0; g < e.length; g++) {
            f = e[g];
            var h = Lf(f);h && W(f, h);
          }
        }
      }
    }
  }
  if (!(R || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
    var Nf = new MutationObserver(Mf),
        Of = function (a) {
      Nf.observe(a, { childList: !0, subtree: !0 });
    };if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Of(document);else {
      var Pf = function () {
        Of(document.body);
      };window.HTMLImports ? window.HTMLImports.whenReady(Pf) : requestAnimationFrame(function () {
        if ("loading" === document.readyState) {
          var a = function () {
            Pf();document.removeEventListener("readystatechange", a);
          };document.addEventListener("readystatechange", a);
        } else Pf();
      });
    }If = function () {
      Mf(Nf.takeRecords());
    };
  };var Qf = {};var Rf = Promise.resolve();function Sf(a) {
    if (a = Qf[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
  }function Tf(a) {
    return a._applyShimCurrentVersion === a._applyShimNextVersion;
  }function Uf(a) {
    a._applyShimValidatingVersion = a._applyShimNextVersion;a._validating || (a._validating = !0, Rf.then(function () {
      a._applyShimCurrentVersion = a._applyShimNextVersion;a._validating = !1;
    }));
  };var Vf = {},
      Wf = new Hf();function Y() {
    this.v = {};this.c = document.documentElement;var a = new Yd();a.rules = [];this.f = mf(this.c, new lf(a));this.i = !1;this.a = this.b = null;
  }n = Y.prototype;n.flush = function () {
    If();
  };n.ra = function (a) {
    return Be(a);
  };n.Ca = function (a) {
    return ze(a);
  };n.prepareTemplate = function (a, b, c) {
    this.prepareTemplateDom(a, b);this.prepareTemplateStyles(a, b, c);
  };
  n.prepareTemplateStyles = function (a, b, c) {
    if (!a._prepared && !re) {
      R || Ef[b] || (Ef[b] = Fe(b));a._prepared = !0;a.name = b;a.extends = c;Qf[b] = a;var d = Le(a),
          e = Me(d);c = { is: b, extends: c };for (var f = [], g = a.content.querySelectorAll("style"), h = 0; h < g.length; h++) {
        var k = g[h];if (k.hasAttribute("shady-unscoped")) {
          if (!R) {
            var l = k.textContent;ye.has(l) || (ye.add(l), l = k.cloneNode(!0), document.head.appendChild(l));k.parentNode.removeChild(k);
          }
        } else f.push(k.textContent), k.parentNode.removeChild(k);
      }f = f.join("").trim() + (Vf[b] || "");
      Xf(this);if (!e) {
        if (g = !d) g = te.test(f) || se.test(f), te.lastIndex = 0, se.lastIndex = 0;h = Zd(f);g && S && this.b && this.b.transformRules(h, b);a._styleAst = h;
      }g = [];S || (g = rf(a._styleAst));if (!g.length || S) h = R ? a.content : null, b = Ef[b] || null, d = Se(c, a._styleAst, null, d, e ? f : ""), d = d.length ? De(d, c.is, h, b) : null, a._style = d;a.a = g;
    }
  };n.wa = function (a, b) {
    Vf[b] = a.join(" ");
  };n.prepareTemplateDom = function (a, b) {
    if (!re) {
      var c = Le(a);R || "shady" === c || a._domPrepared || (a._domPrepared = !0, Oe(a.content, b));
    }
  };
  function Yf(a) {
    var b = U(a),
        c = b.is;b = b.I;var d = Ef[c] || null,
        e = Qf[c];if (e) {
      c = e._styleAst;var f = e.a;e = Le(e);b = new lf(c, d, f, b, e);mf(a, b);return b;
    }
  }function Zf(a) {
    !a.a && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.a = window.ShadyCSS.CustomStyleInterface, a.a.transformCallback = function (b) {
      a.ga(b);
    }, a.a.validateCallback = function () {
      requestAnimationFrame(function () {
        (a.a.enqueued || a.i) && a.flushCustomStyles();
      });
    });
  }
  function Xf(a) {
    !a.b && window.ShadyCSS && window.ShadyCSS.ApplyShim && (a.b = window.ShadyCSS.ApplyShim, a.b.invalidCallback = Sf);Zf(a);
  }
  n.flushCustomStyles = function () {
    if (!re && (Xf(this), this.a)) {
      var a = this.a.processStyles();if (this.a.enqueued && !Me(this.f.cssBuild)) {
        if (S) {
          if (!this.f.cssBuild) for (var b = 0; b < a.length; b++) {
            var c = this.a.getStyleForCustomStyle(a[b]);if (c && S && this.b) {
              var d = Be(c);Xf(this);this.b.transformRules(d);c.textContent = ze(d);
            }
          }
        } else {
          $f(this, a);ag(this, this.c, this.f);for (b = 0; b < a.length; b++) (c = this.a.getStyleForCustomStyle(a[b])) && Cf(c, this.f.u);this.i && this.styleDocument();
        }this.a.enqueued = !1;
      }
    }
  };
  function $f(a, b) {
    b = b.map(function (c) {
      return a.a.getStyleForCustomStyle(c);
    }).filter(function (c) {
      return !!c;
    });b.sort(function (c, d) {
      c = d.compareDocumentPosition(c);return c & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : c & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
    });a.f.o.rules = b.map(function (c) {
      return Be(c);
    });
  }
  n.styleElement = function (a, b) {
    if (re) {
      if (b) {
        X(a) || mf(a, new lf(null));var c = X(a);c.l = c.l || {};Object.assign(c.l, b);bg(this, a, c);
      }
    } else if (c = X(a) || Yf(a)) if (a !== this.c && (this.i = !0), b && (c.l = c.l || {}, Object.assign(c.l, b)), S) bg(this, a, c);else if (this.flush(), ag(this, a, c), c.W && c.W.length) {
      b = U(a).is;var d;a: {
        if (d = Wf.cache[b]) for (var e = d.length - 1; 0 <= e; e--) {
          var f = d[e];b: {
            var g = c.W;for (var h = 0; h < g.length; h++) {
              var k = g[h];if (f.s[k] !== c.u[k]) {
                g = !1;break b;
              }
            }g = !0;
          }if (g) {
            d = f;break a;
          }
        }d = void 0;
      }g = d ? d.styleElement : null;e = c.m;(f = d && d.m) || (f = this.v[b] = (this.v[b] || 0) + 1, f = b + "-" + f);c.m = f;f = c.m;h = Df;h = g ? g.textContent || "" : zf(h, a, c.u, f);k = X(a);var l = k.a;l && !R && l !== g && (l._useCount--, 0 >= l._useCount && l.parentNode && l.parentNode.removeChild(l));R ? k.a ? (k.a.textContent = h, g = k.a) : h && (g = De(h, f, a.shadowRoot, k.b)) : g ? g.parentNode || (pf && -1 < h.indexOf("@media") && (g.textContent = h), Ee(g, null, k.b)) : h && (g = De(h, f, null, k.b));g && (g._useCount = g._useCount || 0, k.a != g && g._useCount++, k.a = g);f = g;R || (g = c.m, k = h = a.getAttribute("class") || "", e && (k = h.replace(new RegExp("\\s*x-scope\\s*" + e + "\\s*", "g"), " ")), k += (k ? " " : "") + "x-scope " + g, h !== k && Ie(a, k));d || Wf.store(b, c.u, f, c.m);
    }
  };
  function bg(a, b, c) {
    var d = U(b).is;if (c.l) {
      var e = c.l,
          f;for (f in e) null === f ? b.style.removeProperty(f) : b.style.setProperty(f, e[f]);
    }e = Qf[d];if (!(!e && b !== a.c || e && "" !== Le(e)) && e && e._style && !Tf(e)) {
      if (Tf(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) Xf(a), a.b && a.b.transformRules(e._styleAst, d), e._style.textContent = Se(b, c.o), Uf(e);R && (a = b.shadowRoot) && (a = a.querySelector("style")) && (a.textContent = Se(b, c.o));c.o = e._styleAst;
    }
  }
  function cg(a, b) {
    return (b = Je(b).getRootNode().host) ? X(b) || Yf(b) ? b : cg(a, b) : a.c;
  }function ag(a, b, c) {
    var d = cg(a, b),
        e = X(d),
        f = e.u;d === a.c || f || (ag(a, d, e), f = e.u);a = Object.create(f || null);d = yf(b, c.o, c.cssBuild);b = wf(e.o, b).s;Object.assign(a, d.ta, b, d.ya);b = c.l;for (var g in b) if ((e = b[g]) || 0 === e) a[g] = e;g = Df;b = Object.getOwnPropertyNames(a);for (e = 0; e < b.length; e++) d = b[e], a[d] = uf(g, a[d], a);c.u = a;
  }n.styleDocument = function (a) {
    this.styleSubtree(this.c, a);
  };
  n.styleSubtree = function (a, b) {
    var c = Je(a),
        d = c.shadowRoot,
        e = a === this.c;(d || e) && this.styleElement(a, b);if (a = e ? c : d) for (a = Array.from(a.querySelectorAll("*")).filter(function (f) {
      return Je(f).shadowRoot;
    }), b = 0; b < a.length; b++) this.styleSubtree(a[b]);
  };
  n.ga = function (a) {
    var b = this,
        c = Le(a);c !== this.f.cssBuild && (this.f.cssBuild = c);if (!Me(c)) {
      var d = Be(a);Ae(d, function (e) {
        if (R) kf(e);else {
          var f = V;e.selector = e.parsedSelector;kf(e);e.selector = e.h = Ve(f, e, f.c, void 0, void 0);
        }S && "" === c && (Xf(b), b.b && b.b.transformRule(e));
      });S ? a.textContent = ze(d) : this.f.o.rules.push(d);
    }
  };n.getComputedStyleValue = function (a, b) {
    var c;S || (c = (X(a) || X(cg(this, a))).u[b]);return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "";
  };
  n.Ba = function (a, b) {
    var c = Je(a).getRootNode(),
        d;b ? d = ("string" === typeof b ? b : String(b)).split(/\s/) : d = [];b = c.host && c.host.localName;if (!b && (c = a.getAttribute("class"))) {
      c = c.split(/\s/);for (var e = 0; e < c.length; e++) if (c[e] === V.a) {
        b = c[e + 1];break;
      }
    }b && d.push(V.a, b);S || (b = X(a)) && b.m && d.push(Df.a, b.m);Ie(a, d.join(" "));
  };n.oa = function (a) {
    return X(a);
  };n.Aa = function (a, b) {
    W(a, b);
  };n.Da = function (a, b) {
    W(a, b, !0);
  };n.za = function (a) {
    return Lf(a);
  };n.qa = function (a) {
    return Kf(a);
  };Y.prototype.flush = Y.prototype.flush;
  Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;Y.prototype.styleElement = Y.prototype.styleElement;Y.prototype.styleDocument = Y.prototype.styleDocument;Y.prototype.styleSubtree = Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;Y.prototype.setElementClass = Y.prototype.Ba;Y.prototype._styleInfoForNode = Y.prototype.oa;Y.prototype.transformCustomStyleForDocument = Y.prototype.ga;Y.prototype.getStyleAst = Y.prototype.ra;Y.prototype.styleAstToString = Y.prototype.Ca;
  Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;Y.prototype.scopeNode = Y.prototype.Aa;Y.prototype.unscopeNode = Y.prototype.Da;Y.prototype.scopeForNode = Y.prototype.za;Y.prototype.currentScopeForNode = Y.prototype.qa;Y.prototype.prepareAdoptedCssText = Y.prototype.wa;Object.defineProperties(Y.prototype, { nativeShadow: { get: function () {
        return R;
      } }, nativeCss: { get: function () {
        return S;
      } } });var Z = new Y(),
      dg,
      eg;window.ShadyCSS && (dg = window.ShadyCSS.ApplyShim, eg = window.ShadyCSS.CustomStyleInterface);
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
    }, nativeCss: S, nativeShadow: R, cssBuild: qe, disableRuntime: re };dg && (window.ShadyCSS.ApplyShim = dg);eg && (window.ShadyCSS.CustomStyleInterface = eg);
}).call(this);

//# sourceMappingURL=webcomponents-sd-ce.js.map