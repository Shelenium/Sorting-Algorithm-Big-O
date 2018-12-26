export const sortingAlgorithmList = [
	{
		name: "Quicksort",
		url: "https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/",
		urlWiki: "https://en.wikipedia.org/wiki/Quicksort",
		complexity: {
			time: {
				best: {
					value: "&#927;(n log(n))",
					category: "slow",
				},
				average: {
					value: "&#927;(n log(n))",
					category: "slow",
				},
				worst: {
					value: "&#927;(n<sup>2</sup>)",
					category: "slow",
				},
			},
			space: {
				value: "&#927;(log(n))",
				category: "fast",
			},
		},
	},

	{
		name: "Merge sort",
		url: "https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/",
		urlWiki: "https://en.wikipedia.org/wiki/Merge_sort",
		complexity: {
			time: {
				best: {
					value: "&#927;(n log(n))",
					category: "slow",
				},
				average: {
					value: "&#927;(n log(n))",
					category: "slow",
				},
				worst: {
					value: "&#927;(n log(n))",
					category: "slow",
				},
			},
			space: {
				value: "&#927;(n)",
				category: "fair",
			},
		},
	},

	{
		name: "Timsort",
		url: "https://www.youtube.com/watch?v=NVIjHj-lrT4",
		urlWiki: "https://en.wikipedia.org/wiki/Timsort",
		complexity: {
			time: {
				best: {
					value: "&#927;(n)",
					category: "fair",
				},
				average: {
					value: "&#927;(n log(n))",
					category: "slow",
				},
				worst: {
					value: "&#927;(n log(n))",
					category: "slow",
				},
			},
			space: {
				value: "&#927;(n)",
				category: "fair",
			},
		},
	},

	{
		name: "Heapsort",
		url: "https://www.hackerearth.com/practice/algorithms/sorting/heap-sort/tutorial/",
		urlWiki: "https://en.wikipedia.org/wiki/Heapsort",
		complexity: {
			time: {
				best: {
					value: "&#927;(n log(n))",
					category: "slow",
				},
				average: {
					value: "&#927;(n log(n))",
					category: "slow",
				},
				worst: {
					value: "&#927;(n log(n))",
					category: "slow",
				},
			},
			space: {
				value: "&#927;(1)",
				category: "fast",
			},
		},
	},

	{
		name: "Bubble sort",
		url: "https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/",
		urlWiki: "https://en.wikipedia.org/wiki/Bubble_sort",
		complexity: {
			time: {
				best: {
					value: "&#927;(n)",
					category: "fair",
				},
				average: {
					value: "&#927;(n<sup>2</sup>)",
					category: "slow",
				},
				worst: {
					value: "&#927;(n<sup>2</sup>)",
					category: "slow",
				},
			},
			space: {
				value: "&#927;(1)",
				category: "fast",
			},
		},
	},

	{
		name: "Insertion sort",
		url: "https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/",
		urlWiki: "https://en.wikipedia.org/wiki/Insertion_sort",
		complexity: {
			time: {
				best: {
					value: "&#927;(n)",
					category: "fair",
				},
				average: {
					value: "&#927;(n<sup>2</sup>)",
					category: "slow",
				},
				worst: {
					value: "&#927;(n<sup>2</sup>)",
					category: "slow",
				},
			},
			space: {
				value: "&#927;(1)",
				category: "fast",
			},
		},
	},

	{
		name: "Selection sort",
		url: "https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/",
		urlWiki: "https://en.wikipedia.org/wiki/Selection_sort",
		complexity: {
			time: {
				best: {
					value: "&#927;(n<sup>2</sup>)",
					category: "slow",
				},
				average: {
					value: "&#927;(n<sup>2</sup>)",
					category: "slow",
				},
				worst: {
					value: "&#927;(n<sup>2</sup>)",
					category: "slow",
				},
			},
			space: {
				value: "&#927;(1)",
				category: "fast",
			},
		},
	},

	{
		name: "Tree sort",
		url: "https://www.youtube.com/watch?v=n2MLjGeK7qA",
		urlWiki: "https://en.wikipedia.org/wiki/Tree_sort",
		complexity: {
			time: {
				best: {
					value: "&#927;(n log(n))",
					category: "slow",
				},
				average: {
					value: "&#927;(n log(n))",
					category: "slow",
				},
				worst: {
					value: "&#927;(n<sup>2</sup>)",
					category: "slow",
				},
			},
			space: {
				value: "&#927;(n)",
				category: "fair",
			},
		},
	},

	{
		name: "Shellsort",
		url: "http://www.algostructure.com/sorting/shellsort.php",
		urlWiki: "https://en.wikipedia.org/wiki/Shellsort",
		complexity: {
			time: {
				best: {
					value: "&#927;(n log(n))",
					category: "slow",
				},
				average: {
					value: "&#927;(n log<sup>2</sup>(n))",
					category: "slow",
				},
				worst: {
					value: "&#927;(n<sup>2</sup>)",
					category: "slow",
				},
			},
			space: {
				value: "&#927;(n)",
				category: "fair",
			},
		},
	},

	{
		name: "Bucket sort",
		url: "https://www.hackerearth.com/practice/algorithms/sorting/bucket-sort/tutorial/",
		urlWiki: "https://en.wikipedia.org/wiki/Bucket_sort",
		complexity: {
			time: {
				best: {
					value: "&#927;(n+k)",
					category: "fair",
				},
				average: {
					value: "&#927;(n+k)",
					category: "fair",
				},
				worst: {
					value: "&#927;(n<sup>2</sup>)",
					category: "slow",
				},
			},
			space: {
				value: "&#927;(n*k)",
				category: "fair",
			},
		},
	},


	{
		name: "Radix sort",
		url: "https://www.hackerearth.com/practice/algorithms/sorting/radix-sort/visualize/",
		urlWiki: "https://en.wikipedia.org/wiki/Radix_sort",
		complexity: {
			time: {
				best: {
					value: "&#927;(n*k)",
					category: "fair",
				},
				average: {
					value: "&#927;(n*k)",
					category: "fair",
				},
				worst: {
					value: "&#927;(n*k)",
					category: "fair",
				},
			},
			space: {
				value: "&#927;(n+k)",
				category: "fair",
			},
		},
	},

	{
		name: "Counting sort",
		url: "https://www.hackerearth.com/practice/algorithms/sorting/counting-sort/tutorial/",
		urlWiki: "https://en.wikipedia.org/wiki/Counting_sort",
		complexity: {
			time: {
				best: {
					value: "&#927;(n+k)",
					category: "fair",
				},
				average: {
					value: "&#927;(n+k)",
					category: "fair",
				},
				worst: {
					value: "&#927;(n+k)",
					category: "fair",
				},
			},
			space: {
				value: "&#927;(k)",
				category: "fair",
			},
		},
	},

	{
		name: "Cubesort",
		url: "",
		urlWiki: "https://en.wikipedia.org/wiki/Cubesort",
		complexity: {
			time: {
				best: {
					value: "&#927;(n)",
					category: "fair",
				},
				average: {
					value: "&#927;(n log(n))",
					category: "slow",
				},
				worst: {
					value: "&#927;(n log(n))",
					category: "slow",
				},
			},
			space: {
				value: "&#927;(n)",
				category: "fair",
			},
		},
	},
]

export const sortingAlgorithmListHeader = [
	'Algorithm',
	'Best time',
	'Average time',
	'Worst time',
	'Space (worst)'
]
