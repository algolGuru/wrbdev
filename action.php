<?php
 
$name = $_POST['name'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];

$token = "1156155992:AAH6SyaPO7S32G-WfOylxiTrQrLKb_TWkWg";
 
$chat_id = "-496035093";
 
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Комментарий' => $comment
);
 
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
if ($sendToTelegram) {
  echo "Thank you";
} else {
  echo "Error";
}