<?php
	include "classes/fetchurl.class.php";
        include "classes/validator.class.php";

        // GET URL Parameter
	$url = $_GET['url'];

        $validator = new Validator();

        if (!$validator->url($url)) {
		print "<h1>error encountered.</h1>";
                exit(0);
        }

	$fetchUrl = new fetchUrl();
	$fetchUrl->setUrl($url);

	print $fetchUrl->fetch();

