/*!CK:3840366690!*//*1434980345,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["clunI"]); }

__d("canUseReactEditor",["UserAgent"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=typeof a.getSelection==='function',i=h&&((g.isPlatform('iOS')||g.isPlatform('Linux')||g.isPlatform('Mac OS X')||g.isPlatform('Windows')||g.isPlatform('Chrome OS'))&&(g.isBrowser('Chrome')||g.isBrowser('Firefox >= 16')||g.isBrowser('IE >= 9')||g.isBrowser('Opera >= 12')||g.isBrowser('Mobile Safari >= 6')||g.isBrowser('Safari >= 5')));function j(){return i;}e.exports=j;},null);
__d("applyEmoticonToContentBlock",["CharacterMetadata","ComposedEntityMutability","ComposedEntityType","DocumentEntity","EmoticonsList","immutable"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();'use strict';var m=l,n=m.List,o='\u3000';function p(q,r,s){if(!k.emotes[r])return q;var t=j.create(i.EMOTICON,h.IMMUTABLE,{type:k.emotes[r],originalEmoticon:r}),u=q.getText(),v=q.getCharacterList(),w=r.length,x=v.get(s);return q.merge({text:(u.slice(0,s)+o+u.slice(s+w)),characterList:v.slice(0,s).concat(n.of(g.applyEntity(x,t)),v.slice(s+w))});}e.exports=p;},null);
__d("getTextAfterNearestEntity",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h,i){var j=i;while(j>0&&h.getEntityAt(j-1)===null)j--;return h.getText().slice(j,i);}e.exports=g;},null);
__d("applyEmoticonToContentState",["EmoticonsList","applyEmoticonToContentBlock","getTextAfterNearestEntity"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();'use strict';var j=new RegExp(g.regexp.source,'g');function k(l,m){var n=m.getAnchorKey(),o=m.getAnchorOffset(),p=l.getBlockForKey(n),q=i(p,o),r,s;while(s!==null){s=j.exec(q);if(s!==null)r=s;}if(!r)return l;var t=r[1];if(!t&&o!==q.length)return l;var u=r[2],v=o-q.length,w=v+r.index+r[1].length,x=l.getBlockMap().set(n,h(p,u,w));o-=(u.length-1);return l.merge({blockMap:x,selectionBefore:m,selectionAfter:m.merge({anchorOffset:o,focusOffset:o})});}e.exports=k;},null);
__d("handleBeforeInputForEmoticon",["DocumentModifier","EditorChangeType","EditorState","applyEmoticonToContentState"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=new RegExp(/[\s'".,!?]/);function l(m,n){var o=m.getSelection();if(!o.isCollapsed()||!n||!k.test(n))return m;var p=m.getCurrentContent(),q=j(p,o);if(q===p)return m;var r=g.insertText(q,q.getSelectionAfter(),n);return i.push(m,r,h.INSERT_CHARACTERS);}e.exports=l;},null);
__d("handleSoftNewlineForEmoticon",["DocumentModifier","EditorChangeType","EditorState","applyEmoticonToContentState"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(l){var m=l.getCurrentContent(),n=l.getSelection(),o=j(m,n);if(o===m)return l;var p=g.splitBlock(o,o.getSelectionAfter());return i.push(l,p,h.SPLIT_BLOCK);}e.exports=k;},null);
__d("isSoftNewlineEvent",["Keys"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i){return i.which===g.RETURN&&(i.getModifierState('Shift')||i.getModifierState('Alt')||i.getModifierState('Control'));}e.exports=h;},null);
__d("UFIMentionsInput.react",["Arbiter","BanzaiScuba","Bootloader","CommentPrelude","ComposedEntityMutability","ComposedEntityType","DocumentEntity","DocumentModifier","DOMVector","EditorChangeType","EditorState","Input","Keys","MentionsInput.react","React","SelectionState","URI","canUseReactEditor","createEditorStateWithEntities","createEmptyEditorState","createMentionEntity","cx","emptyFunction","getMentionsInputDecorator","getMentionsTextForContentState","getVisibleValueForContentState","handleBeforeInputForEmoticon","handleSoftNewlineForEmoticon","isSoftNewlineEvent","setImmediate"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja){b.__markCompiled&&b.__markCompiled();var ka=new h('ufi_tinder',null,{addBrowserFields:true,addGeoFields:true,addPredictedGeographyFields:true,addMobileDeviceFields:true,addUser:true}),la=200,ma='ufi_comment_composer',na='ufi_reply_composer',oa=x();function pa(ta){var ua=ta.map(function(va){return {kind:'file',type:va.type,getAsFile:ca.thatReturns(va)};});return {clipboardData:{items:ua}};}function qa(ta){var ua=/^image\//;return ta.filter(function(va){return ua.test(va.type);});}var ra=u.createClass({displayName:"UFIMentionsInput",getInitialState:function(){var ta='',ua=[];if(this.props.initialData){ta=this.props.initialData.value||'';ua=this.props.initialData.mentions||[];ua=ua.map(function(wa){return Object.assign({},wa,{entity:{uid:wa.uid,weakreference:wa.weakreference}});});}var va=y({text:ta,ranges:ua,decorator:da(),entityCreationFn:sa});va=q.moveSelectionToEnd(va);return {bootloaded:false,fullRender:!!(this.props.initialData&&this.props.initialData.value),typeaheadReporter:null,editorState:va,mentionsSource:null,mentionableEntries:null,fallbackText:ta};},hasEnteredText:function(){return !!this.state.editorState.getCurrentContent().getPlainText().trim();},focus:function(){this._triggerFullRender(function(){if(oa){this.refs.mentionsInput.focus();}else u.findDOMNode(this.refs.textarea).focus();}.bind(this));},submitComment:function(event){if(this._submitComment(event))this._clearDocumentState();},insertMention:function(ta){this._triggerFullRender(function(){if(oa){var ua=this.state.editorState,va=ua.getSelection(),wa=ua.getCurrentContent(),xa=va.getStartKey(),ya=va.getStartOffset(),za=wa.getBlockForKey(xa),ab;if(za.getText().substr(ya-1,1).trim().length>0){var bb=n.replaceText(wa,va,' ');va=bb.getSelectionAfter();ab=n.insertText(bb,va,ta.getTitle(),ua.getCurrentInlineStyle(),aa(ta));}else ab=n.replaceText(wa,va,ta.getTitle(),ua.getCurrentInlineStyle(),aa(ta));ua=q.push(ua,ab,p.INSERT_FRAGMENT);ua=q.forceSelection(ua,ua.getSelection());this.setState({editorState:ua});this.focus();}else{u.findDOMNode(this.refs.textarea).focus();if(this.state.fallbackText.length){this.setState({fallbackText:this.state.fallbackText+' '+ta.title});}else this.setState({fallbackText:ta.title});}}.bind(this));},insertEmoticon:function(ta){if(!oa){this.setState({fallbackText:this.state.fallbackText+' '+ta});return;}var ua=this.state.editorState,va=ua.getCurrentContent(),wa=ua.getSelection(),xa=va.getBlockForKey(wa.getStartKey()).getText()[wa.getStartOffset()-1];if(xa&&xa!==' ')ta=' '+ta;var ya=va.getBlockForKey(wa.getEndKey()).getText()[wa.getEndOffset()];if(ya&&ya!==' ')ta+=' ';var za=n.replaceText(ua.getCurrentContent(),ua.getSelection(),ta);ua=q.push(ua,za,p.INSERT_CHARACTERS);ua=q.forceSelection(ua,ua.getSelection());this.setState({editorState:ua});},setSignature:function(ta){setTimeout(function(){var ua=this.state.editorState,va=ua.getSelection(),wa=ua.getCurrentContent(),xa=wa.getBlockMap().first(),ya=xa.getKey();va=new v({anchorKey:ya,anchorOffset:0,focusKey:ya,focusOffset:ta.length});wa=n.replaceText(wa,va,ta);ua=q.set(ua,{currentContent:wa});this.setState({editorState:ua});}.bind(this),0);},_informHeightChange:function(){if(this.props.monitorHeight)ja(function(){if(!this.isMounted())return;var ta=oa?u.findDOMNode(this.refs.mentionsInput):u.findDOMNode(this.refs.textarea),ua=o.getElementDimensions(ta).y;if(ua!==this._height){this._height=ua;g.inform('ufi/inputHeightChanged',{node:ta});}}.bind(this));},_onChange:function(ta){this.setState({editorState:ta},this._informHeightChange);},_clearDocumentState:function(){this.state.typeaheadReporter&&this.state.typeaheadReporter.sessionEnd();var ta=z(da());this.setState({editorState:q.moveFocusToEnd(ta)});},_handleContentReturn:function(ta){if(ia(ta)){var ua=ha(this.state.editorState);if(ua===this.state.editorState){return false;}else{this.setState({editorState:ua});return true;}}if(this._submitComment(ta)){this._clearDocumentState();return true;}return false;},_handleBeforeInput:function(ta){var ua=ga(this.state.editorState,ta);if(ua===this.state.editorState){return false;}else{this.setState({editorState:ua});return true;}},_submitComment:function(ta){var ua=this.state.editorState.getCurrentContent(),va=fa(ua),wa=ea(ua),xa={visibleValue:va,encodedValue:wa},ya=r.getValue(u.findDOMNode(this.refs.proxyInput));if(ya){var za=new w(a.location.href);ka.addNormal('path',za.getPath());ka.addNormal('proxy_value',ya.substr(0,la));ka.post();}return this.props.onEnterSubmit(xa,ta);},_handleFiles:function(ta){var ua=qa(ta);if(ua.length){this.props.onPaste(pa(ua));return true;}return false;},_handleDroppedFiles:function(ta,ua){return this._handleFiles(ua);},_handlePastedFiles:function(ta){return this._handleFiles(ta);},_onMentionsInputBlur:function(){this.state.typeaheadReporter&&this.state.typeaheadReporter.sessionEnd();this.props.onBlur&&this.props.onBlur();g.inform('ufi/blur',{hasEnteredText:this.hasEnteredText()});},_onMentionsInputFocus:function(){if(!this.state.bootloaded&&!this._currentlyBootloading){this._currentlyBootloading=true;i.loadModules(["TypeaheadMetricReporter","getMentionsSearchSource"],function(ta,ua){if(!this.isMounted())return;var va=new ta({event_name:'tinder_mentions'});va.sessionStart();var wa=ua(this.props.datasource,va);wa.bootstrap();this.setState({typeaheadReporter:va,bootloaded:true,mentionsSource:wa},function(){this._currentlyBootloading=false;}.bind(this));}.bind(this));}else if(this.state.typeaheadReporter)this.state.typeaheadReporter.sessionStart();this.props.onFocus&&this.props.onFocus();g.inform('ufi/focus');},_onShowMentions:function(ta,ua){if(this.state.typeaheadReporter)this.state.typeaheadReporter.reportResults(ta.map(function(va){return va.getUniqueID();}));},_onAddMention:function(ta,ua,va){if(this.state.typeaheadReporter){this.state.typeaheadReporter.reportSelect(ta.getUniqueID(),ta.getType(),ua,va.button>=0);this.state.typeaheadReporter.sessionEnd();}},_onFallbackKeyDown:function(ta){if(ta.which!==s.RETURN)return;if(ia(ta)||!this.state.fallbackText.trim())return;ta.preventDefault();var ua={visibleValue:this.state.fallbackText,encodedValue:this.state.fallbackText};if(this.props.onEnterSubmit(ua,ta))this.setState({fallbackText:''});},_onFallbackChange:function(ta){this.setState({fallbackText:ta.target.value});},_onFallbackBlur:function(ta){this.props.onBlur&&this.props.onBlur();},_onFallbackFocus:function(ta){this.props.onFocus&&this.props.onFocus();},_sortByRenderType:function(ta,ua){var va=ta.getAuxiliaryData().renderType,wa=ua.getAuxiliaryData().renderType;if(va===wa)return ta.getOrder()-ua.getOrder();var xa=this.props.viewOptionsTypeObjectsOrder;return xa.indexOf(va)-xa.indexOf(wa);},_triggerFullRender:function(ta){this.setState({fullRender:true},ta);},_triggerFullRenderWithoutCallback:function(){this._triggerFullRender();},_renderFallback:function(){return (u.createElement("div",null,u.createElement("textarea",{ref:"textarea",className:"UFIAddCommentInput _1os9",name:"add_comment_text",placeholder:this.props.placeholder,spellCheck:true,onKeyDown:this._onFallbackKeyDown,onChange:this._onFallbackChange,onBlur:this._onFallbackBlur,onFocus:this._onFallbackFocus,value:this.state.fallbackText})));},_renderProxyInput:function(){if(!this.props.hideProxyInput){var ta="_1osa mentionsHidden";return (u.createElement("input",{className:ta,name:"add_comment_text",ref:"proxyInput",onFocus:this.focus,tabIndex:"-1"}));}},_renderDummy:function(){var ta="UFIAddCommentInput _1osb _1osc";return (u.createElement("div",{onFocus:this._triggerFullRenderWithoutCallback,onSelect:ca,onClick:this._triggerFullRenderWithoutCallback,onTouchStart:this._triggerFullRenderWithoutCallback,onMouseOver:this._triggerFullRenderWithoutCallback},this._renderProxyInput(),u.createElement("div",{className:ta},this.props.placeholder)));},_onClickEditorContainer:function(ta){j.click(ta.target,false);},_renderMentionsInput:function(){var ta="UFIAddCommentInput _1osb",ua=Object.assign({mentionSortFn:(this.props.viewOptionsTypeObjectsOrder?this._sortByRenderType:null)},this.props.viewProps);return (u.createElement("div",{onClick:this._onClickEditorContainer},this._renderProxyInput(),u.createElement(t,{ref:"mentionsInput",className:ta,editorState:this.state.editorState,onChange:this._onChange,mentionsSource:this.state.mentionsSource,typeaheadView:this.props.viewComponent,typeaheadViewProps:ua,spellCheck:true,placeholder:this.props.placeholder,onAddMention:this._onAddMention,onShowMentions:this._onShowMentions,onFocus:this._onMentionsInputFocus,onBlur:this._onMentionsInputBlur,handleContentReturn:this._handleContentReturn,handleBeforeInput:this._handleBeforeInput,handlePastedFiles:this._handlePastedFiles,handleDroppedFiles:this._handleDroppedFiles,autoflip:this.props.autoflip,webDriverTestID:this.props.replyCommentID?na:ma})));},componentDidMount:function(){if(!oa){if(this.state.fallbackText)u.findDOMNode(this.refs.textarea).focus();}else if(this.state.editorState.getCurrentContent().hasText())ja(function(){this.isMounted()&&this.focus();}.bind(this));},render:function(){if(!oa)return this._renderFallback();if(!this.state.fullRender)return this._renderDummy();return this._renderMentionsInput();}});function sa(ta){return m.create(l.MENTION,k.IMMUTABLE,{id:ta.uid,isWeak:ta.weakreference});}e.exports=ra;},null);