// JavaScript Document
var rwdMedia = {
    bs4_xs: function() {
        return document.getElementsByClassName("bs4-xs")[0].offsetParent ? !null : null;
    },
    bs4_sm: function() {
        return document.getElementsByClassName("bs4-sm")[0].offsetParent ? !null : null;
    },
    bs4_md: function() {
        return document.getElementsByClassName("bs4-md")[0].offsetParent ? !null : null;
    },
    bs4_lg: function() {
        return document.getElementsByClassName("bs4-lg")[0].offsetParent ? !null : null;
    },
    bs4_xl: function() {
        return document.getElementsByClassName("bs4-xl")[0].offsetParent ? !null : null;
    },
    bs4_xxl: function() {
        return document.getElementsByClassName("bs4-xxl")[0].offsetParent ? !null : null;
    }
};



$(document).ready(function(e) {




});

// JQ extras

$.fn.hasAttr = function(name) {
    return this.attr(name) !== undefined;
};
