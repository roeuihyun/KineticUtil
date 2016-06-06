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
			x: 100,
			y: 100,
			draggable: true
		});
		
		var circle = new Kinetic.Circle({
			radius: 20,
			fill: 'red',
			stroke: 'red',
			strokeWidth: 5
		});
		
		
		return label.add(circle);
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
		if(stage == null || stage == undefined){
			stage = new Kinetic.Stage({
				container : _containerId,
				width : _width,
				height : _height
			});
			KineticUtil.hash.put("stage");
		}
		return stage;
	};
	
	var _init = function(containerId){
		
		var width = $(window).width();
		var height =  $(window).height();
//		var width = $('#'+containerId).width();
//		var height =  $('#'+containerId).height();
		var stage = _getStage(containerId,width,height);
		var layer = _getLayer();
		var circleLable = _makeCircleTxtCenter();
		
		layer.add(circleLable);
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