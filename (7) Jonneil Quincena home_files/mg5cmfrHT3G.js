/*!CK:1237467780!*//*1434698293,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ORbht"]); }

__d("ReactComposerStatusUtils",["ReactComposerAttachmentActions","ReactComposerAttachmentType","ReactComposerPhotoUploadActions","ReactComposerScrapedAttachmentActions","PUWMethods","uniqueID"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m={scrapeLink:function(n,o,p){j.scrapeAttachment(n,o,p);},uploadPastedFile:function(n,o,p){o.uploadID=l();o.filename='';p&&p.enqueueAsyncUploadRequest(n,[o],{});},uploadDroppedFiles:function(n,o,p){g.selectAttachment(n,h.MEDIA);i.photosSelect(n,o.length,k.DRAGDROP);o.forEach(function(q){q.uploadID=l();q.filename='';});p.enqueueAsyncUploadRequest(n,o,{});}};e.exports=m;},null);