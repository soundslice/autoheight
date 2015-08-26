# autoheight

Use this to extend the Soundslice iframe to the bottom of your page. It correctly resizes in case the browser is resized.

Instructions:

Step 1: Put autoheight.min.js on your server. The non-minified version (autoheight.js) is here, too, in case you'd like to see the full code.

Step 2: Make sure the Soundslice player iframe has an id attribute, like this:

```
<iframe id="soundsliceiframe" src="..." width="100%" height="400">
```

Make sure the width is 100%. Height can be whatever you want -- it doesn't matter, as it'll be replaced by the script.

Step 3: Include this JavaScript in your pages:

```
<script type="text/javascript" src="/path/to/autoheight.min.js"></script>
<script type="text/javascript">
autoheight('soundsliceiframe');
</script>
```

Note you can use whatever you want in place of "soundsliceiframe" -- just make sure it's the same in the iframe and in the autoheight() JS call.
