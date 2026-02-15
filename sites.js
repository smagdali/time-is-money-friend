// Site rules for sort override — default everything to recency/newest
// Each entry: URL detection, sort parameter(s), available options, recency default
// eslint-disable-next-line no-unused-vars
var SITES = {
  amazon: {
    name: "Amazon",
    hostPattern: /\.amazon\./,
    searchPaths: ["/s"],
    sortParam: "s",
    sortOptions: [
      { value: "date-desc-rank", label: "Newest Arrivals" },
      { value: "price-asc-rank", label: "Price: Low to High" },
      { value: "price-desc-rank", label: "Price: High to Low" },
      { value: "review-rank", label: "Avg. Customer Review" },
      { value: "exact-aware-popularity-rank", label: "Best Sellers" }
    ],
    defaultSort: "date-desc-rank"
  },

  ebay: {
    name: "eBay",
    hostPattern: /\.ebay\./,
    searchPaths: ["/sch/"],
    sortParam: "_sop",
    sortOptions: [
      { value: "10", label: "Newly Listed" },
      { value: "15", label: "Price + Shipping: Lowest" },
      { value: "16", label: "Price + Shipping: Highest" },
      { value: "1", label: "Best Match" }
    ],
    defaultSort: "10"
  },

  etsy: {
    name: "Etsy",
    hostPattern: /\.etsy\.com$/,
    searchPaths: ["/search"],
    sortParam: "order",
    sortOptions: [
      { value: "date_desc", label: "Most Recent" },
      { value: "price_asc", label: "Price: Low to High" },
      { value: "price_desc", label: "Price: High to Low" },
      { value: "most_relevant", label: "Relevancy" }
    ],
    defaultSort: "date_desc"
  },

  reddit: {
    name: "Reddit",
    hostPattern: /\.reddit\.com$/,
    searchPaths: ["/search"],
    sortParam: "sort",
    sortOptions: [
      { value: "new", label: "New" },
      { value: "relevance", label: "Relevance" },
      { value: "hot", label: "Hot" },
      { value: "top", label: "Top" },
      { value: "comments", label: "Most Comments" }
    ],
    defaultSort: "new"
  },

  stackoverflow: {
    name: "Stack Overflow",
    hostPattern: /stackoverflow\.com$/,
    searchPaths: ["/search"],
    sortParam: "tab",
    sortOptions: [
      { value: "newest", label: "Newest" },
      { value: "relevance", label: "Relevance" },
      { value: "votes", label: "Votes" }
    ],
    defaultSort: "newest"
  },

  github: {
    name: "GitHub",
    hostPattern: /github\.com$/,
    searchPaths: ["/search"],
    sortParam: "s",
    additionalParams: { o: "desc" },
    sortOptions: [
      { value: "updated", label: "Recently Updated" },
      { value: "stars", label: "Most Stars" },
      { value: "forks", label: "Most Forks" },
      { value: "", label: "Best Match" }
    ],
    defaultSort: "updated"
  },

  indeed: {
    name: "Indeed",
    hostPattern: /\.indeed\./,
    searchPaths: ["/jobs"],
    sortParam: "sort",
    sortOptions: [
      { value: "date", label: "Date" },
      { value: "relevance", label: "Relevance" }
    ],
    defaultSort: "date"
  },

  walmart: {
    name: "Walmart",
    hostPattern: /\.walmart\.com$/,
    searchPaths: ["/search"],
    sortParam: "sort",
    sortOptions: [
      { value: "new", label: "New" },
      { value: "price_low", label: "Price: Low to High" },
      { value: "price_high", label: "Price: High to Low" },
      { value: "best_seller", label: "Best Seller" },
      { value: "best_match", label: "Best Match" },
      { value: "rating_high", label: "Customer Rating" }
    ],
    defaultSort: "new"
  },

  target: {
    name: "Target",
    hostPattern: /\.target\.com$/,
    searchPaths: ["/s"],
    sortParam: "sortBy",
    sortOptions: [
      { value: "newest", label: "Newest" },
      { value: "PriceLow", label: "Price: Low to High" },
      { value: "PriceHigh", label: "Price: High to Low" },
      { value: "bestselling", label: "Bestselling" },
      { value: "relevance", label: "Relevance" }
    ],
    defaultSort: "newest"
  },

  aliexpress: {
    name: "AliExpress",
    hostPattern: /\.aliexpress\.com$/,
    searchPaths: ["/w/"],
    sortParam: "SortType",
    sortOptions: [
      { value: "create_desc", label: "Newest" },
      { value: "price_asc", label: "Price: Low to High" },
      { value: "price_desc", label: "Price: High to Low" },
      { value: "total_tranpro_desc", label: "Orders" }
    ],
    defaultSort: "create_desc"
  },

  // --- Shopping (additional) ---

  asos: {
    name: "ASOS",
    hostPattern: /\.asos\.com$/,
    searchPaths: ["/search"],
    sortParam: "sort",
    sortOptions: [
      { value: "freshness", label: "What's New" },
      { value: "priceasc", label: "Price: Low to High" },
      { value: "pricedesc", label: "Price: High to Low" },
      { value: "relevancy", label: "Relevancy" }
    ],
    defaultSort: "freshness"
  },

  vinted: {
    name: "Vinted",
    hostPattern: /\.vinted\./,
    searchPaths: ["/catalog"],
    sortParam: "order",
    sortOptions: [
      { value: "newest_first", label: "Newest First" },
      { value: "price_low_to_high", label: "Price: Low to High" },
      { value: "price_high_to_low", label: "Price: High to Low" },
      { value: "relevance", label: "Relevance" }
    ],
    defaultSort: "newest_first"
  },

  ikea: {
    name: "IKEA",
    hostPattern: /\.ikea\.com$/,
    pathPattern: /\/search/,
    sortParam: "sort",
    sortOptions: [
      { value: "NEW", label: "Newest" },
      { value: "PRICE_LOW_TO_HIGH", label: "Price: Low to High" },
      { value: "PRICE_HIGH_TO_LOW", label: "Price: High to Low" },
      { value: "CUSTOMER_RATE", label: "Customer Rating" },
      { value: "MOST_POPULAR", label: "Most Popular" },
      { value: "RELEVANCE", label: "Relevance" }
    ],
    defaultSort: "NEW"
  },

  gumtree: {
    name: "Gumtree",
    hostPattern: /\.gumtree\.com$/,
    searchPaths: ["/search"],
    sortParam: "sort",
    sortOptions: [
      { value: "date", label: "Most Recent" },
      { value: "price_lowest_first", label: "Price: Lowest" },
      { value: "price_highest_first", label: "Price: Highest" }
    ],
    defaultSort: "date"
  },

  // --- Jobs ---

  linkedin: {
    name: "LinkedIn Jobs",
    hostPattern: /\.linkedin\.com$/,
    searchPaths: ["/jobs/search"],
    sortParam: "sortBy",
    sortOptions: [
      { value: "DD", label: "Most Recent" },
      { value: "R", label: "Most Relevant" }
    ],
    defaultSort: "DD"
  },

  reed: {
    name: "Reed",
    hostPattern: /\.reed\.co\.uk$/,
    searchPaths: ["/jobs"],
    sortParam: "sortBy",
    sortOptions: [
      { value: "displayDate", label: "Date Posted" },
      { value: "salary", label: "Salary" }
    ],
    defaultSort: "displayDate"
  },

  // --- Developer tools ---

  hn: {
    name: "Hacker News",
    hostPattern: /hn\.algolia\.com$/,
    searchPaths: ["/"],
    sortParam: "sort",
    sortOptions: [
      { value: "byDate", label: "Date" },
      { value: "byPopularity", label: "Popularity" }
    ],
    defaultSort: "byDate"
  },

  npm: {
    name: "npm",
    hostPattern: /npmjs\.com$/,
    searchPaths: ["/search"],
    sortParam: "ranking",
    sortOptions: [
      { value: "publish_date", label: "Recently Published" },
      { value: "download_count_last_week", label: "Most Downloaded (Week)" },
      { value: "download_count_last_month", label: "Most Downloaded (Month)" },
      { value: "dependent_count", label: "Most Dependents" }
    ],
    defaultSort: "publish_date"
  },

  pypi: {
    name: "PyPI",
    hostPattern: /pypi\.org$/,
    searchPaths: ["/search"],
    sortParam: "o",
    sortOptions: [
      { value: "-created", label: "Newest" },
      { value: "-zscore", label: "Trending" }
    ],
    defaultSort: "-created"
  },

  crates: {
    name: "Crates.io",
    hostPattern: /crates\.io$/,
    searchPaths: ["/search"],
    sortParam: "sort",
    sortOptions: [
      { value: "new", label: "Newly Added" },
      { value: "recent-updates", label: "Recently Updated" },
      { value: "recent-downloads", label: "Recent Downloads" },
      { value: "downloads", label: "All-Time Downloads" },
      { value: "alpha", label: "Alphabetical" },
      { value: "relevance", label: "Relevance" }
    ],
    defaultSort: "new"
  },

  // --- Property ---

  rightmove: {
    name: "Rightmove",
    hostPattern: /\.rightmove\.co\.uk$/,
    searchPaths: ["/property-for-sale/find.html", "/property-to-rent/find.html"],
    sortParam: "sortType",
    sortOptions: [
      { value: "6", label: "Newest Listed" },
      { value: "2", label: "Price: Lowest" },
      { value: "1", label: "Price: Highest" },
      { value: "10", label: "Oldest Listed" }
    ],
    defaultSort: "6"
  },

  zoopla: {
    name: "Zoopla",
    hostPattern: /\.zoopla\.co\.uk$/,
    searchPaths: ["/for-sale", "/to-rent"],
    sortParam: "results_sort",
    sortOptions: [
      { value: "newest_listings", label: "Newest Listings" },
      { value: "lowest_price", label: "Price: Lowest" },
      { value: "highest_price", label: "Price: Highest" },
      { value: "most_reduced", label: "Most Reduced" },
      { value: "most_popular", label: "Most Popular" }
    ],
    defaultSort: "newest_listings"
  }
};
