"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2089],{2089:(e,t,s)=>{s.r(t),s.d(t,{ILoggerRegistry:()=>c,LogConsolePanel:()=>y,LogOutputModel:()=>a,Logger:()=>u,LoggerOutputAreaModel:()=>h,LoggerRegistry:()=>g,ScrollingWidget:()=>L});var r,i=s(93024),n=s(16762),o=s(56475);class a extends n.OutputModel{constructor(e){super(e),this.timestamp=new Date(e.value.timestamp),this.level=e.value.level}}class l extends i.OutputAreaModel.ContentFactory{createOutputModel(e){return new a(e)}}class h extends i.OutputAreaModel{constructor(e){var{maxLength:t}=e;super(function(e,t){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(s[r[i]]=e[r[i]])}return s}(e,["maxLength"])),this.maxLength=t}add(e){return super.add(e),this._applyMaxLength(),this.length}shouldCombine(e){const{value:t,lastModel:s}=e;return Math.trunc(s.timestamp.getTime()/1e3)===Math.trunc(t.timestamp/1e3)}get(e){return super.get(e)}get maxLength(){return this._maxLength}set maxLength(e){this._maxLength=e,this._applyMaxLength()}_applyMaxLength(){this.list.length>this._maxLength&&this.list.removeRange(0,this.list.length-this._maxLength)}}class u{constructor(e){this._isDisposed=!1,this._contentChanged=new o.Signal(this),this._stateChanged=new o.Signal(this),this._rendermime=null,this._version=0,this._level="warning",this.source=e.source,this.outputAreaModel=new h({contentFactory:new l,maxLength:e.maxLength})}get maxLength(){return this.outputAreaModel.maxLength}set maxLength(e){this.outputAreaModel.maxLength=e}get level(){return this._level}set level(e){const t=this._level;t!==e&&(this._level=e,this._log({output:{output_type:"display_data",data:{"text/plain":`Log level set to ${e}`}},level:"metadata"}),this._stateChanged.emit({name:"level",oldValue:t,newValue:e}))}get length(){return this.outputAreaModel.length}get contentChanged(){return this._contentChanged}get stateChanged(){return this._stateChanged}get rendermime(){return this._rendermime}set rendermime(e){if(e!==this._rendermime){const t=this._rendermime,s=this._rendermime=e;this._stateChanged.emit({name:"rendermime",oldValue:t,newValue:s})}}get version(){return this._version}log(e){if(r.LogLevel[e.level]<r.LogLevel[this._level])return;let t=null;switch(e.type){case"text":t={output_type:"display_data",data:{"text/plain":e.data}};break;case"html":t={output_type:"display_data",data:{"text/html":e.data}};break;case"output":t=e.data}t&&this._log({output:t,level:e.level})}clear(){this.outputAreaModel.clear(!1),this._contentChanged.emit("clear")}checkpoint(){this._log({output:{output_type:"display_data",data:{"text/html":"<hr/>"}},level:"metadata"})}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,this.clear(),this._rendermime=null,o.Signal.clearData(this))}_log(e){this._version++,this.outputAreaModel.add(Object.assign(Object.assign({},e.output),{timestamp:Date.now(),level:e.level})),this._contentChanged.emit("append")}}!function(e){let t;!function(e){e[e.debug=0]="debug",e[e.info=1]="info",e[e.warning=2]="warning",e[e.error=3]="error",e[e.critical=4]="critical",e[e.metadata=5]="metadata"}(t=e.LogLevel||(e.LogLevel={}))}(r||(r={}));class g{constructor(e){this._loggers=new Map,this._registryChanged=new o.Signal(this),this._isDisposed=!1,this._defaultRendermime=e.defaultRendermime,this._maxLength=e.maxLength}getLogger(e){const t=this._loggers;let s=t.get(e);return s||(s=new u({source:e,maxLength:this.maxLength}),s.rendermime=this._defaultRendermime,t.set(e,s),this._registryChanged.emit("append"),s)}getLoggers(){return Array.from(this._loggers.values())}get registryChanged(){return this._registryChanged}get maxLength(){return this._maxLength}set maxLength(e){this._maxLength=e,this._loggers.forEach((t=>{t.maxLength=e}))}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,this._loggers.forEach((e=>e.dispose())),o.Signal.clearData(this))}}const c=new(s(19461).Token)("@jupyterlab/logconsole:ILoggerRegistry");var d=s(15343),p=s(27639);class _ extends p.Widget{constructor(){super(),this._timestampNode=document.createElement("div"),this.node.append(this._timestampNode)}set timestamp(e){this._timestamp=e,this._timestampNode.innerHTML=this._timestamp.toLocaleTimeString(),this.update()}set level(e){this._level=e,this.node.dataset.logLevel=e,this.update()}update(){var e;void 0!==this._level&&void 0!==this._timestamp&&(this.node.title=`${this._timestamp.toLocaleString()}; ${e=this._level,0===e.length?e:e[0].toUpperCase()+e.slice(1)} level`)}}class m extends i.OutputArea{createOutputItem(e){const t=super.createOutputItem(e);if(null===t)return null;const s=t.widgets[0];return s.timestamp=e.timestamp,s.level=e.level,t}onInputRequest(e,t){}}class v extends i.OutputArea.ContentFactory{createOutputPrompt(){return new _}}class L extends p.Widget{constructor(e){var{content:t}=e;super(function(e,t){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(s[r[i]]=e[r[i]])}return s}(e,["content"])),this._observer=null,this.addClass("jp-Scrolling"),(this.layout=new p.PanelLayout).addWidget(t),this._content=t,this._sentinel=document.createElement("div"),this.node.appendChild(this._sentinel)}get content(){return this._content}onAfterAttach(e){super.onAfterAttach(e),requestAnimationFrame((()=>{this._sentinel.scrollIntoView(),this._scrollHeight=this.node.scrollHeight})),"undefined"!=typeof IntersectionObserver&&(this._observer=new IntersectionObserver((e=>{this._handleScroll(e)}),{root:this.node,threshold:1}),this._observer.observe(this._sentinel))}onBeforeDetach(e){this._observer&&this._observer.disconnect()}onAfterShow(e){this._tracking&&this._sentinel.scrollIntoView()}_handleScroll([e]){if(e.isIntersecting)this._tracking=!0;else if(this.isVisible){const e=this.node.scrollHeight;e===this._scrollHeight?this._tracking=!1:(this._sentinel.scrollIntoView(),this._scrollHeight=e,this._tracking=!0)}}}class y extends p.StackedPanel{constructor(e,t){super(),this._outputAreas=new Map,this._source=null,this._sourceChanged=new o.Signal(this),this._sourceDisplayed=new o.Signal(this),this._loggersWatched=new Set,this.translator=t||d.nullTranslator,this._trans=this.translator.load("jupyterlab"),this._loggerRegistry=e,this.addClass("jp-LogConsolePanel"),e.registryChanged.connect(((e,t)=>{this._bindLoggerSignals()}),this),this._bindLoggerSignals(),this._placeholder=new p.Widget,this._placeholder.addClass("jp-LogConsoleListPlaceholder"),this.addWidget(this._placeholder)}get loggerRegistry(){return this._loggerRegistry}get logger(){return null===this.source?null:this.loggerRegistry.getLogger(this.source)}get source(){return this._source}set source(e){if(e===this._source)return;const t=this._source,s=this._source=e;this._showOutputFromSource(s),this._handlePlaceholder(),this._sourceChanged.emit({oldValue:t,newValue:s,name:"source"})}get sourceVersion(){const e=this.source;return null!==e?this._loggerRegistry.getLogger(e).version:null}get sourceChanged(){return this._sourceChanged}get sourceDisplayed(){return this._sourceDisplayed}onAfterAttach(e){super.onAfterAttach(e),this._updateOutputAreas(),this._showOutputFromSource(this._source),this._handlePlaceholder()}onAfterShow(e){super.onAfterShow(e),null!==this.source&&this._sourceDisplayed.emit({source:this.source,version:this.sourceVersion})}_bindLoggerSignals(){const e=this._loggerRegistry.getLoggers();for(const t of e)this._loggersWatched.has(t.source)||(t.contentChanged.connect(((e,t)=>{this._updateOutputAreas(),this._handlePlaceholder()}),this),t.stateChanged.connect(((e,t)=>{if("rendermime"!==t.name)return;const s=`source:${e.source}`,r=this._outputAreas.get(s);r&&(t.newValue?r.rendermime=t.newValue:r.dispose())}),this),this._loggersWatched.add(t.source))}_showOutputFromSource(e){const t=null===e?"null source":`source:${e}`;this._outputAreas.forEach(((e,s)=>{var r,i;e.id===t?(null===(r=e.parent)||void 0===r||r.show(),e.isVisible&&this._sourceDisplayed.emit({source:this.source,version:this.sourceVersion})):null===(i=e.parent)||void 0===i||i.hide()}));const s=null===e?this._trans.__("Log Console"):this._trans.__("Log: %1",e);this.title.label=s,this.title.caption=s}_handlePlaceholder(){null===this.source?(this._placeholder.node.textContent=this._trans.__("No source selected."),this._placeholder.show()):0===this._loggerRegistry.getLogger(this.source).length?(this._placeholder.node.textContent=this._trans.__("No log messages."),this._placeholder.show()):(this._placeholder.hide(),this._placeholder.node.textContent="")}_updateOutputAreas(){const e=new Set,t=this._loggerRegistry.getLoggers();for(const s of t){const t=s.source,r=`source:${t}`;if(e.add(r),!this._outputAreas.has(r)){const e=new m({rendermime:s.rendermime,contentFactory:new v,model:s.outputAreaModel});e.id=r;const i=new L({content:e});this.addWidget(i),this._outputAreas.set(r,e);const n=e=>{this.source===t&&e.isVisible&&this._sourceDisplayed.emit({source:this.source,version:this.sourceVersion})};e.outputLengthChanged.connect(n,this),n(e)}}const s=this._outputAreas.keys();for(const t of s)if(!e.has(t)){const e=this._outputAreas.get(t);null==e||e.dispose(),this._outputAreas.delete(t)}}}}}]);
//# sourceMappingURL=2089.86d4042758c5c9d6f764.js.map