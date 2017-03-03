'use strict';
if ("undefined" == typeof jQuery) throw new Error("Need jQuery");
! function(i) {
    var n = {
        version: "2"
    };
    n.media = {
        s_breakpoint: 640,
        m_breakpoint: 1024,
        l_breakpoint: 1440,
        xl_breakpoint: 1920,
        isS: function() {
            return window.innerWidth < this.s_breakpoint ? !0 : !1
        },
        isM: function() {
            return window.innerWidth >= this.s_breakpoint && window.innerWidth < this.m_breakpoint ? !0 : !1
        },
        isMdown: function() {
            return window.innerWidth < this.m_breakpoint ? !0 : !1
        },
        isMup: function() {
            return window.innerWidth >= this.s_breakpoint ? !0 : !1
        },
        isL: function() {
            return window.innerWidth >= this.m_breakpoint && window.innerWidth < this.l_breakpoint ? !0 : !1
        },
        isLdown: function() {
            return window.innerWidth < this.l_breakpoint ? !0 : !1
        },
        isLup: function() {
            return window.innerWidth >= this.m_breakpoint ? !0 : !1
        },
        isXL: function() {
            return window.innerWidth >= this.l_breakpoint && window.innerWidth < this.xl_breakpoint ? !0 : !1
        },
        isXLdown: function() {
            return window.innerWidth < this.xl_breakpoint ? !0 : !1
        },
        isXLup: function() {
            return window.innerWidth >= this.l_breakpoint ? !0 : !1
        },
        isXXL: function() {
            return window.innerWidth >= this.xl_breakpoint ? !0 : !1
        }
    }, n.getMedia = function() {
        return n.media.isS() ? "s" : n.media.isM() ? "m" : n.media.isL() ? "l" : n.media.isXL() ? "xl" : n.media.isXXL() ? "xxl" : void 0
    }, n.mediaQuery = function(t, e) {
        return "string" != typeof t ? !1 : (t === n.getMedia() && i.isFunction(e) && e(), void i(window).on("resize", function() {
            t === n.getMedia() && i.isFunction(e) && e()
        }))
    }, n.isUndefined = function(n, t) {
        return "undefined" == typeof n ? (i.isFunction(t) && t(n), !0) : !1
    }, n.isDefined = function(n, t) {
        return "undefined" == typeof n ? !1 : (i.isFunction(t) && t(n), !0)
    }, n.isExist = function(n, t) {
        if (i.isArray(n)) {
            for (var e = n.length, a = 0, o = 0; o < n.length; o++) i(n[o]).length > 0 && a++;
            return a === e ? (i.isFunction(t) && t(n), !0) : !1
        }
        return i(n).length > 0 ? (i.isFunction(t) && t(i(n)), !0) : !1
    }, n.isAnimate = function(n) {
        return i(n).is(":animated") ? !0 : !1
    }, n.isTrue = function(n, t) {
        i.isFunction(n) && n() && i.isFunction(t) && t()
    }, n.isFalse = function(n, t) {
        i.isFunction(n) && (n() || i.isFunction(t) && t())
    }, n.randomize = function(n) {
        return i.isArray(n) ? n[Math.floor(Math.random() * n.length + 0)] : n
    }, n.timer = function(n) {
        var t = {};
        return t.step = i.isFunction(n) ? n : function() {
            t.stop
        }, t.timer = null, t.stop = function() {
            return null == t.timer ? !1 : (window.clearInterval(t.timer), void(t.timer = null))
        }, t.play = function(i) {
            i = i || 10, t.timer = window.setInterval(t.step, i)
        }, t
    }, n.reloadPage = function() {
        var i = location.href;
        i.indexOf("#") >= 0 && (i = i.substr(0, i.indexOf("#")), console.log(i)), location.replace(i)
    }, n.getClassValue = function(t, e) {
        var a;
        if (n.isUndefined(e)) return a;
        if (!n.isUndefined(i(t).attr("class"))) {
            var o = i(t).attr("class").split(" ");
            i.each(o, function(i, n) {
                return 0 == n.indexOf(e) ? (a = n.substr(e.length + 1, n.length - 1), !1) : void 0
            })
        }
        return a
    }, n.parseJSON = function(i) {
        try {
            i = JSON.parse(i)
        } catch (n) {
            return {}
        }
        return i
    };
    var t = {};
    t.alreadyInitiate = function(n, t) {
        return "true" === i(n).data("respon-" + t) ? !0 : (i(n).data("respon-" + t, "true"), !1)
    };
    var e = function() {
        if (!n.isExist(i(this))) return !1;
        var e = {};
        return e.o = i(this), e.scrollTo = function(t, a) {
            return n.isExist(t) ? (a = a || "normal", void("none" == a ? e.o.scrollTop(i(t).position().top) : e.o.animate({
                scrollTop: i(t).position().top
            }, a))) : !1
        }, e.onWheelY = function(n, t) {
            i.isFunction(n) || (n = function() {}), i.isFunction(t) || (t = function() {}), e.o.on(" wheel", function(i) {
                i.originalEvent.deltaY > 0 ? n(i.originalEvent.deltaY) : t(i.originalEvent.deltaY)
            })
        }, e.onSlideY = function(n, t) {
            i.isFunction(n) || (n = function() {}), i.isFunction(t) || (t = function() {});
            var a = 0;
            e.o.on("mousedown touchstart", function(i) {
                a = i.originalEvent.touches && i.originalEvent.touches.length ? i.originalEvent.touches[0].pageY : i.originalEvent.changedTouches && i.originalEvent.changedTouches.length ? i.originalEvent.changedTouches[0].pageY : i.clientY
            }), e.o.on("mouseup touchend", function(i) {
                var e = 0,
                    o = 100;
                e = i.originalEvent.touches && i.originalEvent.touches.length ? i.originalEvent.touches[0].pageY : i.originalEvent.changedTouches && i.originalEvent.changedTouches.length ? i.originalEvent.changedTouches[0].pageY : i.clientY, Math.abs(a - e) > o && e > 0 && (a > e ? n() : t())
            })
        }, e.openPage = function(t) {
            return e.o.hasClass("pages-container") && n.isExist(t) && n.isExist(e.o.children(t)) ? i(t).hasClass("page-active") ? !1 : (e.o.children(".page-active").removeClass("page-active"), void i(t).addClass("page-active")) : !1
        }, e.openNextPage = function(i) {
            if (!e.o.hasClass("pages-container")) return !1;
            if (e.o.children().length <= 1) return !1;
            var t = e.o.children(".page-active"),
                a = t.next(),
                i = i;
            return i && a.length <= 0 && (a = e.o.children().first()), n.isExist(a) ? (e.o.children(".page-active").removeClass("page-active"), void a.addClass("page-active")) : !1
        }, e.openPrevPage = function(i) {
            if (!e.o.hasClass("pages-container")) return !1;
            if (e.o.children().length <= 1) return !1;
            var t = e.o.children(".page-active"),
                a = t.prev(),
                i = i;
            return i && a.length <= 0 && (a = e.o.children().last()), n.isExist(a) ? (e.o.children(".page-active").removeClass("page-active"), void a.addClass("page-active")) : !1
        }, e.categorizing = function(t, a) {
            return n.isExist(t) && i.isFunction(a) ? void e.o.children().each(function() {
                if (i(this).hasClass("category-all")) o = i(t).children(), i(this).on("click", function() {
                    a(o)
                });
                else {
                    var e = n.getClassValue(i(this), "category"),
                        o = i(t).children(".category-" + e),
                        r = i(t).children().not(".category-" + e);
                    i(this).on("click", function() {
                        a(o, r)
                    })
                }
            }) : !1
        }, e.imagesLoaded = function(t, a) {
            var o = e.o.find("img");
            if (!n.isExist(o)) return i.isFunction(t) && t(o), !1;
            n.isDefined(a) && (o = e.o.find("img" + a));
            var r = o.length,
                s = 0;
            o.each(function() {
                if (i(this)[0].complete) s++, s == r && i.isFunction(t) && t(o);
                else {
                    var n = i(this);
                    i(this).on("load", function() {
                        s++, s == r && i.isFunction(t) && t(o)
                    }).on("error", function() {
                        n.attr("src", "static/img/placeholder.svg")
                    })
                }
            })
        }, e.initiateGrid = function(t) {
            if (n.isUndefined(t)) return !1;
            if (n.isExist(e.o.children()) || (t = parseInt(t)), isNaN(t)) return !1;
            var a = e.o.width() / t,
                o = [],
                r = 0;
            e.o.addClass("grid-container"), e.imagesLoaded(function() {
                for (var n = 0; t > n; n++) o[n] = 0;
                e.o.children().css("width", a + "px"), e.o.children().each(function() {
                    for (var n = 0, e = 0; t > e; e++) o[e] < o[n] && (n = e);
                    i(this).css({
                        top: o[n] + "px",
                        left: a * n + "px"
                    }), o[n] = o[n] + i(this).outerHeight()
                });
                for (var s = 0; t > s; s++) o[s] > o[r] && (r = s);
                e.o.css("height", o[r] + "px")
            })
        }, e.init = function() {
            e.o.find("[data-gal]").each(function() {
                var e = i(this),
                    a = n.parseJSON(e.attr("data-gal"));
                n.isDefined(a.pages_container, function(a) {
                    if (t.alreadyInitiate(e, "pagescontainer")) return !1;
                    e.addClass("pages-container"), n.isExist(e.children(".page-active")) || e.children().eq(0).addClass("page-active"), e.children().not(".page-active").addClass("page-deactive");
                    var o = a.speed,
                        r = a.animation || "fade",
                        s = a.next_control || "",
                        c = a.prev_control || "",
                        u = a.continuous || !1;
                    isNaN(o) && (o = 500), o = o / 1e3 + "s", e.children().each(function() {
                        i(this).css({
                            "-o-transition": "opacity " + o + ", -o-transform " + o,
                            "-moz-transition": "opacity " + o + ", -moz-transform " + o,
                            "-ms-transition": "opacity " + o + ", -transform " + o,
                            "-webkit-transition": "opacity " + o + ", -webkit-transform " + o,
                            transition: "opacity " + o + ",transform " + o
                        })
                    }), e.addClass("animation-" + r), n.isExist(s, function(n) {
                        n.each(function() {
                            i(this).on("click", function() {
                                e.respon().openNextPage(u)
                            })
                        })
                    }), n.isExist(c, function(n) {
                        n.each(function() {
                            i(this).on("click", function() {
                                e.respon().openPrevPage(u)
                            })
                        })
                    }), e.children("[data-gal]").each(function() {
                        var t = i(this),
                            a = n.parseJSON(t.attr("data-gal"));
                        n.isExist(a.page_control, function(n) {
                            n.each(function() {
                                i(this).on("click", function() {
                                    e.respon().openPage(t)
                                })
                            })
                        })
                    })
                }), n.isDefined(a.text_animation_container, function(i) {
                    if (t.alreadyInitiate(e, "textanimationcontainer")) return !1;
                    var n = i.delay;
                    isNaN(n) && (n = 50);
                    for (var a = e.text(), o = a.replace(/\r?\n|\r/g, ""), r = o.split(" "), s = "", c = n / 1e3, u = n / 1e3, d = 0; d < r.length; d++) {
                        for (var l = r[d].replace(/\s+/g, ""), h = l.split(""), f = "", g = 0; g < h.length; g++) f += '<span style="display:inline-block; -moz-transition-delay:' + c + "s; -o-transition-delay:" + c + "s; -ms-transition-delay:" + c + "s; -webkit-transition-delay:" + c + "s; transition-delay:" + c + 's;">' + h[g] + "</span>", c += u;
                        s += " " + f
                    }
                    e.json(s)
                }), n.isDefined(a.grid_container, function(i) {
                    if (t.alreadyInitiate(e, "gridcontainer")) return !1;
                    e.addClass("grid-container");
                    var a = i.s || 1,
                        o = i.m || 1,
                        r = i.l || 1,
                        s = i.xl || 1,
                        c = i.xxl || 1,
                        u = function(i, t) {
                            n.mediaQuery(t, function() {
                                e.respon().initiateGrid(i)
                            })
                        };
                    n.isDefined(a) && u(a, "s"), n.isDefined(o) && u(o, "m"), n.isDefined(r) && u(r, "l"), n.isDefined(s) && u(s, "xl"), n.isDefined(c) && u(c, "xxl")
                })
            }), e.o.find(".button, button").each(function() {
                if (t.alreadyInitiate(i(this), "button")) return !1;
                var n = i(this);
                i(this).on("mousedown touchstart", function() {
                    n.addClass("clicked")
                }).on("mouseup touchend", function() {
                    n.removeClass("clicked")
                })
            }), e.o.find(".toggle-active-container").each(function() {
                if (t.alreadyInitiate(i(this), "toggleactivecontainer")) return !1;
                var n = i(this);
                i(this).find(".toggle-active-button").each(function() {
                    i(this).on("click", function() {
                        n.toggleClass("active")
                    })
                })
            }), e.o.find(".toggle-active-group").each(function() {
                if (t.alreadyInitiate(i(this), "toggleactivegroup")) return !1;
                var n = i(this);
                i(this).children().each(function() {
                    i(this).on("click", function() {
                        n.children().removeClass("active"), i(this).addClass("active")
                    })
                })
            }), e.o.find(".toggle-active").each(function() {
                if (t.alreadyInitiate(i(this), "toggleactive")) return !1;
                var n = i(this);
                i(this).on("click", function() {
                    n.toggleClass("active")
                })
            })
        }, e
    };
    jQuery.respon = jQuery.ak = n, jQuery.fn.respon = jQuery.fn.ak = e
}(jQuery), jQuery(document).ready(function() {
    jQuery("body").respon().init()
});

