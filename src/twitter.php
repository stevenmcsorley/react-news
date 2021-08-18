<?php


$id=$_GET['id'];

    // if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    //     header('Access-Control-Allow-Origin: *');
    //     header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    //     header('Access-Control-Allow-Headers: token, Content-Type');
    //     header('Access-Control-Max-Age: 1728000');
    //     header('Content-Length: 0');
    //     header('Content-Type: text/plain');
    //     die();
    // }

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.twitter.com/1.1/trends/place.json?id=". $id,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAFvLIAEAAAAAggklNCU1g%2BlfOikD88nDvsCOIA4%3DPHNXQCCiTvDSXckcZxoX77GCTtye7ie41HmiW39Iv2a1pXhkJy"
  ),
));

$response = curl_exec($curl);

curl_close($curl);


    $twitter_data = json_decode($response);


//print it out
// print_r ($twitter_data[0]);

 echo json_encode($twitter_data[0])

?>

