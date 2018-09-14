(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b(require("paperduck")):"function"==typeof define&&define.amd?define(["paperduck"],b):a.VuetifyImageInput=b(a.PaperDuck)})(this,function(a){"use strict";function b(a){return function(){return a}}function c(a){return"function"==typeof a}function d(a){return c(a)?a:b(a)}function e(a,b,c){return Math.min(h(a,b),c)}function f(){if(this.internalImageData){var b=a.from(this.internalImageData);switch(this.flippedHorizontally&&(b=b.flop()),this.flippedVertically&&(b=b.flip()),this.rotation){case 1:b=b.rotate90();break;case 2:b=b.rotate180();break;case 3:b=b.rotate270();}return b=b.scale(this.clampedScaling),b=b.cropAlign(this.imageWidth,this.imageHeight),b.toDataURL("image/"+this.imageFormat,this.imageQuality)}return null}function g(b){var c=this;(this.imageData||b)&&this.imageData!==b&&a.load(b).then(function(a){var d=a.width,e=a.height;d&&e?(c.internalImageData=b,c.internalImageWidth=d,c.internalImageHeight=e,c.flippedHorizontally=!1,c.flippedVertically=!1,c.rotation=0,c.scaling=0):c.internalImageData=null}).catch(function(){})}var h=Math.max;a=a&&a.hasOwnProperty("default")?a["default"]:a;var i={clearable:{type:Boolean,default:!1},clearIcon:{type:[Function,String],default:function(){return this.$vuetify.icons.clear}},clearIconStyle:[Function,Object],disabled:{type:Boolean,default:!1},flipHorizontallyIcon:{type:[Function,String],default:"flip"},flipHorizontallyIconStyle:[Function,Object],flipVerticallyIcon:{type:[Function,String],default:"flip"},flipVerticallyIconStyle:{type:[Function,Object],default:b({transform:"rotate(90deg)"})},fullHeight:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},hideActions:{type:Boolean,default:!1},imageQuality:{},imageHeight:{type:Number,default:256},imageFormat:{type:String,default:"png"},imageWidth:{type:Number,default:256},readonly:{type:Boolean,default:!1},rotateClockwiseIcon:{type:[Function,String],default:"rotate_90_degrees_ccw"},rotateClockwiseIconStyle:{type:[Function,Object],default:b({transform:"scaleX(-1)"})},rotateCounterclockwiseIcon:{type:[Function,String],default:"rotate_90_degrees_ccw"},rotateCounterclockwiseIconStyle:[Function,Object],uploadIcon:{type:[Function,String],default:"cloud_upload"},uploadIconStyle:[Function,Object],value:String},j=Object.assign({},{checkeredBackground:function(){return["url('data:image/svg+xml;base64,"+btoa("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\" fill-opacity=\"0.2\"><rect x=\"1\" width=\"1\" height=\"1\"/><rect y=\"1\" width=\"1\" height=\"1\"/></svg>")+"')","center center / 16px 16px","repeat","#fff"].join(" ")},clampedScaling:function(){return e(this.scaling,this.minScaling,this.maxScaling)},imageData:f,maxScaling:function(){return h(1,this.minScaling)},minScaling:function(){return this.rotatedInternalImageWidth&&this.rotatedInternalImageHeight?h(this.imageWidth/this.rotatedInternalImageWidth,this.imageHeight/this.rotatedInternalImageHeight):0},rotatedInternalImageHeight:function(){return this.rotation%2?this.internalImageWidth:this.internalImageHeight},rotatedInternalImageWidth:function(){return this.rotation%2?this.internalImageHeight:this.internalImageWidth}},function(a,b){var c={};return Object.entries(a).forEach(function(d){var e=d[0],f=d[1];c[e]=b(f,e,a)}),c}({remappedClearIcon:"clearIcon",remappedClearIconStyle:"clearIconStyle",remappedFlipHorizontallyIcon:"flipHorizontallyIcon",remappedFlipHorizontallyIconStyle:"flipHorizontallyIconStyle",remappedFlipVerticallyIcon:"flipVerticallyIcon",remappedFlipVerticallyIconStyle:"flipVerticallyIconStyle",remappedRotateClockwiseIcon:"rotateClockwiseIcon",remappedRotateClockwiseIconStyle:"rotateClockwiseIconStyle",remappedRotateCounterclockwiseIcon:"rotateCounterclockwiseIcon",remappedRotateCounterclockwiseIconStyle:"rotateCounterclockwiseIconStyle",remappedUploadIcon:"uploadIcon",remappedUploadIconStyle:"uploadIconStyle"},function(a){return function(){return d(this[a]).call(this)}})),k={name:"VImageInput",components:{MyUploader:{inject:{theme:{default:{isDark:!1}}},props:["disabled","uploadIcon","uploadIconStyle"],methods:{onChange:function(a){var b=a.target.files;b&&this.uploadFiles(b)},onClick:function(){this.disabled||(this.$refs.input.value=null,this.$refs.input.click())},onDragLeave:function(a){a.preventDefault()},onDragOver:function(a){a.preventDefault()},onDrop:function(a){if(a.preventDefault(),!this.disabled){var b=a.dataTransfer.files;b&&this.uploadFiles(b)}},uploadFile:function(a){var b=this,c=new FileReader;c.addEventListener("load",function(){b.$emit("load",c.result)}),c.readAsDataURL(a)},uploadFiles:function(a){a.length&&this.uploadFile(a[0])}},render:function(a){return a("div",{style:{alignItems:"center",border:"1px dashed rgba("+(this.theme.isDark?"255,255,255,0.7":"0,0,0,0.54")+")",borderRadius:"6px",cursor:"pointer",display:"flex",justifyContent:"center"},on:{dragleave:this.onDragLeave,dragover:this.onDragOver,drop:this.onDrop,click:this.onClick}},[a("input",{style:{display:"none"},attrs:{type:"file"},on:{change:this.onChange},ref:"input"}),a("v-icon",{style:d(this.uploadIconStyle).call(this),props:{large:!0}},d(this.uploadIcon).call(this))])}}},inject:{theme:{default:{isDark:!1}}},props:i,data:function(){return{flippedHorizontally:!1,flippedVertically:!1,internalImageData:null,internalImageHeight:0,internalImageWidth:0,rotation:0,scaling:0}},computed:j,created:function(){this.$watch("value",function(a){this.load(a)},{immediate:!0}),this.$watch("imageData",function(a){this.$emit("input",a)},{immediate:!0})},methods:{clear:function(){this.internalImageData=null},createActionButtonElement:function(a,b,c,d){return a("v-btn",{class:"ma-1",props:{disabled:this.disabled,flat:!0,icon:!0},on:{click:b}},[a("v-icon",{style:d},c)])},createClearButtonElement:function(a){return this.createActionButtonElement(a,this.clear,this.remappedClearIcon,this.remappedClearIconStyle)},createFlipHorizontallyButtonElement:function(a){return this.createActionButtonElement(a,this.flipHorizontally,this.remappedFlipHorizontallyIcon,this.remappedFlipHorizontallyIconStyle)},createFlipVerticallyButtonElement:function(a){return this.createActionButtonElement(a,this.flipVertically,this.remappedFlipVerticallyIcon,this.remappedFlipVerticallyIconStyle)},createRotateClockwiseButtonElement:function(a){return this.createActionButtonElement(a,this.rotateClockwise,this.remappedRotateClockwiseIcon,this.remappedRotateClockwiseIconStyle)},createRotateCounterclockwiseButtonElement:function(a){return this.createActionButtonElement(a,this.rotateCounterclockwise,this.remappedRotateCounterclockwiseIcon,this.remappedRotateCounterclockwiseIconStyle)},createScaleSliderElement:function(a){var b=Math.round,c=this;return a("v-slider",{class:"mx-2 my-1",props:{disabled:this.disabled,hideDetails:!0,max:b(1e3*this.maxScaling),min:b(1e3*this.minScaling),value:b(1e3*this.clampedScaling)},on:{input:function(a){c.scaling=a/1e3}}})},flipHorizontally:function(){this.flippedHorizontally=!this.flippedHorizontally},flipVertically:function(){this.flippedVertically=!this.flippedVertically},load:g,rotate:function(a){this.rotation=((this.rotation+a)%4+4)%4},rotateClockwise:function(){this.rotate(1)},rotateCounterclockwise:function(){this.rotate(-1)}},render:function(a){return a("div",{style:Object.assign({},{display:"inline"},this.fullWidth?{width:"100%"}:{},this.fullHeight?{height:"100%"}:{})},[a("div",{style:{display:"table",height:0,minHeight:"100%",minWidth:"100%",width:0}},[a("div",{style:{display:"table-row"}},[a("div",{style:{display:"table-cell",height:"100%",position:"relative",width:"100%"}},[a("div",{style:Object.assign({},{alignItems:"center",background:this.checkeredBackground,display:"flex",height:"100%",justifyContent:"center",overflow:"hidden",padding:"50px",position:"relative",width:"100%"},this.internalImageData?{}:{opacity:0,visibility:"hidden"})},[a("img",{style:{left:"50%",position:"absolute",top:"50%",transform:["translate(-50%,-50%)","scale("+[this.flippedHorizontally?-1:1,this.flippedVertically?-1:1].join(",")+")","rotate("+90*this.rotation+"deg)","scale("+this.clampedScaling+")"].join(" ")},attrs:{src:this.internalImageData}}),a("div",{style:{border:"4px solid #fff",boxShadow:"0 0 4000px 4000px rgba(0,0,0,0.5)",boxSizing:"content-box",height:this.imageHeight+"px",position:"relative",width:this.imageWidth+"px"}})])].concat(this.internalImageData?[]:[a("my-uploader",{props:{disabled:this.disabled||this.readonly,uploadIcon:this.remappedUploadIcon,uploadIconStyle:this.remappedUploadIconStyle},style:{bottom:0,left:0,position:"absolute",right:0,top:0},on:{load:this.load}})])),a("div",{style:Object.assign({},{display:"table-cell",verticalAlign:"top"},this.internalImageData?{}:{opacity:0,visibility:"hidden"})},[a("div",{style:{display:"flex",flexDirection:"column",height:"100%",width:"100%"}},(this.clearable?[this.createClearButtonElement(a),a("v-spacer")]:[]).concat(this.hideActions||this.readonly?[]:[this.createFlipHorizontallyButtonElement(a),this.createFlipVerticallyButtonElement(a),this.createRotateClockwiseButtonElement(a),this.createRotateCounterclockwiseButtonElement(a)]))])]),a("div",{style:{display:"table-row"}},[a("div",{style:Object.assign({},{display:"table-cell"},this.internalImageData?{}:{opacity:0,visibility:"hidden"})},this.hideActions||this.readonly?[]:[this.createScaleSliderElement(a)]),a("div",{style:{display:"table-cell"}})])])])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(k.name,k),k});