$(document)['ready'](function() {
    if (!$['respon']['isExist'](['#gal-canvas', '#gal-ajax-thumbnails', '#gal-panel-preview', 'img#gal-preview-image', '#gal-panel-content', '#gal-panel-detail', '#gal-panel-detail-content', '#gal-panel-left', '#gal-panel-loading'])) {
        throw new Error('Core element not found !!!')
    };
    window['gal'] = {};
    var init = {
            the_canvas: $('#gal-canvas'),
            ajax_thumbnails: $('#gal-ajax-thumbnails'),
            panel_preview: $('#gal-panel-preview'),
            preview_image: $('#gal-preview-image'),
            panel_content: $('#gal-panel-content'),
            panel_detail: $('#gal-panel-detail'),
            panel_detail_content: $('#gal-panel-detail-content'),
            panel_left: $('#gal-panel-left'),
            panel_loading: $('#gal-panel-loading')
        },
        port = !1,
        g_can = init['the_canvas']['data']('gal-init'),
        g_lod = function(port, g_can, g_lod, g_aja) {
            init['panel_loading']['addClass']('gal-loading'), $['ajax']({
                url: port,
                dataType: 'json'
            })['done'](function(init) {
                $['isFunction'](g_can) && g_can(init)
            })['fail'](function() {
                init['panel_loading']['removeClass']('gal-loading'), $['isFunction'](g_lod) && g_lod(), alert('Something went wrong, cannot gather data!')
            })['always'](function() {
                $['isFunction'](g_aja) && g_aja()
            })
        },
        g_aja = [],
        g_gal = 0,
        _0x996ex9 = function(init) {
            if ($['respon']['isUndefined'](init) || !$['isArray'](init)) {
                return !1
            };
            var port = '';
            return $['each'](init, function() {
                var $ = this,
                    init = $['thumbnail_url'] || 'static/img/placeholder.svg',
                    g_can = $['preview_url'] || 'static/img/placeholder.svg',
                    g_lod = $['detail'] || 'Empty';
                port += '<div onclick="gal.setActiveImage( this );" data-gal-key="' + g_gal + '" class="gal-new gal-trigger-oplLeft"><img alt="thumbnail" src="' + init + '"  /></div>', g_aja[g_gal] = {
                    thumbnail_url: init,
                    preview_url: g_can,
                    detail: g_lod
                }, g_gal++
            }), port
        },
        _0x996exa = 'null',

        _0x996exc = function(port) {
            return $['respon']['isUndefined'](port) ? !1 : (init['panel_detail_content']['html'](port), init['panel_detail_content']['scrollTop'](0), void(gal)['initiate'](init['panel_detail_content']))
        },
        _0x996exd = function(port) {
            $['respon']['isUndefined'](port) && (port = 'static/img/placeholder.svg'), init['panel_preview']['removeClass']('gal-loaded'), init['preview_image']['attr']('src', port)
        },
        _0x996exe = function(port) {
            init['ajax_thumbnails']['children']('.gal-new')['respon']()['imagesLoaded'](function(g_can) {
                init['panel_loading']['removeClass']('gal-loading'), window['setTimeout'](function() {
                    return $['respon']['isExist'](g_can) ? (g_can['parent']()['addClass']('gal-loaded')['removeClass']('gal-new'), void(($['isFunction'](port) && port()))) : !1
                }, 100), $['respon']['media']['isS']() ? init['ajax_thumbnails']['respon']()['initiateGrid'](2) : $['respon']['media']['isM']() ? init['ajax_thumbnails']['respon']()['initiateGrid'](4) : $['respon']['media']['isL']() ? init['ajax_thumbnails']['respon']()['initiateGrid'](3) : $['respon']['media']['isXL']() ? init['ajax_thumbnails']['respon']()['initiateGrid'](4) : $['respon']['media']['isXXL']() && init['ajax_thumbnails']['respon']()['initiateGrid'](6)
            })
        },
        _0x996exf = function() {
            var port = init['ajax_thumbnails']['children']('.gal-active')['next']();
            $['respon']['isExist'](port) && gal['setActiveImage'](port)
        },
        _0x996ex10 = function() {
            var port = init['ajax_thumbnails']['children']('.gal-active')['prev']();
            $['respon']['isExist'](port) && gal['setActiveImage'](port)
        };
    gal['setActiveImage'] = function(port) {
        if (port = $(port), port['hasClass']('gal-active')) {
            return !1
        };
        var g_can = g_aja[port['data']('gal-key')],
            g_lod = g_can['preview_url'] || 'static/img/placeholder.svg',
            g_gal = g_can['detail'];
        init['ajax_thumbnails']['children']('.gal-active')['removeClass']('gal-active'), port['addClass']('gal-active'), $('body')['find']('.gal-trigger-nextActiveImage')['each'](port['is'](':last-child') ? function() {
            $(this)['attr']('disabled', 'disabled')
        } : function() {
            $(this)['removeAttr']('disabled')
        }), $('body')['find']('.gal-trigger-prevActiveImage')['each'](port['is'](':first-child') ? function() {
            $(this)['attr']('disabled', 'disabled')
        } : function() {
            $(this)['removeAttr']('disabled')
        }), _0x996exd(g_lod), _0x996exc(g_gal)
    }, gal['initiate'] = function(port) {
        port = $(port), port['respon']()['init'](), port['find']('.gal-trigger-closePanelDetail')['each'](function() {
            $(this)['on']('click', function() {
                init['panel_detail']['removeClass']('gal-open'), $('body')['find']('.gal-trigger-openPanelDetail')['removeAttr']('disabled')
            })
        }), port['find']('.gal-trigger-openPanelDetail')['each'](function() {
            $(this)['on']('click', function() {
                init['panel_detail']['addClass']('gal-open'), init['panel_detail_content']['scrollTop'](0), $('body')['find']('.gal-trigger-openPanelDetail')['attr']('disabled', 'disabled'), $['respon']['media']['isLup']() && init['panel_left']['removeClass']('gal-expand')['find']('.gal-button-expand')['removeClass']('gal-expand')
            })
        }), port['find']('.gal-trigger-togglePreviewExpand')['each'](function() {
            $(this)['on']('click', function() {
                init['panel_left']['toggleClass']('gal-expand'), $('body')['find']('.gal-trigger-togglePreviewExpand')['each'](function() {
                    $(this)['toggleClass']('gal-expand')
                })
            })
        }), port['find']('.gal-trigger-nextActiveImage')['each'](function() {
            $(this)['on']('click', function() {
                _0x996exf()
            })
        }), port['find']('.gal-trigger-prevActiveImage')['each'](function() {
            $(this)['on']('click', function() {
                _0x996ex10()
            })
        }), port['find']('.gal-trigger-oplLeft')['each'](function() {
            $(this)['on']('click', function() {
                init['panel_left']['addClass']('gal-open')
            })
        }), port['find']('.gal-trigger-closePanelLeft')['each'](function() {
            $(this)['on']('click', function() {
                init['panel_left']['removeClass']('gal-open')
            })
        })
    }, gal['newThumbnailList'] = function(g_can, g_aja) {
        return port ? !1 : (port = !0, $['respon']['isExist']('#gal-panel-load-more', function($) {
            $['addClass']('dismiss')
        }), void(g_lod)(g_can, function(g_can) {
            var g_lod = _0x996ex9(g_can['item']) || 'undefined';
            init['ajax_thumbnails']['html'](g_lod), _0x996exe(function() {
                gal['initiate'](init['ajax_thumbnails']), port = !1
            }), gal['setActiveImage'](init['ajax_thumbnails']['children']()['eq'](0)), init['panel_content']['scrollTop'](0), $['isFunction'](g_aja) && g_aja()
        }))
   
    }, $['respon']['isExist']('#gal-panel-main-menu', function(port) {
        $['respon']['isExist']('#gal-button-main-menu', function(g_can) {
            g_can['on']('click', function() {
                g_can['toggleClass']('gal-active'), port['toggleClass']('gal-open')
            }), init['panel_content']['on']('click scroll', function() {
                g_can['removeClass']('gal-active'), port['removeClass']('gal-open')
            })
        })
    }), init['preview_image']['on']('click', function() {
        $['respon']['isExist']('#gal-panel-preview', function($) {
            $['toggleClass']('gal-hide-nav')
        })
    })['on']('load', function() {
        init['panel_preview']['addClass']('gal-loaded')
    }), gal['newThumbnailList'](g_can), gal['initiate']('body')
});

