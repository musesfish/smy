<?php
    require 'config.php';

    $pass=sha1($_POST['log_pass']);


    $query=mysql_query("SELECT username FROM user WHERE

    username='{$_POST['log_user']}' AND password='{$pass}'") or die('SQL错误！');

     if(!mysql_fetch_array($query,MYSQL_ASSOC)){
            echo 1;
    }


    mysql_close();

?>