Ext.data.JsonP.BasiGX_ux_ContextSensitiveHelp({"tagname":"class","name":"BasiGX.ux.ContextSensitiveHelp","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"ContextSensitiveHelp.js","href":"ContextSensitiveHelp.html#BasiGX-ux-ContextSensitiveHelp"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Component","mixins":[],"requires":["BasiGX.util.Demonstration"],"uses":[],"members":[{"name":"existingHelpKeys","tagname":"property","owner":"BasiGX.ux.ContextSensitiveHelp","id":"property-existingHelpKeys","meta":{}},{"name":"getHelpFromComponent","tagname":"property","owner":"BasiGX.ux.ContextSensitiveHelp","id":"property-getHelpFromComponent","meta":{}},{"name":"helpUrl","tagname":"property","owner":"BasiGX.ux.ContextSensitiveHelp","id":"property-helpUrl","meta":{}},{"name":"viewModel","tagname":"property","owner":"BasiGX.ux.ContextSensitiveHelp","id":"property-viewModel","meta":{"private":true}},{"name":"warnPopupBlockerContent","tagname":"property","owner":"BasiGX.ux.ContextSensitiveHelp","id":"property-warnPopupBlockerContent","meta":{}},{"name":"warnPopupBlockerTitle","tagname":"property","owner":"BasiGX.ux.ContextSensitiveHelp","id":"property-warnPopupBlockerTitle","meta":{}},{"name":"bubbleToExistingHelp","tagname":"method","owner":"BasiGX.ux.ContextSensitiveHelp","id":"method-bubbleToExistingHelp","meta":{}},{"name":"displayHelpForCoordinates","tagname":"method","owner":"BasiGX.ux.ContextSensitiveHelp","id":"method-displayHelpForCoordinates","meta":{}},{"name":"getCmpFromEl","tagname":"method","owner":"BasiGX.ux.ContextSensitiveHelp","id":"method-getCmpFromEl","meta":{}},{"name":"getComponentFromPoint","tagname":"method","owner":"BasiGX.ux.ContextSensitiveHelp","id":"method-getComponentFromPoint","meta":{}},{"name":"setContextHelp","tagname":"method","owner":"BasiGX.ux.ContextSensitiveHelp","id":"method-setContextHelp","meta":{}}],"code_type":"ext_define","id":"class-BasiGX.ux.ContextSensitiveHelp","short_doc":"Provides a bunch of methods to open a help window whose URL has an\nanchor if the provided xy-location was found to ha...","component":true,"superclasses":["Ext.Component"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Component<div class='subclass '><strong>BasiGX.ux.ContextSensitiveHelp</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/BasiGX.util.Demonstration' rel='BasiGX.util.Demonstration' class='docClass'>BasiGX.util.Demonstration</a></div><h4>Files</h4><div class='dependency'><a href='source/ContextSensitiveHelp.html#BasiGX-ux-ContextSensitiveHelp' target='_blank'>ContextSensitiveHelp.js</a></div></pre><div class='doc-contents'><p>Provides a bunch of methods to open a help window whose URL has an\nanchor if the provided xy-location was found to have special documentation.</p>\n\n<p>Usually you create an instance of the class and then call <a href=\"#!/api/BasiGX.ux.ContextSensitiveHelp-method-setContextHelp\" rel=\"BasiGX.ux.ContextSensitiveHelp-method-setContextHelp\" class=\"docClass\">setContextHelp</a> to\noverlay the complete application with a layer that listens for clicks to get\ncontextual help. The <a href=\"#!/api/BasiGX.ux.ContextSensitiveHelp-property-helpUrl\" rel=\"BasiGX.ux.ContextSensitiveHelp-property-helpUrl\" class=\"docClass\">helpUrl</a> will be opened in a popup after every click and\nan anchor is appended to the URL, if the clicked component either has a\n<code>xtype</code> or <code>helpKey</code> set to something that also exists in the list</p>\n\n<h1>existingHelpKeys. Only instances of Ext.window.Window or more generally</h1>\n\n<p>instances of subclasses of Ext.container.Container qualifiy as candidates for\nhelp.</p>\n\n<p>Based on code from Animal and timo.nuros at http://www.sencha.com/forum/showt\nhread.php?63272-Implementing-a-context-sensitive-help</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-existingHelpKeys' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.ContextSensitiveHelp'>BasiGX.ux.ContextSensitiveHelp</span><br/><a href='source/ContextSensitiveHelp.html#BasiGX-ux-ContextSensitiveHelp-property-existingHelpKeys' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.ContextSensitiveHelp-property-existingHelpKeys' class='name expandable'>existingHelpKeys</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>A list of all named links/anchors in the HTML file helpUrl. ...</div><div class='long'><p>A list of all named links/anchors in the HTML file <a href=\"#!/api/BasiGX.ux.ContextSensitiveHelp-property-helpUrl\" rel=\"BasiGX.ux.ContextSensitiveHelp-property-helpUrl\" class=\"docClass\">helpUrl</a>. Remember\nto add all existing keys to this list.</p>\n<p>Defaults to: <code>['basigx-button-help', 'basigx-button-zoomin', 'basigx-button-zoomout', 'basigx-button-zoomtoextent', 'basigx-button-togglelegend', 'basigx-overview-map-button', 'basigx-button-addwms', 'basigx-button-measure', 'basigx-button-coordinatetransform', 'basigx-button-permalink', 'basigx-combo-scale', 'basigx-button-hsi', 'basigx-overview-map-button', 'basigx-panel-layersetchooser', 'basigx-form-print', 'basigx-container-overpasssearch']</code></p></div></div></div><div id='property-getHelpFromComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.ContextSensitiveHelp'>BasiGX.ux.ContextSensitiveHelp</span><br/><a href='source/ContextSensitiveHelp.html#BasiGX-ux-ContextSensitiveHelp-property-getHelpFromComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.ContextSensitiveHelp-property-getHelpFromComponent' class='name expandable'>getHelpFromComponent</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Flag to enable the usage of the key documentation, which holds\nan explanation of the component in HTML notation. ...</div><div class='long'><p>Flag to enable the usage of the key <code>documentation</code>, which holds\nan explanation of the component in HTML notation.\nUseful, if you want to render a component specific help\ninstead of opening the regular HTML anchor link</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-helpUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.ContextSensitiveHelp'>BasiGX.ux.ContextSensitiveHelp</span><br/><a href='source/ContextSensitiveHelp.html#BasiGX-ux-ContextSensitiveHelp-property-helpUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.ContextSensitiveHelp-property-helpUrl' class='name expandable'>helpUrl</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The base URL of the help HTML which contains named anchors as defined\nin existingHelpKeys. ...</div><div class='long'><p>The base URL of the help HTML which contains named anchors as defined\nin <a href=\"#!/api/BasiGX.ux.ContextSensitiveHelp-property-existingHelpKeys\" rel=\"BasiGX.ux.ContextSensitiveHelp-property-existingHelpKeys\" class=\"docClass\">existingHelpKeys</a>.</p>\n<p>Defaults to: <code>'../help/index.html'</code></p></div></div></div><div id='property-viewModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.ContextSensitiveHelp'>BasiGX.ux.ContextSensitiveHelp</span><br/><a href='source/ContextSensitiveHelp.html#BasiGX-ux-ContextSensitiveHelp-property-viewModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.ContextSensitiveHelp-property-viewModel' class='name expandable'>viewModel</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{data: {title: 'Help', demoButtonText: 'Demo'}}</code></p></div></div></div><div id='property-warnPopupBlockerContent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.ContextSensitiveHelp'>BasiGX.ux.ContextSensitiveHelp</span><br/><a href='source/ContextSensitiveHelp.html#BasiGX-ux-ContextSensitiveHelp-property-warnPopupBlockerContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.ContextSensitiveHelp-property-warnPopupBlockerContent' class='name expandable'>warnPopupBlockerContent</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Content of the warning when a popup blocker is active. ...</div><div class='long'><p>Content of the warning when a popup blocker is active.</p>\n<p>Defaults to: <code>'Bitte deaktivieren Sie etwaige ' + 'Popup-Blocker,um die Hilfe anzuzeigen.'</code></p></div></div></div><div id='property-warnPopupBlockerTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.ContextSensitiveHelp'>BasiGX.ux.ContextSensitiveHelp</span><br/><a href='source/ContextSensitiveHelp.html#BasiGX-ux-ContextSensitiveHelp-property-warnPopupBlockerTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.ContextSensitiveHelp-property-warnPopupBlockerTitle' class='name expandable'>warnPopupBlockerTitle</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Title for the warning when a popup blocker is active. ...</div><div class='long'><p>Title for the warning when a popup blocker is active.</p>\n<p>Defaults to: <code>'Warnung'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-bubbleToExistingHelp' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.ContextSensitiveHelp'>BasiGX.ux.ContextSensitiveHelp</span><br/><a href='source/ContextSensitiveHelp.html#BasiGX-ux-ContextSensitiveHelp-method-bubbleToExistingHelp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.ContextSensitiveHelp-method-bubbleToExistingHelp' class='name expandable'>bubbleToExistingHelp</a>( <span class='pre'>component</span> ) : Ext.component<span class=\"signature\"></span></div><div class='description'><div class='short'>Bubbles up the component hierarchy until it finds one component for\nwhich we have a help. ...</div><div class='long'><p>Bubbles up the component hierarchy until it finds one component for\nwhich we have a help.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : Ext.component<div class='sub-desc'><p>The component from which we'll\n    bubble up until we find one that we have help for.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.component</span><div class='sub-desc'><p>The found component.</p>\n</div></li></ul></div></div></div><div id='method-displayHelpForCoordinates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.ContextSensitiveHelp'>BasiGX.ux.ContextSensitiveHelp</span><br/><a href='source/ContextSensitiveHelp.html#BasiGX-ux-ContextSensitiveHelp-method-displayHelpForCoordinates' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.ContextSensitiveHelp-method-displayHelpForCoordinates' class='name expandable'>displayHelpForCoordinates</a>( <span class='pre'>point</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Determines the component at the passed point that has help info\navailable, and opens an appropriate URL in a new wind...</div><div class='long'><p>Determines the component at the passed point that has help info\navailable, and opens an appropriate URL in a new window if possible.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>point</span> : Ext.util.Point<div class='sub-desc'><p>The point at which the pointer rests.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Always true. We can probably remove this return\n    value.</p>\n</div></li></ul></div></div></div><div id='method-getCmpFromEl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.ContextSensitiveHelp'>BasiGX.ux.ContextSensitiveHelp</span><br/><a href='source/ContextSensitiveHelp.html#BasiGX-ux-ContextSensitiveHelp-method-getCmpFromEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.ContextSensitiveHelp-method-getCmpFromEl' class='name expandable'>getCmpFromEl</a>( <span class='pre'>el</span> ) : Ext.Component<span class=\"signature\"></span></div><div class='description'><div class='short'>Return a component for the passed element el. ...</div><div class='long'><p>Return a component for the passed element <code>el</code>.</p>\n\n<p>TODO does this actually do what it tells me it does?</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : HTMLElement<div class='sub-desc'><p>The HTML element.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.Component</span><div class='sub-desc'><p>The component.</p>\n</div></li></ul></div></div></div><div id='method-getComponentFromPoint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.ContextSensitiveHelp'>BasiGX.ux.ContextSensitiveHelp</span><br/><a href='source/ContextSensitiveHelp.html#BasiGX-ux-ContextSensitiveHelp-method-getComponentFromPoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.ContextSensitiveHelp-method-getComponentFromPoint' class='name expandable'>getComponentFromPoint</a>( <span class='pre'>point</span> ) : Ext.Component<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the lowest level component at the specified point. ...</div><div class='long'><p>Returns the lowest level component at the specified point.</p>\n\n<p>TODO Double check whether we can really pass only a x-coordinate, I\n     doubt that right now.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>point</span> : Ext.util.Point|Number<div class='sub-desc'><p>The point at which to find the\n    associated component, or the x coordinate of the point.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.Component</span><div class='sub-desc'><p>The Component at the specified point.</p>\n</div></li></ul></div></div></div><div id='method-setContextHelp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.ContextSensitiveHelp'>BasiGX.ux.ContextSensitiveHelp</span><br/><a href='source/ContextSensitiveHelp.html#BasiGX-ux-ContextSensitiveHelp-method-setContextHelp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.ContextSensitiveHelp-method-setContextHelp' class='name expandable'>setContextHelp</a>( <span class='pre'>[additionalHelpKeys]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>The Main method of an instance of this class. ...</div><div class='long'><p>The Main method of an instance of this class.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>additionalHelpKeys</span> : Array&lt;String&gt; (optional)<div class='sub-desc'><p>An array of additional keys\n    for which help exists.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});