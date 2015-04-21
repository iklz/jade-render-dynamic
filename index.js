(function() {
    'use strict';
    var jade = require('jade');
    var utils = require('util');
    var viewsPath;

    function jadeRenderDynamic(obj) {
        return utils._extend(obj, {
            renderDynamic: function(path) {
                var placeholders = path.match(/({{\S+?}})/g);

                placeholders.forEach(function(placeholder) {
                    var placeName = placeholder.replace(/[{}]/g, '');
                    path = path.replace(placeholder, obj[placeName]);
                });

                return jade.renderFile(viewsPath + '/' + path + '.jade', obj);
            }
        });
    }

    module.exports = function(templatesPath) {
        viewsPath = templatesPath;
        return { render: jadeRenderDynamic };
    }
})();