var audioPlayer = document.querySelector('.green-audio-player');
var playPause = audioPlayer.querySelector('#playPause');
var playpauseBtn = audioPlayer.querySelector('.play-pause-btn');
var loading = audioPlayer.querySelector('.loading');
var progress = audioPlayer.querySelector('.progress');
var sliders = audioPlayer.querySelectorAll('.slider');
var volumeBtn = audioPlayer.querySelector('.volume-btn');
var volumeControls = audioPlayer.querySelector('.volume-controls');
var volumeProgress = volumeControls.querySelector('.slider .progress');
var player = audioPlayer.querySelector('audio');
var currentTime = audioPlayer.querySelector('.current-time');
var totalTime = audioPlayer.querySelector('.total-time');
var speaker = audioPlayer.querySelector('#speaker');

var draggableClasses = ['pin'];
var currentlyDragged = null;


window.addEventListener('mousedown', function (event) {

  if (!isDraggable(event.target)) return false;

  currentlyDragged = event.target;
  var handleMethod = currentlyDragged.dataset.method;

  this.addEventListener('mousemove', window[handleMethod], false);

  window.addEventListener('mouseup', function () {
    currentlyDragged = false;
    window.removeEventListener('mousemove', window[handleMethod], false);
  }, false);
});

playpauseBtn.addEventListener('click', togglePlay);
player.addEventListener('timeupdate', updateProgress);
player.addEventListener('volumechange', updateVolume);
player.addEventListener('loadedmetadata', function () {
  totalTime.textContent = formatTime(player.duration);
});
player.addEventListener('canplay', makePlay);
player.addEventListener('ended', function () {
  playPause.attributes.d.value = "M18 12L0 24V0";
  player.currentTime = 0;
});

