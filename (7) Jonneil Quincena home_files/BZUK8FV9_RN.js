/*!CK:1443353780!*//*1434998855,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["f4O5O"]); }

__d("TimelineProfilePictureLoggerEnums",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={actions:{EDIT_THUMBNAIL:"edit_thumbnail",FROM_PHOTOS:"from_photos",MAKE_PROFILE:"make_profile",SILHOUETTE:"silhouette",SUGGESTION:"suggestion",SUGGESTION_UPLOAD:"suggestion_upload",SYNCED_PHOTO:"synced_photo",TAKE_PHOTO:"take_photo",UPLOAD:"upload_photo",USE_PREVIOUS:"use_previous"},flows:{PERMALINK:"permalink",SNOWLIFT:"snowlift",SPOTLIGHT:"spotlight",VAULT:"vault",ZOOMCROP:"zoomcrop"},steps:{CANCEL:"cancel",CROP:"crop",CROP_FAIL:"crop_fail",CROP_SAVING:"crop_saving",CROP_SUCCESS:"crop_success",DRAG_AND_DROP:"drag_and_drop",FAIL:"fail",INIT:"init",LOADING:"loading",PREVIOUS_PIC_FAIL:"previous_pic_fail",PREVIOUS_PIC_INIT:"previous_pic_init",PREVIOUS_PIC_SAVING:"previous_pic_saving",PREVIOUS_PIC_SUCCESS:"previous_pic_success",RESIZE_BEGIN:"resize_begin",RESIZE_SKIPPED:"resize_skipped",RESIZE_SUCCESS:"resize_success",RESIZE_FAIL:"resize_fail",SKIP_CROP:"skip_crop",SUCCESS:"success",UPLOAD_CANCEL:"upload_cancel",UPLOAD_SELECT:"upload_select",UPLOAD_SUCCESS:"upload_success",VIEWER_INIT:"viewer_init"}};},null);
__d("FileUploadTarget",["AsyncUploadRequest","DragDropFileUpload","DragDropTarget","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(l,m){"use strict";var n=(function(o){this.$FileUploadTarget0=new g(m).setFiles({file:o}).setRelativeTo(l).setStatusElement(l).setAllowCrossOrigin(this.$FileUploadTarget1);this.$FileUploadTarget0.subscribe('complete',function(p,q){this.onCompleteCallback(q);this.$FileUploadTarget0=null;}.bind(this));this.$FileUploadTarget0.send();}).bind(this);this.dragDropTarget=new i(l).setOnFilesDropCallback(function(o){o.length&&this.asyncProcess(o,function(p){p.length&&n(p);});}.bind(this));this.asyncProcess=function(o,p){p(o);};this.preprocess=function(o){return o;};this.onCompleteCallback=j;}k.prototype.setAllowCrossOrigin=function(l){"use strict";this.$FileUploadTarget1=l;return this;};k.prototype.setPreprocessor=function(l){"use strict";this.preprocess=l;return this;};k.prototype.setAsyncProcessor=function(l){"use strict";this.asyncProcess=l;return this;};k.prototype.onComplete=function(l){"use strict";this.onCompleteCallback=l;return this;};k.prototype.abort=function(){"use strict";this.$FileUploadTarget0&&this.$FileUploadTarget0.abort();};k.prototype.activate=function(){"use strict";if(!h.isSupported())return this;this.dragDropTarget.setFileFilter(this.preprocess).enable();return this;};e.exports=k;},null);
__d("SinglePictureUploadTarget",["Bootloader","Dialog","ErrorDialog","FileUploadTarget","emptyFunction","htmlSpecialChars","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();function n(o,p){"use strict";this.fileUploadTarget=new j(o,p);this.preprocessCallback=k;this.asyncPreprocessCallback=function(q,r){r(q);};this.oncompleteCallback=k;this.afterSuccessCallback=k;this.maxWidth=null;this.maxHeight=null;}n.prototype.setAllowCrossOrigin=function(o){"use strict";this.fileUploadTarget.setAllowCrossOrigin(o);return this;};n.prototype.setPreprocessCallback=function(o){"use strict";this.preprocessCallback=o;return this;};n.prototype.setAsyncPreprocessCallback=function(o){"use strict";this.asyncPreprocessCallback=o;return this;};n.prototype.setOncompleteCallback=function(o){"use strict";this.oncompleteCallback=o;return this;};n.prototype.setAfterSuccessCallback=function(o){"use strict";this.afterSuccessCallback=o;return this;};n.prototype.setMaximumDimensions=function(o,p){"use strict";this.maxWidth=o;this.maxHeight=p;return this;};n.prototype.activate=function(){"use strict";var o=function(s){return l(s.name);},p=(function(s){if(s.length>1){i.show(m._("Upload Error"),m._("You can only select 1 photo to upload to this album. Only the first photo you selected will be uploaded."));s=[s[0]];}var t=s[0];if(!t.type.match(/^image\//)){i.show(m._("Upload Error"),m._("We could not understand the contents of {filename}. Make sure it is a jpg, gif, or png formatted image.",[m.param("filename",o(t))]));return [];}this.preprocessCallback(s);return s;}).bind(this),q=(function(s,t){var u=1024*1024*16,v=1024*1024*1,w=function(y){if(y.size>u){i.show(m._("Upload Error"),m._("{filename} is too large. Please resize your photo to under 8000x8000 pixels and try again.",[m.param("filename",o(s[0]))]));t([]);}else this.asyncPreprocessCallback([y],t);}.bind(this),x=s[0];if((x.size<v)||(!this.maxWidth&&!this.maxHeight)){w(x);}else g.loadModules(["ImageExif","ImageResizer"],function(y,z){if(!z.isSupported()){w(x);return;}var aa=new z(x,this.maxWidth,this.maxHeight);aa.subscribe('resized',function(ba,ca){if(ca.size>x.size){w(x);}else w(ca);}.bind(this));aa.subscribe('error',function(){w(x);}.bind(this));y.readFromFile(x,function(ba){ba&&aa.setOrientation(ba.Orientation);aa.resize();});});}).bind(this),r=(function(s){var t=s[0];if(!t.getResponse())return;this.oncompleteCallback(t);var u=t.getResponse().getPayload();if(t.isSuccess()){this.afterSuccessCallback(u);}else if(u&&u.__dialog){var v=new h();v.$SinglePictureUploadTarget1(u.__dialog);v.setButtons(h.OK).show();}else i.show(u.error.title,u.error.body);}).bind(this);return this.fileUploadTarget.onComplete(r).setPreprocessor(p).setAsyncProcessor(q).activate();};e.exports=n;},null);
__d("ServerRedirect",["goURI"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={redirectPageTo:g,reloadPage:function(){window.location.reload();}};e.exports=h;},null);
__d("ProfilePhotoActionLogger",["Banzai"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={EVENT_SELECT_METHOD:'select_method',EVENT_CAMERA_PERMISSION_PROVIDED:'permission_provided',EVENT_CAMERA_PERMISSION_DENIED:'permission_denied',EVENT_CAMERA_NO_WEBCAM:'permission_denied',EVENT_CAMERA_UNKNOWN_MEDIASTREAM_ERROR:'unknown_mediastream_error',EVENT_CAMERA_TAKE_PHOTO:'take_photo',EVENT_CAMERA_RETAKE_PHOTO:'retake_photo',EVENT_CAMERA_UPLOAD_ATTEMPT:'upload_attempt',EVENT_CAMERA_UPLOAD_ERROR:'upload_error',EVENT_CAMERA_UPLOAD_SUCCESS:'upload_success',SOURCE_SUGGESTIONS:'suggestions',SOURCE_TIMELINE:'timeline',SOURCE_NUX:'nux',METHOD_EXISTING:'existing',METHOD_UPLOAD:'upload',METHOD_CAMERA:'camera',log:function(i,j,k){g.post('profile_photo_action',{event:i,source:j,method:k});}};e.exports=h;},null);
__d("TimelineProfilePicConfig",["fbt"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={loading:'timeline/profile_pic/loading',success:'timeline/profile_pic/success',leavingMessage:g._("Your profile picture is still uploading, are you sure you want to leave?")};e.exports=h;},null);
__d("ProfilePictureFlowLogging",["Arbiter","Banzai","Event","Parent","ProfilePhotoActionLogger","Run","TimelineProfilePicConfig","TimelineProfilePictureLoggerEnums","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=m.loading,q=m.success,r='data-action-type',s,t,u,v;function w(){v&&v.unsubscribe();v=null;}var x={action:n.actions,flow:n.flows,step:n.steps,log:function(y){var z=y||x.step.INIT;h.post('profile_pic_action',{action_type:s,flow_type:t,step_type:z});if(s===x.action.UPLOAD&&z===x.step.INIT)k.log(k.EVENT_SELECT_METHOD,u,k.METHOD_UPLOAD);t=null;if(y==='success'||y==='fail')s=null;return x;},setAction:function(y){s=y;return x;},setFlowType:function(y){t=y;return x;},setSource:function(y){u=y;return x;},init:function(y,z){if(z)u=z;if(!v){v=g.subscribe([p,q],function(aa){x.log(aa===p?n.steps.LOADING:n.steps.SUCCESS);});l.onLeave(w);}o(i.listen(y,'click',function(aa){var ba=j.byAttribute(aa.getTarget(),r);if(!ba)return;x.setAction(ba.getAttribute(r)).log();}));},initMenuItems:function(y,z,aa){x.init(y.getRoot(),aa);}};e.exports=x;},null);
__d("ProfilePicCropViewerInit",["Bootloader","CurrentCommunity","ProfilePictureFlowLogging","React","ServerRedirect"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l='profile-picture-crop',m='loading',n=i.flow,o,p;function q(){p&&p.close();}function r(t,u,v){v=v||{};g.loadModules(["SpotlightViewerInit","ZoomProfilePicCropViewer.react","PhotoStore","AsyncRequest","AsyncResponse","XProfilePicCropViewerAsyncController"],function(w,x,y,z,aa,ba){q();o=l+':'+t+':'+u;var ca=v.successCallback,da=h.getID()!=='0';if(ca==(void 0)&&(v.source==="atwork_nux"||v.source==="timeline")&&da)ca=function(ga){k.reloadPage();};p=w.render(j.createElement(x,{open:true,method:v.method,photoid:t,profileID:u,setid:o,source:v.source,uploadRequest:v.uploadRequest,warnOnCancel:v.warnOnCancel,cropOnlyMode:v.cropOnlyMode,successCallback:ca,errorCallback:v.errorCallback,cancelCallback:v.cancelCallback}),function(){p=null;});if(y.hasBeenCreated(o)||t===m)return;var ea=ba.getURIBuilder().setString('photo_id',t).setInt('profile_id',u).setString('set_id',o).getURI(),fa=o;new z(ea).setErrorHandler(function(ga){fa===o&&q();aa.defaultErrorHandler(ga);}).send();});return true;}var s={close:q,getFlowType:function(){return n.ZOOMCROP;},useCropViewer:function(){return true;},loading:function(t,u){r(m,t,u);},loadID:r};e.exports=s;},null);
__d("ProfilePicUploadToCrop",["FileInputUploader","JpegResizer","PhotosMimeType","ProfilePicCropViewerInit","ProfilePictureFlowLogging","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();function m(){return j.getFlowType();}function n(){k.setFlowType(m()).log(k.step.UPLOAD_SUCCESS);}function o(){k.setFlowType(m()).log(k.step.RESIZE_SKIPPED);}function p(q,r,s,t,u){"use strict";var v=r.getInput();if(!v.name)v.name='photo';this.$ProfilePicUploadToCrop0=null;if(h.isSupported())this.$ProfilePicUploadToCrop0=new h(1);l(r.subscribe('change',function(){if(!r.getValue())return;k.setFlowType(m()).log(k.step.UPLOAD_SELECT);u=String(u);var w=new g(v).setURI(q).setAllowCrossOrigin(true);j.loading(u,{uploadRequest:w});l([w.subscribe('success',function(x,y){r.clear();p.loadCropper(y.response.getPayload(),u,t);}),w.subscribe('failure',function(){r.clear();j.close();k.setFlowType(m()).log(k.step.FAIL);})]);if(this.$ProfilePicUploadToCrop0)w.setUploadInParallel(true).setPreprocessHandler(this.$ProfilePicUploadToCrop1.bind(this));w.send();}.bind(this)));}p.prototype.$ProfilePicUploadToCrop1=function(q,r){"use strict";k.setFlowType(m()).log(k.step.RESIZE_BEGIN);var s=q.getFile();if(!s||!i(s.type).isJpeg()){o();return r(q);}this.$ProfilePicUploadToCrop0.resizeBlob(s,function(t,u,v){if(t){k.setFlowType(m()).log(k.step.RESIZE_FAIL);return r(q);}if(v){o();}else{q.setFile(u);k.setFlowType(m()).log(k.step.RESIZE_SUCCESS);}r(q);});};p.loadCropper=function(q,r,s){"use strict";n();j.loadID(q.fbid,r,{warnOnCancel:true,source:s,method:'upload'});};e.exports=p;},null);
__d("ProfilePicDragAndDropUpload",["ProfilePicCropViewerInit","ProfilePictureFlowLogging","ProfilePicUploadToCrop","SinglePictureUploadTarget"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k={init:function(l,m,n){var o=new j(l,m).setAllowCrossOrigin(true).setPreprocessCallback(function(){h.setFlowType(g.getFlowType()).log(h.step.DRAG_AND_DROP);g.loading(n,{uploadRequest:o});}).setAfterSuccessCallback(function(p){i.loadCropper(p,n,'timeline');}).activate();}};e.exports=k;},null);
__d("TimelineCoverPhotoChangePrivacyDialog",["Arbiter","Event"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={init:function(j,k,l){this._dialog=j;this._tooltipLink=l;this._closeButton=k;this._showDialog=false;this._tooltip=null;},registerDialogShow:function(){this._showDialog=true;g.subscribe('CoverPhotoEdit',function(j,k){if(!this._showDialog)return;if(k.state==="open"){this._dialog&&this._dialog.show();if(this._tooltipLink){this._tooltip=this._tooltipLink.getAttribute('data-hover');this._tooltipLink.setAttribute('data-hover',null);}}else if(k.state==="closed")this.hideDialog();}.bind(this));h.listen(this._closeButton,'click',this.hideDialog.bind(this));},hideDialog:function(){this._dialog&&this._dialog.hide();if(this._tooltipLink)this._tooltipLink.setAttribute('data-hover',this._tooltip);this._showDialog=false;}};e.exports=i;},null);
__d("TimelineProfilePic",["Arbiter","CSS","Dialog","DOM","HTML","TimelineProfilePicConfig","Run","$","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p;q.init=function(r,s){"use strict";q.destroyInstance();p=new q(r||'fbProfileCover',s||'.profilePicThumb');};function q(r,s){"use strict";this.$TimelineProfilePic0=n(r);this.$TimelineProfilePic1=s;this.$TimelineProfilePic2=[g.subscribe(l.loading,this.startLoading.bind(this)),g.subscribe(l.success,this.onUploadSuccess.bind(this))];m.onBeforeUnload(this.onBeforeUnload.bind(this));m.onLeave(this.destroy.bind(this));}q.prototype.$TimelineProfilePic3=function(r){"use strict";this.$TimelineProfilePic4=r;h.conditionClass(this.$TimelineProfilePic0,'profilePicLoading',r);};q.prototype.destroy=function(){"use strict";this.$TimelineProfilePic2.forEach(function(r){r.unsubscribe();});this.$TimelineProfilePic2=[];p=null;};q.prototype.startLoading=function(r,s){"use strict";this.$TimelineProfilePic3(!!s.isLoading);};q.prototype.onUploadSuccess=function(r,s){"use strict";this.$TimelineProfilePic3(false);if(!s.newPic)return;var t=i.getCurrent();if(t)t.hide();var u=s.newPic;j.replace(j.find(this.$TimelineProfilePic0,this.$TimelineProfilePic1),typeof u==='string'?k(u):u);if(typeof(s.profileId)!==(void 0)&&typeof(s.headerPicURL)!==(void 0)){var v=o('profile_pic_header_'+s.profileId);if(v)v.src=s.headerPicURL;}var w=o('fbProfilePicSelector');if(w)h.removeClass(w,'fbTimelineNullProfilePicSelector');};q.prototype.onBeforeUnload=function(){"use strict";if(p===this&&this.$TimelineProfilePic4)return l.leavingMessage;};q.destroyInstance=function(){"use strict";p&&p.destroy();};e.exports=q;},null);
__d("timeline-cover-dragdrop-edit",["SinglePictureUploadTarget","TimelineCover"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=function(){var m=h.getInstance();m.hideLoadingIndicator();},j=function(m){var n=h.getInstance(),o=m.id,p=m.photo_node;n.updateCoverImage(o,p);},k=function(m){h.getInstance().showLoadingIndicator();},l=function(m,n,o,p){new g(m,n).setAllowCrossOrigin(true).setMaximumDimensions(o,p).setPreprocessCallback(k).setOncompleteCallback(i).setAfterSuccessCallback(j).activate();};f.initialize_timeline_cover_drop_target=l;},null);
__d("InfoReviewInstanceManager",["DOM","Event","React","csx"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k="._5sf3",l=[],m=[],n={addInstanceRoot:function(o,p){m.push(h.listen(p,'click',function(q){var r=g.scry(p,k)[0];r&&g.remove(r);}));l.push(o);},cleanupInstances:function(){var o=[];while(l.length){var p=l.pop();document.contains(p)?o.push(p):i.unmountComponentAtNode(p);}while(m.length)m.pop().remove();l=o;}};e.exports=n;},null);
__d("InfoReviewCloseButton",["DOM","Event","InfoReviewInstanceManager","Parent","$","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m='fbTimelineUnit';function n(o,p){"use strict";this.$InfoReviewCloseButton0=o;this.$InfoReviewCloseButton1=p;this.$InfoReviewCloseButton2=h.listen(this.$InfoReviewCloseButton0,'click',this.$InfoReviewCloseButton3.bind(this));l(this.$InfoReviewCloseButton2);}n.prototype.$InfoReviewCloseButton3=function(){"use strict";var o=k(this.$InfoReviewCloseButton1);if(o.parentElement.children.length===1)o=j.byClass(o,m);g.remove(o)&&this.$InfoReviewCloseButton4();i.cleanupInstances();};n.prototype.$InfoReviewCloseButton4=function(){"use strict";this.$InfoReviewCloseButton0=null;this.$InfoReviewCloseButton1=null;this.$InfoReviewCloseButton2&&this.$InfoReviewCloseButton2.remove();this.$InfoReviewCloseButton2=null;};e.exports=n;},null);