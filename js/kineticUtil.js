/**
 * 2016.05.30
 * author : roeuihyun
 */
(function($) {
	
	// 기본 생성자 
	var KineticUtil = function(element){};
	
	// 싱글톤 적용 
	KineticUtil.instance = null;
	KineticUtil.getInstance = function(element){
		if(KineticUtil.instance == null){
			KineticUtil.instance = new KineticUtil(element);
		}
		return KineticUtil.instance;
	};
	
	// collectionPool 자료구조 사용 
	KineticUtil.hash = $.collectionPool();
	
	var _makeLabelTxtCenter = function(){
		
	};
	
	var _getLayer = function(){
		var layer = KineticUtil.hash.get("layer")
		if(layer == undefined){
			layer = new Kinetic.Layer({});
			KineticUtil.hash.put("layer",layer);
		};
		return layer;
	};
	
	// Stage객체 얻기 
	var _getStage = function(containerId){
	};
	
	var _init = function(){		
	};
	
	KineticUtil.prototype = {
		init : _init,
		getStage : _getStage,
		makeLabelTxtCenter : _makeLabelTxtCenter
	};
	
	$.kineticUtil = function(element){
		return KineticUtil.getInstance(element);
	};
	
}(jQuery));