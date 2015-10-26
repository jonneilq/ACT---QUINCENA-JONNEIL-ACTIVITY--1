/*!CK:1980312649!*//*1435190730,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["LmkF1"]); }

__d("CustomCallToActionConstants",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={WEB:"CUSTOM_CTA_PLATFORM_WEB",IOS:"CUSTOM_CTA_PLATFORM_IOS",ANDROID:"CUSTOM_CTA_PLATFORM_ANDROID",PRIMARY_LINK:"customCTAEditPrimaryLink",PRIMARY_LINK_TYPE:"customCTAEditPrimaryLinkType",FALLBACK_LINK_TYPE:"customCTAEditFallbackLinkType",FALLBACK_LINK:"customCTAEditFallbackLink",APP_ID:"appID",COVER_PHOTO_SURFACE:"coverPhoto",HOVER_CARD_SURFACE:"hoverCard",PAGE_PLUGIN_SURFACE:"pagePlugin",SKIP_PROMOTION:"skip_promotion",GK_BYPASS:"pages_custom_cta_bypass",GK_PID:"pages_custom_cta_pid_2",GK_UID:"pages_custom_cta_uid",GK_CONTEXTUAL_ROW_UID:"pages_custom_cta_contextual_row_uid",GK_CONTEXTUAL_ROW_ADMIN_UID:"pages_custom_cta_contextual_row_admin_uid",GK_FOLLOW_BUTTON_IN_LIKE_DROPDOWN:"pages_follow_button_in_like_dropdown",GK_HOVER_CARD:"custom_cta_hover_card_uid",GK_SHOW_IN_SPRINGBOARD_UID:"pages_custom_cta_show_in_springboard_uid",GK_ADMIN_UID:"custom_cta_admin_uid",GK_PROMOTION_ADMIN_UID:"custom_cta_promotion_admin_uid",GK_CONTACT_US_PROMOTION:"ccta_contact_us_promotion",GK_CUSTOM_CTA_CALLOUT:"custom_cta_callout",GK_SHOW_VIEWER_UNIT_IN_LOGGED_OUT_VIEW:"custom_cta_show_viewer_unit_when_logged_out",NECTAR_APP_NAME:"custom_cta",GK_CCTA_NEW_DIALOG:"ccta_new_dialog",OPEN_APP_ID:1,OPEN_WEBSITE_ID:2};},null);
__d("AdsCurrencyFormatter",["Currency","NumberFormatConfig","intlNumUtils"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();function j(da){return Math.round(Math.log(da)/Math.LN10);}function k(da,ea,fa){var ga=g.getFormat(da)||'{symbol}{amount}',ha=g.getSymbol(da)||'',ia=ga.replace('{symbol}',ha).replace('{amount}',ea);if(fa)return ia+' '+g.getISO(da);return ia;}function l(da,ea,fa){var ga=g.getOffset(da)||100,ha=j(ga);return i.formatNumberRaw(ea/ga,ha,fa?h.numberDelimiter:'',h.decimalSeparator,h.minDigitsForThousandsSeparator);}function m(da,ea,fa,ga){var ha=l(da,ea,ga);return k(da,ha,fa);}function n(da,ea){return m(da,ea);}function o(da,ea){return l(da,ea);}function p(da,ea){return m(da,ea,true);}function q(da,ea){return m(da,ea,false,true);}function r(da,ea){var fa=g.getOffset(da)||100,ga=j(fa);while(ea!==0&&Math.round(ea*Math.pow(10,ga)/fa)<1)ga++;var ha=i.formatNumberRaw(ea/fa,ga,h.numberDelimiter,h.decimalSeparator,h.minDigitsForThousandsSeparator);return k(da,ha,false);}function s(da,ea){var fa=g.getOffset(da)||100,ga=j(fa);if(ga&&(ea%fa===0))ga=0;var ha=i.formatNumberRaw(ea/fa,ga,'',h.decimalSeparator);return k(da,ha,false);}function t(da,ea,fa){return w(n(da,ea),n(da,fa));}function u(da,ea,fa,ga){if(ga-fa<ea){return n(da,ga);}else return t(da,fa,ga);}var v='\u2013';function w(da,ea){return da+v+ea;}function x(da,ea,fa){return y(da,ea,fa)||0;}function y(da,ea,fa){var ga=g.getOffset(da),ha=i.parseNumberRaw(ea,fa,h.numberDelimiter);if(ha==null)return null;return Math.round(ha*ga);}function z(da,ea){var fa=g.getOffset(da),ga=j(fa),ha=i.parseNumber(ea)||0;return +(ha).toFixed(ga);}function aa(da,ea,fa){var ga=fa||h.decimalSeparator;return x(da,ea,ga);}function ba(da,ea,fa){var ga=fa||h.decimalSeparator;return y(da,ea,ga);}function ca(da,ea,fa,ga){return m(da,ea,fa,ga);}e.exports={formatCurrency:n,formatCurrencyAtLeastOneSigFig:r,formatCurrencyFullFormat:ca,formatCurrencyNoSymbol:o,formatCurrencyRange:t,formatCurrencyRangeWithThreshold:u,formatCurrencyWithISO:p,formatCurrencyWithNumberDelimiters:q,formatCurrencyWithOptionalDecimals:s,formatRange:w,parseCurrency:aa,parseOptionalCurrency:ba,parsePECurrency:z};},null);
__d("CIWebmailValidator",["AsyncRequest","URI"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i,j=false,k=false,l=[];function m(o){var p=o.tokens;delete o.tokens;for(var q in o){var r=o[q];for(var s in p){if(!p.hasOwnProperty(s))continue;var t=s.replace(/([.?*+\^$\[\]\\(){}\-])/g,"\\$1"),u=new RegExp(t,"g");r=r.replace(u,p[s]);}o[q]=r;}i=o;j=true;while(l.length>0)(l.shift())();}var n={flow:null,useCase:null,hasFullMapping:function(){return j;},init:function(o,p,q){if(!j&&!k)i=o;this.flow=p;this.useCase=q;},isValidEmail:function(o){var p=new RegExp("[A-Za-z0-9_!#$%&'*+/=?^`{|}~-]+(?:\\.[A-Za-z0-9_!#$%&'*+/=?^`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?");return p.test(o);},getDomain:function(o){var p=o.split('@');return p[1];},getDomainImporterName:function(o){var p=['msft','yahoo','gmail','yahoo_jp','ezweb_jp','other'],q=o.split(/\./);for(var r=0;r<q.length-1;r++){var s=q.slice(r).join('.');s='|'+s.toLowerCase();for(var t=0;t<p.length;t++){var u=p[t];if(i[u].indexOf(s)!=-1)return u;}}return null;},getImporterName:function(o){return this.getDomainImporterName(this.getDomain(o));},isLiveDomain:function(o){return this.getImporterName(o)=='msft';},isGmailDomain:function(o){return this.getImporterName(o)=='gmail';},isYahooDomain:function(o){return this.getImporterName(o)=='yahoo';},isYahooJpDomain:function(o){return this.getImporterName(o)=='yahoo_jp';},isSupportedDomain:function(o){var p=this.getDomainImporterName(this.getDomain(o));return p!=null;},downloadDomainMapping:function(o){if(j)return;if(o)l.push(o);var p=new h('/contact_importer/ajax/get_domains.php').addQueryData({flow:this.flow,use_case:this.useCase});if(!k){k=true;new g().setURI(p).setMethod('GET').setReadOnly(true).setHandler(function(q){var r=q.getPayload();m(r);}).send();}},setDomainMapping:function(o){m(o);}};e.exports=n;a.CIWebmailValidator=n;},null);
__d("AdsOfferClaimsDestinationEditorDelegate",["AdsAPIObjectives","AdsCFCreativeStore","AdsCFDestinationStore","AdsCFDestinationUtils","AdsCFPostsDestinationEditorContainer.react","AdsCreativeUtils","AdsDestinationEditorDelegate","AdsObjectivesConfig","Link.react","React","fbt","ads-objectives"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();'use strict';var r=b('ads-objectives').KPIObjectives;for(var s in m)if(m.hasOwnProperty(s))u[s]=m[s];var t=m===null?null:m.prototype;u.prototype=Object.create(t);u.prototype.constructor=u;u.__superConstructor__=m;function u(){if(m!==null)m.apply(this,arguments);}u.prototype.$AdsOfferClaimsDestinationEditorDelegate0=function(){var v=h.getState(),w=i.getPagePosts(),x=l.getPagePostFromStoryId(v.storyId,w);return l.getIsPagePostExpiredOffer(x);};u.prototype.canContinue=function(v){var w=h.getState(),x=j.isUnpublishedPage(v.type,v.details),y=i.getPagePosts();return !!(!x&&w.storyId&&!this.$AdsOfferClaimsDestinationEditorDelegate0()&&y.length>0&&v.details.offerEligible);};u.prototype.canNeverContinue=function(v){return !!(this.$AdsOfferClaimsDestinationEditorDelegate0()||!v.details.offerEligible);};u.getObjective=function(){return g.OFFER_CLAIMS;};u.prototype.getObjectiveSuggestionsMessage=function(v,w){if(w.isValidForObjective)return null;if(!v)return (q._("You've entered a destination that can't be used with the {current_objective} objective. {=Learn more}.",[q.param("current_objective",n.getName(r.OFFER_CLAIMS)),q.param("=Learn more",p.createElement(o,{href:"/help/www/376886339005158",target:"_blank"},q._("Learn more")))]));if(!w.details.hasEnoughFansForOffers)return (q._("More people need to like your Page before you can promote an offer. {helpCenterLink}",[q.param("helpCenterLink",p.createElement(o,{href:{url:'/help/www/102534329872055'},target:"_blank"},q._("Learn More")))]));};u.prototype.getLoadingText=function(){return q._("Loading Page details...");};u.prototype.getPlaceholderText=function(){return q._("Choose Page or enter its URL");};u.prototype.renderEditor=function(v){var w=q._("Create new Offer");return (p.createElement(k,p.__spread({canShowLWComposer:true,createNewPostText:w},v)));};e.exports=u;},null);
__d("AdsCFCreativeLocalAwarenessFields.react",["AdsCallToActionTypes","AdsCFCallNowStrings","AdsCFConstants","AdsCFCreativeContentFieldsMixin","AdsCFCreativeViewActions","AdsCFLabeledField.react","AdsCreativeCallToActionField.react","AdsTextInput.react","FBPhoneNumberInput.react","Link.react","React","URI","XUIText.react","adsGKCheck","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){b.__markCompiled&&b.__markCompiled();'use strict';var w=g.TYPES.CALL_NOW.name,x=g.TYPES.GET_DIRECTIONS.name,y=g.TYPES.LEARN_MORE.name,z=g.TYPES.MESSAGE_PAGE.name,aa=q.createClass({displayName:"AdsCFCreativeLocalAwarenessFields",mixins:[j],render:function(){var ba={linkDescription:this.renderLinkDescription()};return (q.createElement("div",null,q.createElement("fieldset",null,this.renderBody(),this.renderTitle(),this.renderLocalAwarenessCallToAction()),this.renderAdvancedFieldsToggler(),this.renderAdvancedFields(ba)));},renderLocalAwarenessCallToAction:function(){var ba=this.props.createMode===i.CreateMode.EDIT_EXISTING,ca=this.props.creative.callToActionType;if(ba&&!ca)return null;var da=[];if(this.props.creative.getDirectionsUrl||ca===x)da.push(x);if(t('ads_cf_instore_call_now_cta'))da.push(w);if(t('ads_local_awareness_message_page_cta'))da.push(z);if(t('ads_cf_instore_learn_more_cta'))da.push(y);var ea=v._("Call to Action"),fa=v._("Choose the action you want people to take when they see your ad."),ga;if(!ba)if(ca===x){ga=this._renderGetDirectionsDetails();}else if(ca===w){ga=this._renderCallNowDetails();}else if(ca===y){ga=this._renderLearnMoreDetails();}else if(!ca&&!this.props.creative.getDirectionsUrl)ga=this._renderGetDirectionsUnavailableMessage();return (q.createElement(l,{label:ea,helpText:fa,className:"_5yy9"},q.createElement(m,{availableTypes:da,isReadOnly:ba,noButtonLabel:g.TYPES.LIKE_PAGE.text,onChange:this._onCallToActionChange,selectedType:ca}),ga));},_renderGetDirectionsDetails:function(){if(this.props.creative.getDirectionsUrl)return (q.createElement("div",{className:"_3-8y"},v._("When people click Get Directions, they'll see a map to the business address listed on your Page.")));},_renderCallNowDetails:function(){return (q.createElement("div",null,q.createElement("div",{className:"_3-8y"},h.CALL_NOW_DESCRIPTION),q.createElement(o,{onFragmentChange:k.callNowFragmentChange,onFragmentSubmit:k.callNowFragmentSubmit,placeholder:h.PHONE_NUMBER_PLACEHOLDER,view:this.props.creative.callNowPhoneNumberView})));},_renderLearnMoreDetails:function(){return (q.createElement("div",null,q.createElement("div",{className:"_3-8y"},v._("When people click {=Learn More} on an ad, they will be taken to your website.",[v.param("=Learn More",g.TYPES.LEARN_MORE.text)])),q.createElement(n,{className:"_3-8n",helpText:v._("Enter the destination URL that you want to promote. Ex: 'http:\/\/www.example.com\/about'"),label:v._("Learn More URL"),onChange:k.setCreativeCallToActionLink,placeholder:v._("Enter the URL you want to promote"),value:this.props.creative.callToActionLink})));},_renderGetDirectionsUnavailableMessage:function(){var ba;if(this.props.destinationDetails.canEdit){ba=v._("Before you can select the {=Get Directions} button, you need to add an address to your Page.",[v.param("=Get Directions",g.TYPES.GET_DIRECTIONS.text)]);}else{var ca=this.props.destinationID;ba=v._("Before you can select the {=Get Directions} button, please ask an admin of {Page title} to add an address to the Page. {Message the Page}",[v.param("=Get Directions",g.TYPES.GET_DIRECTIONS.text),v.param("Page title",q.createElement(s,{weight:"bold"},this.props.destinationDetails.destinationTitle)),v.param("Message the Page",q.createElement(p,{ajaxify:new r('/ajax/messaging/composer.php').setQueryData({ids:[ca],ref:'ads'}),href:'/messages/'+ca,rel:"dialog",target:"_blank"},v._("Send a message")))]);}return (q.createElement("div",{className:"_3-8y"},ba));},_onCallToActionChange:function(ba){k.setCreativeCallToActionType(ba.value);}});e.exports=aa;},null);
__d("BizSiteHeader",["StickyController","Style","ViewportBounds"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();'use strict';var j={registerStickyListener:function(k){if(h.isFixed(k)){i.addTop(i.getTop()+k.offsetHeight);i.addPersistentTop(k.offsetHeight);}else new g(k,0).start();}};e.exports=j;},null);
__d("Alignment",["DOMVector","Style","containsNode","invariant"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(m,n,o){"use strict";this.$Anchor0=n;this.$Anchor1=o;this.$Anchor2=m;}k.prototype.getElement=function(){"use strict";return this.$Anchor2;};k.prototype.getX=function(){"use strict";return this.$Anchor0;};k.prototype.getY=function(){"use strict";return this.$Anchor1;};k.prototype.isCorner=function(){"use strict";return ((this.$Anchor0===k.LEFT||this.$Anchor0===k.RIGHT)&&(this.$Anchor1===k.TOP||this.$Anchor1===k.BOTTOM));};k.prototype.getPosition=function(m){"use strict";return g.getElementPosition(this.$Anchor2,m).add(this.getX()*this.$Anchor2.offsetWidth,this.getY()*this.$Anchor2.offsetHeight);};Object.assign(k,{LEFT:0,CENTER:.5,RIGHT:1,TOP:0,MIDDLE:.5,BOTTOM:1});function l(m,n,o){"use strict";this.$Alignment0=m;this.$Alignment1=n;this.$Alignment2=o;j(i(m.getElement(),n.getElement()));j(m.isCorner());}l.prototype.align=function(){"use strict";l.$Alignment3(this.$Alignment0,function(){return l.measure(this.$Alignment1,this.$Alignment2);}.bind(this));};l.$Alignment3=function(m,n){"use strict";var o=m.getElement();h.apply(o,{left:m.getX()===k.LEFT?'0':'',right:m.getX()===k.RIGHT?'0':'',top:m.getY()===k.TOP?'0':'',bottom:m.getY()===k.BOTTOM?'0':''});var p=n();if(m.getX()===k.LEFT){h.set(o,'left',p.x+'px');}else if(m.getX()===k.RIGHT)h.set(o,'right',-p.x+'px');if(m.getY()===k.TOP){h.set(o,'top',p.y+'px');}else if(m.getY()===k.BOTTOM)h.set(o,'bottom',-p.y+'px');};l.position=function(m,n){"use strict";l.$Alignment3(m,function(){var o=g.getElementPosition(m.getElement());return n.convertTo('document').sub(o);});};l.measure=function(m,n){"use strict";var o=m.getPosition('document'),p=n.getPosition('document');return p.sub(o);};l.Anchor=k;e.exports=l;},null);
__d("CustomCTAConstants",["fbt","CustomCallToActionConstants","CustomCallToActionTypes"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=b('CustomCallToActionTypes').TYPES,j={NO_DIALOG:'CUSTOM_CTA_DIALOG_NONE',DELETE_DIALOG:'CUSTOM_CTA_DIALOG_DELETE',EDIT_DIALOG:'CUSTOM_CTA_DIALOG_EDIT',PROMOTE_DIALOG:'CUSTOM_CTA_DIALOG_PROMOTE',UPDATE_ALERT_DIALOG:'CUSTOM_CTA_DIALOG_UPDATE_ALERT',OPEN_APP_ID:"1",OPEN_WEBSITE_ID:"2",SHOW_FLYOUT:'SHOW_FLYOUT',CREATE_DIALOG_WIDTH:778,CREATE_DIALOG_HEIGHT:504,PREVIEW_WIDTH:436,PREVIEW_HEIGHT:416,NEW_PREVIEW_WIDTH:412,NEW_PREVIEW_HEIGHT:346,SELECTOR_WIDTH:194,URI_TRUNCATE_LENGTH:30,WEBSITE_BAR_ITEM:'Website',IPHONE_BAR_ITEM:'iPhone',ANDROID_BAR_ITEM:'Android',CREATE_CTA_TYPE_OPTIONS:[i.BOOK_NOW,i.CONTACT_US,i.OPEN_APP,i.PLAY_NOW,i.SHOP_NOW,i.SIGN_UP,i.WATCH_NOW],PLATFORM_TYPE:'CUSTOM_CTA_PLATFORM_TYPE',WEB:h.WEB,IOS:h.IOS,ANDROID:h.ANDROID,APP_ID:h.APP_ID,FALLBACK_LINK_TYPE:h.FALLBACK_LINK_TYPE,FALLBACK_LINK:h.FALLBACK_LINK,PRIMARY_LINK:h.PRIMARY_LINK,PRIMARY_LINK_TYPE:h.PRIMARY_LINK_TYPE,FALLBACK_INSTALL_APP:'fallback_install_app',FALLBACK_GO_TO_WEBSITE:'fallback_go_to_website',API_URL:'https://graph.facebook.com/',INSIGHTS_LABEL:g._("View Insights"),EDIT_LABEL:g._("Edit call to action"),DELETE_LABEL:g._("Delete call to action"),TEST_LABEL:g._("Go to Link..."),PROMOTE_LABEL:g._("Promote"),EDIT_PROMOTION_LABEL:g._("Edit Promotion"),DELETE_DIALOG_TITLE:g._("Delete Call-to-Action Button"),DELETE_DIALOG_MESSAGE:g._("Do you really want to delete the call-to-action button from your Facebook Page?"),DELETE_DURING_PROMOTION_DIALOG_TITLE:g._("This Change Will End Your Ad"),DELETE_DURING_PROMOTION_DIALOG_MESSAGE:g._("You're currently promoting this call to action. If you delete it, your ad will end."),UPDATE_DURING_PROMOTION_DIALOG_TITLE:g._("This Change Will Affect Your Ad"),UPDATE_DURING_PROMOTION_DIALOG_MESSAGE:g._("If you update your call to action here, it will also update in your current ad. Your ad will go through the review process again."),WEBSITE_LABEL:g._("Website"),IPHONE_LABEL:g._("iPhone"),ANDROID_LABEL:g._("Android"),CREATE_LABEL:g._("Create Call to Action"),CREATE_TOOLTIP:g._("Add a button to get people to take an action from your Page such as shop or sign up"),CREATE_DIALOG_TITLE:g._("Add Call-to-Action Button"),CREATE_DIALOG_BODY_MESSAGE:g._("Add a button to your Page that takes people directly to your app or website."),CREATE_DIALOG_BODY_MESSAGE_IOS:g._("Choose where to send people when they tap the button on an iPhone or an iPad."),CREATE_DIALOG_APPLINK_MESSAGE_IOS:g._("Add an iOS deep link URL for your app."),CREATE_DIALOG_APPLINK_MESSAGE_ANDROID:g._("Add a Android deep link URL for your app."),CREATE_DIALOG_BACKUP_LINK_MESSAGE:g._("Enter where to send people who don't have the app installed. If left blank it will open the website entered in the previous screen."),CREATE_DIALOG_BODY_MESSAGE_ANDROID:g._("Choose where to send people when they tap the button on Android."),EDIT_SECTION_MESSAGE:g._("These are the destination website and app links we'll send people to after they click or tap your call-to-action button:"),EDIT_SECTION_EXAMPLE:g._("For example, you may want to send someone using a mobile device to your app, or to your website if theyre on a desktop computer."),CREATE_DIALOG_PACKAGE_NAME_MESSAGE_ANDROID:g._("Add the package name of your app"),EDIT_SECTION_APP_LINK_HELP_MESSAGE:g._("Have an app or mobile website that was not found?"),CREATE_LOADING_MESSAGE:g._("Finding websites and apps connected to your Page..."),CREATE_SELECT_CTA_LABEL:g._("Button Label"),CREATE_INVALID_WEB_LINK:g._("Invalid link or URL"),CREATE_INVALID_PACKAGE_NAME:g._("Invalid package name"),CREATE_INVALID_APP_LINK:g._("Invalid app link"),CREATE_IPHONE_DEEP_LINK_TEXT:g._("We will open the app selected above if installed"),CREATE_ANDROID_DEEP_LINK_TEXT:g._("We will open the app selected above if installed"),CREATE_INVALID_URL_LINK:g._("Invalid URL link"),EDIT_CARD_WEB_TITLE:g._("Computer"),EDIT_CARD_IOS_TITLE:g._("iPhone or other iOS device"),EDIT_CARD_ANDROID_TITLE:g._("Android phone or tablet"),EDIT_CARD_OTHER_M_TITLE:g._("Other smartphone"),EDIT_LINK_TOOLTIP:g._("Make changes to this link address"),WEB_LINK_INPUT_LABEL:g._("Website"),WEB_LINK_INPUT_PLACEHOLDER:g._("Example: {url}",[g.param("url",'www.mywebsite.com')]),MOBILE_LINK_INPUT_LABEL:g._("Mobile Website"),APP_LINK_INPUT_LABEL:g._("App Link"),APP_LINK_INPUT_LABEL_TOOLTIP:g._("This is the link address people will go to after tapping or clicking on your call-to-action button"),APP_LINK_INPUT_PLACEHOLDER:g._("Enter a link to your app"),APP_DESTINATION_SELECTOR_LABEL:g._("Destination"),APP_DESTINATION_SELECTOR_LABEL_TOOLTIP:g._("Choose the type of destination you want people to go to after tapping or clicking on your call-to-action button"),FALLBACK_CTA_SELECTOR_LABEL:g._("Backup"),FALLBACK_CTA_SELECTOR_LABEL_TOOLTIP:g._("Choose the type of destination you want people to go to after tapping or clicking on your call-to-action button if they haven't yet registered or installed your app"),FALLBACK_LINK_INPUT_LABEL:g._("Backup URL"),FALLBACK_LINK_INPUT_LABEL_TOOLTIP:g._("This is the link address people will go to after tapping or clicking on your call-to-action button if they haven't yet registered or installed your app"),STORE_ID_LABEL:g._("Store ID"),STORE_ID_TOOLTIP:g._("ID of app in Apple store or Google play store"),GO_TO_WEBSITE_LABEL:g._("Go to Website"),PACKAGE_NAME_LABEL:g._("Package Name"),REVIEW_DESTINATION_LINKS_TITLE:g._("Review Button Destination Links"),CREATE_CALL_TO_ACTION_WEBSITE:g._("Create a Call-to-Action Button"),EDIT_CALL_TO_ACTION_WEBSITE:g._("Edit Call-to-Action Button"),CREATE_CALL_TO_ACTION_IPHONE:g._("Choose a Destination For People Using iOS"),CREATE_CALL_TO_ACTION_ANDROID:g._("Choose a Destination For People Using Android"),CREATE_CALL_TO_ACTION_IPAD:g._("Choose a Destination For People Using iPad"),ACTION_SELECTOR_LABEL:g._("Choose a Button"),OPTIONAL_LABEL:g._("Optional"),IOS_SECTION_TITLE:g._("iOS Destination"),ANDROID_SECTION_TITLE:g._("Android Destination"),BACKUP_LINK_LABEL:g._("Backup Destination"),DEEPLINK_LEARN_MORE_LABEL:g._("Learn how to set up a deep link"),SELECTOR_OPTION_WEBSITE:g._("Website"),SELECTOR_OPTION_APP:g._("App"),LEGEND_KEY_ORGANIC:g._("Organic"),LEGEND_KEY_PAID:g._("Paid"),THIS_WEEK_CLICK_LABEL:g._("Clicks This Week")};e.exports=j;},null);
__d("CustomCTALogger",["Banzai"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={logVital:function(i){g.post('page_custom_cta_logger',i,g.VITAL);},log:function(i){g.post('page_custom_cta_logger',i);}};e.exports=h;},null);
__d("PageContentTabLoadingDialog",["React","DOM","XUIDialog.react","XUIDialogBody.react","XUISpinner.react","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=g.createClass({displayName:"PageContentTabLoadingDialogComponent",getInitialState:function(){return {shown:false};},render:function(){return (g.createElement(i,{width:300,shown:this.state.shown,layerHideOnBlur:false},g.createElement(j,{className:"_5xp9"},g.createElement(k,{background:"light",className:"_5xpe",size:"large"}))));},show:function(){this.setState({shown:true});},hide:function(){this.setState({shown:false});}}),n={show:function(){if(!this._dialog)this._dialog=g.render(g.createElement(m,null),h.create('div'));this._dialog.show();},hide:function(){this._dialog&&this._dialog.hide();}};e.exports=n;},null);
__d("CustomCTAUtils",["fbt","AdsCallToActionTypes","AsyncRequest","CustomCTAConstants","Image.react","PageContentTabLoadingDialog","React","XUISelector.react","CustomCallToActionTypes"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o=b('CustomCallToActionTypes').ICONS,p=b('CustomCallToActionTypes').LABELS,q=b('CustomCallToActionTypes').MOBILE_ICONS,r=b('CustomCallToActionTypes').TYPES,s=b('CustomCallToActionTypes').TYPES,t=n.Option,u={executeCallToAction:function(v,w){if(v===s.CHARITY_DONATE){l.show();new i(w).setFinallyHandler(function(x){l.hide();}).send();}else window.open(w);},getFallbackSelectorOptions:function(){var v=[];v.push(m.createElement(t,{value:j.FALLBACK_GO_TO_WEBSITE},u.getFallbackLabel(j.FALLBACK_GO_TO_WEBSITE)));v.push(m.createElement(t,{value:j.FALLBACK_INSTALL_APP},u.getFallbackLabel(j.FALLBACK_INSTALL_APP)));return v;},getCallToActionSelectorOptions:function(v){var w=[];v.forEach(function(x){w.push(m.createElement(t,{key:x,value:x,icon:m.createElement(k,{src:u.getCallToActionIcon(x)})},u.getCallToActionLabel(x)));});return w;},getFallbackLabel:function(v){switch(v){case j.FALLBACK_INSTALL_APP:return (g._("Install Now"));case j.FALLBACK_GO_TO_WEBSITE:return (g._("Go to Website"));}},getCallToActionLabel:function(v){return p[v];},getCallToActionMobileIcon:function(v){return q[v];},getCallToActionIcon:function(v){return o[v];},getTruncatedURI:function(v){if(!v||v.length<j.URI_TRUNCATE_LENGTH)return v;return v.substr(0,j.URI_TRUNCATE_LENGTH)+'...';},getAdsCallToActionType:function(v){switch(v){case r.BOOK_NOW:return h.TYPES.BOOK_TRAVEL.name;case r.OPEN_APP:return h.TYPES.USE_APP.name;case r.PLAY_NOW:return h.TYPES.PLAY_GAME.name;case r.SHOP_NOW:return h.TYPES.SHOP_NOW.name;case r.SIGN_UP:return h.TYPES.SIGN_UP.name;case r.WATCH_NOW:return h.TYPES.WATCH_VIDEO.name;default:return '';}}};e.exports=u;},null);
__d("CustomCTAViewerUnit.react",["CustomCTALogger","CustomCTAUtils","PagesEventType","React","Image.react","XUIButton.react","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();'use strict';var n=j,o=n.PropTypes,p=j.createClass({displayName:"CustomCTAViewerUnit",propTypes:{borderShade:o.string,callToActionType:o.string.isRequired,cctaID:o.string.isRequired,depressed:o.bool,pageID:o.string.isRequired,size:o.string,surface:o.string.isRequired,userID:o.string.isRequired,webURL:o.string.isRequired},_onButtonClick:function(){h.executeCallToAction(this.props.callToActionType,this.props.webURL);g.log({ccta_id:this.props.cctaID,ccta_type:this.props.callToActionType,event_type:i.CUSTOM_CTA_CLICK_VIEWER_UNIT,page_id:this.props.pageID,surface:this.props.surface,target_url:this.props.webURL,user_id:this.props.userID});},getDefaultProps:function(){return {size:"large",borderShade:"dark"};},render:function(){var q=j.createElement("span",null,j.createElement(k,{className:"_xgc _42po",src:h.getCallToActionIcon(this.props.callToActionType)}),h.getCallToActionLabel(this.props.callToActionType));return (j.createElement(l,{borderShade:this.props.borderShade,depressed:this.props.depressed,label:q,onClick:this._onButtonClick,size:this.props.size}));}});e.exports=p;},null);
__d("SingleSelectorBase",["ArbiterMixin","Alignment","BehaviorsMixin","Button","CSS","DOM","DOMQuery","Event","Layer","Locale","Rect","ParameterizedPopover","PopoverMenu","Scroll","SelectableMenuUtils","Style","csx","cx","getOverlayZIndex","invariant","mixin","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){b.__markCompiled&&b.__markCompiled();var ca=h.Anchor,da=p.isRTL()?ca.RIGHT:ca.LEFT,ea=16,fa=aa(g,i);for(var ga in fa)if(fa.hasOwnProperty(ga))ia[ga]=fa[ga];var ha=fa===null?null:fa.prototype;ia.prototype=Object.create(ha);ia.prototype.constructor=ia;ia.__superConstructor__=fa;function ia(ka,la,ma,na){"use strict";this.$SingleSelectorBase0=ka;this.$SingleSelectorBase1=null;this.$SingleSelectorBase2=l.create('div',{});this.$SingleSelectorBase3=new o({classNames:["_5xew"]},this.$SingleSelectorBase2);this.$SingleSelectorBase4=new r(ka.parentNode,ka,[],Object.assign({},ma,{layer:this.$SingleSelectorBase3}));this.$SingleSelectorBase4.subscribe('show',this.$SingleSelectorBase5.bind(this));this.$SingleSelectorBase4.subscribe('hide',this.$SingleSelectorBase6.bind(this));this.$SingleSelectorBase7=new s(this.$SingleSelectorBase4,ka,la,[]);this.setMenu(la);if(na&&na.behaviors)this.enableBehaviors(na.behaviors);}ia.prototype.$SingleSelectorBase5=function(){"use strict";this.$SingleSelectorBase8();this.$SingleSelectorBase9();k.conditionClass(this.$SingleSelectorBase3.getRoot(),"_5xex",this.$SingleSelectorBasea());v.set(this.$SingleSelectorBase3.getRoot(),'min-width',(this.$SingleSelectorBase0.offsetWidth+ea)+'px');var ka=l.scry(this.$SingleSelectorBase2,'div.uiScrollableAreaWrap')[0];if(ka){var la=h.measure(new ca(this.$SingleSelectorBaseb(),da,ca.MIDDLE),new ca(this.$SingleSelectorBase1.getRoot(),da,ca.MIDDLE));t.setTop(ka,t.getTop(ka)-la.y);}this.align();this.getSelectedItem().focus();if(!this.$SingleSelectorBasec)this.$SingleSelectorBasec=n.listen(window,'resize',ba(this.align.bind(this)));this.inform('show');};ia.prototype.$SingleSelectorBase6=function(){"use strict";if(this.$SingleSelectorBasec){this.$SingleSelectorBasec.remove();this.$SingleSelectorBasec=null;}this.inform('hide');};ia.prototype.$SingleSelectorBased=function(ka,la){"use strict";this.$SingleSelectorBasef=null;if(!this.$SingleSelectorBaseg)this.inform('change',la);};ia.prototype.setValue=function(ka){"use strict";if(this.$SingleSelectorBase4.isShown()){this.$SingleSelectorBaseh(ka,false);}else{this.$SingleSelectorBasei=ka;this.$SingleSelectorBasej=false;}};ia.prototype.setValueWithoutChange=function(ka){"use strict";if(this.$SingleSelectorBase4.isShown()){this.$SingleSelectorBaseh(ka,true);}else{this.$SingleSelectorBasei=ka;this.$SingleSelectorBasej=true;}};ia.prototype.$SingleSelectorBase9=function(){"use strict";if(this.$SingleSelectorBasei){this.$SingleSelectorBaseh(this.$SingleSelectorBasei,this.$SingleSelectorBasej);this.$SingleSelectorBasei=null;}};ia.prototype.$SingleSelectorBaseh=function(ka,la){"use strict";this.$SingleSelectorBaseg=la;this.$SingleSelectorBase1.setValue(ka);this.$SingleSelectorBaseg=null;};ia.prototype.getValue=function(){"use strict";return this.getSelectedItem().getValue();};ia.prototype.getLayer=function(){"use strict";return this.$SingleSelectorBase3;};ia.prototype.getButton=function(){"use strict";return this.$SingleSelectorBase0;};ia.prototype.setMenu=function(ka){"use strict";if(this.$SingleSelectorBase4.isShown()){this.$SingleSelectorBasek(ka);}else this.$SingleSelectorBasel=ka;};ia.prototype.$SingleSelectorBase8=function(){"use strict";if(this.$SingleSelectorBasel){this.$SingleSelectorBasek(this.$SingleSelectorBasel);this.$SingleSelectorBasel=null;}};ia.prototype.$SingleSelectorBasek=function(ka){"use strict";if(ka!==this.$SingleSelectorBase1){this.$SingleSelectorBase1=ka;if(this.$SingleSelectorBasem)this.$SingleSelectorBasem.unsubscribe();this.$SingleSelectorBasem=this.$SingleSelectorBase1.subscribe('change',this.$SingleSelectorBased.bind(this));l.setContent(this.$SingleSelectorBase2,ka.getRoot());this.$SingleSelectorBase7.setMenu(ka);this.$SingleSelectorBasef=null;}};ia.prototype.getMenu=function(){"use strict";return this.$SingleSelectorBasel||this.$SingleSelectorBase1;};ia.prototype.enable=function(){"use strict";j.setEnabled(this.$SingleSelectorBase0,true);this.$SingleSelectorBase4.enable();};ia.prototype.disable=function(){"use strict";j.setEnabled(this.$SingleSelectorBase0,false);this.$SingleSelectorBase4.disable();};ia.prototype.$SingleSelectorBasea=function(){"use strict";return (v.isFixed(this.$SingleSelectorBase0)&&!v.isFixed(this.$SingleSelectorBase3.getRoot().parentNode));};ia.prototype.align=function(){"use strict";if(!this.$SingleSelectorBasef)this.$SingleSelectorBasef=this.getAlignment();this.$SingleSelectorBasef.align();var ka=q.getElementBounds(this.$SingleSelectorBase1.getRoot()),la=q.getViewportWithoutScrollbarsBounds(),ma=ka.t-la.t,na=la.b-ka.b,oa=ka.l-la.l,pa=la.r-ka.r,qa=this.$SingleSelectorBase3.getRoot();if(ma<10){ja(qa,'top',-ma+10);}else if(na<10)ja(qa,'top',na-10);if(oa<10){ja(qa,'left',-oa+10);}else if(pa<10)ja(qa,'left',pa-10);var ra=y(this.$SingleSelectorBase0,this.$SingleSelectorBase3.getInsertParent());v.set(this.$SingleSelectorBase3.getRoot(),'z-index',ra>200?ra:'');};ia.prototype.getAlignment=function(){"use strict";return new h(new ca(this.$SingleSelectorBase3.getRoot(),ca.TOP,ca.LEFT),new ca(this.$SingleSelectorBaseb(),da,ca.MIDDLE),new ca(this.$SingleSelectorBasen(),da,ca.MIDDLE));};ia.prototype.$SingleSelectorBasen=function(){"use strict";return m.find(this.$SingleSelectorBase0,"._55pe");};ia.prototype.getSelectedItem=function(){"use strict";var ka=null;this.getMenu().forEachItem(function(la){if(u.isSelected(la)){z(ka===null);ka=la;}});z(ka!==null);return ka;};ia.prototype.$SingleSelectorBaseb=function(){"use strict";return m.find(this.getSelectedItem().getRoot(),"._54nh");};ia.prototype.destroy=function(){"use strict";this.$SingleSelectorBase1&&this.$SingleSelectorBase1.destroy();this.$SingleSelectorBase4.destroy();this.$SingleSelectorBase3.destroy();};function ja(ka,la,ma){v.set(ka,la,(v.getFloat(ka,la)+ma)+'px');}e.exports=ia;},null);
__d("SingleSelector",["DOM","DOMQuery","SingleSelectorBase","csx"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();for(var k in i)if(i.hasOwnProperty(k))m[k]=i[k];var l=i===null?null:i.prototype;m.prototype=Object.create(l);m.prototype.constructor=m;m.__superConstructor__=i;function m(n,o,p,q,r){"use strict";this.$SingleSelector0=p;this.subscribe('change',this.$SingleSelector1.bind(this));i.call(this,n,o,q,r);}m.prototype.$SingleSelector1=function(n,o){"use strict";this.$SingleSelector3(o.label);this.$SingleSelector0.value=o.value;};m.prototype.$SingleSelector3=function(n){"use strict";g.setContent(this.$SingleSelector4(),n);};m.prototype.$SingleSelector4=function(){"use strict";return h.find(this.getButton(),"._55pe");};e.exports=m;},null);