volumeBtn.addEventListener('click', function () {
  volumeBtn.classList.toggle('open');
  volumeControls.classList.toggle('hidden');
});

window.addEventListener('resize', directionAware);

sliders.forEach(function (slider) {
  var pin = slider.querySelector('.pin');
  slider.addEventListener('click', window[pin.dataset.method]);
});

directionAware();

function isDraggable(el) {
  var canDrag = false;
  var classes = Array.from(el.classList);
  draggableClasses.forEach(function (draggable) {
    if (classes.indexOf(draggable) !== -1) canDrag = true;
  });
  return canDrag;
}

function inRange(event) {
  var rangeBox = getRangeBox(event);
  var rect = rangeBox.getBoundingClientRect();
  var direction = rangeBox.dataset.direction;
  if (direction == 'horizontal') {
    var min = rangeBox.offsetLeft;
    var max = min + rangeBox.offsetWidth;
    if (event.clientX < min || event.clientX > max) return false;
  } else {
    var min = rect.top;
    var max = min + rangeBox.offsetHeight;
    if (event.clientY < min || event.clientY > max) return false;
  }
  return true;
}

function updateProgress() {
  var current = player.currentTime;
  var percent = current / player.duration * 100;
  progress.style.width = percent + '%';

  currentTime.textContent = formatTime(current);
}

