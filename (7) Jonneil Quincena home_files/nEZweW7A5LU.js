/*!CK:1038644978!*//*1434980001,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["F+LsK"]); }

__d("EmuController",["AsyncRequest","DataStore","URI","emptyFunction","ge","goURI"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();function m(n,o){"use strict";var p=k(n);if(!p)return null;this.impression=o;this.containerId=n;h.set(p,'emuController',this);return this;}m.prototype.event=function(n,o,p,q){"use strict";var r={eid:this.impression,f:0,ui:this.containerId,en:n,a:1};if(o)r.ed=JSON.stringify(o);if(!q)q=j;var s=new g().setURI(this.EVENT_HANDLER_PATH).setData(r).setErrorHandler(q);if(p)s.setHandler(p);s.send();};m.prototype.redirect=function(){"use strict";var n={eid:this.impression,f:0,ui:this.containerId,en:this.CLICK,a:0,sig:Math.floor(Math.random()*65535)+65536},o=new i(this.EVENT_HANDLER_PATH);o.setQueryData(n);l(o);};m.fromContainer=function(n){"use strict";var o=k(n);if(!o)return null;return h.get(o,'emuController');};m.getEventClass=function(n){"use strict";return "emuEvent"+String(n).trim();};Object.assign(m.prototype,{EVENT_HANDLER_PATH:'/ajax/emu/end.php',CLICK:1,FAN:"fad_fan"});e.exports=m;},null);
__d("legacy:ad-units-base-js",["EmuController"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.EmuController=b('EmuController');},3);
__d("DesktopHscrollUnitEventConstants",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={HSCROLL_ITEM_INSERTED_EVENT:'DesktopHScrollUnit/itemInserted',HSCROLL_ITEM_SHOWN_EVENT:'DesktopHScrollUnit/itemShown'};},null);
__d("BlueBarMinWidthWithJewel",["BanzaiODS","DOMQuery","DOMDimensions","Event","Locale","Style","Vector","CSS","csx","cx","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();f.init=function(r){var s=h.scry(document,"div._uaw")[0],t=h.scry(s,"._fmc")[0],u=h.scry(document,"a._23nx")[0],v=h.scry(document,"a._23ny")[0],w=false,x;if(r&&u&&v){j.listen(u,'click',function(){n.removeClass(document.body,"_23nw");n.hide(u);g.bumpEntityKey('tinyview.bookmark','show.click');});j.listen(v,'click',function(){n.addClass(document.body,"_23nw");n.show(u);g.bumpEntityKey('tinyview.bookmark','hide.click');});}var y=q.bind(null,function(){var z=i.getElementDimensions(s).width,aa=i.getViewportDimensions().width,ba=i.measureElementBox(s,'width',true);w=n.hasClass(document.documentElement,'tinyViewport');var ca;if(k.isRTL()){ca=-m.getElementPosition(s).x;}else ca=2*m.getElementPosition(s).x+z-aa;var da=z-ca-ba;if(ca>0&&da>0){x=da+'px';}else x='';},function(){l.set(t,'width',x);if(r){n.conditionClass(document.body,"_23nw",w);if(u&&v){if(w)g.bumpEntityKey('tinyview.bookmark','icon.show');n.conditionShow(u,w);n.conditionShow(v,w);}}},'BlueBarMinWidthWithJewel');j.listen(window,'resize',y);y();};},null);
__d("BrowseClientEventLogger",["Banzai"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h='browse_client_event_session',i='21.',j={logData:function(event,k,l,m){if(!event||!k)return;m=m||{};m.event=event;m.client_time=Math.floor(Date.now());m.session_id=k;m.vertical=l;this.allData=this.allData||{};this.processedSessions=this.processedSessions||[];if(this.processedSessions.indexOf(k)!==-1)return;if(!this.allData.sessionid)this.allData.sessionid=[];this.allData.sessionid.push(m);if(event==='window_unloaded'||event==='window_transition_to_LHC'||event==='window_transition_to_home_click'||event==='window_transition_to_fb_page'){this._postBatch(this.allData.sessionid);this.processedSessions.push(k);}},logClick:function(k){k.event='click';this.maybeLogVisiblityEvent(k,true);},maybeLogClientViewEvent:function(k){k.event='client_view';this.maybeLogVisiblityEvent(k);},maybeLogVisiblityEvent:function(k,l){if(!k||!k.xt||k.xt.indexOf(i)!==0)return;var event=k.event,m=JSON.parse(k.xt.substring(3));if(l)m.click_type=k.click_type;this.logData(event,m.session_id,m.vertical,m);},_postBatch:function(k){g.post(h,k,{delay:0,retry:true});}};e.exports=j;},null);
__d("Visibility",["mixInEventEmitter"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h,i;if(typeof document.hidden!=='undefined'){h='hidden';i='visibilitychange';}else if(typeof document.mozHidden!=='undefined'){h='mozHidden';i='mozvisibilitychange';}else if(typeof document.msHidden!=='undefined'){h='msHidden';i='msvisibilitychange';}else if(typeof document.webkitHidden!=='undefined'){h='webkitHidden';i='webkitvisibilitychange';}function j(){return h?document[h]:false;}var k={HIDDEN:'hidden',VISIBLE:'visible',isHidden:j};g(k,{visible:true,hidden:true});if(document.addEventListener&&i)document.addEventListener(i,function l(){k.emit(j()?k.HIDDEN:k.VISIBLE);});e.exports=k;},null);
__d("ViewableImpressionHeatmapLogger",["Banzai"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();h.logFromViewableImpressionTracker=function(i,j){"use strict";var k=new h(j);k.subscribeToTrackerEvents(i);};function h(i){"use strict";this.loggingDurationMS=i;this.trackingEntries={};}h.prototype.subscribeToTrackerEvents=function(i){"use strict";this.visibleSubscription=i.addListener('visible',this.onElementVisible,this);this.hiddenSubscription=i.addListener('hidden',this.onElementHidden,this);};h.prototype.onElementVisible=function(i){"use strict";var j=this.getCurrentTimestamp(),k=this.trackingEntries[i.id];if(!k){k=this.createTrackingEntry(i);this.beginTracking(i.id,k);j=k.startedTrackingTS;}k.viewportProgressEvents.push({timestamp:j,percentInViewport:i.percentInViewport.toFixed(2)});};h.prototype.onElementHidden=function(i){"use strict";var j=this.getCurrentTimestamp(),k=this.trackingEntries[i.id];if(!k)return;k.viewportProgressEvents.push({timestamp:j,percentInViewport:0});};h.prototype.onTrackingCompleted=function(i){"use strict";var j=this.trackingEntries[i];j.viewportProgressEvents.push({timestamp:this.getCurrentTimestamp(),percentInViewport:j.tracker.getPercentInViewport().toFixed(2)});if(this.$ViewableImpressionHeatmapLogger0())this.$ViewableImpressionHeatmapLogger1(i,j);this.logToServer(j);delete this.trackingEntries[i];};h.prototype.logToServer=function(i){"use strict";var j=i;delete j.tracker;g.post('xtrackable:heatmap',j);};h.prototype.beginTracking=function(i,j){"use strict";this.trackingEntries[i]=j;setTimeout(function(){return this.onTrackingCompleted(i);}.bind(this),this.loggingDurationMS);};h.prototype.createTrackingEntry=function(i){"use strict";return {tracker:i.tracker,token:i.token,startedTrackingTS:this.getCurrentTimestamp(),viewportProgressEvents:[]};};h.prototype.getCurrentTimestamp=function(){"use strict";return (Date.now()/1000).toFixed(2);};h.prototype.$ViewableImpressionHeatmapLogger0=function(){"use strict";return 0;};h.prototype.$ViewableImpressionHeatmapLogger1=function(i,j){"use strict";var k='Completed tracking for id '+i+' token='+j.token+' startedTrackingTS='+j.startedTrackingTS+'\n';j.viewportProgressEvents.forEach(function(l){k+='% in view: '+l.percentInViewport+' timestamp='+l.timestamp+'\n';});};e.exports=h;},null);
__d("ViewableImpressionTracker",["Banzai","BrowseClientEventLogger","CSSCore","cx","DOM","getElementPosition","getViewportDimensions","mixInEventEmitter","Style","URI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();function q(r,s,t){"use strict";this.id=r;this.element=s;this.config=t;this.iframe=null;this.viewableTimeout=null;this.clearSubsequentTimeout=null;this.waitForSubsequent=false;this.waitForLogged=false;this.isNonViewableLogged=false;this.isVisible=false;this.banzaiLogged=false;}q.prototype.getID=function(){"use strict";return this.id;};q.prototype.getPercentInViewport=function(){"use strict";var r=m(),s=l(this.element);if(s.x<r.width&&s.x+s.width>0&&s.y<r.height&&s.y+s.height>0&&o.get(this.element,'visibility')!=='hidden'&&o.get(this.element,'opacity')!=='0'){var t=Math.max(s.x,0),u=Math.min(s.x+s.width,r.width),v=Math.max(s.y,0),w=Math.min(s.y+s.height,r.height);if((s.height*s.width)===0)return 100;if(this.config.require_horizontally_onscreen&&((u-t)<s.width||i.hasClass(this.element,"desktop_hscroll_offscreen")))return 0;var x=100*(u-t)*(w-v)/(s.height*s.width);return x;}return 0;};q.prototype.onVisible=function(){"use strict";this.isVisible=true;var r=this.getPercentInViewport(),s=r>this.config.pixel_in_percentage;this.emit('visible',{tracker:this,id:this.getID(),token:this.getToken(),percentInViewport:r});if(!s){this.$ViewableImpressionTracker0();return;}if(this.isLogged()){this.$ViewableImpressionTracker1();}else this.$ViewableImpressionTracker2();if(!this.waitForLogged&&!this.isLogged()){this.waitForLogged=true;this.viewableTimeout=setTimeout(function(){this.waitForLogged=false;var t=this.getPercentInViewport(),u=t>this.config.pixel_in_percentage;if(!u){this.$ViewableImpressionTracker3();return;}this.logImpression(1,{});this.$ViewableImpressionTracker1();}.bind(this),this.config.duration_in_ms);}};q.prototype.onHidden=function(){"use strict";this.emit('hidden',{id:this.getID(),token:this.getToken()});if(this.config.log_initial_nonviewable&&!this.isLogged()&&!this.isNonViewableLogged){this.logNonViewableImpression();}else if(!this.config.log_initial_nonviewable&&!this.isLogged()&&this.isVisible)this.logNonViewableImpression();this.isVisible=false;if(this.waitForLogged){this.waitForLogged=false;clearTimeout(this.viewableTimeout);}if(this.isLogged()&&!this.waitForSubsequent&&this.config.subsequent_gap_in_ms>=0){this.waitForSubsequent=true;this.clearSubsequentTimeout=setTimeout(function(){this.waitForSubsequent=false;this.reset();if(this.isVisible)this.onVisible();}.bind(this),this.config.subsequent_gap_in_ms);}this.$ViewableImpressionTracker3();};q.prototype.onRemoved=function(){"use strict";this.isVisible=false;};q.prototype.getToken=function(){"use strict";return this.element.getAttribute('data-xt');};q.prototype.logImpression=function(r,s){"use strict";if(this.isLogged())return;var t=this.getToken(),u=Math.floor(Date.now()/1000),v={xt:t,isv:r,cts:u};if(g.isEnabled('xtrackable_clientview_batch')&&this.config.should_batch){this.logWithBanzai(v);}else this.logWithIFrame(Object.assign(v,s));};q.prototype.logNonViewableImpression=function(){"use strict";if(this.config.nonviewableEnabled){var r=this.getToken();g.post('xtrackable:nonviewable',{xt:r});}this.isNonViewableLogged=true;};q.prototype.isLogged=function(){"use strict";return this.iframe!==null||this.banzaiLogged;};q.prototype.reset=function(){"use strict";if(this.iframe){k.remove(this.iframe);this.iframe=null;}if(this.banzaiLogged)this.banzaiLogged=false;this.isNonViewableLogged=false;this.isVisible=false;this.waitForLogged=false;this.waitForSubsequent=false;};q.prototype.logWithBanzai=function(r){"use strict";this.banzaiLogged=true;h.maybeLogClientViewEvent(r);g.post('xtrackable:clientview_batch',r);};q.prototype.logWithIFrame=function(r){"use strict";this.iframe=k.create('iframe',{src:new p(this.config.impressionURL).addQueryData(r),width:0,height:0,frameborder:0,scrolling:'no',className:'fbEmuTracking'});this.iframe.setAttribute('aria-hidden','true');k.appendContent(this.element,this.iframe);};q.prototype.$ViewableImpressionTracker4=function(){"use strict";return 0;};q.prototype.$ViewableImpressionTracker0=function(){"use strict";if(this.$ViewableImpressionTracker4()){o.set(this.element,'background-color','#abab9a');o.set(this.element,'outline','3px solid #abab9a');}};q.prototype.$ViewableImpressionTracker2=function(){"use strict";if(this.$ViewableImpressionTracker4()){o.set(this.element,'background-color','#e4f70a');o.set(this.element,'outline','3px solid #e4f70a');}};q.prototype.$ViewableImpressionTracker3=function(){"use strict";if(this.$ViewableImpressionTracker4()){o.set(this.element,'background-color',null);o.set(this.element,'outline',null);}};q.prototype.$ViewableImpressionTracker1=function(){"use strict";if(this.$ViewableImpressionTracker4()){o.set(this.element,'background-color','#047515');o.set(this.element,'outline','3px solid #047515');}};n(q,{visible:true,hidden:true});e.exports=q;},null);
__d("VisibilityTrackingHelper",["Arbiter","DesktopHscrollUnitEventConstants","getViewportDimensions","Event"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k={getEventListeners:function(l){return [j.listen(document,'DOMContentLoaded',l),j.listen(window,'scroll',l),j.listen(window,'resize',l),g.subscribe(h.HSCROLL_ITEM_SHOWN_EVENT,l)];},getViewportInfo:function(){return i();}};e.exports=k;},null);
__d("VisibilityTracking",["Banzai","BrowseClientEventLogger","ErrorUtils","ScriptPath","SubscriptionsHandler","Visibility","VisibilityTrackingHelper","collectDataAttributes","getElementPosition","pageID","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r='visibility_tracking',s='[data-vistracking]',t=500,u=50,v=50,w=50,x=50,y={VISIBLE:'visible',HIDDEN:'hidden'},z={DEFAULT:'default',REMOVED:'removed'},aa={name:y.VISIBLE,cause:z.DEFAULT},ba={name:y.HIDDEN,cause:z.DEFAULT},ca={name:y.HIDDEN,cause:z.REMOVED},da=0;function ea(fa){"use strict";fa=fa||{};if(!fa.bypass_banzai_check&&!g.isEnabled(r))return;this.visibleElementInfo={};this.getDataFromConfig(fa);l.addListener(l.VISIBLE,i.guard(this.fireEvent,'VisibilityTracking:visible',this));if(!this.skipVisibilityHiddenEvents)l.addListener(l.HIDDEN,i.guard(this.clearAllVisibleElements,'VisibilityTracking:hidden',this));j.subscribe(i.guard(this.updateVisibleElements,'VisibilityTracking:scriptPath',this));g.subscribe(g.SHUTDOWN,i.guard(this.onUnload,'VisibilityTracking:banzaiShutdown',this));this.fireEventCallback=q.acrossTransitions(i.guard(this.fireEvent,'VisibilityTracking:fireEventCallback',this),this.timeout,this);this.listeners=new k();m.getEventListeners(this.fireEventCallback).forEach(function(ga){this.listeners.addSubscriptions(ga);},this);if(this.extraInit)i.applyWithGuard(this.extraInit.bind(this));}ea.prototype.getDataFromConfig=function(fa){"use strict";this.config=fa;this.root=fa.root||document.documentElement;this.selector=fa.selector||s;this.timeout=(typeof fa.timeout!=='undefined')?fa.timeout:t;this.minOffsetVisibleFromBottom=(typeof fa.minOffsetVisibleFromBottom!=='undefined')?fa.minOffsetVisibleFromBottom:u;this.minOffsetVisibleFromTop=(typeof fa.minOffsetVisibleFromTop!=='undefined')?fa.minOffsetVisibleFromTop:v;this.minOffsetVisibleFromLeft=(typeof fa.minOffsetVisibleFromLeft!=='undefined')?fa.minOffsetVisibleFromLeft:w;this.minOffsetVisibleFromRight=(typeof fa.minOffsetVisibleFromRight!=='undefined')?fa.minOffsetVisibleFromRight:x;this.handleAllHiddenEvents=(typeof fa.handleAllHiddenEvents!=='undefined')?fa.handleAllHiddenEvents:false;this.handleAllVisibleEvents=(typeof fa.handleAllVisibleEvents!=='undefined')?fa.handleAllVisibleEvents:false;this.skipVisibilityHiddenEvents=(typeof fa.skipVisibilityHiddenEvents!=='undefined')?fa.skipVisibilityHiddenEvents:false;this.cacheTrackedElements=(typeof fa.cacheTrackedElements!=='undefined')?fa.cacheTrackedElements:false;};ea.prototype.getAllTrackedElements=function(){"use strict";if(!this.allTrackedElements){this.allTrackedElements={};if(this.root.querySelectorAll){var fa=this.root.querySelectorAll(this.selector);for(var ga=0;ga<fa.length;ga++){var ha=this.getElementID(fa[ga]);this.allTrackedElements[ha]=fa[ga];}}}return this.allTrackedElements;};ea.prototype.refreshAllTrackedElements=function(){"use strict";delete this.allTrackedElements;return this.getAllTrackedElements();};ea.prototype.getDataToLog=function(fa){"use strict";var ga=Object.assign(n(fa,['gt']).gt,{client_time:Date.now()/1000,time_spent_id:p,script_path:j.getScriptPath()});return ga;};ea.prototype.getElementID=function(fa){"use strict";var ga=fa.$VisibilityTracking0;if(ga)return ga;fa.$VisibilityTracking0=++da;return da;};ea.prototype.sendDataToLog=function(fa){"use strict";h.maybeLogVisiblityEvent(fa);g.post(r,fa);};ea.prototype.fireEvent=function(){"use strict";var fa=this.cacheTrackedElements?this.allTrackedElements:this.refreshAllTrackedElements();for(var ga in fa){var ha=fa[ga],ia=m.getViewportInfo(),ja=this.isVisible(ha,ia);if(!ja&&(ga in this.visibleElementInfo||this.handleAllHiddenEvents)){this.handleEvent(ha,ba);}else if(ja&&(!(ga in this.visibleElementInfo)||this.handleAllVisibleEvents))this.handleEvent(ha,aa);}this.clearUntrackedVisibleElements();};ea.prototype.isVisible=function(fa,ga){"use strict";var ha=o(fa);return (ha.x||ha.y||ha.width||ha.height)&&(ha.y+ha.height>=this.minOffsetVisibleFromTop)&&(ha.y<=ga.height-this.minOffsetVisibleFromBottom)&&(ha.x+ha.width>=this.minOffsetVisibleFromLeft)&&(ha.x<=ga.width-this.minOffsetVisibleFromRight);};ea.prototype.handleEvent=function(fa,event){"use strict";var ga=this.getElementID(fa),ha=this.getDataToLog(fa),ia;if(event.name===y.VISIBLE){var ja=Math.floor(Date.now()/1000);ia=p.concat(":",ja.toString(),":",this.getElementID(fa).toString());this.visibleElementInfo[ga]={visibility_id:ia,elem:fa};}else if(event.name===y.HIDDEN)if(ga in this.visibleElementInfo){ia=this.visibleElementInfo[ga].visibility_id;delete this.visibleElementInfo[ga];}this.sendDataToLog(Object.assign(ha,{event:event.name,visibility_id:ia}));};ea.prototype.clearUntrackedVisibleElements=function(){"use strict";var fa=this.getAllTrackedElements();for(var ga in this.visibleElementInfo)if(!(ga in fa)){var ha=this.visibleElementInfo[ga];if(ha.elem)this.handleEvent(ha.elem,ca);}};ea.prototype.clearAllVisibleElements=function(){"use strict";var fa=this.getAllTrackedElements();for(var ga in fa)if(ga in this.visibleElementInfo)this.handleEvent(fa[ga],ba);this.clearUntrackedVisibleElements();};ea.prototype.updateVisibleElements=function(){"use strict";this.clearAllVisibleElements();this.fireEvent();};ea.prototype.refreshAndFireEvent=function(){"use strict";this.refreshAllTrackedElements();this.fireEventCallback();};ea.prototype.onUnload=function(){"use strict";this.clearAllVisibleElements();if(this.listeners){this.listeners.release();this.listeners=null;}if(this.extraCleanup)i.applyWithGuard(this.extraCleanup.bind(this));};ea.init=function(fa){"use strict";new ea(fa);};ea.EVENT=y;ea.CAUSE=z;e.exports=ea;},null);
__d("ViewableImpressionEventHandler",["ViewableImpressionHeatmapLogger","ViewableImpressionTracker","VisibilityTracking"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=1;for(var k in i)if(i.hasOwnProperty(k))m[k]=i[k];var l=i===null?null:i.prototype;m.prototype=Object.create(l);m.prototype.constructor=m;m.__superConstructor__=i;function m(){"use strict";if(i!==null)i.apply(this,arguments);}m.prototype.extraInit=function(){"use strict";this.impressionTrackers={};};m.prototype.getDataFromConfig=function(n){"use strict";l.getDataFromConfig.call(this,n);this.doHeatmapLogging=n.doHeatmapLogging;this.heatmapLoggingDurationMS=n.heatmapLoggingDurationMS;n.impressionURL=(n.impressionURL!==(void 0))?n.impressionURL:'/xti.php';n.nonviewableEnabled=(n.nonviewableEnabled!==(void 0))?n.nonviewableEnabled:false;};m.prototype.getImpressionTracking=function(n){"use strict";var o=this.getElementID(n),p=Object.assign({},this.getConfigFromElement(n),this.config),q=this.impressionTrackers[o];if(!q){q=new h(o,n,p);this.impressionTrackers[o]=q;if(this.doHeatmapLogging)g.logFromViewableImpressionTracker(q,this.heatmapLoggingDurationMS);}return q;};m.prototype.handleEvent=function(n,event){"use strict";var o=this.getImpressionTracking(n);if(!o)return;if(event.name===i.EVENT.VISIBLE){o.onVisible();if(!this.visibleElementInfo[o.getID()])this.visibleElementInfo[o.getID()]={elem:n};}else if(event.name===i.EVENT.HIDDEN)if(event.cause===i.CAUSE.DEFAULT){o.onHidden();delete this.visibleElementInfo[o.getID()];}else if(event.cause===i.CAUSE.REMOVED){o.onRemoved();delete this.visibleElementInfo[o.getID()];delete this.impressionTrackers[o.getID()];}};m.prototype.getConfigFromElement=function(n){"use strict";return JSON.parse(n.getAttribute('data-xt-vimp'));};m.prototype.getElementID=function(n){"use strict";if(!n.getAttribute('id'))n.setAttribute('id','xt_uniq_'+j++);return n.getAttribute('id');};e.exports=m;},null);
__d("legacy:async-signal",["AsyncSignal"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.AsyncSignal=b('AsyncSignal');},3);
__d("ViewableImpressionTracking",["Arbiter","DesktopHscrollUnitEventConstants","ErrorUtils","LitestandMessages","Run","ViewableImpressionEventHandler","ViewableImpressionConfig"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n={init:function(){if(l.instance===(void 0)){l.instance=new l(m);l.instance.listeners.addSubscriptions(g.subscribe([j.STORIES_INSERTED,'AdsRefreshHandler/AdsLoaded','MPPInsights/ChartView','PhotoSnowliftAds/displayUnits','WebMessengerAdsControl/adjustAds',h.HSCROLL_ITEM_INSERTED_EVENT],i.guard(function(){l.instance.refreshAndFireEvent();},'ViewableImpressionTracking')));}k.onLoad(function(){l.instance.refreshAndFireEvent();});}};e.exports=n;},null);
__d("MercuryLeftNav",["Arbiter","MessagingTag","NavigationMessage","MercuryThreadInformer","MercuryUnreadState"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=b('MercuryThreadInformer').get(),k=b('MercuryUnreadState').get(),l=false;function m(){var o=k.getUnreadCount(h.INBOX);g.inform(i.NAVIGATION_COUNT_UPDATE,{key:'inbox',hide:true});g.inform(i.NAVIGATION_COUNT_UPDATE,{key:'inbox',count:o});}var n={bootstrap:function(){if(l)return;j.subscribe('unread-updated',m);l=true;}};e.exports=n;},null);
__d("EgoUnitSlideInsert",["Animation","CSS","DataStore","DOM","Ease","Event","Parent","TidyArbiterMixin","cx","copyProperties","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r='sliding',s="EgoSlider/End",t=p({isSliding:function(u){return i.get(u,r);},runAfterSlide:function(u,v){var w=q(t.subscribe(s,function(x,y){if(y===u){w&&w.unsubscribe();v();}}));},registerSlide:function(u,v){l.listen(u,'click',function(w){var x=m.byClass(w.getTarget(),"_5cl_");if(!x)return;var y=m.byClass(u,'ego_unit'),z=0,aa=m.byClass(y,'ego_unit_container'),ba=j.scry(aa,'.ego_unit')[0];if(ba===y)if(y.nextSibling){y.nextSibling.style.paddingTop='0px';y.nextSibling.style.borderTop='0px';}h.addClass(y,"_5cl-");i.set(y,r,true);new g(y).to('height',0).to('padding-top',z).to('padding-bottom',0).to('margin',0).from('opacity',1).to('opacity',0).ease(k.circOut).duration(300).checkpoint(1,function(){j.appendContent(aa,y);j.prependContent(y,v);i.remove(y,r);}).to('height',12).to('opacity',1).to('margin-bottom',10).duration(0).checkpoint(2,function(){t.inform(s,y);}).go();});}},n);e.exports=t;},null);
__d("NetEgo",["Animation","Arbiter","csx","CSS","DOM","EgoUnitSlideInsert","PageLikeButton","Parent","URI","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();var q={setup:function(r){h.subscribe([m.LIKED,'FriendRequest/sending'],function(s,t){if((r==t.profile_id&&t.origin=='hovercard')||r==t.uid){var u=p(document.body,'.ego_unit_container');if(u){var v=k.scry(u,'.ego_unit'),w=v.length;for(var x=0;x<w;x++){var y=v[x].getAttribute('data-ego-fbid');if(y==r){var z=k.scry(v[x],'.ego_action a')[0];if(z)z.click();break;}}}}});},updateXids:function(r,s,t){if(r.length==0&&s.length==0)return;var u=function(ea){return function(fa){var ga=fa.getAttribute(ea);if(!ga)return false;var ha=new o(ga).getQueryData();return !!ha.xids;};},v=k.scry(document.body,'.ego_unit a');v=v.filter(u('ajaxify'));if(v.length==0)return;var w=new o(v[0].getAttribute('ajaxify')),x=w.getQueryData();if(!x.xids)return;var y=null;try{y=JSON.parse(x.xids);}catch(z){return;}if(t)for(var aa=0;aa<r.length;++aa)delete y[r[aa]];for(aa=0;aa<s.length;++aa)y[s[aa]]=1;var ba=JSON.stringify(y),ca=function(ea,fa){w=new o(ea.getAttribute(fa));x=w.getQueryData();x.xids=ba;w.setQueryData(x);ea.setAttribute(fa,w.toString());};for(aa=0;aa<v.length;++aa)ca(v[aa],'ajaxify');var da=k.scry(document.body,'.ego_unit form');da=da.filter(u('action'));for(aa=0;aa<da.length;++aa)ca(da[aa],'action');},replaceUnit:function(r,s,t,u){q.replaceUnitCheckParent(r,s,t,u,'');},replaceUnitCheckParent:function(r,s,t,u,v){var w=n.byClass(r,'ego_unit_container');if(w&&l.isSliding(r)){var x=k.appendContent(w,s);x.forEach(j.hide);l.runAfterSlide(r,q._replaceUnitElement.bind(null,r,x,v));}else q._replaceUnit(r,s,t,u,v);},_replaceUnit:function(r,s,t,u,v){var w=k.insertAfter(r,s);w.forEach(j.hide);if(u!==(void 0)&&u!==null){setTimeout(function(){q._replaceUnitFadeout(r,w,t,v);},u);}else q._replaceUnitFadeout(r,w,t,v);},_replaceUnitFadeout:function(r,s,t,u){if(t){new g(r).from('opacity',1).to('opacity',0).duration(t).checkpoint(1,function(){q._replaceUnitElement(r,s,u);}).go();}else q._replaceUnitElement(r,s,u);},_replaceUnitElement:function(r,s,t){var u=j.hasClass(r,'ego_unit')?r.parentNode:null;if(u&&u.tagName==='LI')u=k.scry(r.parentNode,'^ul')[0];k.remove(r);if(s.length)s.forEach(j.show);h.inform('netego_replacedUnit',{serializedData:t,numUnitsRemained:u.childNodes.length});q.clearHeader();},clearHeader:function(){var r=k.scry(document.body,'.ego_column'),s=[];for(var t=0;t<r.length;++t)s=s.concat(k.scry(r[t],'.uiHeader'));for(t=0;t<s.length;++t){var u=s[t].nextSibling,v=k.find(u,"._2xq");if(!v)v=u;if(!v||v.childNodes.length===0){k.remove(s[t]);}else if(v.childNodes.length===1){var w=v.childNodes[0];if(j.hasClass(w,'ego_appended_units')&&w.childNodes.length===0)k.remove(s[t]);}}}};e.exports=q;},null);