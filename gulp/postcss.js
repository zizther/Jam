module.exports = {
  use: [
    'postcss-flexbugs-fixes',
    'autoprefixer'
  ],
  map: {
    inline: false,
    annotation: true,
    sourcesContent: true
  },
  autoprefixer: {
    browsers: [
      // To find out browser support check out http://browserl.ist/
      '> 5%',
      'last 2 versions',
      'Firefox ESR',
      // Note: Edge versions in Autoprefixer & Can I Use refer to the EdgeHTML rendering engine version,
      // NOT the Edge app version shown in Edge's "About" screen.
      // For example, at the time of writing, Edge 20 on an up-to-date system uses EdgeHTML 12.
      // See also https://github.com/Fyrd/caniuse/issues/1928
      'Edge >= 12',
      // Out of leniency, we prefix these 1 version further back than the official policy.
      'iOS >= 8',
      'Safari >= 8',
      // The following remain NOT officially supported, but we're lenient and include their prefixes to avoid severely breaking in them.
      'Android 2.3',
      'Android >= 4',
      'Opera >= 12.1'
    ]
  }
}
