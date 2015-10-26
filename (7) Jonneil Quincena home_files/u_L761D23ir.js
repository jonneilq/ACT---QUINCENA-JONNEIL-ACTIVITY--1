/*!CK:4241373847!*//*1434993770,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["DhezG"]); }

__d("LtgLanguageDialectSelector.react",["IntlLocaleNames","React","XUISelector.react","fbt"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=i.Option,l=h,m=l.PropTypes,n=h.createClass({displayName:"LtgLanguageDialectSelector",propTypes:{onChange:m.func},render:function(){var o=g.LOCALE_DISPLAY_NAMES,p=Object.keys(o).map(function(q){return (h.createElement(k,{key:q,value:q},o[q]));});return (h.createElement(i,{name:"language dialect selector",onChange:this.props.onChange,defaultValue:"en_XX"},h.createElement(k,{value:"en_XX"},j._("Select")),p));}});e.exports=n;},null);