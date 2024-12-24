<?php


$source = "../dogmeat/".$_GET["article"].".xml";
$XML = simplexml_load_file($source);
$title=htmlentities($XML->article->title);
$author=htmlentities($XML->article->author);
$content ="";
$content.="<p><h3><center>".$title."</center></h3><br>";
$content.="<center><span class=\"orangeFont\">by <i>".$author."</i></span></center></p>";
foreach ($XML->article->body->p as $p){
	$content.="<p>".htmlentities($p)."</p>";
}

echo($content);


?>