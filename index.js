var mosiMap={
	a:'.-',
	b:'-...',
	c:'-.-.',
	d:'-..',
	e:'.',
	f:'..-.',
	g:'--.',
	h:'....',
	i:'..',
	j:'.---',
	k:'-.-',
	l:'.-..',
	m:'--',
	n:'-.',
	o:'---',
	p:'.--.',
	q:'--.-',
	r:'.-.',
	s:'...',
	t:'-',
	u:'..-',
	v:'...-',
	w:'.--',
	x:'-..-',
	y:'-.--',
	z:'--..',
	0:'-----',
	1:'.----',
	2:'..---',
	3:'...--',
	4:'....-',
	5:'.....',
	6:'-....',
	7:'--...',
	8:'---..',
	9:'----.'
}
var mosiMapR={}
for(var prop in mosiMap){
	mosiMapR[mosiMap[prop]]=prop
}
var app=new Vue({
	el: '#app',
	data:{
		word:'',
		code:''
	},
	computed: {
		parseCode:function(){
			var codes=this.code.toLowerCase().split('')
			var parseCode=''
			var parseCode2=''
			codes.forEach(function(el,index){
				if (el===' ') {
					parseCode+='&nbsp;&nbsp;'
					parseCode2+='&nbsp;&nbsp;'
				}else{
					parseCode2+=typeof mosiMap[el]!=='undefined'?mosiMap[el]+'&nbsp;':'?'
					parseCode+=typeof mosiMap[el]!=='undefined'?'('+el+')'+mosiMap[el]+'&nbsp;':'?'
				}

			})
			return '<b>'+parseCode2+'</b><hr>'+parseCode
		},
		parseWord:function(){
			var codes=this.word.toLowerCase().split(' ')
			var parseCode=''
			console.info(codes);
			codes.forEach(function(el,index){
				if (el==='') {
					parseCode+='&nbsp;&nbsp;'
				}else{
					parseCode+=typeof mosiMapR[el]!=='undefined'?mosiMapR[el]+'&nbsp;':'?'
				}

			})
			return parseCode
		}
	}

})