function updateVolume() {
  volumeProgress.style.height = player.volume * 100 + '%';
  if (player.volume >= 0.5) {
    speaker.attributes.d.value = 'M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z';
  } else if (player.volume < 0.5 && player.volume > 0.05) {
    speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z';
  } else if (player.volume <= 0.05) {
    speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667';
  }
}

function getRangeBox(event) {
  var rangeBox = event.target;
  var el = currentlyDragged;
  if (event.type == 'click' && isDraggable(event.target)) {
    rangeBox = event.target.parentElement.parentElement;
  }
  if (event.type == 'mousemove') {
    rangeBox = el.parentElement.parentElement;
  }
  return rangeBox;
}

function getCoefficient(event) {
  var slider = getRangeBox(event);
  var rect = slider.getBoundingClientRect();
  var K = 0;
  if (slider.dataset.direction == 'horizontal') {

    var offsetX = event.clientX - slider.offsetLeft;
    var width = slider.clientWidth;
    K = offsetX / width;
  } else if (slider.dataset.direction == 'vertical') {

    var height = slider.clientHeight;
    var offsetY = event.clientY - rect.top;
    K = 1 - offsetY / height;
  }
  return K;
}

function rewind(event) {
  if (inRange(event)) {
    player.currentTime = player.duration * getCoefficient(event);
  }
}

