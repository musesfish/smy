<?php
    require 'config.php';
    $query="INSERT INTO sign(user,password,question,ans,emai,ps)
        VALUES('{$_POST['username']}',sha1('{$_POST['pass']}'),'{$_POST['ques']}','{$_POST['answer']}','{$_POST['email']}','{$_POST['add']}')";

    sleep(3);

    mysql_query($query) or die('新增失败'.mysql_error());

	
	echo $_POST['ques'];

    echo mysql_affected_rows();

    mysql_close();


?>