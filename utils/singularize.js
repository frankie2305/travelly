export default singularize = category =>
	category === 'activities'
		? 'thing to do'
		: category.substring(0, category.length - 1);