function changeVolume(event) {
  if (inRange(event)) {
    player.volume = getCoefficient(event);
  }
}

function formatTime(time) {
  var min = Math.floor(time / 60);
  var sec = Math.floor(time % 60);
  return min + ':' + (sec < 10 ? '0' + sec : sec);
}

function togglePlay() {
  if (player.paused) {
    playPause.attributes.d.value = "M0 0h6v24H0zM12 0h6v24h-6z";
    player.play();
  } else {
    playPause.attributes.d.value = "M18 12L0 24V0";
    player.pause();
  }
}

function makePlay() {
  playpauseBtn.style.display = 'block';
  loading.style.display = 'none';
}

function directionAware() {
  if (window.innerHeight < 250) {
    volumeControls.style.bottom = '-54px';
    volumeControls.style.left = '54px';
  } else if (audioPlayer.offsetTop < 154) {
    volumeControls.style.bottom = '-164px';
    volumeControls.style.left = '-3px';
  } else {
    volumeControls.style.bottom = '52px';
    volumeControls.style.left = '-3px';
  }
}


! function($, window, document, undefined) {
    "use strict";

    function Plugin(element, options) {
        this.element = element, this.settings = $.extend({}, defaults, options), this._defaults = defaults, this._name = pluginName, this.init()
    }

    function openPopUp(url, title, width, height) {
        var w = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
            h = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
            left = w / 2 - width / 2 + 10,
            top = h / 2 - height / 2 + 50;
        window.open(url, title, "scrollbars=yes, width=" + width + ", height=" + height + ", top=" + top + ", left=" + left).focus()
    }

    function title_case(str) {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        })
    }

    function shorten(num) {
        return num >= 1e9 ? (num / 1e9).toFixed(1).replace(/\.0$/, "") + "G" : num >= 1e6 ? (num / 1e6).toFixed(1).replace(/\.0$/, "") + "M" : num >= 1e3 ? (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K" : num
    }

    function setMobileCss(objects) {
        var width = getWidth();
        $.each(objects, function() {
            width < 961 ? $(this).css("width", 100 / objects.length + "%") : $(this).removeAttr("style")
        })
    }

    function checkPlacePosition($child, position, element, extraOffset) {
        if (getWidth() > 961 && $.inArray(position, ["content-right", "content-left"]) != -1) {
            var initialOffset = "content-right" === position ? element.offsetWidth : -75;
            $child.css("margin-left", initialOffset + extraOffset)
        } else $child.css("margin-left", 0)
    }

    function getWidth() {
        return window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
    }

    function appendButtons(count, $component) {
        count && count > 0 && $component.append($("<span>", {
            class: "shareCount"
        }).append(shorten(count))).find("i").removeClass("margin-top-5")
    }

    function issetOrZero(fn) {
        var value;
        try {
            value = fn()
        } catch (e) {
            value = 0
        }
        return value
    }

    function setShareCount(network, url, $component, twitter_counter) {
        switch (network) {
            case "facebook":
                $.getJSON("https://graph.facebook.com/?id=" + url + "&callback=?", function(data) {
                    appendButtons(issetOrZero(function() {
                        return data.share.share_count
                    }), $component)
                });
                break;
            case "google-plus":
                $.getJSON("https://share.yandex.ru/gpp.xml?url=" + url + "&callback=?", function(count) {
                    appendButtons(count, $component)
                });
                break;
            case "linkedin":
                $.getJSON("https://www.linkedin.com/countserv/count/share?url=" + url + "&callback=?", function(data) {
                    appendButtons(issetOrZero(function() {
                        return data.count
                    }), $component)
                });
                break;
            case "twitter":
                1 == twitter_counter && $.getJSON("https://opensharecount.com/count.json?url=" + url + "&callback=?", function(data) {
                    appendButtons(issetOrZero(function() {
                        return data.count
                    }), $component)
                });
                break;
            default:
                return -1
        }
    }
    var pluginName = "floatingSocialShare",
        defaults = {
            place: "top-left",
            counter: !0,
            twitter_counter: !1,
            buttons: ["facebook", "twitter", "google-plus", "linkedin"],
            title: document.title,
            url: window.location.href,
            description: $('meta[name="description"]').attr("content") || "",
            media: $('meta[property="og:image"]').attr("content") || "",
            text: {
                default: "share with:"
            },
            text_title_case: !1,
            popup_width: 400,
            popup_height: 300,
            extra_offset: 15
        };
    $.extend(Plugin.prototype, {
        init: function() {
            $.inArray(this.settings.place, places) == -1 && (this.settings.place = this._defaults.place);
            var base = this,
                $template = $("<div>", {
                    id: "floatingSocialShare"
                }),
                $child = $("<div>", {
                    class: this.settings.place
                }).appendTo($template),
                _text_default = base.settings.text.default || base.settings.text;
            $.each(this.settings.buttons, function(index, value) {
                $.each(networks, function(k, v) {
                    if (value === k) {
                        var $icon = $("<i>", {
                                class: "margin-top-5 fa fa-" + value
                            }),
                            _href = v.url.replace("{url}", encodeURIComponent(base.settings.url)).replace("{title}", encodeURIComponent(base.settings.title)).replace("{description}", encodeURIComponent(base.settings.description)).replace("{media}", encodeURIComponent(base.settings.media)),
                            _text_value = base.settings.text[value] || _text_default + value,
                            _text_output = base.settings.text_title_case ? title_case(_text_value) : _text_value,
                            $component = $("<a>", {
                                title: base.settings.title,
                                class: v.className + " pop-upper"
                            }).attr("href", _href).attr("title", _text_output).append($icon);
                        return base.settings.counter === !0 && setShareCount(value, encodeURI(base.settings.url), $component, base.settings.twitter_counter), $child.append($component), !1
                    }
                })
            }), $template.appendTo(this.element);
            var popup = $(this.element).find(".pop-upper");
            popup.on("click", function(event) {
                event.preventDefault(), openPopUp($(this).attr("href"), $(this).attr("title"), base.settings.popup_width, base.settings.popup_height)
            }), setMobileCss(popup), checkPlacePosition($child, base.settings.place, base.element, base.settings.extra_offset), $(window).resize(function() {
                setMobileCss(popup), checkPlacePosition($child, base.settings.place, base.element, base.settings.extra_offset)
            })
        }
    });
    var places = ["content-left", "content-right", "top-left", "top-right"],
        networks = {
            envelope: {
                className: "envelope",
                url: "mailto:user@domain.com?subject={url}"
            },
            facebook: {
                className: "facebook",
                url: "https://www.facebook.com/sharer/sharer.php?u={url}&t={title}"
            },
            "google-plus": {
                className: "google-plus",
                url: "https://plus.google.com/share?url={url}"
            },
            linkedin: {
                className: "linkedin",
                url: "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={description}&source="
            },
            twitter: {
                className: "twitter",
                url: "https://twitter.com/home?status={title}%20{url}"
            }
        };
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            $.data(this, "plugin_" + pluginName) || $.data(this, "plugin_" + pluginName, new Plugin(this, options))
        })
    }
}(jQuery, window, document);

  $("#gal-canvas").floatingSocialShare({
    buttons: ["facebook", "twitter", "google-plus", "linkedin", "envelope"],
    twitter_counter: true,
    text: "share with: ",
    url: "http://google.com"
  });