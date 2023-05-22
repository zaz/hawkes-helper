// You can copy the line below into the URL bar instead of adding this script to your browser
// javascript:$.getScript('https://cdn.jsdelivr.net/npm/@androettop/mathml2latex@1.1.17/lib/mathml2latex.browser.cjs.min.js');fixEquation  = latex => latex.replace(/ = $/, '');window.open('https://www.wolframalpha.com/input?i='+$(".MathJax").map((_, e) => $(e).data("mathml")).get().map(mathml2latex.convert).map(fixEquation).join(",  "))

$.getScript('https://cdn.jsdelivr.net/npm/@androettop/mathml2latex@1.1.17/lib/mathml2latex.browser.cjs.min.js')

fixEquation  = latex => latex.replace(/ = $/, '')

let viewProblemInWolframAlpha = () =>
	window.open('https://www.wolframalpha.com/input?i='+
		$(".MathJax").map((_, e) => $(e).data("mathml"))
		             .get()
		             .map(mathml2latex.convert)
		             .map(fixEquation)
		             .join(",  ")
	)

$(document).keydown(function (event) {
		if (event.altKey && event.key === 'q') {
			viewProblemInWolframAlpha()
			event.preventDefault()
		}
})
