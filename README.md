# jade-render-dynamic

Enables support for dynamic render for the [Jade] template engine

[Jade]: http://jade-lang.com

# Installation

    $ npm install jade-render-dynamic --save

Then init the module with path to your views dir.

    var jadeRenderDynamic = require('jade-render-dynamic')('./templates');

Now you can use render method where you need

    app.get('/', function(req, res){
        res.render('index.jade', jadeRenderDynamic.render(template_data));
    });

where `template_data` is an object with locals, e.g.

    {
        category: 'foo',
        name: 'bar'
    }

# Usage in templates

    != renderDynamic('{{category}}/{{name}}')

will include `./templates/foo/bar.jade` with `template_data` object
