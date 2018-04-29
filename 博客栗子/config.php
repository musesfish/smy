<?php
    header('Content-type:text/html;charset=utf-8');
    //常量参数
    Define('DB_HOST','localhost');
    Define('DB_USER','root');
    Define('DB_PWD','');
    Define('DB_NAME','blog_user');

    //连接mysql服务器
    $conn=@mysql_connect(DB_HOST,DB_USER,DB_PWD)or die('数据库连接失败，错误信息：'.mysql_error());
    //选择指定的数据库，建立字符集
    mysql_select_db(DB_NAME)or die('数据库错误，错误信息：'.mysql_error());
    mysql_query('SET NAMES UTF8')or die('字符集设置错误,错误信息:'.mysql_error());





?>