exports.selectusers = function(pool) {
	return function(req, res) {
	//Get the language translation API
	var language_translation = watson.language_translation({
	username: '82e40ac6-13ce-4548-b3c6-9e714153aac8',
	password: 'M1LEFR1wsaAH',
	version: 'v2'
	});

	language_translation.translate({
		text: 'hello',
		source: 'en',
		target: 'es'
	}, function(err, translation) {
		if(err)
			console.log(err)
		else
			console.log(translation);
		});
	}
}