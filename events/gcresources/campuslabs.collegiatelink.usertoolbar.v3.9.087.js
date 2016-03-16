(function(n,t){var i=n.module("cl.usertoolbar",["ui.bootstrap","cl.userToolBarConstants"]);if(!core.siteRoot)throw new Error("Site root not set");i.directive("clSearch",[function(){return{restrict:"A",scope:{focus:"="},link:function(n,t){n.$watch("focus",function(i){i===!0&&(t[0].focus(),n.focus=!1)})}}}]);i.service("Search",["$http",function(n){return{searchEvents:function(t){return n.get(core.siteRoot+"events/search",{params:{SearchValue:t,Filters:["Contains"]}})},searchNews:function(t){return n.get(core.siteRoot+"news/search",{params:{ArticleContent:t}})},searchOrgs:function(t){return n.get(core.siteRoot+"organizations/search",{params:{SearchValue:t,SearchType:"Contains"}})}}}]);i.controller("ToolBarCtrl",["$scope","$http","Search","userToolBarConstants",function(i,r,u,f){i.isCollapsed=!0;i.events=i.news=i.orgs={};i.focusSearch=!1;i.searchTerms=[];var e=t.debounce(function(n){i.logSearch({search_everything_autolog:!0,search_everything_query:n})},2e3);i.clickResultMore=function(n,t,r){if(f.enableKissmetricsTracking){r.preventDefault();var u={search_everything_click_more_url:n,search_everything_click_result_type:t};i.logSearch(u,function(){window.location.href=u.search_everything_click_more_url})}};i.clickResult=function(n,t,r){if(f.enableKissmetricsTracking){r.preventDefault();var u={search_everything_click_result_type:t,search_everything_click_result_id:n.Id,search_everything_click_result_url:n.GroupUrl?n.GroupUrl:n.EventUrl?n.EventUrl:n.Url};i.logSearch(u,function(){window.location.href=u.search_everything_click_result_url})}};i.logSearch=function(n,t){(n=n||{},n.search_everything_query=n.search_everything_query||i.search,!n.search_everything_query.length||!n.search_everything_click_result_url&&n.search_everything_query.length<4)||_kmq.push(["record","Search_Everything",n,function(){t&&t()}])};n.element("body").on("click",function(t){n.element("#userToolBar").find(t.target).length!==0||i.isCollapsed||(i.toggleSearch(),i.$digest())});i.collapseOnESCKey=function(n){n.which===27&&i.toggleSearch()};i.toggleSearch=function(){i.isCollapsed=!i.isCollapsed;i.isCollapsed||(i.focusSearch=!0);i.clearSearch()};i.query=t.throttle(function(){i.search.length&&(u.searchEvents(i.search).success(function(n){i.events=n}),u.searchOrgs(i.search).success(function(n){i.orgs=n}),u.searchNews(i.search).success(function(n){i.news=n}),i.search.length>=3&&f.enableKissmetricsTracking&&e(i.search))},500);i.clearSearch=function(){i.search="";i.news.Results=[];i.events.Results=[];i.orgs.Results=[]}}])})(angular,_)