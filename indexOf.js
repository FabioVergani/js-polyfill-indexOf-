var AP=Array.prototype;
AP.indexOf=function(searchElement,fromIndex){
	var i=fromIndex,o=this,x=o.length,l=x>>>0;
	if(l!==0 && (i=isNaN(i)?0:parseInt(i),i<l)){
		x=Math;
		i=x.max(i>=0?i:l-x.abs(i),0);
		x=searchElement;
		while(i<l){if(i in o && o[i]===x){return i;};i++;};
	};
	return -1;
};
