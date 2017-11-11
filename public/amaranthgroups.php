<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://atg-hackathon.mybluemix.net/api/amaranthgroups",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "postman-token: 5c6703b4-643d-8271-3e3e-6443f2ca8383"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
    $data = json_decode($response, true);
    $amaranths = $data['data'];
}
 ?>