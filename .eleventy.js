module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./src/images');
	eleventyConfig.addPassthroughCopy('./src/js');
	eleventyConfig.addPassthroughCopy('./src/styles');
	eleventyConfig.addPassthroughCopy('./src/resource');
	eleventyConfig.addPassthroughCopy('./src/_redirects');
	return {
		dir: {
			input:"src",
			output:"public"
		},
		passthroughFileCopy: true
	};	
}