/*!CK:2577534716!*//*1434983533,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["WKl9U"]); }

__d("SaveState",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={SAVING:'saving',SAVED:'saved',UNSAVING:'unsaving',UNSAVED:'unsaved'};e.exports=g;},null);
__d("SaveStateHandler",["Run","SaveState"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=null;function j(){"use strict";this.$SaveStateHandler0={};this.$SaveStateHandler1={};g.onLeave(function(){i=null;});}j.prototype.addListener=function(k,l){"use strict";if(!this.$SaveStateHandler0[k])this.$SaveStateHandler0[k]=[];this.$SaveStateHandler0[k].push(l);};j.prototype.setState=function(k,l){"use strict";k.forEach(function(m){this.$SaveStateHandler1[m]=l;if(!this.$SaveStateHandler0[m])return;var n=this.$SaveStateHandler0[m];n.forEach(function(o){try{o.call(window,l);}catch(p){}});},this);};j.prototype.getState=function(k){"use strict";return this.$SaveStateHandler1[k];};j.$SaveStateHandler2=function(){"use strict";if(!i)i=new j();return i;};j.listen=function(k,l){"use strict";this.$SaveStateHandler2().addListener(k,l);};j.getState=function(k){"use strict";this.$SaveStateHandler2().getState(k);};j.saving=function(k){"use strict";this.$SaveStateHandler2().setState(k,h.SAVING);};j.saved=function(k){"use strict";this.$SaveStateHandler2().setState(k,h.SAVED);};j.unsaving=function(k){"use strict";this.$SaveStateHandler2().setState(k,h.UNSAVING);};j.unsaved=function(k){"use strict";this.$SaveStateHandler2().setState(k,h.UNSAVED);};j.isSaveAction=function(k){"use strict";var l=this.$SaveStateHandler2().getState(k);return (l==h.UNSAVED||l==h.UNSAVING);};e.exports=j;},null);
__d("CurationToggleButton",["CSS","cx","Event","SaveState","SaveStateHandler","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m="_vu",n="_vv";function o(p,q,r,s,t){"use strict";this.$CurationToggleButton0=false;this.$CurationToggleButton1=t;l([i.listen(q,'click',this.setSaving.bind(this)),i.listen(q,'error',this.setUnsaved.bind(this)),i.listen(r,'click',this.setUnsaving.bind(this)),i.listen(r,'error',this.setSaved.bind(this))]);k.listen(s,function(u){switch(u){case j.SAVING:g.addClass(p,m);g.addClass(p,n);r.setAttribute('rel','');this.$CurationToggleButton0=true;break;case j.SAVED:g.addClass(p,m);g.removeClass(p,n);r.setAttribute('rel','async-post');this.$CurationToggleButton0=false;break;case j.UNSAVING:g.removeClass(p,m);g.addClass(p,n);q.setAttribute('rel','');this.$CurationToggleButton0=true;break;case j.UNSAVED:g.removeClass(p,m);g.removeClass(p,n);q.setAttribute('rel','async-post');this.$CurationToggleButton0=false;break;}}.bind(this));}o.prototype.setSaving=function(){"use strict";if(!this.$CurationToggleButton0)k.saving(this.$CurationToggleButton1);};o.prototype.setUnsaving=function(){"use strict";if(!this.$CurationToggleButton0)k.unsaving(this.$CurationToggleButton1);};o.prototype.setSaved=function(){"use strict";k.saved(this.$CurationToggleButton1);};o.prototype.setUnsaved=function(){"use strict";k.unsaved(this.$CurationToggleButton1);};e.exports=o;},null);