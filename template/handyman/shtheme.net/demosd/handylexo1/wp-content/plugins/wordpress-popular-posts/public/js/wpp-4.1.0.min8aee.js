var WordPressPopularPosts=function(){var d=function(){},f=function(b,e,a,d){var c=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");b=-1!=["GET","POST"].indexOf(b)?b:"GET";c.open(b,e+("GET"==b?"?"+a:""),!0);"POST"==b&&c.setRequestHeader("Content-type","application/x-www-form-urlencoded");c.setRequestHeader("X-Requested-With","XMLHttpRequest");c.onreadystatechange=function(){4===c.readyState&&200===c.status&&"function"===typeof d&&d.call(void 0,c.response)};c.send("POST"==
b?a:null)};return{get:function(b,e,a){a="function"===typeof a?a:d;f("GET",b,e,a)},post:function(b,e,a){a="function"===typeof a?a:d;f("POST",b,e,a)},ajax:f}}();
if("undefined"!==typeof wpp_params && wpp_params.ID > 0){var do_request=!0;if("1"==wpp_params.sampling_active){var num=Math.floor(Math.random()*wpp_params.sampling_rate)+1;do_request=1===num}do_request&&WordPressPopularPosts.post(wpp_params.ajax_url,"action="+wpp_params.action+"&_wpnonce="+wpp_params.token+"&token="+wpp_params.token+"&wpp_id="+wpp_params.ID+"&sampling="+wpp_params.sampling_active+"&sampling_rate="+wpp_params.sampling_rate,function(d){wpp_params.debug&&window.console&&window.console.log&&window.console.log(d)})};