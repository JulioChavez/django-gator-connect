function ShowConfirmDialog(n,t,i,r,u){if($("#"+t).attr("value")!="true"){var f={};return f[i]=function(){$(this).dialog("close");$(u).click()},f.Cancel=function(){$(this).dialog("close");$("#"+t).attr("value","false")},$("#"+n).dialog({resizable:!1,height:r,buttons:f,modal:!0}),$("#"+t).attr("value","true"),!1}return $("#"+t).attr("value","false"),!0}function MakeContainerModal(n){$("#"+n).dialog()}function HideLoading(n){$("#"+n).attr("style","")}function ShowLoading(n){$("#"+n).attr("style","display:block;visibility:visible")}var Toggle,MasterPage,collegiatelink;$(function(){$(window).ajaxComplete(function(n,t){t.getResponseHeader("AUTH_REQUIRED")==="1"&&(window.location="/account/logonrequired")});$.ajaxSetup({cache:!1})}),function(){function n(){return typeof window.SVG!="undefined"?window.SVG:($.ajaxSettings.traditional=!0,busyElement=null,window.console||function(){var t=["log","debug","info","warn","error","assert","dir","dirxml","group","groupEnd","time","timeEnd","count","trace","profile","profileEnd"],n;for(window.console={},n=0;n<t.length;++n)window.console[t[n]]=function(){}}(),{CurrentMember:{Id:null,Name:null},URLS:{UploadFlyer:"",GetAllFlyerBoardImages:"",GetThisWeekFlyerBoardImages:"",GetNextWeekFlyerBoardImages:"",CorkBoard:"",LoadingIcon:"",RightScroller:"",RightScrollerHover:"",LeftScroller:"",LeftScrollerHover:"",GetUsersFacebookGroups:"",GetUsersFacebookFriends:"",GetGroupMembers:"",DeleteUsersFromGroup:"",GetGroupWallPosts:"",UploadDocument:"",DeleteManyGroups:"",EventPopup:"",GetEventsForAdmin:"",DeleteManyEvents:"",GetDocument:"",TinyMCEUrl:""},MessageTypes:{GroupType:"GroupType",Group:"Group",PositionTemplate:"PositionTemplate",CommunityMember:"CommunityMember",GroupMembership:"GroupMembership",GroupMembershipInvitation:"GroupMembershipInvitation",GroupMembershipRequest:"GroupMembershipRequest",AllGroupMembers:"AllGroupMembers"},FileTypes:{Image:["jpg","jpeg","gif","png"],Document:["doc","docx","ppt","pptx","xls","xlsx","pdf"]},RegExpressions:{EmailSplit:new RegExp(",|;|\r|\n|\t","gi"),IsEmail:/^[_a-zA-Z0-9-'']+(\.[_a-zA-Z0-9-'']+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$/},BlockUI:{width:"100%",height:"100%",border:"none",padding:"0px",opacity:.1,color:"#fff",cursor:"none","font-family":"Helvetica,Arial,sans-serif","font-size":"1em",css:{border:"1px solid #ddd","-moz-border-radius":"5px","-webkit-border-radius":"5px","border-radius":"5px","-moz-box-shadow":"0px 0px 5px #aaa","-webkit-box-shadow":"0px 0px 5px #aaa","box-shadow":"0px 0px 5px #aaa"}},ReloadPage:function(){window.location.reload(!0)},HistoryHandlers:[],PreventHandlers:!1,ListenForUrl:function(n,t){this.HistoryHandlers[""+n+""]=t},InitHistoryManager:function(){function t(){var i=window.location.href.split("#"),t;i.length<2||n.PreventHandlers||(t=n.HistoryHandlers[""+i[1]+""],$.isFunction(t)&&t())}var n=this;$(window).bind("hashchange",t)},ValidateForm:function(n){if(!n)return!1;var t=Sys.Mvc.FormContext.getValidationForForm(n[0]).validate();return t&&t.length>0?!1:!0},Block:function(n,t,i,r){var u='<div class="blockUI-text">'+(t||"Loading...")+"<\/div>";$(n).block({showOverlay:i,centerX:!0,message:u,fadeIn:r||0,css:{border:"1px solid #666",color:"#555",fontSize:"1.25em",fontStyle:"italic",fontWeight:"bold","-moz-border-radius":"5px","-webkit-border-radius":"5px","border-radius":"5px","-moz-box-shadow":"0px 0px 10px #333","-webkit-box-shadow":"0px 0px 10px #333","box-shadow":"0px 0px 10px #333"}})},Busy:function(n){n?(busyElement=n,n.block({fadeIn:0,message:'<div class="spinner"><\/div>',css:{backgroundColor:"transparent",border:0,left:"50%",padding:0,top:"50%",width:"auto"},overlayCSS:{backgroundColor:"#fff",opacity:".6"}})):busyElement!=null&&busyElement.unblock()},Watercolor:function(n,t,i){i=i?i:"Start typing to search";n.attr("value",i).addClass("helperText");n.click(function(){$.trim(this.value)==i&&($(this).removeClass("helperText"),this.value="")});n.blur(function(){$.trim(this.value)==""&&($(this).addClass("helperText"),this.value=i)});$.isFunction(t)&&n.keyup(t)},AddRandomKeyToUrl:function(n){n||(n=window.location.href);var t="rand="+Math.random()*10,i=n.split("?");return t=i.length!=2?"?"+t:"&"+t,n+t},GetUrlKeyValue:function(n,t){var r,f,i,u;for(t||(t=window.location.href),r=t.split(/[?&]/g),f=r.length,i=0;i<f;i++)if(u=r[i].split("="),u[0].toLowerCase()==n.toLowerCase())return u[1];return null},ReplaceValueInQueryString:function(n,t,i){var e=n.split("?"),h,s,r;if(e.length!=2)return!1;var u=e[0],f=e[1].split("&"),o=f.length;for(r=0;r<o;r++)h=f[r].split("="),s=h[0],s==t&&(f[r]=s+"="+i);for(u+="?",r=0;r<o;r++)u+=f[r],r<o-1&&(u+="&");return u},IndexOf:function(n,t){return $.inArray(t,n)},IsRightClick:function(n){return $.event.fix(n).which!=1},IsEmailAddress:function(n){return this.RegExpressions.IsEmail.test(n)},ListToHTMLSelect:function(n){function u(n,t){return $("<option>").attr("value",n).text(t)}var i=$("<select />"),f=n.length,t,r;if(!f)return i.append(u("-1","No Organizations Available"));for(t=0;t<f;t++)r=n[t],i.append(u(r.value,r.text));return i},RedrawIE:function(){jQuery.browser.msie&&parseInt(jQuery.browser.version)<9&&$("body").addClass("redrawIE")},StripHtml:function(n){return n.replace(/(<([^>]+)>)/ig,"")},Post:function(n,t){$.post(n,t)},InitPlugins:function(){var t=this,n;if($.event.special.hashchange&&this.InitHistoryManager(),typeof collegiatelink.DataGrid!="undefined"&&(n=$(".svgGrid"),n.length>0&&new collegiatelink.DataGrid(n).init()),$.isFunction($.fn.datepicker))$("body").on("focusin",".datepicker",function(){$(this).hasClass("hasDatepicker")||$(this).datepicker()});if($.isFunction($.fn.autocomplete));}})}window.SVG=n()}();$(document).ready(function(){$(".confirm-button").click(function(){return confirm($(".confirm-button").attr("data-svg-confirm-message"))});$(".alert-button").click(function(){return alert($(".alert-button").attr("data-svg-alert-message")),!1})}),function(n){n.isFunction(n.Flash)||(n.Flash=function(t,i){var u=function(t,i){n("#flash").html(i);n("#flash").attr("class",t);n("#flash").fadeIn("slow")},r;n("#flash").is(":visible")?n("#flash").fadeOut("fast",function(){u(t,i)}):u(t,i);r=!1;n("#flash a").click(function(){r=!0});n("#flash").click(function(){r?r=!1:n("#flash").fadeOut("slow")})},n.isFunction(n.FlashOnModal))||(n.FlashOnModal=function(t,i,r){var f=t=="info"?"success":t,u=n(".ui-dialog-content"),e=function(t,i){n("#flash",u).length===0&&u.prepend('<div id="flash" style="display:none;"/>');var f=u.find("#flash");f.css("margin","1em");f.html(i);f.attr("class","notification "+t);f.fadeIn("fast");f.on("click",function(n){n.preventDefault();f.fadeOut("slow")});r||f.fadeOut(3e3,function(){f.remove()})};n("#flash",u).is(":visible")?n("#flash",u).fadeOut("fast",function(){e(f,i)}):e(f,i)})}(jQuery);$(function(){if(typeof SVG=="undefined"&&(SVG={}),typeof SVG.AjaxLoading=="undefined")SVG.AjaxLoading={};else return;SVG.AjaxLoading.PreventDefault=!1;$("#statusBar").ajaxStart(function(){SVG.AjaxLoading.PreventDefault||$(this).show()}).ajaxStop(function(){SVG.AjaxLoading.PreventDefault||$(this).hide()})}),function(n){n.fn.dropDown=function(t){n(this).children("a").each(function(i){function u(t){var u=t.prev("a");u.addClass("open").attr("aria-expanded",!0);u.html(unescape(escape(u.html()).replace("u25BE","u25B4")));t.attr("aria-hidden",!1).slideDown(200);t.find("a").click(function(){});n("body").bind("click.dropDown"+i,function(){r(t)}).bind("keyup.dropDown",function(n){n.which==27&&r(t)})}function r(t){n("body").unbind("click.dropDown"+i);n("body").unbind("keyup.dropDown");t.attr("aria-hidden",!0).slideUp(100,function(){var n=t.prev("a");n.removeClass("open").attr("aria-expanded",!1);n.html(unescape(escape(n.html()).replace("u25B4","u25BE")))})}n(this).parent().click(function(n){n.stopPropagation()});n("body").on("click",".dropDown-items",function(){var t=n(this);t.find("a").click(function(){r(t)})});n(this).click(function(){var i,f;return n(".dropDown-items").each(function(t,i){r(n(i))}),i=n(this),i.attr("href")=="#"?(f=i.next(".dropDown-items"),i.hasClass("open")==!1?u(f):r(f)):t?t(function(){i.attr("href","#");u(i.next(".dropDown-items"))}):n.get(n(this).attr("href"),function(n){i.attr("href","#");u(i.after(n).next())}),!1})})}}(jQuery);Toggle=function(){function r(n){n.preventDefault();var t=$(this).next($(".toggle-content"));$(this).hasClass("toggle-header-active")?(t.slideUp(),$(this).removeClass("toggle-header-active")):($(this).addClass("toggle-header-active"),t.slideDown())}function u(r){r.preventDefault();t.hide();i.fadeIn();n.each(function(n,t){$(t).hasClass("toggle-header-active")||$(t).trigger("click")})}function f(r){r.preventDefault();i.hide();t.fadeIn();n.each(function(n,t){$(t).hasClass("toggle-header-active")&&$(t).trigger("click")})}$(".toggle-content").each(function(){$(this).prev($(".toggle-header")).hasClass("toggle-header-active")?$(this).show():$(this).hide()});var n=$(".toggle-header"),t=$(".toggle-expandAll"),i=$(".toggle-collapseAll");n.on("click",r);t.on("click",u);i.on("click",f)};$(document).ready(function(){new Toggle;$(".button-dd").click(function(n){function u(){t.removeClass("open");i.attr("aria-expanded",!1);r.attr("aria-hidden",!0);$("html").unbind("click.button-dd")}n.stopPropagation();var t=$(this),i=t.children(".button"),r=t.children("ul");t.hasClass("open")==!1?(t.addClass("open"),i.attr("aria-expanded",!0),r.attr("aria-hidden",!1),$("html").bind("click.button-dd",function(){u()})):u()});$.isFunction($.fn.dropDown)&&$(".dropDown").dropDown();$("input:text.helper,textarea.helper").each(function(n,t){var r;if($(t).attr("title")!=undefined&&$(t).attr("title")!=""){r=$(t).attr("title");$(t).removeAttr("title");var u=$(t).hasClass("warn")?"icon-warning":"icon-info",f=$(t).hasClass("bottom")?"field-helper-bottom":"field-helper",i=$("<div />").attr("class",f).text(r).appendTo($(t).parent()),e=$("<span />").attr("class",u).prependTo(i);$(t).focus(function(){i.fadeIn("fast")}).blur(function(){i.hide()})}});$("input:text.readOnly-editable").each(function(n,t){var e=$(t).val(),o=$(t).hasClass("buttonOnly"),u,f,i,r;e!=""&&($(t).hide(),u=!1,$(t).parent().find(".readOnly-editable-dialog").length>0&&(f=$(".readOnly-editable-dialog").dialog({autoOpen:!1,dialogClass:"dialog-alert",draggable:!1,resizable:!1}),u=!0),i=$("<div />").addClass("readOnly-editable-ct").hide(),r=$("<span />").text("Edit").addClass("button-small").click(function(){function n(){o?r.hide():i.hide();$(t).fadeIn()}u?(f.dialog("option","buttons",{Ok:function(){$(this).dialog("close");n()},Cancel:function(){$(this).dialog("close")}}),f.dialog("open")):n()}),o?r.appendTo($(t).parent()):(i.prependTo($(t).parent()),$("<span />").addClass("readOnly-editable-text").text(e).appendTo(i),r.appendTo(i),i.fadeIn()))});helperText=function(n,t,i){$(n).val(t).addClass(i).focus(function(){$(this).hasClass(i)&&($(this).val(""),$(this).removeClass(i))}).blur(function(){$(this).val()==""&&($(this).addClass(i),$(this).val(t))})};$(".radioButtons").buttonset();$(".content-main").on("click",".member-modal",function(n){n.preventDefault();var t=core.modal.init($("<div />"),{maxHeight:760,content:$(this).attr("href"),refresh:function(){t.center()}}).open()});$(".content-main").on("click",".modal-info",function(n){n.preventDefault();var t={};$(this).attr("title")&&(t.title=$(this).attr("title"));core.modal.init($($(this).attr("href")),t).open()})});typeof $.validator!="undefined"&&($.validator.addMethod("nestedconditionalrequired",function(n,t,i){var r=$('input[name="'+i.propertyName+'"]');return r.val()=="True"&&(n==null||n.length<=0)?!1:!0}),$.validator.unobtrusive.adapters.add("nestedconditionalrequired",["propertyname"],function(n){n.rules.nestedconditionalrequired={propertyName:n.params.propertyname};n.messages.nestedconditionalrequired=n.message}),$.validator.addMethod("nestedmulticonditionalrequired",function(n,t,i){for(var e,r=!0,f=i.properties.split(","),u=0;u<f.length;u++)e=$('input[name="'+f[u]+'"]'),r=r&&e.val()=="True";return r&&(n==null||n.length<=0)?!1:!0}),$.validator.unobtrusive.adapters.add("nestedmulticonditionalrequired",["properties"],function(n){n.rules.nestedmulticonditionalrequired={properties:n.params.properties};n.messages.nestedmulticonditionalrequired=n.message}),$.validator.addMethod("nullablefileextension",function(n,t,i){var u,f,r;if(n==null||n=="")return!0;for(u=i.validExtensions.split(","),f="."+n.split(".").pop(),r=0;r<u.length;r++)if(f.toLowerCase()==u[r].toLowerCase())return!0;return!1}),$.validator.unobtrusive.adapters.add("nullablefileextension",["validextensions"],function(n){n.rules.nullablefileextension={validExtensions:n.params.validextensions};n.messages.nullablefileextension=n.message}),$.validator.addMethod("textstringlength",function(n,t,i){if(t===null||typeof t=="undefined")return!0;if($(t).length>0){var r=$("<span><\/span>").html($(t).val()).text().length;return r<=i.maxlength}return!0}),$.validator.unobtrusive.adapters.add("textstringlength",["maxlength"],function(n){n.rules.textstringlength={maxlength:n.params.maxlength};n.messages.textstringlength=n.message}));MasterPage=function(n){var i,t,r;typeof Zenbox!="undefined"&&Zenbox.init({dropboxID:"20198600",url:"https://collegiatelink.zendesk.com",tabColor:"black",tabPosition:"Left",hide_tab:!0});$("#helpLink").click(function(){var n=$("#helpLink").data("helpurl");return n!=null&&n!=""?(window.open(n),!1):typeof Zenbox!="undefined"?(Zenbox.show(),!1):void 0});n.showAdditionalFields=="True"&&n.additionalFieldUrl!=null&&(i=$('<div id="communityMember-additional" />'),t=core.modal.init(i,{content:n.additionalFieldUrl,deactivate:function(){$("#createAccount-additional h2").attr("tabindex","0").focus();t.destroy()},refresh:function(){t.center();t.open()}}));n.translateEnabled=="True"&&n.translateEnabled!=null&&($("html").addClass("translate-enabled"),r=$("#userNav-container"),$(window).scroll(function(){$(".goog-te-banner-frame:visible").length?$("html").addClass("translate-active"):$("html").removeClass("translate-active translate-enabled")}))};collegiatelink=collegiatelink||{};collegiatelink.DataGrid=function(n){this.grid=n;this.container=null};collegiatelink.DataGrid.prototype.init=function(){this.validate();this.initializeSearch();this.initializePagination();this.initializeSort();this.initializeMoreFilters();this.getContainer().data("datagrid",this)};collegiatelink.DataGrid.prototype.validate=function(){};collegiatelink.DataGrid.prototype.getContainer=function(){if(this.container!==null)return this.container;var n=this.grid;return n=n.parents(".SearchableGrid").length>0?this.grid.parents(".SearchableGrid:first"):this.grid.parent(),this.container=n,n};collegiatelink.DataGrid.prototype.initializeSearch=function(){var t=this,n=this.getContainer();n.on("focus",".searchBoxValue",function(){$(this).parents(".searchBoxContainer").addClass("focus")});n.on("focus",".searchBoxValue",function(){$(this).parents(".searchBoxContainer").removeClass("focus")});n.on("submit",".searchBoxForm",function(i){i.preventDefault();$.ajax({url:$(this).attr("action"),data:$(this).serialize(),beforeSend:function(){core.blocker.block(n)},complete:function(){core.blocker.unblock()},success:function(n){t.renderResults(n)}})});n.on("click",".searchClear",function(t){t.preventDefault();n.find(".searchBoxValue:first").val("");n.find("form.searchBoxForm:first").submit()})};collegiatelink.DataGrid.prototype.initializeSort=function(){var t=this,n=this.getContainer();n.on("click","thead a",function(i){i.preventDefault();$.ajax({url:$(this).attr("href"),beforeSend:function(){core.blocker.block(n)},complete:function(){core.blocker.unblock()},success:function(n){t.renderResults(n)}})})};collegiatelink.DataGrid.prototype.initializePagination=function(){var t=this,n=this.getContainer();n.on("click",".pagination a",function(i){i.preventDefault();var r=$(this).attr("href");$.ajax({url:r,beforeSend:function(){core.blocker.block(n)},complete:function(){core.blocker.unblock()},success:function(n){t.renderResults(n)}})})};collegiatelink.DataGrid.prototype.initializeMoreFilters=function(){var n=this.getContainer();n.on("change",".searchBoxForm select[data-gridfilter]",function(){n.find("form.searchBoxForm:first").submit()})};collegiatelink.DataGrid.prototype.renderResults=function(n){var t=this.getContainer(),u=t.hasClass("pagerResult")?t:t.find(".pagerResult:first"),r,i;(u.html(n),t.find(".radioButtons").buttonset(),r=t.find(".searchBoxValue:first"),i=t.find(".searchClear"),r.length!=0&&i.length!=0)&&(r.val().length>0?i.show():i.hide())},function(n){if(n.fn.gridConfirm)return!1;n.fn.gridConfirm=function(t){var r=n.extend({successMessage:"success",warnMessage:"Set this message to warn users against unwanted action",errorMessage:"error",message:"Are you sure you want to do this",linkClass:"gridConfirmLink",grid:"#grid",dialog:"#confirm-div",useOriginalDialog:!1,width:"auto",height:"auto",severeAction:!1,title:"Confirm",confirmButtonText:"Ok",confirmButtonClass:"",cancelButtonText:"Cancel",cancelButtonClass:"",useAntiForgeryToken:!1,isFormAjax:!0,warnCondition:!1,token:n('input[name="__RequestVerificationToken"]').val(),success:function(t){n(r.grid).html(t)},error:function(){},type:"GET",dataType:"html",data:function(n){return{id:n.attr("data-id")}}},t||{}),u="",s=function(n){var t=r.data(n);return r.useAntiForgeryToken&&(t.__RequestVerificationToken=r.token),t},c=function(){var t=n(r.grid);if(!t&&t.length!=0){alert("grid does not exist");return}t.delegate("."+r.linkClass,"click",function(t){return t.stopPropagation(),y(n(this),r),!1})},l=function(){var t=n(r.dialog),i;t.length==0&&(t=p(r));r.useOriginalDialog==!1&&(i=a());u=core.modal.init(t,{buttons:i||{},title:r.title,width:r.width,height:r.height,severe:r.severeAction})},h=function(){u.close()},a=function(){var n={},t=r.confirmButtonText;return r.buttons?r.buttons:(n[t]={click:function(){v(r);h(r)},primary:!0},n.Cancel={click:function(){r.cancel&&r.cancel();h(r)}},r.buttons=n,n)},v=function(){var e=n(r.dialog),t=e.data("item"),i,u;if(r.confirmForm){if(i=n(r.confirmForm),!r.isFormAjax){i.submit();return}i.ajaxSubmit({datatype:r.dataType,type:r.type,data:s(t),success:function(n){r.success&&r.success(n,t);f(r.successMessage,"info",t)},error:function(n){r.error&&r.error(n,t);f(r.errorMessage,"error",t)}});return}u=n.ajax({url:t.attr("href"),type:r.type,dataType:r.dataType,data:s(t)});r.success&&u.success(function(n){r.success&&r.success(n);f(r.successMessage,"info",t)});r.error&&u.error(function(n){r.error&&r.error(n);var i=typeof n!="undefined"&&n.responseText!=="undefined"&&n.responseText.length>0?n.responseText:r.errorMessage;f(i,"error",t)})},y=function(t){u.setOptions({title:e(r.title,t)});r.setupForm&&(r.resetForm&&r.resetForm(),r.setupForm(t));r.useOriginalDialog==!0?n("div#dialog-message",u).remove():(o(""),r.warnCondition&&r.warnCondition()?(n(u.element).next(".modal-buttons").find(".button").first().hide(),o(e(r.warnMessage,t))):(n(u.element).next(".modal-buttons").find(".button").first().show(),o(e(r.message,t))));n(r.dialog).data("item",t);u.open()},p=function(){var i=n(r.grid),t=n("<div><\/div>");return t.append('<div id="dialog-message"><\/div>'),t.css({display:"none"}).attr("id",r.dialog.replace("#","")),i.append(t),t},o=function(t){var i=n(r.dialog),u=n('<p id="dialog-message-content"/>').html(t);i.find("#dialog-message").empty().append(u)},f=function(t,i,r){var u=e(t,r);n.Flash(i,u)},e=function(n,t){if(!(n instanceof Array))return n;var r=n[0];for(i=1;i<n.length;)r=r.replace(new RegExp("\\{"+(i-1)+"\\}","gm"),t.attr(n[i])),i++;return r};c();l()};n.fn.SVGConfirm=n.fn.gridConfirm}(jQuery);$(function(){var n=$("input[name=__RequestVerificationToken]");$(".form-group").each(function(){$(this).hasClass("disabled")&&($(this).find("input").attr("disabled",!0),$(this).find("select").attr("disabled",!0),$(this).find("textarea").attr("disabled",!0))});$(".fileUploadQuestion").each(function(){var r=!1,s=$(this).find(".confirmClearSelectedFile"),u=$(this).find(".clearSelectedFile"),f=$(this).find(".fileDetails"),e=$(f).find(".temporaryFileNameField"),h=$(f).find(".temporaryUniqueFileNameField"),v=$(this).find(".uploadFileLink"),t=$(this).find(".uploadFileDialog"),y=$(this).find(".uploadDialogUrl"),p=$(this).find(".removeTempFileUrl"),c={Ok:function(){b()},Cancel:function(){a(t)}},i=$(this).find(".fileNameLabel"),l=$(this).find(".uploadFileName"),a=function(n){$(n).dialog("close");$(n).html("")},w=function(){$(t).dialog("close");$(t).html("");$(".statusbar").last().hide();r=!0},o=function(t){t!==""&&$.ajax({type:"POST",url:$(p).val(),data:{__RequestVerificationToken:$(n).val(),fileToRemove:t}})},b=function(){var f=$(t).find("form");return $(f).ajaxSubmit({iframe:!0,iframeSrc:"javascript:false",dataType:"text",type:"POST",data:{__RequestVerificationToken:$(n).val()},beforeSend:function(){$(".statusbar").last().show();$(t).dialog("option","buttons",{Cancel:function(){w()}})},success:function(n){var s;if($(".statusbar").last().hide(),r)o(n),r=!1;else{s=$(f).find(".responseContainer");$(s).html(n);var y=$(h).val(),v=$(s).find(".validResponse").text(),c=$(s).find(".fileName").text();c!=""&&v!=""?($(e).val(c),$(h).val(v),$(i).html(c),$(i).click(function(n){n.preventDefault()}),$(i).css("color","black"),$(i).css("text-decoration","none"),$(i).css("cursor","default"),$(u).show(),$(l).show(),a(t),o(y)):alert("An error has occurred. Please make sure you have followed the upload instructions and try again.")}},error:function(n){alert(n)},complete:function(){$(t).dialog("option","buttons",c)}}),!1};$(s).dialog({title:"Remove File",modal:!0,autoOpen:!1,resizable:!1,draggable:!1,position:"center",buttons:{Ok:function(){$(e).val()!=""&&o($(e).val());$(f).find("input").each(function(){$(this).val("")});$(u).hide();$(l).hide();$(i).html("");$(this).dialog("close")},Cancel:function(){$(this).dialog("close")}}});$(t).dialog({modal:!0,autoOpen:!1,resizable:!1,draggable:!1,width:400,position:"center",closeOnEscape:!1,open:function(){$(".ui-dialog-titlebar-close").hide()},buttons:c});$(u).click(function(n){n.preventDefault();$(s).dialog("open")});$(v).click(function(n){n.preventDefault();var i=$.ajax({cache:!1,type:"GET",url:$(y).val(),beforeSend:function(){$(".statusbar").last().show()},success:function(n){$(t).html(n)},complete:function(){$(".statusbar").last().hide();$(t).dialog("open")}})})});$(".rankingQuestion").each(function(){var n=this,t=function(){$(n).find("option").attr("disabled",!1);$(n).find("option:selected").each(function(){var i=$(this).val(),t=$(this).text();parseInt(t)>0&&$(n).find("option[text="+t+"]").each(function(){var n=this;$(n).attr("selected")||$(n).attr("disabled",!0)})})};t();$(".rankingAnswer").each(function(){var i=this,r=$(this).find(".rankingDropDown"),u=$(i).find('input[type="text"]'),f=$(i).find("textarea"),e=$(i).find(".freeTextAnswerId"),n=function(){($(u).val()!=""||$(f).val()!="")&&e.val($(r).val())};n();u.change(function(){n()});f.change(function(){n()});r.change(function(){n();t()})})});$(".tooltip").kendoTooltip({position:"right"})})