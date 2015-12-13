// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

	"use strict"

	$.tonen = function (url) {
		return {
			get: function (func) {
				return $.get(url, func, 'json')
			},
			set: function (data, func) {
				if (typeof data === 'undefined') return 
				return $.post(url, {data: JSON.stringify(data)}, func)
			}
		}
	}

}( jQuery, window, document ));
