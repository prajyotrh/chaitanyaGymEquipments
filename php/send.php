<?php

    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
	$email = $_POST['email'];
	$number = $_POST['number'];
	$msg = $_POST['msg'];

	$to_email = "chaitanyagym20@gmail.com";
	$subject = "Enquiry related to gym equipments";

    $body = "Name :". $fname;
    $body = " ". $lname;
	$body .= "\r\n";
	$body .= "Email :".$email;
	$body .= "\r\n";
	$body .="Mobile number :". $number;
	$body .= "\r\n";
	$body .="Message :". $msg;
	$body .= "\r\n";

	$headers = "From: ";
	$headers .= $email;

	if(mail($to_email,$subject,$body,$headers)){
		echo "Date saved...";
	}
	else{
		echo "Error occured...";
	}

?>