
(()=>{
	let base = function(id='#header',url='header/header.html'){
		let realUrl = 'component/'+url;
		$.ajax({
			method:'GET',
			url:realUrl,
			success:function(data){
				$(id).html(data);
			}
		});
	}
	base();
	base('#footer','footer/footer.html');
})()



