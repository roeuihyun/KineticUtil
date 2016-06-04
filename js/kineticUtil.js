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
	
	var _makeCircleTxtCenter = function(){
		
		var label = new Kinetic.Label({
			
		});
		
		var circle = new Kinetic.Circle({
			radius: 40,
			fill: 'red',
			stroke: 'black',
			strokeWidth: 5
		});
		return circle;
	};
	
	var _makeLabelTxtCenter = function(){
		
	};
	
	var _getLayer = function(){
		var layer = KineticUtil.hash.get("layer");
		if(layer == undefined){
			layer = new Kinetic.Layer({});
			KineticUtil.hash.put("layer",layer);
		};
		return layer;
	};
	
	// Stage객체 얻기 
	var _getStage = function(_containerId,_width,_height){
		var stage = KineticUtil.hash.get("stage");
		if(stage == null){
			stage = new Kinetic.Stage({
				container : _containerId,
				width : _width,
				heigth : _height
			});
			KineticUtil.hash.put("stage");
		}
		return stage;
	};
	
	var _init = function(containerId){
		var width = $("#"+containerId).width();
		var height = $("#"+containerId).height();
		var stage = _getStage(containerId,width,height);
		var layer = _getLayer();
		var circle = _makeCircleTxtCenter();
		layer.add(circle);
		stage.add(layer);
	};
	
	KineticUtil.prototype = {
		init : _init,
		getStage : _getStage,
		makeLabelTxtCenter : _makeLabelTxtCenter,
		makeCircleTxtCenter : _makeCircleTxtCenter 
	};
	
	$.kineticUtil = function(element){
		return KineticUtil.getInstance(element);
	};
	
}(jQuery));