<?php
    require 'config.php';

    $query=mysql_query("SELECT user FROM sign WHERE user='{$_POST['username']}'") or die('SQL错误');

      if(mysql_fetch_array($query,MYSQL_ASSOC)){
         echo 1;
      }


    mysql_close();
?>