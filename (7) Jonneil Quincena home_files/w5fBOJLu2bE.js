/*!CK:2898362764!*//*1434993770,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["36jEa"]); }

__d("ReactComposerStatusAttachmentContainer.react",["ReactComposerAttachmentActions","ReactComposerAttachmentStore","ReactComposerAttachmentType","ReactComposerContextMixin","ReactComposerPhotoUploader","ReactComposerPropsAndStoreBasedStateMixin","ReactComposerScrapedAttachmentActions","ReactComposerScrapedAttachmentStore","ReactComposerStatusAttachment.react","ReactComposerStatusStore","ReactComposerTaggerActions","ReactComposerTaggerStore","ComposerTargetData","ReactComposerStatusUtils","React","URLMatcher","URLScraper"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){b.__markCompiled&&b.__markCompiled();var x=u,y=x.PropTypes,z=u.createClass({displayName:"ReactComposerStatusAttachmentContainer",_permissiveMatch:(undefined),_uploader:(undefined),mixins:[j,l(h,p,r,n)],propTypes:{config:y.shape({attachmentsConfig:y.object.isRequired,audienceInstance:y.object,audienceXHP:y.instanceOf(HTMLElement),mentionsSource:y.object.isRequired,mediaAcceptParam:y.shape({photos:y.string,both:y.string}),scrapedAttachment:y.instanceOf(HTMLElement),taggersData:y.object,taggersConfig:y.object.isRequired,taggersSource:y.object,targetData:y.instanceOf(s).isRequired}).isRequired,onPostIntent:y.func,placeholder:y.string.isRequired},statics:{calculateState:function(aa,ba){var ca=h.isSelectedAttachmentActive(aa);return {focused:ca,taggersData:r.getTaggersData(aa),scrapedAttachment:n.getMarkup(aa),permissiveMatch:n.getPermissiveMatch(aa)};}},getDefaultProps:function(){return {taggersData:{}};},componentWillMount:function(){var aa=this.props.config.attachmentsConfig[i.MEDIA];this._uploader=new k(this.context.composerID,aa.photoLimit,this.context.actorID);},componentDidMount:function(){var aa=this.props.config.attachmentsConfig[i.STATUS];m.enabled(this.context.composerID,aa.canScrapeShare);},render:function(){return (u.createElement(o,u.__spread({},this.props,this.state,{onFocus:this._onFocus,onMentionsInputChange:this._onMentionsInputChange,onPasteFiles:this._onPasteFiles,onPasteRawText:this._onPasteRawText,postButtonModule:this.props.postButtonModule})));},_onFocus:function(){g.selectAttachment(this.context.composerID,i.STATUS,{fromFocus:true});q.selectTagger(this.context.composerID,null);},_onMentionsInputChange:function(aa){var ba=aa.getCurrentContent().getPlainText();if(n.isEnabled(this.context.composerID)&&!w.trigger(ba))this._scrapeLink(ba);},_onPasteFiles:function(aa){g.selectAttachment(this.context.composerID,i.MEDIA);t.uploadPastedFile(this.context.composerID,aa[0],this._uploader);},_onPasteRawText:function(aa){if(n.isEnabled(this.context.composerID))this._scrapeLink(aa);},_scrapeLink:function(aa){if(n.getMarkup(this.context.composerID))return;var ba=v.permissiveMatch(aa);if(ba!==this.state.permissiveMatch){m.setPermissiveMatch(this.context.composerID,ba);var ca=w.match(aa)||ba;if(ca)t.scrapeLink(this.context.composerID,this.context.targetID,ca);}}});e.exports=z;},null);