<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>React Webpack Babel App</title>
	<style>
		#main {
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	</style>
</head>
<body>
<div class="container">
	<div id="main"></div>
</div>
<script src="<?php echo get_template_directory_uri() . '/build/bundle.js'?>" type="text/javascript"></script>
</body>
</html>
