<?php 

  $headers = 'Content-type: text/plain; charset="utf-8"';

  $username = $_POST['username'];
  $usermail = $_POST['usermail'];
  $userphone = $_POST['userphone'];
  $usertelegram = $_POST['usertelegram'];

  $headers = 'MiME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset="utf-8"';

  $to = 'volosunovmike6@gmail.com';
  $subject = 'Заявка с сайта';
  $message = "
  <html>
  <table>
    <tr>
      <td>Имя</td>
      <td>$username</td>
    </tr>
    <tr>
      <td>Емайл</td>
      <td>$usermail</td>
    </tr>
    <tr>
      <td>Телефон</td>
      <td>$userphone</td>
    </tr>
    <tr>
      <td>Телеграм</td>
      <td>$usertelegram</td>
    </tr>
  </table>
  </html>
  "

  mail($to, $subject, $message, $headers);
  // $to - кому
  // $subject - тема письма
  // $message - тело письма (содержимое)
  // $headers - спец заголовок, не трогаем

?>