<?php
require_once("settings.php");
require_once("tumblr.core.php");

// Create a new instance of the Tumblr Class with your Conumser when you create your app.
$tumblr = new Tumblr(TUMBLR_CONSUMER_KEY, TUMBLR_CONSUMER_SECRET);

// Filter tags
$url = "/blog/" . TUMBLR_ACCOUNT_NAME . ".tumblr.com/posts";
$params = array();

if ($_GET['tag'])
{
	$params['tag'] = $_GET['tag'];
}

// Grab the followers by using the oauth_get method.
$info = $tumblr->get($url, $params);

echo json_encode($info);
?>
