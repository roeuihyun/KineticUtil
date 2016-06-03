/**
 * 2016.05.30
 * author : roeuihyun
 */
(function($) {

	// 생성
	var CollectionPool = function(){};
	
	// 싱글톤
	CollectionPool.instance = null;
	CollectionPool.getInstance = function(){
		if(CollectionPool.instance == null){
			CollectionPool.instance = new CollectionPool();
		}
		return CollectionPool.instance;
	};
	
	// 해당 인스턴스의 자료구조 길이와 값과 초기 배
	CollectionPool.lenght = 0;
	CollectionPool.items = {};
	
	// 자료 넣기 
	var _put = function(key, value){
        var previous = undefined;
        if (_hasItem(key)) {
            previous = CollectionPool.items[key];
        }else {
        	CollectionPool.length++;
        }
        CollectionPool.items[key] = value;
        return previous;
    }
	
	// 자료 얻기 
	var _get = function(key) {
        return _hasItem(key) ? CollectionPool.items[key] : undefined;
    }
	
	var _hasItem = function(key){
	    return CollectionPool.items.hasOwnProperty(key);
	}
	
	// 자료 삭제 
	var _removeItem = function(key){
        if (_hasItem(key)) {
            previous = CollectionPool.items[key];
            CollectionPool.length--;
            delete CollectionPool.items[key];
            return previous;
        }else {
            return undefined;
        }
    }
	
	// 자료들의 키값들 
	var _keys = function(){
        var keys = [];
        for (var k in CollectionPool.items) {
            if (_hasItem(k)) {
                keys.push(k);
            }
        }
        return keys;
    }
	
	// 자료들의 값들 
	var _values = function(){
        var values = [];
        for (var k in CollectionPool.items) {
            if (_hasItem(k)) {
                values.push(CollectionPool.items[k]);
            }
        }
        return values;
    }
	
	// 언더바로 표시된 함수들을 프로토타입과 매핑해준다.
	CollectionPool.prototype ={
		put: _put,
		get: _get,
		hasItem : _hasItem,
		removeItem : _removeItem,
		keys : _keys,
		values : _values
	};
	
	// 싱글톤을 표현하는 객체 표현 
	$.collectionPool = function(){
		return CollectionPool.getInstance();
	};

}(jQuery));