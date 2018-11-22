Ext.data.JsonP.BasiGX_util_WFS({"tagname":"class","name":"BasiGX.util.WFS","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"WFS.js","href":"WFS.html#BasiGX-util-WFS"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":["BasiGX.util.CSRF","BasiGX.util.Filter","BasiGX.util.Url"],"uses":[],"members":[{"name":"errorMsgTitle","tagname":"property","owner":"BasiGX.util.WFS","id":"static-property-errorMsgTitle","meta":{"private":true,"static":true}},{"name":"reMatchFilter","tagname":"property","owner":"BasiGX.util.WFS","id":"static-property-reMatchFilter","meta":{"static":true}},{"name":"wfsExecuteExceptionText","tagname":"property","owner":"BasiGX.util.WFS","id":"static-property-wfsExecuteExceptionText","meta":{"private":true,"static":true}},{"name":"wfsGetFeatureXmlTpl","tagname":"property","owner":"BasiGX.util.WFS","id":"static-property-wfsGetFeatureXmlTpl","meta":{"static":true}},{"name":"combineFilters","tagname":"method","owner":"BasiGX.util.WFS","id":"static-method-combineFilters","meta":{"static":true}},{"name":"executeWfsGetFeature","tagname":"method","owner":"BasiGX.util.WFS","id":"static-method-executeWfsGetFeature","meta":{"static":true}},{"name":"genericFailureHandler","tagname":"method","owner":"BasiGX.util.WFS","id":"static-method-genericFailureHandler","meta":{"static":true}},{"name":"genericSuccessHandler","tagname":"method","owner":"BasiGX.util.WFS","id":"static-method-genericSuccessHandler","meta":{"static":true}},{"name":"getAttributeLikeFilter","tagname":"method","owner":"BasiGX.util.WFS","id":"static-method-getAttributeLikeFilter","meta":{"static":true}},{"name":"getBboxFilter","tagname":"method","owner":"BasiGX.util.WFS","id":"static-method-getBboxFilter","meta":{"static":true}},{"name":"getFilterPrefix","tagname":"method","owner":"BasiGX.util.WFS","id":"static-method-getFilterPrefix","meta":{"static":true}},{"name":"getFullFilterAndApplyIt","tagname":"method","owner":"BasiGX.util.WFS","id":"static-method-getFullFilterAndApplyIt","meta":{"static":true}},{"name":"getOgcFromCqlFilter","tagname":"method","owner":"BasiGX.util.WFS","id":"static-method-getOgcFromCqlFilter","meta":{"static":true}},{"name":"getTimeAndSldCompliantFilter","tagname":"method","owner":"BasiGX.util.WFS","id":"static-method-getTimeAndSldCompliantFilter","meta":{"static":true}},{"name":"getTimeFilterParts","tagname":"method","owner":"BasiGX.util.WFS","id":"static-method-getTimeFilterParts","meta":{"static":true}},{"name":"handleWfsExecuteException","tagname":"method","owner":"BasiGX.util.WFS","id":"static-method-handleWfsExecuteException","meta":{"static":true}},{"name":"insertFilter","tagname":"method","owner":"BasiGX.util.WFS","id":"static-method-insertFilter","meta":{"static":true}},{"name":"mergeFilterWithSldFilters","tagname":"method","owner":"BasiGX.util.WFS","id":"static-method-mergeFilterWithSldFilters","meta":{"static":true}},{"name":"unwrapFilter","tagname":"method","owner":"BasiGX.util.WFS","id":"static-method-unwrapFilter","meta":{"static":true}}],"code_type":"ext_define","id":"class-BasiGX.util.WFS","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>BasiGX.util.WFS</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/BasiGX.util.CSRF' rel='BasiGX.util.CSRF' class='docClass'>BasiGX.util.CSRF</a></div><div class='dependency'><a href='#!/api/BasiGX.util.Filter' rel='BasiGX.util.Filter' class='docClass'>BasiGX.util.Filter</a></div><div class='dependency'><a href='#!/api/BasiGX.util.Url' rel='BasiGX.util.Url' class='docClass'>BasiGX.util.Url</a></div><h4>Files</h4><div class='dependency'><a href='source/WFS.html#BasiGX-util-WFS' target='_blank'>WFS.js</a></div></pre><div class='doc-contents'><p>WFS utility.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-errorMsgTitle' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-property-errorMsgTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-property-errorMsgTitle' class='name expandable'>errorMsgTitle</a> : String<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>start i18n ...</div><div class='long'><p>start i18n</p>\n<p>Defaults to: <code>&#39;&#39;</code></p></div></div></div><div id='static-property-reMatchFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-property-reMatchFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-property-reMatchFilter' class='name expandable'>reMatchFilter</a> : RegExp<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>A regular expression that will match an OGC &lt;ogc:Filter&gt; element. ...</div><div class='long'><p>A regular expression that will match an OGC <code>&lt;ogc:Filter&gt;</code> element.\nCaptured parts are as follows:</p>\n\n<ul>\n<li>Index <code>0</code>: Complete match.</li>\n<li>Index <code>1</code>: <code>&lt;ogc:Filter&gt;</code> start tag including attributes, if any.</li>\n<li>Index <code>2</code>: Anything between <code>&lt;ogc:Filter&gt;</code> start and end tag.</li>\n<li>Index <code>3</code>: <code>&lt;/ogc:Filter&gt;</code> end tag.</li>\n</ul>\n\n\n<p>Hat-tip: http://www.regular-expressions.info/examples.html</p>\n<p>Defaults to: <code>/(&lt;ogc:Filter\\b[^&gt;]*&gt;)(.*?)(&lt;\\/ogc:Filter&gt;)/</code></p></div></div></div><div id='static-property-wfsExecuteExceptionText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-property-wfsExecuteExceptionText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-property-wfsExecuteExceptionText' class='name expandable'>wfsExecuteExceptionText</a> : String<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;&#39;</code></p></div></div></div><div id='static-property-wfsGetFeatureXmlTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-property-wfsGetFeatureXmlTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-property-wfsGetFeatureXmlTpl' class='name expandable'>wfsGetFeatureXmlTpl</a> : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>The WFS GetFeature XML body template ...</div><div class='long'><p>The WFS GetFeature XML body template</p>\n<p>Defaults to: <code>&#39;&#39; + &#39;&lt;wfs:GetFeature service=&quot;WFS&quot; version=&quot;1.1.0&quot;&#39; + &#39; outputFormat=&quot;JSON&quot;&#39; + &#39; maxFeatures=&quot;{6}&quot;&#39; + &#39; viewParams=&quot;{7}&quot;&#39; + &#39; xmlns:{0}=&quot;{1}&quot;&#39; + &#39; xmlns:wfs=&quot;http://www.opengis.net/wfs&quot;&#39; + &#39; xmlns=&quot;http://www.opengis.net/ogc&quot;&#39; + &#39; xmlns:gml=&quot;http://www.opengis.net/gml&quot;&#39; + &#39; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&#39; + &#39; xsi:schemaLocation=&quot;http://www.opengis.net/wfs&#39; + &#39; http://schemas.opengis.net/wfs/1.0.0/WFS-basic.xsd&quot;&gt;&#39; + &#39;&lt;wfs:Query typeName=&quot;{2}&quot; srsName=&quot;{3}&quot;&gt;&#39; + &#39;{4}&#39; + &#39;{5}&#39; + &#39;&lt;/wfs:Query&gt;&#39; + &#39;&lt;/wfs:GetFeature&gt;&#39;</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-combineFilters' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-method-combineFilters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-method-combineFilters' class='name expandable'>combineFilters</a>( <span class='pre'>filters, [combinator], [filterTag]</span> ) : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Combines the passed filters with an &lt;ogc:And&gt; or &lt;ogc:Or&gt; and\nreturns them. ...</div><div class='long'><p>Combines the passed filters with an <code>&lt;ogc:And&gt;</code> or <code>&lt;ogc:Or&gt;</code> and\nreturns them.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filters</span> : Array&lt;String&gt;<div class='sub-desc'><p>The filters to join, falsy ones will\n    be skipped.</p>\n</div></li><li><span class='pre'>combinator</span> : String (optional)<div class='sub-desc'><p>The boolean combinator to use, should be\n    either <code>And</code> (the default) or <code>Or</code>.</p>\n</div></li><li><span class='pre'>filterTag</span> : String (optional)<div class='sub-desc'><p>The tag which should be used at the begin\n    of the filter string. If you pass the empty string (<code>''</code>), the\n    combined filters will not be wrapped in an <code>&lt;ogc:Filter&gt;</code>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>An combined OGC filter with the passed filters.</p>\n</div></li></ul></div></div></div><div id='static-method-executeWfsGetFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-method-executeWfsGetFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-method-executeWfsGetFeature' class='name expandable'>executeWfsGetFeature</a>( <span class='pre'>url, layer, srsName, displayColumns, geomFieldName, filter, maxFeatures, successCallback, failureCallback, scope, viewParams</span> ) : Ext.data.request.Ajax<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Executes a WFS GetFeature request for the passed arguments. ...</div><div class='long'><p>Executes a WFS GetFeature request for the passed arguments.</p>\n\n<p>TODO Refactor so this doesn't need that much arguments.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The URL to the geoserver WFS endpoint</p>\n</div></li><li><span class='pre'>layer</span> : ol.layer.Base<div class='sub-desc'><p>The layer to query</p>\n</div></li><li><span class='pre'>srsName</span> : String<div class='sub-desc'><p>The name of the SRS to reporject features to</p>\n</div></li><li><span class='pre'>displayColumns</span> : Array<div class='sub-desc'><p>The array of columns to display</p>\n</div></li><li><span class='pre'>geomFieldName</span> : String<div class='sub-desc'><p>The name of the geom field</p>\n</div></li><li><span class='pre'>filter</span> : String<div class='sub-desc'><p>An OGC 1.1.0 filter in XML format for limiting\n   the number of returned features.</p>\n</div></li><li><span class='pre'>maxFeatures</span> : Integer<div class='sub-desc'><p>The maximum number of features to get.\n   Defaults to 1000 if not set.</p>\n</div></li><li><span class='pre'>successCallback</span> : Function<div class='sub-desc'><p>A function to call with the\n   response in case the request finished successfully.</p>\n</div></li><li><span class='pre'>failureCallback</span> : Function<div class='sub-desc'><p>A function to call with the\n   response in case the request finished with an error.</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope (this-context) of the methods for\n   success or failure callbacks.</p>\n</div></li><li><span class='pre'>viewParams</span> : String<div class='sub-desc'><p>the view params to append</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.data.request.Ajax</span><div class='sub-desc'><p>The request object.</p>\n</div></li></ul></div></div></div><div id='static-method-genericFailureHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-method-genericFailureHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-method-genericFailureHandler' class='name expandable'>genericFailureHandler</a>( <span class='pre'></span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>A generic function bound as the failure callback, if none was\nprovided. ...</div><div class='long'><p>A generic function bound as the failure callback, if none was\nprovided.</p>\n</div></div></div><div id='static-method-genericSuccessHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-method-genericSuccessHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-method-genericSuccessHandler' class='name expandable'>genericSuccessHandler</a>( <span class='pre'></span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>A generic function bound as the success callback, if none was\nprovided. ...</div><div class='long'><p>A generic function bound as the success callback, if none was\nprovided.</p>\n</div></div></div><div id='static-method-getAttributeLikeFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-method-getAttributeLikeFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-method-getAttributeLikeFilter' class='name expandable'>getAttributeLikeFilter</a>( <span class='pre'>propertyNames, queryValue, combinator, matchCase, namespace</span> ) : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns a attribute LIKE filter for the passed property names. ...</div><div class='long'><p>Returns a attribute LIKE filter for the passed property names. Can be\ncombined with <code>Or</code> (default) or <code>And</code> operator.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>propertyNames</span> : Array<div class='sub-desc'><p>The name of the properties which should\nbe queried.</p>\n</div></li><li><span class='pre'>queryValue</span> : String<div class='sub-desc'><p>The value to query.</p>\n</div></li><li><span class='pre'>combinator</span> : String<div class='sub-desc'><p>Should be either <code>And</code> or <code>Or</code>.</p>\n</div></li><li><span class='pre'>matchCase</span> : Boolean<div class='sub-desc'><p>If the case should be considered.\n  Default is false.</p>\n</div></li><li><span class='pre'>namespace</span> : String<div class='sub-desc'><p>Namespace alias for the XML to be used as\n  prefix for <code>PropertyIsLike</code> filter. Optional. Default is <code>ogc</code>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The created LIKE filter.</p>\n</div></li></ul></div></div></div><div id='static-method-getBboxFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-method-getBboxFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-method-getBboxFilter' class='name expandable'>getBboxFilter</a>( <span class='pre'>map, propertyName, extent</span> ) : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns a BBOX filter for the given map and the passed property name. ...</div><div class='long'><p>Returns a BBOX filter for the given map and the passed property name.</p>\n\n<p>Implementation very likely to change using Jsonix.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>map</span> : ol.Map<div class='sub-desc'><p>The map to get the extent from.</p>\n</div></li><li><span class='pre'>propertyName</span> : String<div class='sub-desc'><p>The name of the geometry property of the\n    featuretype to filter.</p>\n</div></li><li><span class='pre'>extent</span> : Array<div class='sub-desc'><p>The optional extent Array to use for the filter</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The create BBOX filter.</p>\n</div></li></ul></div></div></div><div id='static-method-getFilterPrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-method-getFilterPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-method-getFilterPrefix' class='name expandable'>getFilterPrefix</a>( <span class='pre'>filter</span> ) : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns the actually used &lt;ogc:Filter&gt; start tag from the passed\nOGC filter. ...</div><div class='long'><p>Returns the actually used <code>&lt;ogc:Filter&gt;</code> start tag from the passed\nOGC filter.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filter</span> : String<div class='sub-desc'><p>The filter to get the <code>&lt;ogc:Filter&gt;</code> from.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The <code>&lt;ogc:Filter&gt;</code> of the filter or the empty\n    string.</p>\n</div></li></ul></div></div></div><div id='static-method-getFullFilterAndApplyIt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-method-getFullFilterAndApplyIt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-method-getFullFilterAndApplyIt' class='name expandable'>getFullFilterAndApplyIt</a>( <span class='pre'>filterLayer, spatialFilter, timeFilterParts, sldFilters, successCallback, failureCallback, scope</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Builds the full filter encoding object from all given filters\n(spatial, time and SLD) and sends it as parameter for t...</div><div class='long'><p>Builds the full filter encoding object from all given filters\n(spatial, time and SLD) and sends it as parameter for the WFS\nGetFeature request for selection.</p>\n\n<p>Suppose you have the following filters:</p>\n\n<ul>\n<li><code>spatialFilter</code>, let's call this <code>F1</code></li>\n<li><code>timeFilter</code>, call this <code>F2</code></li>\n<li><code>sldFilters</code>, an array of <code>F3</code> and <code>F4</code></li>\n</ul>\n\n\n<p>This method will combine these filters as follows:</p>\n\n<pre><code>F1    AND    F2    AND    (  F3    OR    F4  )\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filterLayer</span> : ol.layer.Base<div class='sub-desc'><p>The layer to handle</p>\n</div></li><li><span class='pre'>spatialFilter</span> : String<div class='sub-desc'><p>Filter encoding for spatial filter.</p>\n</div></li><li><span class='pre'>timeFilterParts</span> : String<div class='sub-desc'><p>Filter encoding for time filter\n    containing two OGC filters - <code>PropertyIsGreaterThanOrEqualTo</code> and\n    <code>PropertyIsLessThanOrEqualTo</code>.</p>\n</div></li><li><span class='pre'>sldFilters</span> : Array<div class='sub-desc'><p>Array containing filter encodings for SLD\n    filters.</p>\n</div></li><li><span class='pre'>successCallback</span> : Function<div class='sub-desc'><p>A function to call with the\n    response in case the request finished successfully.</p>\n</div></li><li><span class='pre'>failureCallback</span> : Function<div class='sub-desc'><p>A function to call with the\n    response in case the request finished with an error.</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope (this-context) of the methods for\n    success or failure callbacks.</p>\n</div></li></ul></div></div></div><div id='static-method-getOgcFromCqlFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-method-getOgcFromCqlFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-method-getOgcFromCqlFilter' class='name expandable'>getOgcFromCqlFilter</a>( <span class='pre'>cqlFilter</span> ) : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns an OGC filter for the given CQL Filter. ...</div><div class='long'><p>Returns an OGC filter for the given CQL Filter.\nSupport for different filters is currently very limited.\nOnly CQL filters having a key, operator and value are supported\nfor now.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cqlFilter</span> : String<div class='sub-desc'><p>The CQL filter to convert</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The OGC filter.</p>\n</div></li></ul></div></div></div><div id='static-method-getTimeAndSldCompliantFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-method-getTimeAndSldCompliantFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-method-getTimeAndSldCompliantFilter' class='name expandable'>getTimeAndSldCompliantFilter</a>( <span class='pre'>layer, dimensionAttribute, sldFilters, map, geomFieldName, extent</span> ) : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>This function will return a filter string containing a bbox filter,\nthe passed sldFilters and a possible time filter ...</div><div class='long'><p>This function will return a filter string containing a bbox filter,\nthe passed sldFilters and a possible time filter (if the layer is\nconfigured as WMS-T).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : ol.layer.Base<div class='sub-desc'><p>The layer to get the filter for.</p>\n</div></li><li><span class='pre'>dimensionAttribute</span> : String<div class='sub-desc'><p>The dimensionAttribute\n     containing the comma separated start / end keys for WMS TIME</p>\n</div></li><li><span class='pre'>sldFilters</span> : Array<div class='sub-desc'><p>An array of filter strings coming\n  from the SLD.</p>\n</div></li><li><span class='pre'>map</span> : ol.Map<div class='sub-desc'><p>optional map parameter. Will be guessed if\n  not passed.</p>\n</div></li><li><span class='pre'>geomFieldName</span> : String<div class='sub-desc'><p>The name of the geom field</p>\n</div></li><li><span class='pre'>extent</span> : Array<div class='sub-desc'><p>The optional extent Array to use for the bbox\n   filter</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>filter string as described above</p>\n</div></li></ul></div></div></div><div id='static-method-getTimeFilterParts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-method-getTimeFilterParts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-method-getTimeFilterParts' class='name expandable'>getTimeFilterParts</a>( <span class='pre'>layer, dimensionAttribute, timeParamFallback</span> ) : Array&lt;String&gt;<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns an OGC PropertyIsLessThanOrEqualTo and\nPropertyIsGreaterThanOrEqualTo filters with the current TIME taken\nfro...</div><div class='long'><p>Returns an OGC <code>PropertyIsLessThanOrEqualTo</code> and\n<code>PropertyIsGreaterThanOrEqualTo</code> filters with the current TIME taken\nfrom the layer source and the given dimensionAttribute</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : ol.layer.Base<div class='sub-desc'><p>The layer to get the filter for.</p>\n</div></li><li><span class='pre'>dimensionAttribute</span> : String<div class='sub-desc'><p>The dimensionAttribute\n     containing the comma separated start / end keys for WMS TIME</p>\n</div></li><li><span class='pre'>timeParamFallback</span> : String<div class='sub-desc'><p>The time parameter fallback string</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array&lt;String&gt;</span><div class='sub-desc'><p>An Array containing OGC\n    <code>PropertyIsLessThanOrEqualTo</code> and <code>PropertyIsGreatThanOrEqualTo</code>\n    filters regarding to the current TIME taken from the layer\n    source and set net definition.</p>\n</div></li></ul></div></div></div><div id='static-method-handleWfsExecuteException' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-method-handleWfsExecuteException' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-method-handleWfsExecuteException' class='name expandable'>handleWfsExecuteException</a>( <span class='pre'>response</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>If WFS request was successful but response has got an exception,\nwe try to find it out and show the corresponding err...</div><div class='long'><p>If WFS request was successful but response has got an exception,\nwe try to find it out and show the corresponding error message</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>response</span> : Object<div class='sub-desc'><p>The response of the Ajax call.</p>\n</div></li></ul></div></div></div><div id='static-method-insertFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-method-insertFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-method-insertFilter' class='name expandable'>insertFilter</a>( <span class='pre'>filter, [combinator], additionalFilter</span> ) : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Combines all configured filters (e.g. ...</div><div class='long'><p>Combines all configured filters (e.g. spatial and time filter) to\none filter string and returns them.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filter</span> : Array&lt;String&gt;<div class='sub-desc'><p>Given full spatial filter string.</p>\n</div></li><li><span class='pre'>combinator</span> : String (optional)<div class='sub-desc'><p>The boolean combinator to use, should be\n    either <code>And</code> or <code>Or</code>.</p>\n</div></li><li><span class='pre'>additionalFilter</span> : String<div class='sub-desc'><p>Additional filter (e.g. time filter)\n    that should be added to the given filter.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>An OGC And filter with the passed filters.</p>\n</div></li></ul></div></div></div><div id='static-method-mergeFilterWithSldFilters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-method-mergeFilterWithSldFilters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-method-mergeFilterWithSldFilters' class='name expandable'>mergeFilterWithSldFilters</a>( <span class='pre'>filter, sldFilters</span> ) : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Merge the passed \"base\" filter with the passed sld filters. ...</div><div class='long'><p>Merge the passed \"base\" filter with the passed sld filters.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filter</span> : String<div class='sub-desc'><p>string representing some \"base\" filter\n  (e.g. time/spatial)</p>\n</div></li><li><span class='pre'>sldFilters</span> : Array<div class='sub-desc'><p>An array of filter strings coming\n  from the SLD.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>filter string representing the merge of the passed\n  filter with the passed sld filters</p>\n</div></li></ul></div></div></div><div id='static-method-unwrapFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.WFS'>BasiGX.util.WFS</span><br/><a href='source/WFS.html#BasiGX-util-WFS-static-method-unwrapFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.WFS-static-method-unwrapFilter' class='name expandable'>unwrapFilter</a>( <span class='pre'>filter</span> ) : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns the contents of filter with the outermost &lt;ogc:Filter&gt;\nremoved. ...</div><div class='long'><p>Returns the contents of filter with the outermost <code>&lt;ogc:Filter&gt;</code>\nremoved.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filter</span> : String<div class='sub-desc'><p>The filter to remove <code>&lt;ogc:Filter&gt;</code> from.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The contents of the filter.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});