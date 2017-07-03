<?php
if (isset($_REQUEST['name'],$_REQUEST['email'])) {
      
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $website = $_REQUEST['website'];
    $Comment = $_REQUEST['Comment'];
      
    // Set your email address where you want to receive emails. 
    $to = 'noreplay@eyecix.com';
      
    $subject = 'Contact Request From Website';
    
    $message = '
	<table width="100%" border="1" cellspacing="0" cellpadding="10">
	  <tr>
		<td width="100" ><strong>Name:</strong></td>
		<td>'.$name.'</td>
	  </tr>
	  <tr>
		<td><strong>Email:</strong></td>
		<td>'.$email.'</td>
	  </tr>
	  <tr>
		<td><strong>Website:</strong></td>
		<td>'.$website.'</td>
	  </tr>
	  <tr>
		<td><strong>Message:</strong></td>
		<td>'.$Comment.'</td>
	  </tr>
	  <tr>
		<td><strong>IP Address:</strong></td>
		<td>'.$_SERVER["REMOTE_ADDR"].'</td>
	  </tr>
	</table>
	';
  
    if(!isset($_COOKIE['REMOTE_ADDR_Email'])) {
      setcookie('REMOTE_ADDR_Email', $_SERVER["REMOTE_ADDR"], time() + 3600, "/");
      //proceed with PHP email.
        $headers = 'From: '.$name.'' . "\r\n" .
        'Content-type: text/html; charset=iso-8859-1' . "\r\n".        
        'Reply-To: '.$email.'' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

        $send_mail = mail($to, $subject, $message, $headers);

        if(!$send_mail)
        {
            echo 'error';
        } else {
            echo 'success';
        }
        
    } else {
         echo 'validate';
    }
  

}
?>