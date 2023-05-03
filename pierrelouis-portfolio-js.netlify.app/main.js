var __vite_style__ = document.createElement("style");
__vite_style__.innerHTML = `.js-badge{position:fixed;top:32px;left:32px;border-radius:16px;background-color:#add8e6;color:#000;padding:8px;display:flex;justify-content:center;align-items:center;line-height:1.2;font-size:14px;cursor:pointer;z-index:10000;transition:background-color .1s ease-out}.js-badge:hover{background-color:#e489c1}body{--loaderBarWidth: 0;--loaderWheelAngle: 0}.touch-disabled,.is--crank-container{touch-action:none}.is--crank-container .is--c-crank,.is--crank-handle,.is--wheel{transform:rotate(var(--loaderWheelAngle))}.c-error-img.is--left,.c-error-img.is--right{transform:translate(var(--loaderBarWidth))}.crank-screen__c-text{opacity:var(--textOpacity);transform:scale(var(--textScale))}.easter-screen__text-container{transform:translate(var(--loaderBarWidth))}
`;
document.head.appendChild(__vite_style__);
(function(D) {
    typeof define == "function" && define.amd ? define(D) : D()
}
)(function() {
    "use strict";
    var D = ""
      , re = ""
      , Z = window.AudioContext || window.webkitAudioContext
      , x = new Z
      , M = null
      , C = null
      , T = !1;
    window.location.href.indexOf("pierrelouis") > -1 || window.location.href.indexOf("mynebula") !== -1 ? (window.PointerEvent ? ($(".is--click-sound").on("pointerdown", function() {
        L("sine", .3)
    }),
    $(".is--punch-sound").on("pointerdown", function() {
        L("sawtooth", .3)
    }),
    $(".is--toggl-sound").on("pointerdown", function() {
        L("square", .1)
    })) : ($(".is--click-sound").on("mousedown", function() {
        L("sine", .3)
    }),
    $(".is--punch-sound").on("mousedown", function() {
        L("sawtooth", .3)
    }),
    $(".is--toggl-sound").on("mousedown", function() {
        L("square", .1)
    })),
    $(".is--popup-sound").on("click", function() {
        L("sine", 1.2)
    })) : (document.querySelectorAll(".c-intro__device").forEach(e=>e.classList.remove("c-intro__device")),
    document.querySelectorAll(".c-intro__device").forEach(e=>e.classList.add("blue-div")),
    document.querySelectorAll(".card__big-round-btn").forEach(e=>e.classList.remove("card__big-round-btn")),
    document.querySelectorAll(".card__big-round-btn").forEach(e=>e.classList.add("blue-div")),
    document.querySelectorAll(".c-small-screws").forEach(e=>e.classList.remove("c-small-screws")),
    document.querySelectorAll(".c-small-screws").forEach(e=>e.classList.add("blue-div")),
    document.querySelectorAll(".card").forEach(e=>e.classList.remove("card")),
    document.querySelectorAll(".card").forEach(e=>e.classList.add("blue-div")),
    document.querySelectorAll(".card__open-door-trigger").forEach(e=>e.classList.remove("card__open-door-trigger")),
    document.querySelectorAll(".card__open-door-trigger").forEach(e=>e.classList.add("blue-div")),
    document.querySelectorAll(".face__mouth").forEach(e=>e.classList.remove("face__mouth")),
    document.querySelectorAll(".face__mouth").forEach(e=>e.classList.add("blue-face")),
    document.querySelectorAll(".device__c-skill").forEach(e=>e.classList.remove("device__c-skill")),
    document.querySelectorAll(".device__c-skill").forEach(e=>e.classList.add("blue-div")));
    function J(e, s, c) {
        const l = (Math.random() * (s - e) + e).toFixed(c);
        return parseFloat(l)
    }
    function L(e, s) {
        if (T)
            return;
        M = x.createOscillator(),
        C = x.createGain(),
        M.connect(C),
        M.type = e,
        C.connect(x.destination),
        M.start(0);
        var c = J(440, 740, 2);
        M.frequency.value = c,
        navigator.userAgent.indexOf("Firefox") > -1 || !window.PointerEvent ? C.gain.setTargetAtTime(0, x.currentTime, .015) : C.gain.exponentialRampToValueAtTime(1e-5, x.currentTime + s)
    }
    $(".c-sound").on("click", function() {
        T = !T
    });
    var Q = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}
      , V = {
        exports: {}
    };
    if (function(e) {
        (function(s, c) {
            e.exports ? e.exports.Dragdealer = c() : s.Dragdealer = c()
        }
        )(Q, function() {
            var s = function(t, o) {
                this.options = this.applyDefaults(o || {}),
                this.bindMethods(),
                this.wrapper = this.getWrapperElement(t),
                this.wrapper && (this.handle = this.getHandleElement(this.wrapper, this.options.handleClass),
                this.handle && (this.init(),
                this.bindEventListeners()))
            };
            s.prototype = {
                defaults: {
                    disabled: !1,
                    horizontal: !0,
                    vertical: !1,
                    slide: !0,
                    steps: 0,
                    snap: !1,
                    loose: !1,
                    speed: .1,
                    xPrecision: 0,
                    yPrecision: 0,
                    handleClass: "handle",
                    css3: !0,
                    activeClass: "active",
                    tapping: !0
                },
                init: function() {
                    this.options.css3 && a(this.handle),
                    this.value = {
                        prev: [-1, -1],
                        current: [this.options.x || 0, this.options.y || 0],
                        target: [this.options.x || 0, this.options.y || 0]
                    },
                    this.offset = {
                        wrapper: [0, 0],
                        mouse: [0, 0],
                        prev: [-999999, -999999],
                        current: [0, 0],
                        target: [0, 0]
                    },
                    this.dragStartPosition = {
                        x: 0,
                        y: 0
                    },
                    this.change = [0, 0],
                    this.stepRatios = this.calculateStepRatios(),
                    this.activity = !1,
                    this.dragging = !1,
                    this.tapping = !1,
                    this.reflow(),
                    this.options.disabled && this.disable()
                },
                applyDefaults: function(t) {
                    for (var o in this.defaults)
                        t.hasOwnProperty(o) || (t[o] = this.defaults[o]);
                    return t
                },
                getWrapperElement: function(t) {
                    return typeof t == "string" ? document.getElementById(t) : t
                },
                getHandleElement: function(t, o) {
                    var i, n, _;
                    if (t.getElementsByClassName) {
                        if (i = t.getElementsByClassName(o),
                        i.length > 0)
                            return i[0]
                    } else
                        for (n = new RegExp("(^|\\s)" + o + "(\\s|$)"),
                        i = t.getElementsByTagName("*"),
                        _ = 0; _ < i.length; _++)
                            if (n.test(i[_].className))
                                return i[_]
                },
                calculateStepRatios: function() {
                    var t = [];
                    if (this.options.steps >= 1)
                        for (var o = 0; o <= this.options.steps - 1; o++)
                            this.options.steps > 1 ? t[o] = o / (this.options.steps - 1) : t[o] = 0;
                    return t
                },
                setWrapperOffset: function() {
                    this.offset.wrapper = y.get(this.wrapper)
                },
                calculateBounds: function() {
                    var t = {
                        top: this.options.top || 0,
                        bottom: -(this.options.bottom || 0) + this.wrapper.offsetHeight,
                        left: this.options.left || 0,
                        right: -(this.options.right || 0) + this.wrapper.offsetWidth
                    };
                    return t.availWidth = t.right - t.left - this.handle.offsetWidth,
                    t.availHeight = t.bottom - t.top - this.handle.offsetHeight,
                    t
                },
                calculateValuePrecision: function() {
                    var t = this.options.xPrecision || Math.abs(this.bounds.availWidth)
                      , o = this.options.yPrecision || Math.abs(this.bounds.availHeight);
                    return [t ? 1 / t : 0, o ? 1 / o : 0]
                },
                bindMethods: function() {
                    typeof this.options.customRequestAnimationFrame == "function" ? this.requestAnimationFrame = c(this.options.customRequestAnimationFrame, window) : this.requestAnimationFrame = c(E, window),
                    typeof this.options.customCancelAnimationFrame == "function" ? this.cancelAnimationFrame = c(this.options.customCancelAnimationFrame, window) : this.cancelAnimationFrame = c(b, window),
                    this.animateWithRequestAnimationFrame = c(this.animateWithRequestAnimationFrame, this),
                    this.animate = c(this.animate, this),
                    this.onHandleMouseDown = c(this.onHandleMouseDown, this),
                    this.onHandleTouchStart = c(this.onHandleTouchStart, this),
                    this.onDocumentMouseMove = c(this.onDocumentMouseMove, this),
                    this.onWrapperTouchMove = c(this.onWrapperTouchMove, this),
                    this.onWrapperMouseDown = c(this.onWrapperMouseDown, this),
                    this.onWrapperTouchStart = c(this.onWrapperTouchStart, this),
                    this.onDocumentMouseUp = c(this.onDocumentMouseUp, this),
                    this.onDocumentTouchEnd = c(this.onDocumentTouchEnd, this),
                    this.onHandleClick = c(this.onHandleClick, this),
                    this.onWindowResize = c(this.onWindowResize, this)
                },
                bindEventListeners: function() {
                    l(this.handle, "mousedown", this.onHandleMouseDown),
                    l(this.handle, "touchstart", this.onHandleTouchStart),
                    l(document, "mousemove", this.onDocumentMouseMove),
                    l(this.wrapper, "touchmove", this.onWrapperTouchMove),
                    l(this.wrapper, "mousedown", this.onWrapperMouseDown),
                    l(this.wrapper, "touchstart", this.onWrapperTouchStart),
                    l(document, "mouseup", this.onDocumentMouseUp),
                    l(document, "touchend", this.onDocumentTouchEnd),
                    l(this.handle, "click", this.onHandleClick),
                    l(window, "resize", this.onWindowResize),
                    this.animate(!1, !0),
                    this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame)
                },
                unbindEventListeners: function() {
                    d(this.handle, "mousedown", this.onHandleMouseDown),
                    d(this.handle, "touchstart", this.onHandleTouchStart),
                    d(document, "mousemove", this.onDocumentMouseMove),
                    d(this.wrapper, "touchmove", this.onWrapperTouchMove),
                    d(this.wrapper, "mousedown", this.onWrapperMouseDown),
                    d(this.wrapper, "touchstart", this.onWrapperTouchStart),
                    d(document, "mouseup", this.onDocumentMouseUp),
                    d(document, "touchend", this.onDocumentTouchEnd),
                    d(this.handle, "click", this.onHandleClick),
                    d(window, "resize", this.onWindowResize),
                    this.cancelAnimationFrame(this.interval)
                },
                onHandleMouseDown: function(t) {
                    r.refresh(t),
                    f(t),
                    v(t),
                    this.activity = !1,
                    this.startDrag()
                },
                onHandleTouchStart: function(t) {
                    r.refresh(t),
                    v(t),
                    this.activity = !1,
                    this.startDrag()
                },
                onDocumentMouseMove: function(t) {
                    t.clientX - this.dragStartPosition.x === 0 && t.clientY - this.dragStartPosition.y === 0 || (r.refresh(t),
                    this.dragging && (this.activity = !0,
                    f(t)))
                },
                onWrapperTouchMove: function(t) {
                    if (r.refresh(t),
                    !this.activity && this.draggingOnDisabledAxis()) {
                        this.dragging && this.stopDrag();
                        return
                    }
                    f(t),
                    this.activity = !0
                },
                onWrapperMouseDown: function(t) {
                    r.refresh(t),
                    f(t),
                    this.startTap()
                },
                onWrapperTouchStart: function(t) {
                    r.refresh(t),
                    f(t),
                    this.startTap()
                },
                onDocumentMouseUp: function(t) {
                    this.stopDrag(),
                    this.stopTap()
                },
                onDocumentTouchEnd: function(t) {
                    this.stopDrag(),
                    this.stopTap()
                },
                onHandleClick: function(t) {
                    this.activity && (f(t),
                    v(t))
                },
                onWindowResize: function(t) {
                    this.reflow()
                },
                enable: function() {
                    this.disabled = !1,
                    this.handle.className = this.handle.className.replace(/\s?disabled/g, "")
                },
                disable: function() {
                    this.disabled = !0,
                    this.handle.className += " disabled"
                },
                reflow: function() {
                    this.setWrapperOffset(),
                    this.bounds = this.calculateBounds(),
                    this.valuePrecision = this.calculateValuePrecision(),
                    this.updateOffsetFromValue()
                },
                getStep: function() {
                    return [this.getStepNumber(this.value.target[0]), this.getStepNumber(this.value.target[1])]
                },
                getStepWidth: function() {
                    return Math.abs(this.bounds.availWidth / this.options.steps)
                },
                getValue: function() {
                    return this.value.target
                },
                setStep: function(t, o, i) {
                    this.setValue(this.options.steps && t > 1 ? (t - 1) / (this.options.steps - 1) : 0, this.options.steps && o > 1 ? (o - 1) / (this.options.steps - 1) : 0, i)
                },
                setValue: function(t, o, i) {
                    this.setTargetValue([t, o || 0]),
                    i && (this.groupCopy(this.value.current, this.value.target),
                    this.updateOffsetFromValue(),
                    this.callAnimationCallback())
                },
                startTap: function() {
                    if (!(this.disabled || !this.options.tapping))
                        if (this.tapping = !0,
                        this.setWrapperOffset(),
                        this.options.snap && this.options.steps) {
                            var t = (r.x - this.offset.wrapper[0]) / this.bounds.availWidth
                              , o = (r.y - this.offset.wrapper[1]) / this.bounds.availHeight;
                            this.setValue(this.getClosestStep(t), this.getClosestStep(o), !0)
                        } else
                            this.setTargetValueByOffset([r.x - this.offset.wrapper[0] - this.handle.offsetWidth / 2, r.y - this.offset.wrapper[1] - this.handle.offsetHeight / 2])
                },
                stopTap: function() {
                    this.disabled || !this.tapping || (this.tapping = !1,
                    this.setTargetValue(this.value.current))
                },
                startDrag: function() {
                    this.disabled || (this.dragging = !0,
                    this.setWrapperOffset(),
                    this.dragStartPosition = {
                        x: r.x,
                        y: r.y
                    },
                    this.offset.mouse = [r.x - y.get(this.handle)[0], r.y - y.get(this.handle)[1]],
                    this.wrapper.className.match(this.options.activeClass) || (this.wrapper.className += " " + this.options.activeClass),
                    this.callDragStartCallback())
                },
                stopDrag: function() {
                    if (!(this.disabled || !this.dragging)) {
                        this.dragging = !1;
                        var t = this.bounds.availWidth === 0 ? 0 : (r.x - this.dragStartPosition.x) / this.bounds.availWidth
                          , o = this.bounds.availHeight === 0 ? 0 : (r.y - this.dragStartPosition.y) / this.bounds.availHeight
                          , i = [t, o]
                          , n = this.groupClone(this.value.current);
                        if (this.options.slide) {
                            var _ = this.change;
                            n[0] += _[0] * 4,
                            n[1] += _[1] * 4
                        }
                        this.setTargetValue(n),
                        this.wrapper.className = this.wrapper.className.replace(" " + this.options.activeClass, ""),
                        this.callDragStopCallback(i)
                    }
                },
                callAnimationCallback: function() {
                    var t = this.value.current;
                    this.options.snap && this.options.steps > 1 && (t = this.getClosestSteps(t)),
                    this.groupCompare(t, this.value.prev) || (typeof this.options.animationCallback == "function" && this.options.animationCallback.call(this, t[0], t[1]),
                    this.groupCopy(this.value.prev, t))
                },
                callTargetCallback: function() {
                    typeof this.options.callback == "function" && this.options.callback.call(this, this.value.target[0], this.value.target[1])
                },
                callDragStartCallback: function() {
                    typeof this.options.dragStartCallback == "function" && this.options.dragStartCallback.call(this, this.value.target[0], this.value.target[1])
                },
                callDragStopCallback: function(t) {
                    typeof this.options.dragStopCallback == "function" && this.options.dragStopCallback.call(this, this.value.target[0], this.value.target[1], t)
                },
                animateWithRequestAnimationFrame: function(t) {
                    t ? (this.timeOffset = this.timeStamp ? t - this.timeStamp : 0,
                    this.timeStamp = t) : this.timeOffset = 25,
                    this.animate(),
                    this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame)
                },
                animate: function(t, o) {
                    if (!(t && !this.dragging)) {
                        if (this.dragging) {
                            var i = this.groupClone(this.value.target)
                              , n = [r.x - this.offset.wrapper[0] - this.offset.mouse[0], r.y - this.offset.wrapper[1] - this.offset.mouse[1]];
                            this.setTargetValueByOffset(n, this.options.loose),
                            this.change = [this.value.target[0] - i[0], this.value.target[1] - i[1]]
                        }
                        (this.dragging || o) && this.groupCopy(this.value.current, this.value.target),
                        (this.dragging || this.glide() || o) && (this.updateOffsetFromValue(),
                        this.callAnimationCallback())
                    }
                },
                glide: function() {
                    var t = [this.value.target[0] - this.value.current[0], this.value.target[1] - this.value.current[1]];
                    return !t[0] && !t[1] ? !1 : (Math.abs(t[0]) > this.valuePrecision[0] || Math.abs(t[1]) > this.valuePrecision[1] ? (this.value.current[0] += t[0] * Math.min(this.options.speed * this.timeOffset / 25, 1),
                    this.value.current[1] += t[1] * Math.min(this.options.speed * this.timeOffset / 25, 1)) : this.groupCopy(this.value.current, this.value.target),
                    !0)
                },
                updateOffsetFromValue: function() {
                    this.options.snap ? this.offset.current = this.getOffsetsByRatios(this.getClosestSteps(this.value.current)) : this.offset.current = this.getOffsetsByRatios(this.value.current),
                    this.groupCompare(this.offset.current, this.offset.prev) || (this.renderHandlePosition(),
                    this.groupCopy(this.offset.prev, this.offset.current))
                },
                renderHandlePosition: function() {
                    var t = "";
                    if (this.options.css3 && m.transform) {
                        this.options.horizontal && (t += "translateX(" + this.offset.current[0] + "px)"),
                        this.options.vertical && (t += " translateY(" + this.offset.current[1] + "px)"),
                        this.handle.style[m.transform] = t;
                        return
                    }
                    this.options.horizontal && (this.handle.style.left = this.offset.current[0] + "px"),
                    this.options.vertical && (this.handle.style.top = this.offset.current[1] + "px")
                },
                setTargetValue: function(t, o) {
                    var i = o ? this.getLooseValue(t) : this.getProperValue(t);
                    this.groupCopy(this.value.target, i),
                    this.offset.target = this.getOffsetsByRatios(i),
                    this.callTargetCallback()
                },
                setTargetValueByOffset: function(t, o) {
                    var i = this.getRatiosByOffsets(t)
                      , n = o ? this.getLooseValue(i) : this.getProperValue(i);
                    this.groupCopy(this.value.target, n),
                    this.offset.target = this.getOffsetsByRatios(n)
                },
                getLooseValue: function(t) {
                    var o = this.getProperValue(t);
                    return [o[0] + (t[0] - o[0]) / 4, o[1] + (t[1] - o[1]) / 4]
                },
                getProperValue: function(t) {
                    var o = this.groupClone(t);
                    return o[0] = Math.max(o[0], 0),
                    o[1] = Math.max(o[1], 0),
                    o[0] = Math.min(o[0], 1),
                    o[1] = Math.min(o[1], 1),
                    (!this.dragging && !this.tapping || this.options.snap) && this.options.steps > 1 && (o = this.getClosestSteps(o)),
                    o
                },
                getRatiosByOffsets: function(t) {
                    return [this.getRatioByOffset(t[0], this.bounds.availWidth, this.bounds.left), this.getRatioByOffset(t[1], this.bounds.availHeight, this.bounds.top)]
                },
                getRatioByOffset: function(t, o, i) {
                    return o ? (t - i) / o : 0
                },
                getOffsetsByRatios: function(t) {
                    return [this.getOffsetByRatio(t[0], this.bounds.availWidth, this.bounds.left), this.getOffsetByRatio(t[1], this.bounds.availHeight, this.bounds.top)]
                },
                getOffsetByRatio: function(t, o, i) {
                    return Math.round(t * o) + i
                },
                getStepNumber: function(t) {
                    return this.getClosestStep(t) * (this.options.steps - 1) + 1
                },
                getClosestSteps: function(t) {
                    return [this.getClosestStep(t[0]), this.getClosestStep(t[1])]
                },
                getClosestStep: function(t) {
                    for (var o = 0, i = 1, n = 0; n <= this.options.steps - 1; n++)
                        Math.abs(this.stepRatios[n] - t) < i && (i = Math.abs(this.stepRatios[n] - t),
                        o = n);
                    return this.stepRatios[o]
                },
                groupCompare: function(t, o) {
                    return t[0] == o[0] && t[1] == o[1]
                },
                groupCopy: function(t, o) {
                    t[0] = o[0],
                    t[1] = o[1]
                },
                groupClone: function(t) {
                    return [t[0], t[1]]
                },
                draggingOnDisabledAxis: function() {
                    return !this.options.horizontal && r.xDiff > r.yDiff || !this.options.vertical && r.yDiff > r.xDiff
                }
            };
            var c = function(t, o) {
                return function() {
                    return t.apply(o, arguments)
                }
            }
              , l = function(t, o, i) {
                t.addEventListener ? t.addEventListener(o, i, !1) : t.attachEvent && t.attachEvent("on" + o, i)
            }
              , d = function(t, o, i) {
                t.removeEventListener ? t.removeEventListener(o, i, !1) : t.detachEvent && t.detachEvent("on" + o, i)
            }
              , f = function(t) {
                t || (t = window.event),
                t.preventDefault && t.preventDefault(),
                t.returnValue = !1
            }
              , v = function(t) {
                t || (t = window.event),
                t.stopPropagation && t.stopPropagation(),
                t.cancelBubble = !0
            }
              , r = {
                x: 0,
                y: 0,
                xDiff: 0,
                yDiff: 0,
                refresh: function(t) {
                    t || (t = window.event),
                    t.type == "mousemove" ? this.set(t) : t.touches && this.set(t.touches[0])
                },
                set: function(t) {
                    var o = this.x
                      , i = this.y;
                    t.clientX || t.clientY ? (this.x = t.clientX,
                    this.y = t.clientY) : (t.pageX || t.pageY) && (this.x = t.pageX - document.body.scrollLeft - document.documentElement.scrollLeft,
                    this.y = t.pageY - document.body.scrollTop - document.documentElement.scrollTop),
                    this.xDiff = Math.abs(this.x - o),
                    this.yDiff = Math.abs(this.y - i)
                }
            }
              , y = {
                get: function(t) {
                    var o = {
                        left: 0,
                        top: 0
                    };
                    return t.getBoundingClientRect !== void 0 && (o = t.getBoundingClientRect()),
                    [o.left, o.top]
                }
            }
              , m = {
                transform: u("transform"),
                perspective: u("perspective"),
                backfaceVisibility: u("backfaceVisibility")
            };
            function u(t) {
                var o = "Webkit Moz ms O".split(" ")
                  , i = document.documentElement.style;
                if (i[t] !== void 0)
                    return t;
                t = t.charAt(0).toUpperCase() + t.substr(1);
                for (var n = 0; n < o.length; n++)
                    if (i[o[n] + t] !== void 0)
                        return o[n] + t
            }
            function a(t) {
                m.backfaceVisibility && m.perspective && (t.style[m.perspective] = "1000px",
                t.style[m.backfaceVisibility] = "hidden")
            }
            for (var A = ["webkit", "moz"], E = window.requestAnimationFrame, b = window.cancelAnimationFrame, h = 0; h < A.length && !E; ++h)
                E = window[A[h] + "RequestAnimationFrame"],
                b = window[A[h] + "CancelAnimationFrame"] || window[A[h] + "CancelRequestAnimationFrame"];
            return E || (E = function(t) {
                return setTimeout(t, 25)
            }
            ,
            b = clearTimeout),
            s
        })
    }(V),
    window.location.href.indexOf("pierrelouis") > -1 || window.location.href.indexOf("mynebula") !== -1) {
        if (window.location.pathname === "/") {
            var R = new V.exports.Dragdealer("drag-parent",{
                x: 0,
                y: 0,
                handleClass: "drag--handle",
                slide: "true",
                steps: 2,
                snap: !1,
                callback: function(e) {
                    e && (document.querySelector(".btn__popup--open").click(),
                    document.querySelector(".is--popup-sound").click())
                }
            });
            $(".device__c-round-btn.is--exit").on("click", function() {
                R.setValue(0)
            }),
            $(".popup__bg-exit").on("click", function() {
                R.setValue(0)
            });
            var F, I = function() {
                F = window.innerWidth || document.documentElement.clientWidth
            }, z = function() {
                F < 991 && R.setValue(0)
            };
            I(),
            z(),
            window.addEventListener("resize", function() {
                I(),
                z()
            }, !1)
        }
    } else
        document.querySelectorAll(".c-intro__device").forEach(e=>e.classList.remove("c-intro__device")),
        document.querySelectorAll(".c-intro__device").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".card__big-round-btn").forEach(e=>e.classList.remove("card__big-round-btn")),
        document.querySelectorAll(".card__big-round-btn").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".c-small-screws").forEach(e=>e.classList.remove("c-small-screws")),
        document.querySelectorAll(".c-small-screws").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".card").forEach(e=>e.classList.remove("card")),
        document.querySelectorAll(".card").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".card__open-door-trigger").forEach(e=>e.classList.remove("card__open-door-trigger")),
        document.querySelectorAll(".card__open-door-trigger").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".face__mouth").forEach(e=>e.classList.remove("face__mouth")),
        document.querySelectorAll(".face__mouth").forEach(e=>e.classList.add("blue-face")),
        document.querySelectorAll(".device__c-skill").forEach(e=>e.classList.remove("device__c-skill")),
        document.querySelectorAll(".device__c-skill").forEach(e=>e.classList.add("blue-div"));
    function N() {
        document.querySelector(".device-btn__attack-face").click()
    }
    let B = !1;
    function Y() {
        document.querySelector(".is--unlock-pressed").click(),
        B = !1
    }
    if (window.location.href.indexOf("pierrelouis") > -1 || window.location.href.indexOf("mynebula") !== -1) {
        if (window.location.pathname === "/") {
            var U = document.querySelector(".device-screen__face--move");
            window.PointerEvent ? U.addEventListener("pointerdown", N) : U.addEventListener("mousedown", N),
            $(".device__btn.is--slider-left").on("click", function() {
                $(".splide__arrow--prev").click()
            }),
            $(".device__btn.is--slider-right").on("click", function() {
                $(".splide__arrow--next").click()
            }),
            $(".is--intro").on("click", function() {
                $(".is--intro-open").click(),
                console.log("test")
            }),
            document.querySelector(".device__btn.drag--handle").addEventListener("pointerdown", function() {
                Y(),
                B = !0
            }),
            document.addEventListener("pointerup", function() {
                B && Y()
            })
        }
    } else
        document.querySelectorAll(".c-intro__device").forEach(e=>e.classList.remove("c-intro__device")),
        document.querySelectorAll(".c-intro__device").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".card__big-round-btn").forEach(e=>e.classList.remove("card__big-round-btn")),
        document.querySelectorAll(".card__big-round-btn").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".c-small-screws").forEach(e=>e.classList.remove("c-small-screws")),
        document.querySelectorAll(".c-small-screws").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".card").forEach(e=>e.classList.remove("card")),
        document.querySelectorAll(".card").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".card__open-door-trigger").forEach(e=>e.classList.remove("card__open-door-trigger")),
        document.querySelectorAll(".card__open-door-trigger").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".face__mouth").forEach(e=>e.classList.remove("face__mouth")),
        document.querySelectorAll(".face__mouth").forEach(e=>e.classList.add("blue-face")),
        document.querySelectorAll(".device__c-skill").forEach(e=>e.classList.remove("device__c-skill")),
        document.querySelectorAll(".device__c-skill").forEach(e=>e.classList.add("blue-div"));
    window.location.href.indexOf("pierrelouis") > -1 || window.location.href.indexOf("mynebula") !== -1 ? (document.querySelectorAll(".device__c-skill.is--01").forEach(e=>{
        e.addEventListener("click", function() {
            $(".device-toggl__dot.is--01.is--toggl-on")[0] ? (document.querySelectorAll(".device-toggl__dot.is--01").forEach(s=>s.classList.remove("is--toggl-on")),
            document.querySelectorAll(".device-screen__face.is--accessory.is--01").forEach(s=>s.classList.remove("is--show-accessory")),
            document.querySelectorAll(".screen__skill-bg.is--01").forEach(s=>s.classList.remove("is--skill-bg-active"))) : (document.querySelectorAll(".device-screen__face.is--accessory.is--01").forEach(s=>s.classList.add("is--show-accessory")),
            document.querySelectorAll(".device-screen__face.is--accessory.is--02").forEach(s=>s.classList.remove("is--show-accessory")),
            document.querySelectorAll(".device-screen__face.is--accessory.is--03").forEach(s=>s.classList.remove("is--show-accessory")),
            document.querySelectorAll(".device-toggl__dot.is--01").forEach(s=>s.classList.add("is--toggl-on")),
            document.querySelectorAll(".device-toggl__dot.is--02").forEach(s=>s.classList.remove("is--toggl-on")),
            document.querySelectorAll(".device-toggl__dot.is--03").forEach(s=>s.classList.remove("is--toggl-on")),
            document.querySelectorAll(".screen__skill-bg.is--01").forEach(s=>s.classList.add("is--skill-bg-active")),
            document.querySelectorAll(".screen__skill-bg.is--02").forEach(s=>s.classList.remove("is--skill-bg-active")),
            document.querySelectorAll(".screen__skill-bg.is--03").forEach(s=>s.classList.remove("is--skill-bg-active")))
        })
    }
    ),
    document.querySelectorAll(".device__c-skill.is--02").forEach(e=>{
        e.addEventListener("click", function() {
            $(".device-toggl__dot.is--02.is--toggl-on")[0] ? (document.querySelectorAll(".device-toggl__dot.is--02").forEach(s=>s.classList.remove("is--toggl-on")),
            document.querySelectorAll(".device-screen__face.is--accessory.is--02").forEach(s=>s.classList.remove("is--show-accessory")),
            document.querySelectorAll(".screen__skill-bg.is--02").forEach(s=>s.classList.remove("is--skill-bg-active"))) : (document.querySelectorAll(".device-screen__face.is--accessory.is--01").forEach(s=>s.classList.remove("is--show-accessory")),
            document.querySelectorAll(".device-screen__face.is--accessory.is--02").forEach(s=>s.classList.add("is--show-accessory")),
            document.querySelectorAll(".device-screen__face.is--accessory.is--03").forEach(s=>s.classList.remove("is--show-accessory")),
            document.querySelectorAll(".device-toggl__dot.is--01").forEach(s=>s.classList.remove("is--toggl-on")),
            document.querySelectorAll(".device-toggl__dot.is--02").forEach(s=>s.classList.add("is--toggl-on")),
            document.querySelectorAll(".device-toggl__dot.is--03").forEach(s=>s.classList.remove("is--toggl-on")),
            document.querySelectorAll(".screen__skill-bg.is--01").forEach(s=>s.classList.remove("is--skill-bg-active")),
            document.querySelectorAll(".screen__skill-bg.is--02").forEach(s=>s.classList.add("is--skill-bg-active")),
            document.querySelectorAll(".screen__skill-bg.is--03").forEach(s=>s.classList.remove("is--skill-bg-active")))
        })
    }
    ),
    document.querySelectorAll(".device__c-skill.is--03").forEach(e=>{
        e.addEventListener("click", function() {
            $(".device-toggl__dot.is--03.is--toggl-on")[0] ? (document.querySelectorAll(".device-toggl__dot.is--03").forEach(s=>s.classList.remove("is--toggl-on")),
            document.querySelectorAll(".device-screen__face.is--accessory.is--03").forEach(s=>s.classList.remove("is--show-accessory")),
            document.querySelectorAll(".screen__skill-bg.is--03").forEach(s=>s.classList.remove("is--skill-bg-active"))) : (document.querySelectorAll(".device-screen__face.is--accessory.is--01").forEach(s=>s.classList.remove("is--show-accessory")),
            document.querySelectorAll(".device-screen__face.is--accessory.is--02").forEach(s=>s.classList.remove("is--show-accessory")),
            document.querySelectorAll(".device-screen__face.is--accessory.is--03").forEach(s=>s.classList.add("is--show-accessory")),
            document.querySelectorAll(".device-toggl__dot.is--01").forEach(s=>s.classList.remove("is--toggl-on")),
            document.querySelectorAll(".device-toggl__dot.is--02").forEach(s=>s.classList.remove("is--toggl-on")),
            document.querySelectorAll(".device-toggl__dot.is--03").forEach(s=>s.classList.add("is--toggl-on")),
            document.querySelectorAll(".screen__skill-bg.is--01").forEach(s=>s.classList.remove("is--skill-bg-active")),
            document.querySelectorAll(".screen__skill-bg.is--02").forEach(s=>s.classList.remove("is--skill-bg-active")),
            document.querySelectorAll(".screen__skill-bg.is--03").forEach(s=>s.classList.add("is--skill-bg-active")))
        })
    }
    ),
    document.querySelectorAll(".card__big-round-btn.is--years").forEach(e=>{
        e.addEventListener("click", function() {
            this.x = ((this.x || 0) + 1) % 2,
            this.x ? (document.querySelectorAll(".device-screen__face.is--accessory.is--04").forEach(s=>s.classList.add("is--show-accessory")),
            document.querySelectorAll(".c-portfolio__year-text").forEach(s=>s.classList.add("text--white")),
            document.querySelectorAll(".screen__glass-broken-img").forEach(s=>s.classList.add("is--show-broken"))) : (document.querySelectorAll(".device-screen__face.is--accessory.is--04").forEach(s=>s.classList.remove("is--show-accessory")),
            document.querySelectorAll(".c-portfolio__year-text").forEach(s=>s.classList.remove("text--white")),
            document.querySelectorAll(".screen__glass-broken-img").forEach(s=>s.classList.remove("is--show-broken")))
        })
    }
    ),
    document.querySelectorAll(".device__round-btn.is--color-red").forEach(e=>{
        e.addEventListener("click", function() {
            document.querySelectorAll(".screen__color-wave.is--red").forEach(s=>s.classList.add("is--show-wave")),
            document.querySelectorAll(".screen__color-wave.is--blue").forEach(s=>s.classList.remove("is--show-wave")),
            document.querySelectorAll(".screen__color-wave.is--grey").forEach(s=>s.classList.remove("is--show-wave")),
            document.querySelectorAll(".screen__color-wave.is--yellow").forEach(s=>s.classList.remove("is--show-wave"))
        })
    }
    ),
    document.querySelectorAll(".device__round-btn.is--yellow").forEach(e=>{
        e.addEventListener("click", function() {
            document.querySelectorAll(".screen__color-wave.is--yellow").forEach(s=>s.classList.add("is--show-wave")),
            document.querySelectorAll(".screen__color-wave.is--red").forEach(s=>s.classList.remove("is--show-wave")),
            document.querySelectorAll(".screen__color-wave.is--purple").forEach(s=>s.classList.remove("is--show-wave")),
            document.querySelectorAll(".screen__color-wave.is--grey").forEach(s=>s.classList.remove("is--show-wave"))
        })
    }
    ),
    document.querySelectorAll(".device__round-btn.is--purple").forEach(e=>{
        e.addEventListener("click", function() {
            document.querySelectorAll(".screen__color-wave.is--purple").forEach(s=>s.classList.add("is--show-wave")),
            document.querySelectorAll(".screen__color-wave.is--red").forEach(s=>s.classList.remove("is--show-wave")),
            document.querySelectorAll(".screen__color-wave.is--yellow").forEach(s=>s.classList.remove("is--show-wave")),
            document.querySelectorAll(".screen__color-wave.is--grey").forEach(s=>s.classList.remove("is--show-wave"))
        })
    }
    ),
    document.querySelectorAll(".device__round-btn.is--grey").forEach(e=>{
        e.addEventListener("click", function() {
            document.querySelectorAll(".screen__color-wave.is--grey").forEach(s=>s.classList.add("is--show-wave")),
            document.querySelectorAll(".screen__color-wave.is--red").forEach(s=>s.classList.remove("is--show-wave")),
            document.querySelectorAll(".screen__color-wave.is--yellow").forEach(s=>s.classList.remove("is--show-wave")),
            document.querySelectorAll(".screen__color-wave.is--purple").forEach(s=>s.classList.remove("is--show-wave"))
        })
    }
    ),
    document.querySelectorAll(".section").forEach(e=>[...e.parentElement.children].filter(s=>s === e).forEach(s=>s.classList.add("is--disable-scroll"))),
    document.querySelectorAll(".card__big-round-btn.is--on").forEach(e=>{
        e.addEventListener("click", function() {
            document.querySelectorAll(".section").forEach(s=>s.classList.remove("is--disable-scroll")),
            document.querySelectorAll(".screen__grain").forEach(s=>s.classList.add("is--animated-grain")),
            document.querySelectorAll(".screen__grain.is--intro").forEach(s=>s.classList.remove("is--animated-grain"))
        })
    }
    )) : (document.querySelectorAll(".c-intro__device").forEach(e=>e.classList.remove("c-intro__device")),
    document.querySelectorAll(".c-intro__device").forEach(e=>e.classList.add("blue-div")),
    document.querySelectorAll(".card__big-round-btn").forEach(e=>e.classList.remove("card__big-round-btn")),
    document.querySelectorAll(".card__big-round-btn").forEach(e=>e.classList.add("blue-div")),
    document.querySelectorAll(".c-small-screws").forEach(e=>e.classList.remove("c-small-screws")),
    document.querySelectorAll(".c-small-screws").forEach(e=>e.classList.add("blue-div")),
    document.querySelectorAll(".card").forEach(e=>e.classList.remove("card")),
    document.querySelectorAll(".card").forEach(e=>e.classList.add("blue-div")),
    document.querySelectorAll(".card__open-door-trigger").forEach(e=>e.classList.remove("card__open-door-trigger")),
    document.querySelectorAll(".card__open-door-trigger").forEach(e=>e.classList.add("blue-div")),
    document.querySelectorAll(".face__mouth").forEach(e=>e.classList.remove("face__mouth")),
    document.querySelectorAll(".face__mouth").forEach(e=>e.classList.add("blue-face")),
    document.querySelectorAll(".device__c-skill").forEach(e=>e.classList.remove("device__c-skill")),
    document.querySelectorAll(".device__c-skill").forEach(e=>e.classList.add("blue-div")));
    function W() {
        document.querySelector(".is--easter-show").click()
    }
    if (window.location.href.indexOf("pierrelouis") > -1 || window.location.href.indexOf("mynebula") !== -1) {
        if (window.location.pathname === "/") {
            var ee = document.querySelector(".screw.is--easter.is--01")
              , te = document.querySelector(".screw.is--easter.is--02")
              , se = document.querySelector(".screw.is--easter.is--03")
              , oe = document.querySelector(".screw.is--easter.is--04")
              , q = 0;
            ee.onclick = function() {
                q += 1,
                q == 4 && W()
            }
            ,
            te.onclick = function() {
                q += 1,
                q == 4 && W()
            }
            ,
            se.onclick = function() {
                q += 1,
                q == 4 && W()
            }
            ,
            oe.onclick = function() {
                q += 1,
                q == 4 && W()
            }
            ;
            var X, j = function() {
                X = window.innerWidth || document.documentElement.clientWidth
            }, G = function() {
                X < 991 && (q = 0)
            };
            j(),
            G(),
            window.addEventListener("resize", function() {
                j(),
                G()
            }, !1)
        }
    } else
        document.querySelectorAll(".c-intro__device").forEach(e=>e.classList.remove("c-intro__device")),
        document.querySelectorAll(".c-intro__device").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".card__big-round-btn").forEach(e=>e.classList.remove("card__big-round-btn")),
        document.querySelectorAll(".card__big-round-btn").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".c-small-screws").forEach(e=>e.classList.remove("c-small-screws")),
        document.querySelectorAll(".c-small-screws").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".card").forEach(e=>e.classList.remove("card")),
        document.querySelectorAll(".card").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".card__open-door-trigger").forEach(e=>e.classList.remove("card__open-door-trigger")),
        document.querySelectorAll(".card__open-door-trigger").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".face__mouth").forEach(e=>e.classList.remove("face__mouth")),
        document.querySelectorAll(".face__mouth").forEach(e=>e.classList.add("blue-face")),
        document.querySelectorAll(".device__c-skill").forEach(e=>e.classList.remove("device__c-skill")),
        document.querySelectorAll(".device__c-skill").forEach(e=>e.classList.add("blue-div"));
    if (window.location.href.indexOf("pierrelouis") > -1 || window.location.href.indexOf("mynebula") !== -1) {
        if (window.location.pathname !== "/") {
            let t = function() {
                m = "Idle",
                u = 0,
                a = 0,
                b = !1,
                h = clearInterval(h),
                O(0),
                k(0, 0)
            }
              , o = function(g) {
                if (console.log("mouseStart"),
                K(!0),
                b || (h = clearInterval(h)),
                m === "On")
                    return !1;
                A = u,
                E = p(g),
                m = "On"
            }
              , i = function(g) {
                if (m !== "On")
                    return !1;
                const w = u
                  , H = p(g);
                u = A + (H - E);
                const ie = Math.min(5, Math.max(-5, u + 360 - (w + 360)));
                b || (a = Math.min(100, Math.max(0, a + ie * .2))),
                a >= 100 && !b ? (b = !0,
                P()) : (k(u, a),
                O(a))
            }
              , n = function() {
                m === "On" && _(),
                m = "Idle",
                K(!1)
            }
              , _ = function() {
                !b && !h && (h = setInterval(function() {
                    a -= .2,
                    a < 0 && (a = 0,
                    h = clearInterval(h)),
                    a !== 0 && (u -= 1),
                    k(u, a),
                    O(a)
                }, 16))
            }
              , P = function() {
                l.click(),
                h = clearInterval(h)
            }
              , p = function(g) {
                let w = parseInt(S(y).left + y.clientWidth / 2)
                  , H = parseInt(S(y).top + y.clientHeight / 2);
                return Math.atan2(g.y - H, g.x - w) * 180 / Math.PI
            }
              , S = function(g) {
                const w = g.getBoundingClientRect();
                return {
                    left: w.left,
                    top: w.top
                }
            }
              , k = function(g, w) {
                e.style.setProperty("--loaderWheelAngle", `${g}deg`),
                s.style.setProperty("--loaderWheelAngle", `${-g}deg`),
                d.style.setProperty("--loaderWheelAngle", `${g}deg`),
                e.style.setProperty("--loaderBarWidth", `${w}%`),
                f.style.setProperty("--loaderBarWidth", `${w}%`),
                v.style.setProperty("--loaderBarWidth", `${-w}%`),
                r.style.setProperty("--textOpacity", `${100 - w}%`),
                r.style.setProperty("--textScale", `${(100 - w) / 100}`)
            }
              , O = function(g) {
                c.textContent = parseInt(Math.ceil(g))
            }
              , K = function(g) {
                g ? e.classList.add("unselectable") : e.classList.remove("unselectable")
            };
            const e = document.querySelector("body")
              , s = document.querySelector(".is--crank-handle")
              , c = document.querySelector(".screen__percentage-text")
              , l = document.querySelector(".is--404-completed")
              , d = document.querySelector(".is--wheel")
              , f = document.querySelector(".c-error-img.is--left")
              , v = document.querySelector(".c-error-img.is--right")
              , r = document.querySelector(".crank-screen__c-text")
              , y = document.querySelector(".is--crank-container");
            c.textContent = 0,
            document.querySelector(".is--crank-img").setAttribute("draggable", !1),
            document.querySelector(".is--crank-handle").setAttribute("draggable", !1),
            window.PointerEvent ? (s.addEventListener("pointerdown", o),
            e.addEventListener("pointermove", i),
            e.addEventListener("pointerup", n)) : (s.addEventListener("mousedown", o),
            e.addEventListener("mousemove", i),
            e.addEventListener("mouseup", n)),
            document.querySelector(".device__btn.is--off").addEventListener("click", t);
            let m, u, a, A, E, b, h;
            t()
        }
    } else
        document.querySelectorAll(".c-intro__device").forEach(e=>e.classList.remove("c-intro__device")),
        document.querySelectorAll(".c-intro__device").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".card__big-round-btn").forEach(e=>e.classList.remove("card__big-round-btn")),
        document.querySelectorAll(".card__big-round-btn").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".c-small-screws").forEach(e=>e.classList.remove("c-small-screws")),
        document.querySelectorAll(".c-small-screws").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".card").forEach(e=>e.classList.remove("card")),
        document.querySelectorAll(".card").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".card__open-door-trigger").forEach(e=>e.classList.remove("card__open-door-trigger")),
        document.querySelectorAll(".card__open-door-trigger").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".face__mouth").forEach(e=>e.classList.remove("face__mouth")),
        document.querySelectorAll(".face__mouth").forEach(e=>e.classList.add("blue-face")),
        document.querySelectorAll(".device__c-skill").forEach(e=>e.classList.remove("device__c-skill")),
        document.querySelectorAll(".device__c-skill").forEach(e=>e.classList.add("blue-div"));
    if (window.location.href.indexOf("pierrelouis") > -1 || window.location.href.indexOf("mynebula") !== -1) {
        if (window.location.pathname === "/") {
            let A = function() {
                f = "Idle",
                v = 0,
                r = 0,
                u = !1,
                a = clearInterval(a),
                _(0, 0)
            }
              , E = function(p) {
                if (P(!0),
                u || (a = clearInterval(a)),
                f === "On")
                    return !1;
                y = v,
                m = i(p),
                f = "On"
            }
              , b = function(p) {
                if (f !== "On")
                    return !1;
                const S = v
                  , k = i(p);
                v = y + (k - m);
                const O = Math.min(5, Math.max(-5, v + 360 - (S + 360)));
                u || (r = Math.min(100, Math.max(0, r + O * .04))),
                r >= 100 && !u ? (u = !0,
                o()) : _(v, r)
            }
              , h = function() {
                f === "On" && t(),
                f = "Idle",
                P(!1)
            }
              , t = function() {
                !u && !a && (a = setInterval(function() {
                    r -= .2,
                    r < 0 && (r = 0,
                    a = clearInterval(a)),
                    r !== 0 && (v -= 1),
                    _(v, r)
                }, 16))
            }
              , o = function() {
                c.click(),
                a = clearInterval(a)
            }
              , i = function(p) {
                let S = n(d).left + d.clientWidth / 2
                  , k = n(d).top + d.clientHeight / 2;
                return Math.atan2(p.y - k, p.x - S) * 180 / Math.PI
            }
              , n = function(p) {
                const S = p.getBoundingClientRect();
                return {
                    left: S.left,
                    top: S.top
                }
            }
              , _ = function(p, S) {
                e.style.setProperty("--loaderWheelAngle", `${p}deg`),
                s.style.setProperty("--loaderWheelAngle", `${-p}deg`),
                e.style.setProperty("--loaderBarWidth", `${S}%`),
                l.style.setProperty("--loaderBarWidth", `${-S * 18}%`)
            }
              , P = function(p) {
                p ? e.classList.add("unselectable") : e.classList.remove("unselectable")
            };
            const e = document.querySelector("body")
              , s = document.querySelector(".is--crank-handle")
              , c = document.querySelector(".is--404-completed")
              , l = document.querySelector(".easter-screen__text-container")
              , d = document.querySelector(".is--crank-container");
            document.querySelector(".is--crank-img").setAttribute("draggable", !1),
            document.querySelector(".is--crank-handle").setAttribute("draggable", !1),
            window.PointerEvent ? (s.addEventListener("pointerdown", E),
            e.addEventListener("pointermove", b),
            e.addEventListener("pointerup", h)) : (s.addEventListener("mousedown", E),
            e.addEventListener("mousemove", b),
            e.addEventListener("mouseup", h)),
            document.querySelector(".easter__crank-reset-btn").addEventListener("click", A);
            let f, v, r, y, m, u, a;
            A()
        }
    } else
        document.querySelectorAll(".c-intro__device").forEach(e=>e.classList.remove("c-intro__device")),
        document.querySelectorAll(".c-intro__device").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".card__big-round-btn").forEach(e=>e.classList.remove("card__big-round-btn")),
        document.querySelectorAll(".card__big-round-btn").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".c-small-screws").forEach(e=>e.classList.remove("c-small-screws")),
        document.querySelectorAll(".c-small-screws").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".card").forEach(e=>e.classList.remove("card")),
        document.querySelectorAll(".card").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".card__open-door-trigger").forEach(e=>e.classList.remove("card__open-door-trigger")),
        document.querySelectorAll(".card__open-door-trigger").forEach(e=>e.classList.add("blue-div")),
        document.querySelectorAll(".face__mouth").forEach(e=>e.classList.remove("face__mouth")),
        document.querySelectorAll(".face__mouth").forEach(e=>e.classList.add("blue-face")),
        document.querySelectorAll(".device__c-skill").forEach(e=>e.classList.remove("device__c-skill")),
        document.querySelectorAll(".device__c-skill").forEach(e=>e.classList.add("blue-div"));
    if (window.location.pathname === "/") {
        const e = document.querySelector("#wf-form-email-form")
          , s = document.querySelector("#wf-form-email-form .device-btn__up")
          , c = document.querySelector(".popup-form__c-success")
          , l = document.querySelector(".popup-form__c-error");
        s.addEventListener("click", d),
        e.addEventListener("submit", d);
        async function d(f) {
            f.preventDefault(),
            f.stopPropagation();
            const v = new FormData(e)
              , r = Object.fromEntries(v)
              , y = "keyj5OxIVxhLaiY4Z"
              , m = {
                records: [{
                    fields: {
                        ...r,
                        from: window.location.href
                    }
                }]
            };
            (await fetch("https://api.airtable.com/v0/appK50ZbfGgabGc60/Leads", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + y,
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(m)
            })).status === 200 ? (c.classList.add("is--show-success"),
            l.classList.remove("is--show-success"),
            e.reset()) : (c.classList.remove("is--show-success"),
            l.classList.add("is--show-success"))
        }
    }
});
